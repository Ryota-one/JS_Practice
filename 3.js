// 'use strict';{
//     console.log(new Date());

// setInterval(() =>{
//     console.log(new Date());
// }, 1000);
// }


// let count = 3;

// const id1 = setInterval(() => {
//     console.log(count);
//     count--;
//     if(count < 0){
//         clearInterval(id1);
//     }
// },1000);

// let count = 3;

// const intervalId = setInterval(() => {
//     console.log(count);
//     count--;
//     if(count < 0 ){
//         clearInterval(intervalId);
//     }
// },1000);

// console.log(`ID:${intervalId}`);

// setTimeout(()=>{
//     console.log('50%OFF');
//     window.location.href = 'https://256times.com';
// },3000)

// console.log('Loading');

const pElement = document.querySelector('p');
const buttonElement = document.querySelector('button');
let timeoutId;
//再帰関数
function showClock(){
    timeoutId = setTimeout(() =>{
        pElement.textContent = new Date();
        showClock();
    },1000);
}

buttonElement.addEventListener('click',()=>{
    clearTimeout(timeoutId);
});
showClock();

