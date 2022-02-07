import { BadRequest, NotFound } from './Errors.js'
import { alarmsStore } from '../stores/AlarmsStores'

const isEmpty = object => {
  for (const property in object) {
    return false
  }
  return true
}

class Collection {
  constructor(name, schema) {
    this.name = name
    this.schema = schema
  }

  _getDB() {
    return JSON.parse(window.localStorage.getItem(this.name))
  }

  _setDB(data) {
    return window.localStorage.setItem(this.name, JSON.stringify(data))
  }

  _SchemaFromDocument(documents) {
    if (Array.isArray(documents)) {
      documents = documents.map(document => {
        return new this.schema(document)
      })
    } else {
      documents = new this.schema(documents)
    }
    return documents
  }

  // # Private method to find documents.
  _Find(query) {
    const documents = this._getDB()
    if (isEmpty(query) || isEmpty(query.where)) return this._SchemaFromDocument(documents)

    const queries = Object.entries(query.where)
    let filteredDocuments = []
    documents.find(value => {
      let isSame = true
      queries.forEach(query => {
        if (!value.hasOwnProperty(query[0])) isSame = false
        if (value[query[0]] !== query[1]) isSame = false
      })
      if (query.limit && query.limit <= filteredDocuments.length) return
      if (isSame) filteredDocuments.push(value)
    })
    return this._SchemaFromDocument(filteredDocuments)
  }

  // # find => [documents of collection].
  find(query={}) {
    return this._Find(query)
  }

  // # findOne => [error, response]
  findOne(query={}) {
    if (isEmpty(query) || isEmpty(query.where)) return [new BadRequest(), {}]
    const documentsFound = this._Find({...query, limit: 1})
    if (!documentsFound.length) return [new NotFound(), {}]
    return [null, documentsFound[0] || false]
  }

  create(data) {
    const db = this.find()
    const exist = db.find(document => document.name === data.name)
    if (exist) return 402

    const newDocument = new this.schema(data)
    db.push(newDocument)
    alarmsStore.update(newDocument)
    this._setDB(db)
    return newDocument
  }

  update(query={}) {
    if (isEmpty(query) || isEmpty(query.where) || isEmpty(query.set)) return [new BadRequest(), {}]
    const allDocuments = this.find()
    const documents = this.find(query)
    const updatedDocuments = [ ...documents ]
    if (!documents.length) return [new NotFound(), {}]

    documents.forEach((document, i) => {
      const index = allDocuments.findIndex(doc => doc.name === document.name)
      Object.keys(query.set).forEach(setKey => {
        document[setKey] = query.set[setKey]
      })
      updatedDocuments[i] = new this.schema(document)
      alarmsStore.update(updatedDocuments[i])
      documents[i] = {
        index,
        data: new this.schema(document)
      }
    })

    documents.map(document => {
      allDocuments[document.index] = document.data
      return document
    })

    this._setDB(allDocuments)
    return [null, updatedDocuments.length === 1 ? updatedDocuments[0] : updatedDocuments]
  }

  delete(query={}) {
    if (isEmpty(query) || isEmpty(query.where)) return [new BadRequest(), {}]
    const documents = this.find()
    const newDocuments = documents.filter(document => {
      let isSame = true
      Object.keys(query.where).forEach(key => {
        if (document[key] !== query.where[key]) isSame = false
      })
      return !isSame
    })
    this._setDB(newDocuments)
    const documentsWithSchema = newDocuments.map(_document => new this.schema(_document))
    alarmsStore.update(documentsWithSchema)
    return [null, newDocuments]
  }
}

export default Collection
