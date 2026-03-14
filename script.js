let cart = [];

// ADD ITEM TO CART
function addCart(i){

let item = menu[i];

// check if item already exists
let existing = cart.find(c => c.name === item.name);

if(existing){
existing.qty += 1;
}else{
cart.push({
name: item.name,
price: item.price,
qty: 1
});
}

showCart();

}
function showCart(){

let container = document.getElementById("cart-items");

if(!container) return;

container.innerHTML = "";

let total = 0;

cart.forEach(item => {

let itemTotal = item.price * item.qty;

total += itemTotal;

let div = document.createElement("div");

div.innerHTML = `
${item.qty} ${item.name} - ₹${item.price} = ₹${itemTotal}
`;

container.appendChild(div);

});

let bill = document.createElement("h3");
bill.innerText = "Total: ₹" + total;

container.appendChild(bill);

}
function filterMenu(){

let search = document.getElementById("search").value.toLowerCase();
let category = document.getElementById("category").value;

let list = document.getElementById("menu-list");

if(!list) return;

list.innerHTML="";

menu.forEach((item,i)=>{

if(
item.name.toLowerCase().includes(search) &&
(category=="all" || item.category==category)
){

let div=document.createElement("div");

div.className="item";

div.innerHTML=`
<img src="${item.img}">
<h3>${item.name}</h3>
<p>₹${item.price}</p>

<button onclick="addCart(${i})">Add</button>
`;

list.appendChild(div);

}

});

}
function addMenuItem() {

    let pass = document.getElementById("admin-pass").value;

    if (pass != "1234") {
        alert("Wrong password");
        return;
    }

    let name = document.getElementById("food-name").value;
    let price = document.getElementById("food-price").value;
    let category = document.getElementById("food-category").value;
    let img = document.getElementById("food-img").value;

  let menu = JSON.parse(localStorage.getItem("menu")) || [
{name:"Cappuccino",price:120,category:"coffee",img:"https://images.unsplash.com/photo-1509042239860-f550ce710b93"},
{name:"Sandwich",price:160,category:"snacks",img:"https://images.unsplash.com/photo-1551782450-a2132b4ba21d"},
{name:"Cake",price:180,category:"dessert",img:"https://images.unsplash.com/photo-1551024601-bec78aea704b"}
];  

function addCart(i) {

    cart.push(menu[i]);

    alert("Added to cart");

}

function sendWhatsApp(){

let phone = "9429602980"; // cafe whatsapp number

let text = "Hello, I want to order:%0A%0A";

let total = 0;

cart.forEach(item => {

let itemTotal = item.price * item.qty;

total += itemTotal;

text += item.qty + " " + item.name + " - ₹" + itemTotal + "%0A";

});

text += "%0ATotal: ₹" + total;

let url = "https://wa.me/" + phone + "?text=" + text;

window.open(url);

}
filterMenu();
