<script>
  import bridge from './helpers/bridge'

  const saveAction = () => {
    bridge.send({
      id: 'saveAction',
      from: 'page'
    }, 'AlarmPage')
  }

  const deleteAction = () => {
    bridge.send({
      id: 'deleteAction',
      from: 'page'
    }, 'AlarmPage')
  }

  const closePage = () => {
    bridge.send({
      id: 'closePage',
      from: 'page'
    }, 'Home')
  }

  import checkIcon from './assets/icons/check.png'
  import trashIcon from './assets/icons/trash.png'
  import closeIcon from './assets/icons/close.png'
</script>

<div class="page-header">
  <div class="page-header__close">
    <div class="close">
      <img class="page-header__close-icon" src={closeIcon} alt="Close Icon" width="24" height="24" on:click={closePage}>
    </div>
  </div>

  <div class="page-header__action" on:click={ deleteAction }>
    <img class="page-header__action-trash" src={trashIcon} alt="Trash Icon" width="24" height="24">
  </div>

  <div class="page-header__action" on:click={ saveAction }>
    <div class="btn page-header__action-btn">
      <img class="page-header__action-check" src={checkIcon} alt="Check Icon" width="24" height="24">
      <span>Guardar</span>
    </div>
  </div>
</div>

<div class="page-content">
  <slot></slot>
</div>
