// function fib(n) {
//     // create results array with first two elements
//     const results = [0, 1]


//     for (let i = 2; i <= n; i++) {
//         const a = results[i - 1];
//         const b = results[i - 2];

//         results.push(a + b)
//     }

//     return results[n]
// }

// console.log(fib(4))

// [0, 1, 1, 2, 3, 5, 8, 13 ]

// function fib(n) {
//     const results = [0, 1];

//     for (let i = 2; i <= n; i++) {
//         const a = results[i - 1];
//         const b = results[i - 2];
//         results.push(a + b);
//     }
//     return results[n]
// }


// console.log(fib(5))

// function memoize(fn) {
//     const cache = {};
//     // below take all the agrs and assign to the array
//     return function (...args) {
//         if (cache[args]) {
//             return cache[args];
//         }

//         const result = fn.apply(this, args)
//         cache[args] = result

//         return result;

//     }
// }


// function fib(n) {
//     if (n < 2) {
//         return n;

//     }
//     return fib(n - 1) + fib(n - 2)
// }
// // console.log(fib(5))
// fib = memoize(fib)
