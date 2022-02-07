import { writable } from 'svelte/store'
import Alarm from '../helpers/Alarm'

function createAlarmsStore() {
  const alarms = JSON.parse(window.localStorage.getItem('alarms')) || []
  const alarmsDocuments = alarms.map(alarm =>  new Alarm(alarm))

  const { subscribe, set, update } = writable(alarmsDocuments)

	return {
		subscribe,
    update: data => {
      update(object => {
        if (Array.isArray(data)) {
          object = [ ...data ]
          return object
        } else {
          const index = object.findIndex(document => document.name === data.name)
          const updatedObject = index === -1 && [ ...object ] || object.map(document => {
            if (document.name === data.name) return data
            return document
          })
          if (index === -1) updatedObject.push(data)
          return updatedObject
        }
      })
    },
		reset: () => set(alarmsDocuments)
	};
}

export const alarmsStore = createAlarmsStore()
