// 1) Выведите в консоль четные числа от 2 до 12, используйте цикл for и условие. 
// 2) При помощи цикла for выведите в консоль числа от 10 до 1, в обратном порядке.
// 3) Перепишите 1 и 2 цикл используя цикл while.

for (let i = 2; i <= 12; i++) {
  if (i % 2 == 0) {
    console.log(i)
  }
}

console.log('===============================')

for (let a = 10; a >= 1; a--) {
  console.log(a)
}

console.log('===============================')

b = 1
while (b < 12) {
  b++
  console.log(b)
}

console.log('===============================')

c = 0
while (c <= 12) {
  c++
  if (c % 2 == 0) {
    console.log(c)
  }
}