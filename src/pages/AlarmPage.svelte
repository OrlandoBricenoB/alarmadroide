<script>
  import bridge from '../helpers/bridge'
  import Alarm from '../helpers/Alarm'
  import ODM from '../lib/ODM'
  export let data = new Alarm({})
  let newAlarm = !data.name

  const ODMInstance = new ODM()
  const alarmsCollection = ODMInstance.getCollection('alarms')

  bridge.register({
    callback: ({id, from}) => {
      if (id === 'saveAction' && from === 'page') save()
      if (id === 'deleteAction' && from === 'page') deleteAction()
    },
    id: 'AlarmPage'
  })

  /*const getNumbers = (a, b) => {
    const numbers = []

    const addNextNumber = n => {
      if (n > b) return numbers
      numbers.push(n)
      let nextNumber = n + 1
      return addNextNumber(nextNumber)
    }
    addNextNumber(a)

    return numbers
  }*/

  let timeValue = data.displayTime()
  const setTime = () => {
    const [hours, minutes] = timeValue.split(':')
    data.hours = parseInt(hours)
    data.minutes = parseInt(minutes)
    return true
  }

  const closePage = () => {
    bridge.send({
      id: 'closePage',
      from: 'page'
    }, 'Home')
  }

  const save = () => {
    newAlarm && alarmsCollection.create(data) && closePage()
    if (newAlarm) return
    const [updateError, updatedDocument] = alarmsCollection.update({
      where: {
        name: data.name
      },
      set: {
        ...data
      }
    })
    data = updatedDocument
    closePage()
  }

  const deleteAction = () => {
    const [deleteError, deleteSuccess] = alarmsCollection.delete({
      where: {
        name: data.name
      }
    })
    if (!deleteError) return bridge.send({
      id: 'closePage',
      from: 'page'
    }, 'Home')
    console.log(deleteError, deleteSuccess)
  }
</script>

<div class="form-element">
  <label for="alarmHourField" class="form-element__label">Hora</label>
  <input type="time" id="alarmHourField" class="form-element__field" bind:value={timeValue} on:change={setTime}>
</div>

<div class="form-element">
  <label for="alarmNameField" class="form-element__label">Nombre de la alarma</label>
  <input id="alarmNameField" class="form-element__field" type="text" placeholder="Nombre de la alarma..." bind:value={data.name}>
</div>
