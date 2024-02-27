const number = [22, 54, 5, 98, 87, 32, 11];
// const selected = number.filter(number => number > 70);
// const selected = number.filter(number => number > 20);
// const selected = number.filter(number => number > 100);
// const selected = number.filter(number => number % 2 == 0);
const selected = number.filter(number => number % 2 == 1);
// console.log(selected)

const friends = ['john', 'tom', 'Michal', ' oliver'];

const oddFriends = friends.filter(x => x.length > 4)
console.log(oddFriends)
