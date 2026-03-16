const menuItems=[

{name:"Espresso",price:120,category:"coffee"},
{name:"Latte",price:200,category:"coffee"},
{name:"Cappuccino",price:180,category:"coffee"},
{name:"Cheesecake",price:260,category:"dessert"},
{name:"Brownie",price:200,category:"dessert"},
{name:"Pizza",price:420,category:"food"}

]

const grid=document.getElementById("menuGrid")

function displayMenu(items){

grid.innerHTML=""

items.forEach((item,index)=>{

grid.innerHTML+=`

<div class="menu-card">

<h3>${item.name}</h3>

<p>₹${item.price}</p>

<button onclick="addToCart(${index})">Add</button>

</div>

`

})

}

displayMenu(menuItems)

function filterMenu(category){

if(category==="all"){

displayMenu(menuItems)

}else{

displayMenu(menuItems.filter(i=>i.category===category))

}

}

function addToCart(index){

let cart=JSON.parse(localStorage.getItem("cart")) || []

let item=menuItems[index]

let existing=cart.find(c=>c.name===item.name)

if(existing){

existing.qty++

}else{

cart.push({...item,qty:1})

}
let menuItems = JSON.parse(localStorage.getItem("menu")) || []
localStorage.setItem("cart",JSON.stringify(cart))

alert("Added to cart")

}