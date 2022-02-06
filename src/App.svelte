<script>
  import { tick, onMount } from 'svelte'
  import bridge from './helpers/bridge'

  import Page from './Page.svelte'
  import AlarmPage from './pages/AlarmPage.svelte'

  import AlarmComponent from './components/Alarm.svelte'
  import Alarm from './helpers/Alarm'

/*
  Interesante.
  <Counter>
    <An./lib/odmonent/>
  </Counter>
*/

  let page = {
    open: false,
    openTransition: false,
    data: new Alarm({})
  }

  const closePage = () => {
    page.open = false
    page.data = new Alarm({})
    page.from = ''
    setTimeout(() => {
      page.openTransition = false
    }, 100)
  }

  const changePage = ({from, data}) => {
    // Crear primero la transición, todos los elementos se van a la derecha.
    page.openTransition = true
    page.data    = data
    page.from = from
    setTimeout(() => {
      page.open = true
    }, 300)
  }

  bridge.register({
    callback: ({data, id, from}) => {
      if (id === 'editPage') {
        changePage({
          from,
          data
        })
      } else if (id === 'closePage') {
        closePage()
      }
    },
    id: 'Home'
  })

  let vendorsDisplayed = false

  const displayVendors = () => {
    vendorsDisplayed = !vendorsDisplayed
  }

  const htmlLogo = new URL('./assets/img/HTML5_logo_and_wordmark.svg', import.meta.url).href
  const cssLogo  = new URL('./assets/img/CSS3_logo_and_wordmark.svg', import.meta.url).href
  const svelteLogo = new URL('./assets/img/Svelte_logo_by_gengns.svg', import.meta.url).href
  const alarmsIcon = new URL('./assets/icons/alarms.png', import.meta.url).href
  const addIcon = new URL('./assets/icons/add.png', import.meta.url).href
  const logo = new URL('./assets/img/logo.png', import.meta.url).href
  const joSwordLogo = new URL('./assets/img/Jo-Sword.png', import.meta.url).href

  let audioElem
  const alarmSound = new URL('./assets/music/Beat Your Competition.mp3', import.meta.url).href

  import ODM from './lib/ODM'
  const ODMInstance = new ODM()
  const alarmsCollection = ODMInstance.getCollection('alarms')
  //const [alarmPruebaError, alarmPrueba] = alarmsCollection.findOne({ where: {name: 'Prueba'} })
  //if (alarmPruebaError) console.log(alarmPruebaError)
  //console.log(alarmPrueba)

  // # Alarmas por defecto.
  alarmsCollection.create({
    name: 'Despertador',
    hours: 4,
    minutes: 30
  })

  alarmsCollection.create({
    name: 'Ejercicios',
    hours: 21,
    minutes: 0,
    days: [1, 2, 3, 4, 5]
  })

  //alarmsCollection.delete({ where: {name: 'Prueba' } })

  let alarms = alarmsCollection.find()


  const sortAlarms = () => {
    const newAlarms = [...alarms]
    // ! Crear métodos para ordenar alarmas desde la que está más pronta a ejecutarse a la más lejana.
    /*newAlarms.sort((a, b) => {

    })*/
    //alarms = [...newAlarms]
  }

  onMount(async () => {
    await tick()
    audioElem.volume = 0
  })
</script>

<!-- HEADER -->
<header class={`header page-transition ${page.openTransition ? 'page-transition--animation' : ''} ${page.open ? 'page-transition--hidden' : ''}`}>
  <div class="header__logo">
    <img src={logo} alt="Logo de Alarmadroide" width="48" height="48">
    <h3 class="header__logo-title">Alarmadroide</h3>
  </div>
</header>
<!-- HEADER END -->

<!-- ALARMS -->
<section class={`alarms page-transition ${page.openTransition ? 'page-transition--animation' : ''} ${page.open ? 'page-transition--hidden' : ''}`}>
  <h2>Tus alarmas</h2>
  <div class="alarms__container">
  <!-- ALARM TEMPLATE -->
  {#each alarms as alarm}
  <AlarmComponent alarm={alarm}/>
  {/each}
  <!-- ALARM TEMPLATE END -->
  </div>
</section>
<!-- ALARMS END -->

<!-- MENU BOTTOM -->
<div class="menu">
  <div class="menu__button menu__button--active">
    <img src={alarmsIcon} alt="Add Icon" width="32" height="32" class="menu__button-image">
  </div>
  <!-- Temporizador
  <div class="menu__button">
    <img src={addIcon} alt="Add Icon" width="32" height="32" class="menu__button-image">
  </div>
  -->
  <div class="menu__button menu__button--main">
    <img src={addIcon} alt="Add Icon" width="32" height="32" class="menu__button-image--main">
  </div>
  <!-- Cronómetro
  <div class="menu__button">
    <img src={addIcon} alt="Add Icon" width="32" height="32" class="menu__button-image">
  </div>
  -->
  <div class={`menu__button menu__button--jo-sword ${vendorsDisplayed ? 'menu__button--displayed' : ''}`} on:click={displayVendors}>
    <img src={joSwordLogo} alt="Add Icon" width="32" height="32" class="menu__button-image menu__button-image--jo-sword">
  </div>
</div>
<!-- MENU BUTTON END -->

<!-- VENDORS -->
<div class={`vendors-information ${vendorsDisplayed ? 'vendors-information--displayed' : ''}`}>
  <h3 class="vendors-information__title">Made with ♥ by Orlando Briceño (Jo-Sword)</h3>
  <hr class="vendors-information__hr">
  <div class="technologies">
    <div class="technology technology--html">
      <img src={htmlLogo} alt="HTML Logo" width="32" height="32">
    </div>
    <div class="technology technology--css">
      <img src={cssLogo} alt="CSS Logo" width="32" height="32">
    </div>
    <div class="technology technology--svelte">
      <img src={svelteLogo} alt="Svelte Logo" width="32" height="32">
    </div>
  </div>
</div>
<!-- END VENDORS -->

<!-- PAGE VIEW -->
<div class={`page-container page-transition ${!page.open ? 'page-transition--animation-inverted' : ''}`}>
  <Page>
    {#if page.from === 'Alarm'}
    <AlarmPage data={page.data}></AlarmPage>
    {/if}
  </Page>
</div>
<!-- PAGE VIEW END -->

<audio src={alarmSound} autoplay loop bind:this={audioElem}></audio>
