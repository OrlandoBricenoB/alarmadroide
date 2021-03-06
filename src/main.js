import { useRegisterSW } from 'virtual:pwa-register/svelte'
import App from './App.svelte'

useRegisterSW({
  onRegistered: reg => {
    console.log(reg)
  }
})

const app = new App({
  target: document.body
})

export default app
