// 1) Создайте объект с вашим описанием(имя, возраст и т.д.).
// 2) Создайте метод объекта, который в качестве аргумента будет принимать имя и возвращать строку ‘Hello “переданный аргумент”’.

const lastName = {
  koncov: {
    age: 49,
    country: 'Russia',
    city: 'Novokubansk',
    nameStr(firstName) {
      console.log(`Hello ${firstName}`)
    }
  }
}

lastName.koncov.nameStr('Evgeniy')




// 3) Создайте массив объектов с описанием пользователей(такой мы делали в уроке).Объявите отдельную переменную, в которой будет храниться количество простых пользователей, начальное значение будет - 0. Обойдите массив пользователей и если пользователь не является админом - прибавьте к ранее созданной переменной единицу.После окончания работы цикла выведите в консоль переменную с количеством простых пользователей.

const users = [
  {
    name: 'alex',
    age: 23,
    isAdmin: false
  },
  {
    name: 'john',
    age: 24,
    isAdmin: true
  },
  {
    name: 'mick',
    age: 22,
    isAdmin: false
  },
  {
    name: 'nick',
    age: 20,
    isAdmin: false
  },
  {
    name: 'adam',
    age: 24,
    isAdmin: true
  },
  {
    name: 'margo',
    age: 22,
    isAdmin: false
  }
]

let usersIsNotAdmin = 0

for (let i = 0; i < users.length; i++) {
  if (users[i].isAdmin == false) {
    usersIsNotAdmin++
  }
}

console.log(usersIsNotAdmin)





// const users = [
//   {
//     name: 'alex',
//     age: 23,
//     isAdmin: false
//   },
//   {
//     name: 'john',
//     age: 24,
//     isAdmin: true
//   }
// ]

// for (let i = 0; i < users.length; i++) {
//   console.log(users[i].isAdmin)
// }

