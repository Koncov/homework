const users = [
  {
    name: 'alex',
    age:20
  },
  {
    name: 'den',
    age: 30
  },
]



const usersName = []


users.forEach((user) => {
  usersName.push(user.name)
})

console.log(usersName)