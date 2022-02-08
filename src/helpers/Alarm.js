import { _Date } from './date'
import dayjs from 'dayjs'
import dayNames from './dayNames'

/*
 * Aún falta el desarrollo de:
  - Posponer alarma durante X tiempo.
    this.sleepTime
  - Descartar alarma, hacer que no se ejecute más hasta el siguiente día.
    this.ignoreDay = new Date()
    cada vez que se descarta la alarma, ignoreDay se actualiza.
*/

/*
  Mejorar las funciones, algunas dan variadas respuestas y éso está mal.
  Algoritmos que no se entienden con facilidad no van al baile.
*/

class Alarm {
  constructor({ name='', days=[], hours=0, minutes=0, postDay=new Date('1995-12-17T03:24:00') }) {
    this.name = name
    this.days = days.length === 0 ? [0, 1, 2, 3, 4, 5, 6] : days
    this.hours = hours || 0
    this.minutes = minutes || 0
    this.playing = false
    this.disabled = false
    this.postDay = postDay
  }

  // # play() => true
  play() { return this.playing = true }

  // # checkDay() => [Error, dayString]
  checkDay(exclude=[]) {
    const { day: nowDay } = _Date(new Date())
    let alarmDays = this.days

    const postDate = new Date(this.postDay)
    const nowDate = new Date()
    const postEqualNowDateMonth = postDate.getDate() === nowDate.getDate() && postDate.getMonth() === nowDate.getMonth()
    if (postEqualNowDateMonth && postDate.getFullYear() === nowDate.getFullYear()) {
      // La alarma ya se pospuso hoy, así que pasará a Tomorrow.
      exclude.push(postDate.getDay())
    }

    if (exclude.length) {
      alarmDays = alarmDays.filter(alarmDay => {
        return !exclude.includes(alarmDay)
      })
    }
    if (alarmDays.length === 7) return [null, 'everyDay']

    const alarmDay = alarmDays.find(_alarmDay => dayNames[_alarmDay] === dayNames[nowDay])
    if (alarmDay) return [null, dayNames[alarmDay]]

    let nearDay = alarmDays.find(day => day > nowDay) || alarmDays.find(day => day < nowDay)
    let dayString = nearDay === nowDay+1 ? 'Tomorrow' : dayNames[nearDay]
    return [{ msg: 'An error has been ocurred.' }, dayString]
  }

  // # displayDays() => 'Todos los días' || 'Domingo'..'Sábado' || 'Do, Lu, Vi'
  displayDays = () => {
    let days = this.days
    if (days.length === 7) return 'Todos los días'

    days = days.map(day => dayNames[day])
    if (days.length === 1) return days[0]

    days = days.map(day => day.substr(0, 2))
    return days.join(' - ')
  }

  // # checkTime() => bool of alarm is active.
  checkTime() {
    const { hours: nowHours, minutes: nowMinutes } = _Date(new Date())
    if (this.hours < nowHours) return this.play()
    if (this.hours === nowHours && this.minutes <= nowMinutes) return this.play()
    return false
  }

  // # displayTime() => '00:00'
  displayTime() {
    const hours = this.hours < 10 && '0'+this.hours || this.hours
    const minutes = this.minutes < 10 && '0'+this.minutes || this.minutes
    return `${hours}:${minutes}`
  }

  // # getTypeTime() => 'AM' || 'PM'
  displayTypeTime() {
    return this.hours < 12 ? 'AM' : 'PM'
  }

  // # typeTimeState() => 'sunrise' || 'day' || 'night' || ''
  typeTimeState() {
    let value = ''
    value = this.hours >= 0 && 'sunrise' || value
    value = this.hours > 6  && 'day' || value
    value = this.hours > 19 && 'night' || value
    return value
  }

  // # displayLack() => 'Faltan n horas' || 'Faltan n minutos' || 'Tomorrow' || '[day]'
  displayLack() {
    let toTimeDate = new Date()
    toTimeDate.setHours(this.hours)
    toTimeDate.setMinutes(this.minutes)
    const diff = Date.now() - toTimeDate.getTime()

    const [alarmError, alarmDayString] = this.checkDay()

    if (alarmError || diff < 0) {
      if (alarmDayString === 'Tomorrow') return 'Ésta alarma se activará mañana.'
      if (alarmDayString !== 'Tomorrow') return `Ésta alarma se activará el ${alarmDayString.toString().toLowerCase()}.`
    }

    const toTimeDayJS = dayjs(toTimeDate)
    const diffHours = toTimeDayJS.diff(dayjs(), 'hour')
    const diffMinutes = toTimeDayJS.diff(dayjs(), 'minute')
    if (diffHours <= 0 && diffMinutes <= 0) return 'Ejecutando...'
    if (!diffHours) return `Falta${diffMinutes === 1 ? '' : 'n'} ${diffMinutes} minuto${diffMinutes === 1 ? '' : 's'}.`

    return `Falta${diffHours === 1 ? '' : 'n'} ${diffHours} hora${diffHours === 1 ? '' : 's'} y ${diffMinutes} minuto${diffMinutes === 1 ? '' : 's'}.`
  }
}

export default Alarm
