// Задание 1.
// Дан массив пользователей:
const users = [
  { name: 'Alex', age: 24, isAdmin: false },
  { name: 'Bob', age: 13, isAdmin: false },
  { name: 'John', age: 31, isAdmin: true },
  { name: 'Jane', age: 20, isAdmin: false },
]
// Добавьте в конец массива двух пользователей:
users.push(
  { name: 'Ann', age: 19, isAdmin: false },
  { name: 'Jack', age: 43, isAdmin: true }
);

console.log(users);

// Задание 2.
// Используя массив пользователей users из предыдущего задания, напишите функцию getUserAverageAge(users), которая возвращает средний возраст пользователей.

function getUserAverageAge(users) {
  let totalAge = 0;

  for (let user of users) {
    totalAge += user.age;
  }
  return totalAge / users.length;
}

console.log(getUserAverageAge(users)); // 25

// Задание 3.
// Используя массив пользователей users из предыдущего задания, напишите функцию getAllAdmins(users), которая возвращает массив всех администраторов.
function getAllAdmins(users) {
  return users.filter(user => user.isAdmin);
}

console.log(getAllAdmins(users));

// Задание 4.
// Напишите функцию first(arr, n), которая возвращает первые n элементов массива. Если n == 0, возвращается пустой массив [], если n == undefined, то возвращается массив с первым элементом.
function first(arr, n) {
  if (n === 0) return [];
  if (n === undefined) return [arr[0]];
  return arr.slice(0, n);
}

const numbers = [10, 20, 30, 40, 50];

console.log(first(numbers));
console.log(first(numbers, 0));
console.log(first(numbers, 3));