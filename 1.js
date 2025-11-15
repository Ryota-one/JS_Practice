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

//ラジオボタンの値を取得する
document.querySelector('button').addEventListener('click',() => {
    document.querySelectorAll('input').forEach((radio) => {
        if(radio.checked === true){
            alert(radio.value);
        }
    });
});

//チェックボックスの値を取得する
document.querySelector('button').addEventListener('click',() => {
    const  colors = [];
    document.querySelectorAll('input').forEach((checkbox) => {
        if(checkbox.checked === true){
            alert(checkbox.value);
        }
    });
    alert(colors.join(', '));
});
//focusイベントを使って入力欄にフォーカスが当たった時に処理を実行
document.querySelector('input').addEventListener('focus',() => {
    document.querySelector('p').textContent = 'English only';
});
//blurイベントを使って入力欄からフォーカスが外れた時に処理を実行
document.querySelector('input').addEventListener('blur',() => {
    document.querySelector('p').textContent = '入力ありがとうございました';
});
//focusメソッドを使って入力欄にフォーカスを当てる
document.querySelector('input').focus();


//keydownイベントを使ってキーボードのキーが押された時に処理を実行
document.addEventListener('keydown',(e) => {
    document.querySelector('p').textContent = e.key;
});


//mousemoveイベントを使ってマウスが動いた時に処理を実行
document.addEventListener('mousemove',(e) => {
    document.querySelector('p').textContent = `X座標:${e.clientX} Y座標:${e.clientY}`;
})


//submitイベントを使ってフォームが送信された時に処理を実行
document.querySelector('form').addEventListener('submit',(e) => {
    e.preventDefault();
    document.querySelector('p').textContent = document.querySelector('input').value;
});


//画像のURLを変更する
document.querySelector('img').src = 'https://picsum.photos/200/300';

//hrefプロパティを使ってリンク先のURLを変更する
document.querySelector('a').href = 'https://www.yahoo.co.jp/';

//styleプロパティを使ってHTML要素のスタイルを変更する
document.querySelector('p').style.color = 'red';
document.querySelector('p').style.fontSize = '20px';

//checkedプロパティを使ってチェックボックスやラジオボタンの選択状態を変更する
document.querySelector('input[type="checkbox"]').checked = true;
document.querySelector('input[type="radio"][value="option2"]').checked = true;