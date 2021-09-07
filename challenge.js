const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log(3, 4, 5)



let scoreDolphins = calcAverage(44, 23, 71);
let scoreCoalas = calcAverage(65, 54, 49);
console.log(`Coalas: ${scoreCoalas} `);
console.log(`Dolphins: ${scoreDolphins}`);

const checkWinner = function (avgDolphins, avgCoalas) {
    if (avgDolphins >= 2 * avgCoalas) {
        console.log(`Dolphins win!!!! ${avgDolphins} vs ${avgCoalas} `)
    } else if (avgCoalas >= 2 * avgDolphins) {
        console.log(`Coalas win!!!!  ${avgCoalas}  vs ${avgDolphins} `)

    } else {
        console.log('No one wins')
    }
}

checkWinner(scoreDolphins, scoreCoalas)
// test 2

scoreDolphins = calcAverage(85, 54, 42)
scoreCoalas = calcAverage(23, 34, 27)
console.log(scoreDolphins, scoreCoalas)
checkWinner(scoreDolphins, scoreCoalas)