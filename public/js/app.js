const log = console.log

log('thus is clint side js')

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#messageOne')
const messageTwo = document.querySelector('#messageTwo')

weatherForm.addEventListener('submit', e => {
  e.preventDefault()
  messageOne.textContent = 'Loading...'
  messageTwo.textContent = ''
  const location = search.value
  fetch(`http://localhost:3000/weather?address=${location}`)
    .then(res => res.json())
    .then(data => {
      messageOne.textContent = data.location
      messageTwo.textContent = data.forecast
    })
    .catch(err => (messageOne.textContent = err))
})
