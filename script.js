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

function pyramids(n) {
    const midpoint = Math.floor((2 * n - 1) / 2)
    for (let row = 0; row < n; row++) {
        let level = '';

        for (let column = 0; column < 2 * n - 1; column++) {

            if (midpoint - row <= column && midpoint + row >= column) {
                level += '#'
            } else {
                level += ' ';
            }


        }
        console.log(level)
    }
}

pyramids(2)