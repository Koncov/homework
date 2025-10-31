// 1.
// You might know some pretty large perfect squares.But what about the NEXT one ?

//   Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter.Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

// If the argument is itself not a perfect square then return either - 1 or an empty value like None or null, depending on your language.You may assume the argument is non - negative.
//   Examples(Input-- > Output)

// 121 -- > 144
// 625 -- > 676
// 114 -- > -1  #  because 114 is not a perfect square

function findNextSquare(sq) {
  const root = Math.sqrt(sq);

  if (root !== Math.floor(root)) {
    return -1;
  }

  const nextRoot = root + 1;

  return nextRoot * nextRoot;
}


// 2.
// This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.
function simpleMultiplication(number) {
  return number % 2 === 0 ? number * 8 : number * 9;
}


// 3.
// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument(also a string).

//   Examples:

// Inputs: "abc", "bc"
// Output: true

// Inputs: "abc", "d"
// Output: false


function solution(str, ending) {
  return str.endsWith(ending);
}


// 4.
// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

// Note: a and b are not ordered!
// Examples (a, b) --> output (explanation)

// (1, 0) --> 1 (1 + 0 = 1)
// (1, 2) --> 3 (1 + 2 = 3)
// (0, 1) --> 1 (0 + 1 = 1)
// (1, 1) --> 1 (1 since both are same)
// (-1, 0) --> -1 (-1 + 0 = -1)
// (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)

// Your function should only return a number, not the explanation about how you get that number.
function getSum(a, b) {
  const start = Math.min(a, b);
  const end = Math.max(a, b);

  return (end - start + 1) * (start + end) / 2;
}




// 5.
// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.
//   Example

// For input[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].
function countPositivesSumNegatives(input) {
  if (!input || input.length === 0) {
    return [];
  }

  let positiveCount = 0;
  let negativeSum = 0;

  for (let i = 0; i < input.length; i++) {
    if (input[i] > 0) {
      positiveCount++;
    } else if (input[i] < 0) {
      negativeSum += input[i];
    }
  }

  return [positiveCount, negativeSum];
}


// 6.
// Can you find the needle in the haystack ?

//   Write a function findNeedle() that takes an array full of junk but containing one "needle"

// After your function finds the needle it should return a message(as a string) that says:

// "found the needle at position " plus the index it found the needle, so:

// Example(Input-- > Output)

// ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"]-- > "found the needle at position 5"

// Note: In COBOL, it should return "found the needle at position 6"
function findNeedle(haystack) {
  const index = haystack.indexOf('needle');
  return `found the needle at position ${index}`;
}


// 7.
// You will be given an array a and a value x.All you need to do is check whether the provided array contains the value.

// a can contain numbers or strings.x can be either.

// Return true if the array contains the value, false if not.
function check(a, x) {
  return a.includes(x);
}


// 8.
// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

// For example,

// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]

// The correct answer would be 17.
function countSheeps(sheep) {
  return sheep.filter(Boolean).length;
}


// 9.
// Build a function that returns an array of integers from n to 1 where n > 0.

// Example: n = 5 -- > [5, 4, 3, 2, 1]
const reverseSeq = n => {
  return Array.from({ length: n }, (_, i) => n - i);
};


// 10.
// Given an array of integers, return a new array with each value doubled.

// For example:

// [1, 2, 3]-- > [2, 4, 6]
function maps(x) {
  return x.map(num => num * 2);
}
