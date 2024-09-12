const elements = document.querySelectorAll('div')
elements.forEach((element) => {
  element.style.color = 'blue'
})

console.log(elements)

const element = document.querySelector('.blockOne')

element.textContent = 'TEXT'
element.align = 'CENTER'
element.style.color = 'red'
element.style.fontSize = '30px'

console.log(element)

const two = document.getElementById('two')
two.style.background = 'green'
two.style.display = 'block'
two.style.maxWidth = '100px'
two.style.maxHeight = '100px'
two.style.height = '100%'

three = document.querySelectorAll('.block')
for (let element of three) {
  element.style.color = 'grey'
  element.innerHTML = 'New text'
}