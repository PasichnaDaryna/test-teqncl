const greet = function (guest, stars) {
    return `${guest}, welcome to ${stars}-star ${this.name}!`;
};

const hotel = { name: 'Resort Hotel' };
const motel = { name: 'Sunlight Motel' };

console.log(greet.call(motel, 'Mango', 5));
// "Mango, welcome to 5-star Resort Hotel!"
