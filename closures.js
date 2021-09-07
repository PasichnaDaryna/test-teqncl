// const runOnce = function () {
//     console.log('this will never run again')
// }


// runOnce

//     (function () {
//         console.log('This will never run again')
//         const isPrivate = 23;
//     }());
// console.log(isPrivate)





// let f;
// const g = function () {
//     const a = 23;
//     f = function () {
//         console.log(a * 2)
//     }

// }
// g()
// f();
// console.dir(f)






// const h = function () {
//     const b = 777;
//     f = function () {
//         console.log(b * 2)
//     }
// }

// h();
// f()
// console.dir(f)

// const boardPassengers = function (n, wait) {
//     const perGroup = n / 3;

//     setTimeout(function () {
//         console.log(`We are now boarding all ${n} 
//         passengers`);
//         console.log(`There are 3 groups, each with 
//         ${perGroup} passengers`)
//     }, wait * 1000)


//     console.log(`Will start boarding in ${wait} seconds`)
// }

// const perGroup = 1000

// boardPassengers(180, 3)

// function generator(input) {
//     var number = input;
//     return function () {
//         return input * 2;
//     }
// }

// var calc = generator(900)
// console.log(calc())