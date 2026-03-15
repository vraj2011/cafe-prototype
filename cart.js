let cart=[]

let menu=[

{name:"Cappuccino",price:120,category:"coffee",img:"https://images.unsplash.com/photo-1509042239860-f550ce710b93"},

{name:"Latte",price:140,category:"coffee",img:"https://images.unsplash.com/photo-1498804103079-a6351b050096"},

{name:"Cake",price:180,category:"dessert",img:"https://images.unsplash.com/photo-1551024601-bec78aea704b"}

]

function loadMenu(){

let list=document.getElementById("menu-list")

if(!list) return

list.innerHTML=""

menu.forEach((item,i)=>{

let div=document.createElement("div")

div.innerHTML=`

<img src="${item.img}" width="150">

<h3>${item.name}</h3>

<p>₹${item.price}</p>

<button onclick="addCart(${i})">Add</button>

`

list.appendChild(div)

})

}

function addCart(i){

cart.push(menu[i])

localStorage.setItem("cart",JSON.stringify(cart))

alert("Added to cart")

}

function sendWhatsApp(){

let cart=JSON.parse(localStorage.getItem("cart"))||[]

let text="Cafe Order:%0A"

let total=0

cart.forEach(item=>{

text+=`${item.name} ₹${item.price}%0A`

total+=item.price

})

text+=`Total ₹${total}`

window.open("https://wa.me/919999999999?text="+text)

}

loadMenu()