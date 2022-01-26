<script>
  import bridge from '../helpers/bridge'
  export let alarm

  const toggleDisplay = e => {
    alarm.disabled = !e.target.checked
    setTimeout(() => {
      bridge.send('sort-alarms', 'Home')
    }, 550)
  }
  $: toggleChecked = !alarm.disabled

  const editAlarm = e => {
    const classList = [...e.target.classList]
    if (classList.find(_class => _class.toString().includes('toggle'))) return false
    console.log('editAlarm: ' + alarm.name)
  }
</script>

<div class={`alarm-template__alarm ${alarm.disabled ? 'alarm-template__alarm--disabled' : ''}`} on:click={editAlarm}>
  <div class="alarm-template__information">
    <div class="alarm-template__days">
      <b class="alarm-template__days-circle"></b>
      <span>{alarm.displayDays()}</span>
    </div>
    <div class="alarm-template__time">
      <div class="alarm-template__format-time">{alarm.displayTime()}</div>
      <div class={`alarm-template__type-time ${alarm.typeTimeState()}`}>{alarm.displayTypeTime()}</div>
    </div>
    <div class="alarm-template__description">
      <span class="alarm-template__name">{alarm.name} - </span>
      <span class="alarm-template__rest">{alarm.disabled ? 'Desactivada.' : alarm.displayLack()}</span>
    </div>
  </div>
  <div class="alarm-template-toggle">
    <input type="checkbox" id={`switch-${alarm.name}`} class="alarm-template-toggle__input" on:change={toggleDisplay} bind:checked={toggleChecked}/>
    <label for={`switch-${alarm.name}`} class="alarm-template-toggle__label">Activar/Desactivar Alarma</label>
  </div>
</div>
