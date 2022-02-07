import { writable } from 'svelte/store'
import Alarm from '../helpers/Alarm'

function createAlarmsStore() {
  const alarms = JSON.parse(window.localStorage.getItem('alarms'))
  const alarmsDocuments = alarms.map(alarm =>  new Alarm(alarm))

  const { subscribe, set, update } = writable(alarmsDocuments)

	return {
		subscribe,
    update: data => {
      update(document => {
        if (document.name === data.name) return data
        return document
      })
    },
		reset: () => set(alarmsDocuments)
	};
}

export const alarmsStore = createAlarmsStore()
