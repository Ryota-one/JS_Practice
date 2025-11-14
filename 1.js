'use strict'
{
    function example(cul){
        return cul*5;
    }
    console.log(example(5));
}



const catchFish = (kijihata,seabass) => {
    return kijihata + seabass;
}
console.log(catchFish(10,2));



// const double = (num) =>{
//     return num * 2;
// };

// const calc = (num,func) => {
//     return func(num);
// }

const plus1 =(num) =>{
    return num + 1;
}

const calc = (num,func) => {
    return func(num);
}

console.log(calc(5,plus1));
console.log(calc(5,(num) => {
    return num * 2;
}));
console.log(calc(5,num => num * 3));