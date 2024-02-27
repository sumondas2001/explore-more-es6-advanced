// task : ==> 1
let data = {
     Sophia: {
          id: 33,
          study: [
               {
                    primariy:
                         [
                              { school: 'ABC primariy school' },
                              { location: 'Dhaka' }
                         ]
               },
               {
                    secondary:
                         [
                              { school: 'ABC secondary school' },
                              { location: 'chittong' }
                         ]
               }
          ]
     }
};

// console.log(data.Sophia.study[1].secondary[1].location)
// task : ==> 2

let student = {
     2222: {
          name: 'jack',
          section: 'c',
          class: 'IX',
          address: {
               'building no': 12,
               'street': 'st. jonson',
               'city': 'Petersburg',
               'country': 'uk'
          }
     },
     3333: {
          name: 'Herry',
          selected: 'D',
          class: 'X',
          address: {
               'building no': 85,
               'street': 'DC rode',
               'city': 'kachuket',
               'country': 'bangladesh'
          }
     }
};
// console.log(student[2222].address.city)
// console.log(student[3333].name)
// task : ==> 3
let data2 = {
     data:
          [
               {
                    bookID: 1,
                    bookDetails: {
                         name: 'habluder adda',
                         category: 'xyz',
                         price: '210 $'
                    },
                    bookCategory: 'basic',
               },
               {
                    bookID: 2,
                    bookDetails: {
                         name: 'gobluder adda',
                         category: 'ABC',
                         price: '210 $'
                    },
                    bookCategory: 'beginner',

               }
          ]
};

// console.log(data2.data[0].bookDetails.name)
// console.log(data2.data[1].bookCategory)
// task : ==> 4

const numbers =[1, 3, 5, 7, 9];

// for(let i= 0; i < numbers.length; i++ ){
//      let element = numbers[i];
//      let add = element +1;
//      // console.log(add)
// }

const add = numbers.map(x => x+1);
// console.log(add)

// task : ==> 5
const array =[33, 50, 79, 78, 90, 101, 30];

const filter = array.filter(x => x % 10 === 0 );
// console.log(filter)

const find = array.find(x => x % 10 ===0);
// console.log(find)

// task : ==> 6
const people = [
     {name : 'meena', age:23},
     {name : 'Rina', age:13},
     {name : 'Suchorita', age:18}
]
     let count = 0;
for(let i = 0; i <people.length; i++){
     const element = people[i].age;
     count  = count + element;
}
// console.log(count)

const peopleAdd = people.reduce(x => x + x);
// console.log(peopleAdd)

const cabe = (x)=> x*x*x;
// console.log(cabe(2));
const [a , b] = [1,2,3,4,45,5]; 
// console.log(a+b);
const nums = [1,2,3,4,5];
let output = nums.filter(n => n%2);
// console.log(output);
// How will you get the price from the product object?

const product = {name: 'Laptop', model:'Yoga 3', price:49000, dusk: '512SSD'}



const {price} =  product;
// console.log(price)


