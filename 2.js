'use strict';


// {
//     const d = new Date();
//     console.log(d)
//     console.log(d.toLocaleString());
//     console.log(d.getFullYear());
//     console.log(d.getMonth() + 1);
//     console.log(d.getDate());
//     console.log(d.getDay());
//     console.log(d.getHours());
//     console.log(d.getMinutes());
//     console.log(d.getSeconds());
//     console.log(d.getMilliseconds());
// }

//月は０始まりなので注意
// const d = new Date(2000,2,10);

// const dBackup = new Date(d);
// const dBackup2 = new Date(d.getTime());

// console.log(d.toLocaleDateString());
// console.log(dBackup.toLocaleDateString());
// console.log(dBackup2.toLocaleDateString());

// d.setDate(23);
// d.setDate(d.getDate() + 7);
// console.log(d.toLocaleDateString());
// console.log(dBackup.toLocaleDateString());

// const d = new Date(2000,1,23);
// console.log(d);
//UTC (協定世界時)での1970年1月1日00:00:00からの経過ミリ秒を取得
// console.log(d.getTime());
// const d2 = new Date(d.getTime() + 1000);
// console.log(d2);


// const diff = Date.now() - new Date(2025,10,10);
// const days = Math.floor(diff/1000/60/60/24);
// console.log(diff);
// console.log(days);

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const d = new Date();

const month = months[d.getMonth()];
const day = days[d.getDay()];
const date = d.getDate();
const year = d.getFullYear();
// 2桁表示にするためにpadStartを使用文字列に変換してから使用
const hour = String(d.getHours()).padStart(2,'0');
const minute = String(d.getMinutes()).padStart(2,'0');
const second = String(d.getSeconds()).padStart(2,'0');