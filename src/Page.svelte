<script>
  import bridge from './helpers/bridge'

  const saveAction = () => {
    bridge.send({
      id: 'saveAction',
      from: 'page'
    }, 'AlarmPage')
  }

  const closePage = () => {
    bridge.send({
      id: 'closePage',
      from: 'page'
    }, 'Home')
  }

  import closeIcon from './assets/icons/close.png'
</script>

<div class="page-header">
  <div class="page-header__close">
    <div class="close">
      <img class="page-header__close-icon" src={closeIcon} alt="Close Icon" width="24" height="24" on:click={closePage}>
    </div>
  </div>

  <div class="page-header__action" on:click={ saveAction }>
    <div class="btn">Guardar</div>
  </div>
</div>

<div class="page-content">
  <slot></slot>
</div>
