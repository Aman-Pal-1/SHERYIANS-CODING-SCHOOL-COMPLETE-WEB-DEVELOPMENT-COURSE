// show real products
var products = [
    { image: "white chair", headline: "Royal Chair-Soft like Cloud", price: "18,000", image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { image: "pink chair", headline: "light Weight Chair-Comfortable", price: "8,000", image: "https://images.unsplash.com/photo-1518051870910-a46e30d9db16?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { image: "wooden chair", headline: "Wooden Chair-Sagon wood chair", price: "20,000", image: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }
];

var popular = [
    { image: "Ethical Wool Chair", headline: "Soft like Feathers", price: "15,000", image: "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { image: "Sofa Chair", headline: "Old Royal Design Chair-Comfortable", price: "19,000", image: "https://images.unsplash.com/photo-1601392740426-907c7b028119?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { image: "Indoor chair", headline: "Indoor Chair", price: "12,000", image: "https://images.unsplash.com/photo-1589584649628-b597067e07a3?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }
];
var cart = [];

function addProduct(){
    var clutter = "";
    products.forEach(function(product){
        clutter += `<div class="product w-fit rounded-xl p-2 bg-white">
    <div class="image w-[14rem] h-[13rem] bg-zinc-200 rounded-xl">
    <img class = "w-full h-full object-cover src = "${product.image}"/>
    </div>
    <div class="data w-full px-2 py-5">
        <h1 class="font-semibold text-xl leading-none tracking-tight">${product.name}.</h1>
        <div class="flex justify-between w-full items-center mt-2">
            <div class="w-1/2">
                <h3 class="font-semibold opacity-20">${product.headline}</h3>
                <h4 class="font-semibold mt-2">&#8377; ${product.price}</h4>
            </div>
            <button class="w-10 h-10 rounded-full shader text-yellow-400"><i
                    class="ri-add-line"></i></button>
        </div>
    </div>
</div>`;
    })
    document.querySelector(".products").innerHTML = clutter;
}

function addPopularProducts(){
    var clutter = "";
    popular.forEach(function(product){
        clutter += `                <div class="popular bg-white p-2 rounded-2xl flex items-start gap-3 w-[60%] flex-shrink-0">
        <div class="w-20 h-20 flex-shrink-0 rounded-2xl border-4 border-white overflow-hidden">
            <img class="w-full h-full object-cover"
                src="${product.image}"
                alt="Popular Product Images">
        </div>
        <div class="data py-2 w-full">
            <h1 class="leading-none font-semibold">${product.name}</h1>
            <h4 class="leading-none mt-2 text-sm font-semibold opacity-20">${product.headline}</h4>
            <h4 class="mt-3 font-semibold text-zinc-500">&#8377; ${product.price}</h4>
        </div>
    </div>`;
    })
    document.querySelector(".populars").innerHTML = clutter;
}

function addToCart(){
    
}
addPopularProducts();
addProduct();


// show real populat products





// on click of product add button add it to the cart





