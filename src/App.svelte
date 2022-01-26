<script>
  import bridge from './helpers/bridge'

  bridge.register({
    callback: data => {
      if (data === 'sort-alarms') {
        sortAlarms()
      }
    },
    id: 'Home'
  })

  import logo from './assets/svelte.png'
  import htmlLogo from './assets/img/HTML5_logo_and_wordmark.svg'
  import cssLogo from './assets/img/CSS3_logo_and_wordmark.svg'
  import svelteLogo from './assets/img/Svelte_logo_by_gengns.svg'
  import addIcon from './assets/icons/add.png'

  import AlarmComponent from './components/Alarm.svelte'
  import Alarm from './helpers/Alarm'

  let alarms = [
    new Alarm({
      name: 'Despertador',
      hours: 4,
      minutes: 30
    }),
    new Alarm({
      name: 'Ejercicios',
      days: [0, 4],
      hours: 21
    })
  ]

  const sortAlarms = () => {
    const newAlarms = [...alarms]
    newAlarms.sort((a, b) => {
      if (!a.disabled && b.disabled) {
        return -1
      }
      if (a.disabled === b.disabled) {
        return a.hours - b.hours
      }
      if (a.disabled && !b.disabled) {
        return 1
      }
    })
    alarms = [...newAlarms]
  }
</script>

<!-- HEADER -->
<header class="header">
  <div class="header__logo">
    Alarmadroide
    <!-- VENDOR INFORMATION -->
    <div class="header-vendors">
      <div class="header-vendors__vendor">
        <img src={htmlLogo} alt="HTML Logo" width="32" height="32">
      </div>
      <div class="header-vendors__vendor">
        <img src={cssLogo} alt="CSS Logo" width="32" height="32">
      </div>
      <div class="header-vendors__vendor">
        <img src={svelteLogo} alt="Svelte Logo" width="32" height="32">
      </div>
    </div>
    <!-- VENDOR INFORMATION END -->
  </div>
  <a class="header__start" href="#!">Iniciar</a>
</header>
<!-- HEADER END -->

<!-- ALARMS -->
<section class="alarms">
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

<!-- CREATE ALARM -->
<div class="create-alarm">
  <div class="create-alarm__button icon">
    <img src={addIcon} alt="Add Icon" width="24" height="24">
  </div>
</div>
<!-- CREATE ALARM END -->

<main>
  <img src={logo} alt="Svelte Logo" width="2" height="2"/>
  <!--
  <Counter>
    <AnotherComponent/>
  </Counter>
  -->
</main>

<style>

</style>
