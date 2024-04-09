// // DOM manipulation - html ke kise bhi element ko select karke change kar pana .
// // Change karne ke pure process me - there are few thing jo lagenge.
// // Selection
// var home = document.querySelector('#home');
// // CSS change 
// // home.style.color = 'red';

// // home.style.fontFamily = "arial";
// // HTML change 
// // home.innerHTML = "<i>hay kese ho</i>";

// // text change 
// // home.textContent = "<i>hey kse ho aap log</i>";

// // adding listener
// home.addEventListener('mouseenter',function(){
//     home.style.color = "red";
// })
// home.addEventListener('mouseleave',function(){
//     home.style.color = "black";
// })


var arr = [
    {name:"roses",image:"https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?q=80&w=1893&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name:"tiger",image:"https://images.unsplash.com/photo-1605092676920-8ac5ae40c7c8?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name:"Crowd",image:"https://images.unsplash.com/photo-1541799026-89a982d6ecc7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name:"fruit",image:"https://images.unsplash.com/photo-1560761098-21f5722ecb14?q=80&w=1923&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name:"peeled orange",image:"https://plus.unsplash.com/premium_photo-1693266286749-420cfcea5f96?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name:"web design",image:"https://images.unsplash.com/photo-1609921212029-bb5a28e60960?q=80&w=2052&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
]

function showTheCards(){
    var clutter = "";
    arr.forEach(function(obj){
        clutter += `<div class="box">
        <img class="cursor-pointer" src="${obj.image}" alt="image">
        <div class="caption">Lorem ipsum </div>
    </div>`;
    })

    document.querySelector(".container")
    .innerHTML = clutter;
}
showTheCards(); 

