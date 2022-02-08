<script>
  import bridge from '../helpers/bridge'
  import Alarm from '../helpers/Alarm'
  import ODM from '../lib/ODM'
  export let data = new Alarm({})
  let alarmEditable = new Alarm(data)
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

  let timeValue = alarmEditable.displayTime()
  const setTime = () => {
    const [hours, minutes] = timeValue.split(':')
    alarmEditable.hours = parseInt(hours)
    alarmEditable.minutes = parseInt(minutes)
    return true
  }

  const closePage = () => {
    bridge.send({
      id: 'closePage',
      from: 'page'
    }, 'Home')
  }

  const save = () => {
    newAlarm && alarmsCollection.create(alarmEditable) && closePage()
    if (newAlarm) return
    const [updateError, updatedDocument] = alarmsCollection.update({
      where: {
        name: data.name
      },
      set: {
        ...alarmEditable
      }
    })
    alarmEditable = updatedDocument
    closePage()
  }

  const deleteAction = () => {
    const [deleteError, deleteSuccess] = alarmsCollection.delete({
      where: {
        name: alarmEditable.name
      }
    })
    if (!deleteError) return bridge.send({
      id: 'closePage',
      from: 'page'
    }, 'Home')
    console.log(deleteError, deleteSuccess)
  }

  let days = alarmEditable.days
  const toggleDay = day => {
    let newDays = []
    days.includes(day) && (newDays = days.filter(_day => _day !== day)) || (newDays = days.concat([day]))
    newDays.sort()
    days = newDays
    alarmEditable.days = [ ...days ]
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

<div class="form-element">
  <label for="alarmDaysField" class="form-element__label">Días</label>
  <div class="form-element__options">
    <div class={`form-element__option ${days.includes(0) ? 'form-element__option--selected':''}`} on:click={() => { toggleDay(0) }}>Do</div>
    <div class={`form-element__option ${days.includes(1) ? 'form-element__option--selected':''}`} on:click={() => { toggleDay(1) }}>Lu</div>
    <div class={`form-element__option ${days.includes(2) ? 'form-element__option--selected':''}`} on:click={() => { toggleDay(2) }}>Ma</div>
    <div class={`form-element__option ${days.includes(3) ? 'form-element__option--selected':''}`} on:click={() => { toggleDay(3) }}>Mi</div>
    <div class={`form-element__option ${days.includes(4) ? 'form-element__option--selected':''}`} on:click={() => { toggleDay(4) }}>Ju</div>
    <div class={`form-element__option ${days.includes(5) ? 'form-element__option--selected':''}`} on:click={() => { toggleDay(5) }}>Vi</div>
    <div class={`form-element__option ${days.includes(6) ? 'form-element__option--selected':''}`} on:click={() => { toggleDay(6) }}>Sa</div>
  </div>
</div>
