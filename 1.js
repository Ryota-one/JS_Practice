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
// // }

// const plus1 =(num) =>{
//     return num + 1;
// }

// const calc = (num,func) => {
//     return func(num);
// }

// console.log(calc(5,plus1));

// console.log(calc(5,(num) => {
//     return num * 2;
// }));

// console.log(calc(5,num => num * 3));

// const scores = [10,20,30,130,423];

// scores.forEach((score)=>{
//     console.log(score);
// })

// const nums = [1,2,3,4,5];
// const numsBackup = [...nums];

// nums.push(10);

// console.log(nums);
// console.log(numsBackup);


//document.querySelectorを使ってHTML要素を取得可能
//textContentプロパディを使用してテキストを変更が可能

document.querySelector('button').addEventListener('click',() => {
    document.querySelector('p').textContent = 'yaay'
});

// classListを使ってCSSスタイルを取得が可能。

document.querySelector('button').addEventListener('click', () => {
    document.querySelector('p').classList.add('pink-bg');
});

//toggleメソッドを使ってCSSスタイルの追加と削除が可能。
document.querySelector('button').addEventListener('click', () => {
    document.querySelector('p').classList.toggle('pink-bg');
});

//querySelectorAllを使って複数のHTML要素を取得可能(querySelectorは最初の1つの要素のみ取得)
document.querySelectorAll('button').addEventListener('click', () => {
    document.querySelectorAll('li').forEach((li) => {
        li.textContent = 'changed!';
    });
});

//cssクラスを指定して複数のHTML要素を取得可能
document.querySelectorAll('button').addEventListener('click', () => {
    document.querySelectorAll('.target .target2').forEach((li) => {
        li.textContent = 'changed!';
    });
});


//createElementメソッドを使ってHTML要素を作成可能
//appendChildメソッドを使ってHTML要素を追加可能
document.querySelector('button').addEventListener('click', ()=>{
    const li = document.createElement('li');
    li.textContent = 'new item';
    document.querySelector('ul').appendChild(li);
});

//removeChildメソッドを使ってHTML要素を削除可能
document.querySelector('button').addEventListener('click', ()=>{
    const li = document.createElement('li');
    li.textContent = 'new item';
    if(confirm('削除しますか？') === true){
        document.querySelector('ul').removeChild(li);
    }
});