import Collection from './Collection'
import Alarm from '../helpers/Alarm'
class ODM {
  _createCollectionIfNotExist(collectionName='') {
    const storageCollection = window.localStorage.getItem(collectionName)
    !storageCollection && window.localStorage.setItem(collectionName, '[]')
    return storageCollection && JSON.parse(storageCollection) || false
  }

  getSchema(collectionName) {
    if (collectionName === 'alarms') return Alarm
  }

  getCollection(collectionName) {
    const existCollection = this._createCollectionIfNotExist(collectionName)
    const schema = this.getSchema(collectionName)
    if (existCollection) return new Collection(collectionName, schema)
    return new Collection(collectionName, schema)
  }
}

export default ODM
