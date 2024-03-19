// DOM Learn what matters ✅
// What is DOM ? ✅
// DOM => Document Object Model. isko khte h frunt end ki javascript.

// 4 Pillars of DOM ✅ 
// 1.Selection of an element ----
// example - 
// var a = document.querySelector("main section h1");
// console.log(a);

// document.getElementById("box")
// document.getElementsByClassName("box")

// 2. changing html   ----
// var a = document.querySelector("main section h1");
// a.innerHTML = "Changed My HTML In JS."
// var a = document.querySelector("h1")
//       // a.innerHTML = "bye"
// a.textContent = "bye"
// var box = document.querySelector("#box")
// box.innerHTML = "<h1>Hello</h1>"
// var box = document.querySelector("#box")
// box.textContent = "<h1>Hello</h1>"
// 3. changing css   ----
// var a = document.querySelector("main section h1");
// a.style.color = "red";
// a.style.backgroundColor = "black";

// 4. event listener ----
// var a = document.querySelector("main section h1");
// a.addEventListener("click",function(){
//     console.log("hay")
// })
// var a = document.querySelector("main section h1");
// a.addEventListener("click",function(){
//     a.innerHTML = "badhal gya hu teri ex ki tarhe"
//     a.style.color = "red";
//     a.style.backgroundColor ="#000"
// })

// Simple example of bulb or whatever clicking on the same button ✅
// var a = document.querySelector("#bulb");
// var btn = document.querySelector("button");

// var flag = 0;

// btn.addEventListener("click",function(){
//     if (flag == 0){
//     a.style.backgroundColor = "Yellow"
//     console.log("clicked")
//     flag = 1
//     }
//     else{
//         a.style.backgroundColor = "transparent"
//         console.log("Clicked Again")
//         flag = 0
//     }
// })

// Multiple events ✅
// Selecting Multiple Elements at a same time ✅
// var h = document.querySelectorAll("h1");
// console.log(h)
// h.forEach(function(e){
//     console.log(e)
// })


// these are in async js folder check these inside level 2 folder.

// setTimeout ✅
// setInterval ✅
// future projects ✅

