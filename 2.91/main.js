const btnsWtapper = document.querySelector('.btns')

btnsWtapper.addEventListener('click', event => {
  const target = event.target
  if (target && target.classList.contains('btn')) {
    // if (target && target.tagName === 'BUTTON') {
    console.log(target.textContent);
  }
})


// const btns = document.querySelectorAll('.btn')

// btns.forEach(btn => {
//   btn.addEventListener('click', () => {
//     console.log(btn.textContent)
//   })
// })