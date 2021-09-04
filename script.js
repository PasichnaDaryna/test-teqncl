// function fizzBuzz(n) {


//     for (i = 1; i <= n; i++) {
//         // is the number a multiple of 3 and 5

//         if (i % 15 === 0) {
//             console.log("fizzbuzz")
//         } else
//             if (i % 3 === 0) {
//                 console.log("fizz")
//             }
//             else
//                 if (i % 5 === 0) {
//                     console.log("buzz")
//                 }
//                 else {
//                     console.log(i)
//                 }


//     }



// }


// function chunk(array, size) {

//     let chunked = [];

//     for (let element of array) {
//         const last = chunked[chunked.length - 1];

//         if (!last || last.length === size) {
//             chunked.push([element]);

//         } else {
//             last.push(element);
//         }
//     }
//     return chunked;


// }


// 
//steps
// function steps(n) {
//     for (let row = 0; row < n; row++) {
//         let stair = '';


//         for (let column = 0; column < n; column++) {
//             if (column <= row) {
//                 stair += '#'
//             } else {
//                 stair += ' ';
//             }
//         }
//         console.log(stair)
//     }
// }


// steps(3)
//  pyramids

// function pyramids(n) {
//     // midpoint index
//     const midpoint = Math.floor((2 * n - 1) / 2)
//     for (let row = 0; row < n; row++) {
//         let level = '';

//         for (let column = 0; column < 2 * n - 1; column++) {

//             if (midpoint - row <= column && midpoint + row >= column) {
//                 level += '#'
//             } else {
//                 level += ' ';
//             }


//         }
//         console.log(level)
//     }
// }

// pyramids(2)

// Get Your Vowels

// vowels('Hi there!')-->3


// function vowels(str) {
//     let count = 0;

//     const checker = ['a', 'e', 'i', 'o', 'u']

//     for (let char of str.toLowerCase()) {
//         if (checker.includes(char)) {
//             count++;
//         }

//     }
//     return count
// }



// function vowels(str) {
//     const matches = str.match(/[aeiou]/gi)

//     return matches ? matches.length : 0
// }

// console.log(vowels("AAAAAAAAAAAAAAAA"))



// function matrix(n) {
//     // creating an empty array of arrays
//     const results = []

//     for (let i = 0; i < n; i++) {
//         results.push([])

//     }

//     let counter = 1;
//     let startColumn = 0;
//     let endColumn = n - 1;
//     let startRow = 0;
//     let endRow = n - 1;


//     while (startColumn <= endColumn && startRow <= endRow) {
//         // TOP RoW
//         for (let i = startColumn; i <= endColumn; i++) {
//             results[startRow][i] = counter;
//             counter++

//         }
//         startRow++

//         // right column
//         for (let i = startRow; i <= endRow; i++) {
//             results[i][endColumn] = counter;
//             counter++

//         }
//         endColumn--;
//         // Bottom row

//         for (let i = endColumn; i >= startColumn; i--) {
//             results[endRow][i] = counter;
//             counter++;
//         }
//         endRow--;

//         for (let i = endRow; i >= startRow; i--) {
//             results[i][startColumn] = counter;

//             counter++
//         }
//         startColumn++;

//     }
//     return results;


// }

// console.log(matrix(3))