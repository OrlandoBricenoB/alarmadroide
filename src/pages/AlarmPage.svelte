<script>
  import { onMount, tick } from 'svelte'
  import bridge from '../helpers/bridge'
  import Alarm from '../helpers/Alarm'
  import ODM from '../lib/ODM'
  export let data = new Alarm()
  let newAlarm = false

  const ODMInstance = new ODM()
  const alarmsCollection = ODMInstance.getCollection('alarms')

  bridge.register({
    callback: ({id, from}) => {
      if (id === 'saveAction' && from === 'page') save()
    },
    id: 'AlarmPage'
  })

  const getNumbers = (a, b) => {
    const numbers = []

    const addNextNumber = n => {
      if (n > b) return numbers
      numbers.push(n)
      let nextNumber = n + 1
      return addNextNumber(nextNumber)
    }
    addNextNumber(a)

    return numbers
  }

  const save = () => {
    const [updateError, updatedDocument] = alarmsCollection.update({
      where: {
        name: data.name
      },
      set: {
        ...data
      }
    })
    data = updatedDocument
  }

  onMount(async () => {
    await tick()
    if (!data) newAlarm = true
  })
</script>

<div class="box">
  <div class="form-element">
    <label for="alarmHourField" class="form-element__label">Hora</label>
    <select id="alarmHourField" class="form-element__field" bind:value={data.hours}>
      {#each getNumbers(0, 23) as hour}
      <option selected={data.hours === hour ? true:false}>{hour}</option>
      {/each}
    </select>
  </div>

  <div class="form-element">
    <label for="alarmHourField" class="form-element__label">Minuto</label>
    <select id="alarmHourField" class="form-element__field" bind:value={data.minutes}>
      {#each getNumbers(0, 59) as minute}
      <option selected={data.minutes === minute ? true:false}>{minute}</option>
      {/each}
    </select>
  </div>
</div>

<div class="form-element">
  <label for="alarmNameField" class="form-element__label">Nombre de la alarma</label>
  <input id="alarmNameField" class="form-element__field" type="text" placeholder="Nombre de la alarma..." bind:value={data.name}>
</div>
