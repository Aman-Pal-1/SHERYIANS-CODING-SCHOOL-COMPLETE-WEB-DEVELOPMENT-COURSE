// DOM manipulation - html ke kise bhi element ko select karke change kar pana .
// Change karne ke pure process me - there are few thing jo lagenge.
// Selection
var home = document.querySelector('#home');
// CSS change 
// home.style.color = 'red';

// home.style.fontFamily = "arial";

// HTML change 
// home.innerHTML = "<i>hay kese ho</i>";

// text change 
// home.textContent = "<i>hey kse ho aap log</i>";

// adding listener
home.addEventListener('mouseenter',function(){
    home.style.color = "red";
})
home.addEventListener('mouseleave',function(){
    home.style.color = "black";
})