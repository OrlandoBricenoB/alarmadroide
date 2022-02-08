<script>
  import { tick, onMount } from 'svelte'
  import bridge from './helpers/bridge'

  import Page from './Page.svelte'
  import AlarmPage from './pages/AlarmPage.svelte'
  import AlarmComponent from './components/Alarm.svelte'
  import Alarm from './helpers/Alarm'

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
  const displayVendors = () => (vendorsDisplayed = !vendorsDisplayed)

  import htmlLogo from './assets/img/HTML5_logo_and_wordmark.svg'
  import cssLogo from './assets/img/CSS3_logo_and_wordmark.svg'
  import svelteLogo from './assets/img/Svelte_logo_by_gengns.svg'
  import alarmsIcon from './assets/icons/alarms.png'
  import addIcon from './assets/icons/add.png'
  import logo from './assets/img/logo.png'
  import joSwordLogo from './assets/img/Jo-Sword.png'

  let audioElem
  import alarmSound from './assets/music/Beat Your Competition.mp3'

  import ODM from './lib/ODM'
  const ODMInstance = new ODM()
  const alarmsCollection = ODMInstance.getCollection('alarms')

  // # Alarmas por defecto en la primera visita.
  const firstVisit = window.localStorage.getItem('firstVisit')
  if (!firstVisit) {
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
    window.localStorage.setItem('firstVisit', 'pass')
  }


  //const [alarmPruebaError, alarmPrueba] = alarmsCollection.findOne({ where: {name: 'Prueba'} })
  //if (alarmPruebaError) console.log(alarmPruebaError)
  //console.log(alarmPrueba)

  //alarmsCollection.delete({ where: {name: 'Prueba' } })
  import { alarmsStore } from './stores/AlarmsStores'

  let alarms = []

  const sortAlarms = () => {
    const alarmsSorted = alarms.sort((a, b) => {
      let aDate = new Date()
      aDate.setHours(a.hours)
      aDate.setMinutes(a.minutes)

      let bDate = new Date()
      bDate.setHours(b.hours)
      bDate.setMinutes(b.minutes)

      const diff = bDate.getTime() - aDate.getTime()
      if (diff < 0) return 1
      if (diff === 0) return 0
      if (diff > 0) return -1
    })
    alarms = alarmsSorted
  }

  alarmsStore.subscribe(storedAlarms => {
    alarms = storedAlarms
    sortAlarms()
  })

  const openCreateAlarm = () => {
    changePage({
      from: 'Alarm',
      data: new Alarm({
        name: ''
      })
    })
  }

  let alarmPlaying = new Alarm({})

  const thanksAlarm = () => {
    alarmPlaying.playing = false
    const alarm = alarms.find(alarm => alarm.name === alarmPlaying.name)
    alarmPlaying = new Alarm({})
    audioElem.muted = true

    // Editar la alarma.
    const [updateError, updatedDocument] = alarmsCollection.update({
      where: {
        name: alarm.name
      },
      set: {
        postDay: new Date()
      }
    })
    console.log(updateError, updatedDocument)
  }

  onMount(async () => {
    await tick()
    audioElem.muted = true

    // ? https://developer.chrome.com/blog/autoplay/ - Need a click, tap, etc. To play a audio.
    window.addEventListener('click', () => {
      if (audioElem.paused) audioElem.play()
    })

    // Verificar si hay alguna alarma para reproducir:
    setInterval(() => {
      alarms.forEach(alarm => {
        const [alarmError, alarmDayString] = alarm.checkDay()
        if (!alarmError && alarm.checkTime() && audioElem && audioElem.muted) {
          audioElem.muted = false
          audioElem.currentTime = 0
          alarmPlaying = alarm
        }
      })
    }, 5000)
  })

  import sunriseIcon from '/icons/sunrise.png'
  import dayIcon from '/icons/day.png'
  import nightIcon from '/icons/night.png'
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
    <img src={alarmsIcon} alt="Alarms Icon" width="32" height="32" class="menu__button-image">
  </div>
  <!-- Temporizador
  <div class="menu__button">
    <img src={addIcon} alt="Add Icon" width="32" height="32" class="menu__button-image">
  </div>
  -->
  <div class="menu__button menu__button--main" on:click={openCreateAlarm}>
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

<!-- ALARM PLAYING -->
<div class={`alarm-playing ${alarmPlaying.playing ? 'alarm-playing--playing':''}`}>
  <div class="alarm-playing__typeImage">
    {#if alarmPlaying.typeTimeState() === 'night'}
    <img src={nightIcon} width="64" height="64" alt="Night Icon">
    {:else if alarmPlaying.typeTimeState() === 'day'}
    <img src={dayIcon} width="64" height="64" alt="Day Icon">
    {:else}
    <img src={sunriseIcon} width="64" height="64" alt="Sunrise Icon">
    {/if}
  </div>
  <div class="alarm-playing__time">
    <time>{alarmPlaying.displayTime()}</time>
    <div class="alarm-playing__typeTime">{alarmPlaying.displayTypeTime()}</div>
  </div>
  <div class="alarm-playing__name">
    <h3>{alarmPlaying.name}</h3>
  </div>
  <div class="alarm-playing__button-container">
    <button class="alarm-playing__button" on:click={thanksAlarm}>Gracias</button>
  </div>
</div>
<audio src={alarmSound} muted autoplay loop bind:this={audioElem}></audio>
<!-- ALARM PLAYING END -->
