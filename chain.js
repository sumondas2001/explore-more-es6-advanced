const data = [{id:2, name: 'sumon', address: 'knbyi', number: 4512},{id:1, name: 'das', address: 'iywfgb'}];
console.log(data[0].address);


const products ={
     count : 5000,
     data:[
          {id: 1, name: 'dell', price : 65000},
          {id: 2, name: 'hp', price : 165000}
     ]
};
console.log(products.data[1].price);

const user ={
     id:200,
     name: 'uitf',
     address : {
          city : 'Dhaka',
          country : 'Bangladesh',

     },
     MobileNumber : {
          number: {
               number1: 1334252682,
               number2: 133124.354682,
               number3: 133425268235674,

          }
     }
}
console.log(user.MobileNumber.number?.number2);