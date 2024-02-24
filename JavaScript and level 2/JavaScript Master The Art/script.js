// javascript me do version hai abhi ik h ES5 or dushra h ES6 . 5 phle aata h to isse hme ye pta chalta h ki ES5 phle aaya tha or abhi new version h ES6, future me ase hi aate rhenge so on .
// ES5 me sirf kon tha - var 
// ES6 me h - var const let. (let or const new aaye h js me)
// Hum ES5 or ES6 dono use karenge . Hum log dono use kar rhe h isliye hum log var let const sab use kar sakte h ik saath me .
// JS HTML CSS ye teeno hum logo ko isliye update nhi karni padti h kyoki jab hum browser ko update karte h tab ye teeno apne aap update ho jaati h .
// var let const ✅
// variable banane ke do tarike h phla h var dushra h let, const me ik tarika h total teen tarike h .

// different b/w let, var and const ✅
// var old js me tha 
// var function scope hota hai => var apne parent function me khi bhi use ho sakta h . 
// var adds itself to the window object     
// function abcd (){
//     for(var i = 1; i<12; i++){
//         console.log(i);
//     }
//     console.log(i);
// }
// abcd();

// let const new js me h 
// let const curly braces scoped hota h 
// let const does'nt adds itself to the window object
// function abcd (){
//     for(let i = 1; i<12; i++){
//         console.log(i);
//     }
//     console.log(i);
// }
// abcd();

//  window object ✅
// js language me kuch cheeje nhi hai jo ham use kar sakte hai or wo cheeje hme js se nhi browser se milti h, ase saare features jo js ka part nhi h but fir bhi use kar sakte hai unhe hum dhoond sakte h ik particular object mai jiska naam hai window .
//js mein kai saare features hai par kuchh features jo hum use karte hai wo features wo nahi hai par fir bhi use kar paate hai kuoki wo features js language us kar leti hai window se, aur window hai ek box of features given by browser to use with js.
// for example - alert, console, prompt etc are not the part of js they are window parts. type window on any browser console to get all elements are part of window . jo cheeje hme browser de rha h wo sab window store kar rha h 
// write window on browser console to chech window objects .

// browser context API ✅
// there are three things in browser context api .
// 1) window object 
// 2) stack 
// 3) Heap Memory

// stack ✅
// mene kaha ki a chalao , b chalao , c chalao , d chalao ,e chalao to fir sabse phle a add hoga fir b add hoga fir c add hoga for d add hoga fir e add hoga uske baad sabse phle a khatam hua fir b khatam hua fir c khatam hua fir d khatam hua fir e khatam hua , to jis order me log aate h use order me bahar nikalte h . to ye jo order hai ise hi stack khete hai. 
// heap memory ✅
// jitne bhi data aapke programme hota hai use store karne ke liye heap memory khte hai.
// example computer kse add karta h ? add this 1+2+3+4+5+6 = ?
// computer add karta h ase - 
//1+2=3
//3+3=6
//6+4=10
//10+5=15
//15+6=21
//to final answer of 1+2+3+4+5+6 = 21
// execution context ✅ and lexical environment ✅
// execution context matlab jab bhi hum function chalaayenge function apna khudka ik imaginary container bna lega jisme uski teen cheeje hongi.
// 1) variables
// 2) function inside that parent function
// 3) lexical environment of that function 

// ye jo container hai imaginary ise hi hum execution context khete hai

// execution context is a container where the function's code is executed and it's always created when ever a function is called , it contains three things - variables, functions, lexical environment.
// lexical environment hota hai ek chart jisme ye likha hota hai ki aapka particular function kin cheezo ko eccess kar sakta h kinko nhi, matlab ki it holds it's scope and scope chain

// how to copy reference values // ye reference nhi hai, example without refernce .
// var a = [1,2,3,4,5];
// var b = a; // ye copy nhi hua refrence hai a ka 
// b.pop(); // b se ik element hat jaiga or saath me a se bhi because b a ka reference hai.

// how to copy reference values ✅
// var a = [1,2,3,4,5,6];
// var b = [...a];
// b.pop();

// var obj = {name : "aman"};
// var copyobj = {...obj};
// copyobj.name = "amrita";

// truthy or falsy ✅
// js me kuch bhi likho wo do prakar me se ik prakar se blong kakti hai wo truthy or falsy hai .
// false value ye hai - 0, false, undefined, null, NaN, document.all inka ilawa sabhi values truthy hoti hai.
//  if (7){
//     console.log("hay");
//  }
//  else {
//     console.log("hello");
//  }

// switch ✅

// switch(1){
//     case 1 :
//         break;
//         case 2 :
//             break;
//         default :
// }

// foreach, forin, do-while ✅

//foreach loop sirf array pe chalta h matlab ki jab bhi tumhare paas ik array ho, tab use me kon aata h foreach loop .forEach me E capital isliye h kyuki ye camel case follow karte hai .
// forEach kabhi bhi by default main array me change nhi karta wo aapko changes karke deta h array ki temporary copy par jiske bajaha se array hamesha same rheta hai .

//  var a = [1,2,3,4,5,6,7,8,9,45,65,67785,5354,245,245,767,9746];
//  a.forEach(function(val){
//      console.log(val+2); 
//  })
//          or
// var a = [1,2,3,4,5];
// a.forEach(function(val){
//     val+2;
// })

// forin 
// objects par loop karne ke liye hota h forin loop 
// var obj ={
//     name : "aman",
//     age : 20,
//     city : "auraiya"

// }
// for(var key in obj){
//     console.log(key,obj[key]);
// }

//             do-while 

// var a = 12;
// do {
//     console.log("hay");
//     a++
// }
// while (a < 15)

// callfunctions ✅
// jab bhi koi esa code jo baad me chalta h aap likhoge, kyuki wo code baad me chalta h aapko ye pta nhi hota wo complete hua ki nhi, ase code ke completion par js ko btaya jata h wo complete ho gya hogya aap use chla sakte ho, ye batane ka kaam callback ka hai.
// setTimeout(function() {
//     console.log("2 second baad chalao");
// }, 2000); // 2000 ka matlab 2000 miliseconds means 2 seconds. 
// aesa code jo baad me chalta h usey hum ik function de dete h , ki bhaiya jab complete ho jana tab ye function chala dena  , aur wo function jo ham dete h wo ik normal function hi hota hai or use khte h callback function .   

//what is first class functions ✅
// js me ik concept h jiska matlab hota h ki function ko use kar sakte ho as a value.
// function abcd (a){
//     a();
// }
// abcd(function(){console.log("hello world")})

// how arrays are made behind the scenes ✅
//var arr = [1,2,3,843,632,96,701];
// ye jo upar likha h wo array nhi hai wo ik object h kyoki ye ik object ki tarahe js likhte h.see this below -
// arr ={
//     0:1,
//     1:2,
//     2:3,
//     3:843,
//     4:632,
//     5:96,
//     6:701
// }
// how to check array type on console ya fir console log ke andar -- Array.isArray([]) is give true. and Array.isArray({}) gives us false. this way you check array hai ya nhi .

//why we can make negative indexes arrays in js ✅
// var arr = [1,2,3,4,5];
// arr[-1] = 2;

// how to delete object properties ✅
// var a = {
//     name : "aman", 
//     age : 20
// }
// delete a.age;
