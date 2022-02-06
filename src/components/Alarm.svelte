<script>
  const editClockIcon = new URL('../assets/icons/edit-alarm.png', import.meta.url).href

  import bridge from '../helpers/bridge'
  export let alarm

  const toggleDisplay = e => alarm.disabled = !e.target.checked
  $: toggleChecked = !alarm.disabled

  const editAlarm = e => {
    const classList = [...e.target.classList]
    if (classList.find(_class => _class.toString().includes('toggle'))) return false

    bridge.send({
      id: 'editPage',
      from: 'Alarm',
      data: alarm
    }, 'Home')
  }
</script>

<div class={`alarm ${alarm.disabled ? 'alarm--disabled' : ''}`}>
  <div class="alarm__information">
    <div class="alarm__days">
      <b class="alarm__days-circle"></b>
      <span>{alarm.displayDays()}</span>
    </div>
    <div class="alarm__time">
      <div class="alarm__format-time">{alarm.displayTime()}</div>
      <div class={`alarm__type-time ${alarm.typeTimeState()}`}>{alarm.displayTypeTime()}</div>
    </div>
    <div class="alarm__description">
      <span class="alarm__name">{alarm.name} - </span>
      <span class="alarm__rest">{alarm.disabled ? 'Desactivada.' : alarm.displayLack()}</span>
    </div>
  </div>
  <div class="alarm-actions">
    <div class="alarm-actions__edit" on:click={editAlarm}>
      <img src={editClockIcon} alt="Edit Clock Icon" width="32" height="32">
    </div>
    <div class="alarm-actions__toggle">
      <input type="checkbox" id={`switch-${alarm.name}`} class="alarm-actions__toggle-input" on:change={toggleDisplay} bind:checked={toggleChecked}/>
      <label for={`switch-${alarm.name}`} class="alarm-actions__toggle-label">Activar/Desactivar Alarma</label>
    </div>
  </div>
</div>
