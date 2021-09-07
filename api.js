'use strict'



const request = fetch('https://restcountries.eu/rest/v2/name/portugal')

console.log(request)


const getCountryData = function (country) {
    fetch(`https://restcountries.eu/rest/v2/name/${country}`)
        .then(function (response) {
            console.log(response)
            return response.json()
        }).then(function (data) {
            console.log(data)
        });
}

getCountryData('portugal')