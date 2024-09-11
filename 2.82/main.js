// 1) Создайте функцию, которая в качестве аргумента будет принимать имя, а возвращать строчку ‘Hello “аргумент функции”’.

function greetingsUser(user) {
  return user
}

console.log(`Hello ${greetingsUser('Bro')}`)
console.log('=====================')



// 2) Создайте массив чисел, далее создайте функцию, которая будет принимать в качестве аргумента массив чисел.Функция должна перебирать полученный массив и если число больше 10 - выводить это число в консоль.

const numbers = [1, 5, 66, 4, 51, 99, 1, 0, 7, 47, 222]

function searchNumber(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 10) {
      console.log(array[i]) 
    }
  }
}

searchNumber(numbers)
console.log('=====================')



// 3) Предлагаю вам реализовать простенький калькулятор.Создайте функцию, которая будет принимать три аргумента, два числа и строку для выбора оператора.При вызове функции пользователь передает, например, (2, 3, ‘minus’), внутри функции происходит проверка на знак и в данном случае функция должна вернуть - 1. То есть мы получаем разницу между первым и вторым аргументом.Запишите результат выполнения функции в переменную и выведите в консоль.Подобным образом реализуйте 4 математические операции: сложение, вычитание, умножение и деление.


function calcLite(num1, num2, str) {
  if (str === 'minus') {
    return num1 - num2
  } else if (str === 'plus') {
    return num1 + num2
  } else if (str === 'reduce') {
    return num1 * num2
  } else if (str === 'divide') {
    return num1 / num2
  }

}

console.log(calcLite(5, 2, 'minus'))
console.log(calcLite(5, 2, 'plus'))
console.log(calcLite(5, 2, 'reduce'))
console.log(calcLite(5, 2, 'divide'))



// const users = ['Vadim', 'Olga', 'Ivan']

// function checkItem(array, item) {
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === item) {
//       return `Есть такое имя в массиве - ${item}`
//     }
//   }
//   return `Такого имени в массиве нет - ${item}`
// }

// console.log(checkItem(users, `Olga`))
// console.log(checkItem(users, `Atec`))