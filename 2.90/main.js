const btn = document.querySelector('.btn')

btn.addEventListener('click', event => {
  event.currentTarget.classList.toggle('red')
})

// console.log(event.target)


// const btns = document.querySelectorAll('.btn')

// btns.forEach((btn, index) => {
//   btn.addEventListener('click', () => {
//     console.log(index + 1)
//   })
// })