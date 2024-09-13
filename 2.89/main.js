const btn = document.querySelector('.btn')
const text = document.querySelector('.text')

btn.addEventListener('click', () => {
  // text.classList.add('red')
  text.classList.toggle('red')
  text.classList.toggle('move')
  if(text.classList.contains('move')) {
    text.textContent = 'Я двигаюсь'
  } else {
    text.innerText = 'text'
  }
})

console.log(text.classList)

// document.body.innerHTML = '<b>тест'; // забыли закрыть тег
// alert(document.body.innerHTML); // <b>тест</b> (исправлено)

text.innerHTML += "  Привет<img src='./img/S600xU_2x.webp'/> !"