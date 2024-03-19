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
//          },
//          setter: function(val){
//              privateval = val;
//          }
//      }
// })()
// prototype ✅
// jitne bhi object bante hai unke paas ik property hote hai wo hai prototype
// javascript by default adds a property called prototype to every object, so if you ever see any object, you can blindly say that object contains prototype.
// many properties and methods are already available to use built by javascript creators inside prototype of every objects.

// prototypal inheritance ✅
// kuch features pass kar dena baya prototype, isko khte hai prototypalinheretence.
// var human = {
//     name:"rohan",
//     canfly: false,
//     cantalk: true,
//     willdie: true
// }
// make another object.
//  var sheriyansstudent ={
//     solvejsquestion : true,
//     createmodernwebsite : true
//  }
// sheriyansstudent.__proto__ = human;

// global scope and local scope ✅
// jab bhi koi cheej in {} brackets ke andar nhi hoti to ham use global scope khte h . or jab koi cheej in {} brackets me hote hai use local scope khte hai.

// this call apply bind ✅
// global scope me this ki value window hai. jse -- console.log(this);
// function scope me this ki value window hai. jse -- function abcd(){console.log(this)};    abcd(); 
// ik function jo object ke andar ho use ham method khte hai.
// method scope me this ki value object hoti hai. jse -- var obj ={name:"aman",baatkaro:function(){console.log(this);}} obj.baatkaro();
// in any method, "this" keyword always refer to parent object.

// eventlistners ✅
// var button = document.querySelector("button");
// button.addEventListener("click",function(){
//     this.style.color = "red"; // event listner me this ki value refer karti hai jo addEventListener le phle jo likha hoga wahi value refer karega this. Here the value of this is button.
//     console.log(this)
// });
//                                     call apply bind
// call apply bind => agar tumhare paas koi function hai and koi object hai and tumhe function chalana hai or by default jo this ki value window hai use window na rakh kar point karwana hai kisi object ki taraf.
// use case -- jab bhi hame function chalana hai jisme this ki value kuch or hai par ham chahate hai this ki value kuch or object rhe us waqut .call or .apply or .bind use me aate hai.

// pure functions ✅
// pure functions me do cheeje hoti hai.
// phla - it should always return same output for same input.
// dushra - it will never change/update the value of a global variable.
