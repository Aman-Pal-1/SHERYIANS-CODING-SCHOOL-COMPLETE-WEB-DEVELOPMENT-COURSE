// words vs keywords ✅
// chacha ------this is a word because the interpreter not know about the chacha it is not reserved in js .
// for ------this is a keyword & this is reserved in  js . 

// variables and Constants ✅
// code me koi bhi data store karne ke liye jiska use hota h use khte h variables.  
// constant are not change lakin variables change hote h . 

// const dulha = "Lab";
// const dulhan = "Labby";

// var const let ✅
// var and const are i told you above
// let is similar to var but let have 3 difference between let and var. 

// Hoisting ✅
// hoisting is that jese kisi variables and functions ko banaane se phle use kar sakte h .
// variables and functions are hoisted which means their declaration is moved on the top of the code. 

// jese 🔽🔽🔽 
// console.log(a);
// var a = 12;

// undefined or not-defined me farak h 
// the thing exist but we dont know about that thing is called undefined or h 
// the thing not exists are not defined . thats it

// types in js ✅
// primitive or reference

//primitives = number, string, null, undefined,boolean
//aise koi bhi value jiska copy karne par real copy ho jai wo primitive value hoti h
//for example var a = 12;

//references = {}, [], ()
//aise koi bhi value jisko copy krne per real copy nhi hota balki us main value ka reference pass ho jata h use hum reference value khete h 
// for example var b = [1,2,3,4,5];

// conditionals in js ✅
// conditionals are - if , else , else-if 
// jab bhi baat agar magar pe ayegi , ya fir baat aaygi aisa hua to ye kro wesa ho jai to wo karo means conditions lag jai 
// there are two conditions in conditionals are - true , false  but jaruri nhi ki hum direct true or false likhe koi condition bhi ho sakti h jo true ho ya false ho . thats it
// example - 
// if (true){};
// if (false){};
// or 
// if (12>10){}; it is a condition and its true 
// if (1>5){}; it is a condition and its false 

// if wala code jab nhi chalta tab else chalta h mean that when if is false the else work 
// example of else-if -
// if(11>12){

// }
// else if(12>13){

// }
// else if(13>14){

// }
// else{

// }
// loops in js ✅
// there are 2 types of loop
// for loop
// while loop
// loop ka matlab hota h repeat 
// example - 
// for(start;end;change);
// 0 - 10                 hame zero se ten tak print kana h to loop 11 war chalta h 

// for(var i = 0; i<11; i++){
//     console.log(i);
// }

// ques - 25 to 50 tak print karna h 

// for(var i = 25; i<51; i++){
//     console.log(i);
// }

// ab aate h while loop ke taraf while loop ki kahani bilkul simple h conditions true ho ya false ho . thats it 

// jese ki -
// var a = 5;
// while (a<22){
//     a++;
//     console.log(a)
// }
// functions in js ✅
//functions mainly three kam ke hote h
// fuctions ka matlab jab aap kucch code ko likh kar koi naam de sakte ho or baad me usey use kar sakte ho with that name as many times.
//  phla kaam jab aapka code aap turant nhi chalana chahate ho future me chalana chahate ho 
// dusra kaam jab aapka code aap reuse karna chahate ho  
// teesra jab aapka code aap chalana chahete ho har baar with different data 
// fuction abcd (){
//     //function statement khte h ise 
// }
// function hellobolo(){
//     console.log("hello");
// }
// hellobolo();
//arguments and parameters ✅
//               ⬇️⬇️⬇️ bacittes ke andar variables likhe the use hum parammeter khte h 
// function abcd (a,b,c){
// console.log(a,b,c);
// }
// abcd(12,13 , 14) jo bracittes ke andar likha h use hum argument khete h . 
// arguments = real value jo hum dete h function chalaate waqt. 
//parameters = variables jinme value store hoti hai argument waali.

// arrays ✅
// arrays = hum ik variable me ik value store kar paate hai par jab hame ik se jada value store karni ho tab hum fir arrays ka use karte h . matlab array hume ik se jada value use karne ki freedom deta h .
// array = group of values.

// var arr = [1,2,3,4,5,6,7,8,9,10];
// console.log(arr[0]);

//                  push pop shift or unsift splice ✅
//var arr = [1,2,3,4,5,6];
// console.log(arr.push(7)); // add extra member from array.
// console.log(arr.pop()); // remove any member from array.
// arr.unshift(0)
// arr.shift()
// arr.splice(2,1);

// object ✅
// ek se jada bande ki baat ki to hua array, ek bande ke baare me saari baat ki to hua object.
// object hai ik bande ki details ko hold karna, in a key value pair.
// 1) blank object 
//var a = {}; curly bracittes ke andar agar kuch nhi likha ho to wo blank object khelata hai.
//2) filled object
// var a = {
//     1,2,3,4,5,34,4,5,65,6,35,345,2,76,45352,45245,24565,908
// }
//          //        or 
// var b = {
//     name: "aman",
//     age: 20,
//     email : "amanpal5035286@gmail.com",
//     linkedIn : "Amanpal",
// }
// properties and methods ✅
// var ghadi = {
//     brand : "Kenneth Cole", //here brand is a property
//     price : "16K",  //here price is a property
//     color : "silver", //here color is a property
//     type : "Autometic", //here type is a property
//     digital : false , //here digital is a property
//     kuchbolo : function (){} // here kuchbolo is method . object ke andar ase property jiski value function ho use hum method bolte hai.
// }
// updating obj properties ✅
// var ghadi = {
//     brand : "Kenneth Cole",
//     price : "16K",
//     color : "silver",
//     type : "Autometic",
//     digital : false ,
//     kuchbolo : function (){}
// }
// ghadi.brand = "Titan Kenneth Cole"