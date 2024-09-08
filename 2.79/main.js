const firstNumber = '10'
const secondNumber = 10

let result = null

if (firstNumber === secondNumber) {
  result = firstNumber + secondNumber
  console.log(result)
} else {
  result = secondNumber - firstNumber
  console.log(result)
}

const alex = 'dodo'

// if (alex == 'user') {
//   console.log(`Alex is user`)
// } else if (alex == `vip`) {
//   console.log(`Alex is vip user`)
// } else {
//   console.log(`Alex is admin`)
// }

alex === `admin` ? console.log(`Alex is admin`) : console.log(`Alex is not admin`)
// ==========================================================

let mySecondAge = 49

if (mySecondAge >= 18) {
  console.log(`Вы совершеннолетний`)
} else {
  console.log(`Вам еще нет 18`)
}

mySecondAge >= 18 ? console.log(`Вы совершеннолетний`) : console.log(`Вам еще нет 18`)