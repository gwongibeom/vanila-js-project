const $watchText = document.querySelector('.watch-text')
const $dateText = document.querySelector('.date-text')

const dateConvertToFormatString = (propDate) => {
  const date = new Date(propDate)
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const convertedDate = `${year}.${month}.${day}`

  return convertedDate
}

const watchConvertToFormatString = (propDate) => {
  const date = new Date(propDate)
  const hour =
    date.getHours() > 12 ? `0${date.getHours() - 12}` : date.getHours()
  const minute =
    String(date.getMinutes()).length < 2
      ? `0${date.getMinutes()}`
      : date.getMinutes()
  const seconds =
    String(date.getSeconds()).length < 2
      ? `0${date.getSeconds()}`
      : date.getSeconds()
  const AMPM = hour > 12 ? 'AM' : 'PM'
  const convertedWatch = `${hour}:${minute}:${seconds} ${AMPM}`

  return convertedWatch
}

const setWatch = () => {
  $dateText.innerText = dateConvertToFormatString(new Date())
  $watchText.innerText = watchConvertToFormatString(new Date())

  console.log('setWatch')
}

setInterval(setWatch, 1000)
