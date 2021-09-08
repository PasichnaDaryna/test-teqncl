// Это способность функции во время создания запоминать ссылки на переменные функции и параметры, находящиеся в текущем лексическом окружении, а так же в лексическом окружении родительской функции и так до глобальной области видимости. Замыкание подразумивает именно внешние переменные, а не саму функцию.


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



// function createCulcFunction(n) {


// return function () {
//     console.log(1000 * n)
// }
// }

// createCulcFunction(42)
// // nothing will return because it returns another function

// const calc = createCulcFunction(42)
// calc()

// function createIncrementor(n) {
//     return function (num) {
//         return n + num;

//     }
// }
// const addOne = createIncrementor(1)
// const addTen = createIncrementor(10)

// console.log(addOne(10))
// console.log(addOne(41))



// console.log(addTen(10))
// console.log(addTen(41))




function urlGenerator(domain) {
    return function (url) {
        return `https://${url}.${domain}`
    }
}


const comUrl = urlGenerator('com')
console.log(comUrl('google'))