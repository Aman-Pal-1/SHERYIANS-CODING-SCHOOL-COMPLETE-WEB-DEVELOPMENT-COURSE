// higher order functions ✅
// higher order functions are the functions which accept a function in a parameter or return a function or both
// for example -- forEach method always takes another function inside it, so foreach is a higher order function.
// function abcd(val){

// }
// abcd(function(){})
// //             or
// function ab(){
// return function(){}
// }
// ab()

// ase functions jo accept kar le ik or function ya fir wo return kar de ik or function ase function ko khte h higher order function.

// constructor functions ✅
// function saachaofbiscuit(){
//     this.width=12;
//     this.height=22;
//     this.color="brown";
//     this.taste="sugary";
// }
// var bis1 = new saachaofbiscuit();
// var bis2 = new saachaofbiscuit();
// var bis3 = new saachaofbiscuit();
//                             or
// function circularbuttonbanao(color){
//     this.radius = 2;
//     this.color = color;
//     this.icon = false;
//     this.pressable = true;
// }
// var redbtn = new circularbuttonbanao("red");
// var greenbtn = new circularbuttonbanao("green");

// normal function jisme this ka istemaal ho and aap function ko call karte waqt new keyword ka use karein.
// jab ham log function me this ka use karte hai tab this ka matlab window hota h.
// jab aapke paas esa koi bhi moka ho ki aapko ik jesi properties wale bhaut saare element banane hai us waqt aap constructor function use kar sakte ho .

// first class functions ✅
// first class fnc ka matlab hota h aap inhe normal value or variable me bhi save kar sakte ho .
// var fun = function(){}
// setTimeout(function(){})

// new keyword ✅
// new = > jab bhi new lagta h hamesa apne dimag me ik blank object bna lo .
// function abcd(){
//    this.age=12;
// }
// new abcd () //jha new kilha h wha blank object hai or wo blank object this ki place pe jaiga or kuch esa dikhega.given below--
// {
//     age:12;
// }

// iife ✅
// iife = immediately invoke function expression.
// iife hai function ko turant chalane ki kala,is tarike se ki hum log koi private variable bna pai
// var ans = (function (){
//      var privateval = 12;
//      return{
//          getter: function(){
//              console.log(privateval);
//          }
//      }
// })()
// prototype ✅


// prototypal inheritance ✅


// this call apply bind ✅


// pure functions ✅


// closures ✅

