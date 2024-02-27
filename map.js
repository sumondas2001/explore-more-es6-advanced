// // const numbers = [2, 3, 5, 1, 4];
// // const doubled = [];

// // for(const number of numbers){
// //     const double = number *2;
// //     doubled.push(double);

    

// // }
// // console.log(doubled)

// // const numbers = [2, 3, 5, 1, 4];

// // function doubled (num){
// //     console.log(num)
// //     return num *2;

// // } 
// // const result = numbers.map(doubled);
// // console.log(result)


// // const numbers = [2, 3, 5, 1, 4];

// // const doubled2 = n => n*2;

// // const output = numbers.map(doubled2);
// // console.log(output)

// const numbers = [2, 3, 5, 1, 4];
// const result = numbers.map(n => n*2);
// console.log(result);


const array = [22, 55, 95, 78];

const fiveAdd = array.map(x => x + 5);

// console.log(fiveAdd)

const halves = array.map(x => x/2);
// console.log(halves)

const double = array.map(x => x*2);
// console.log(double)

const friends = ['john', 'tom', 'Michal', ' oliver'];

const length = friends.map(frend => frend.length);
console.log(length)