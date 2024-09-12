const button = document.querySelector('.btn')
let btnIsRed = false

button.addEventListener('click', () => {
if(btnIsRed) {
  button.style.backgroundColor = 'blue'
  btnIsRed = false
} else {
  button.style.backgroundColor = 'red'
  btnIsRed = true
}
  // alert('КЛИК СРАБОТАЛ!!!!')
})

// let btnIsFocus = true

button.addEventListener('focus', (event) => {
  event.target.style.minWidth = '300px'
  event.target.style.height = '50px'
})

button.addEventListener('blur', (event) => {
  event.target.style.minWidth = ''
  event.target.style.height = ''
})

