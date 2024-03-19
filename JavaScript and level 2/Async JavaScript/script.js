// Async JavaScript
// sync and async kya hota h ? ✅
// sync matlab ik kaam ke baad dushra hoga, jab tak ik command complete na ho, dushra shuru nhi hoga.
// ex - task a-5
//     task b-2
//     task c-15
//     task d- 1
// sync js me phle a complete hoga fir b hoga fir c complete hoga fir d complete hoga.
// example -
// console.log("hay");
// console.log("hay2");
// console.log("hay3");
// console.log("hay4");
// async matlab saare kaam ek saath suru kar do, jiska answer phle aa jaye uska jawaab dedena.
// ex - task a-5
//     task b-2
//     task c-15
//     task d- 1
// async me saare task ik saath start hoge isliye ye sync se phle complete ho jayge.
// kaise pta chalta hai ki hum sync code likh rhe ya async.
// ex--
// setInterval
// setTimeout
// Promise
// fetch
// axios
// XMLHttpRequest
// async code ke answer chalane ki liye ye sab hote hai -- callbacks, then catch, async await
// these are async js code

// async js hai kya ? ✅
// kai baar aapka final code dependent hota hai kisi aur server par, is case me hame nhi pta hota ki answer uske server se kab laut kar aayega, to hum kya nhi kar sakte is - writing sync code, isse nipatne ke liye hum log async code likh dete hai taaki blocking na ho and jab bhi answer aaye hamara answer ke respect me chalne wala code chal jai.
// async code ka main motive hota hai ki un cases mein jinmein hume pata nhi code ka answer kitne der mein aayega to jab bhi answer aa jaaye uske answer ke respect mein koi particular code chala dena
// for example --
// console.log("hay"); // this is sync js
// setTimeout(function(){console.log("hay 2")},2000) // this is async js
// console.log("hay 3"); // this is sync js
// callback fnc humesha async code me answer aane pe chalta hai

// js async nhi hai wo kse  ? ✅
// async ik dhoka hai 
// event loop sabse jaada pucha jata hai interviews me -- event loop ka kaam hota hai main stack me side stack se cheeze lata hai.

// async ki poori kahani ✅
// clear in vedio vedio link -- https://youtu.be/6kE8lrqfwHo?si=vbDYAb5rERO44rvE 
// single threading and multi threading ✅
// js is single threaded . js doing first work and then second work is called single thread
// multithread ko concurrency bhi khte hai . jab do work ik saath kare use multithreading khte hai.
// callbacks ✅
// fetch 
// axios 
// Promises
// setTimeout
// setInterval

// then catch
// callbacks
// async await

// callback ik function hota hai, ye sirf tab chalta hai jab async code ka completion ho jaata hai.
// setTimeout(function(){},10000)  // here the function in setTimeout is callback function.
// fetch (`https://www.facebook.com`)
// promises ✅
// var ans = new Promise((res, rej) => {
//     if (true) {
//         return res();
//     }
//     else {
//         return rej();
//     }
// })

// ans
//     .then(function () {
//         console.log("resolve hogya tha")
//     })
//     .catch(function () {
//         console.log("reject hua tha")
//     })
// Question  --  user will ask for a number between 0 se 9 and if the number is below 5 resolve if not reject
// var ans = new Promise((resolve, reject) => {
//     var n = Math.floor(Math.random()*10);
//     if (n < 5){
//         return resolve();
//     }
//     else{
//         return reject();
//     }
// })

// ans.then(function(){
//     console.log("below");
// })
// .catch(function(){
//     console.log("above");
// })

// then and catch ✅ // check from vedio.
// try and catch ✅ // check from vedio.
// async await ✅
// koi bhi esa function jisme aap async code likhenge, kyoki async code hai to aap promises ka istemaal kar sakte hai, jab uska anwer aayega aapko then lagana padega, us then ko lagaane se bachne ke liye, aap async await ka istemaal kar sakte hai.
// async function abcd(){
//     let raw = await fetch (`https://randomuser.me/api/`);
//     let ans = await raw.json();
//     console.log(ans);
// }
// abcd();
// 5 use cases ekdum real world waale ✅

// P[concept aside] - ✅
// concurrency and parallelism ✅
// concurrency => js mein sync code and async code ek saath process ho raha tha ye hai concurrency
// parallelism => focus jaada karta hai different processors and unke cores par kaam ko chalaane par

// throttling ✅
// throttling => kisi code ko control karna number of executions.
