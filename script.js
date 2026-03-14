let cart = [];

let menu = JSON.parse(localStorage.getItem("menu")) || [

{name:"Cappuccino",price:120,category:"coffee",img:"https://images.unsplash.com/photo-1509042239860-f550ce710b93"},

{name:"Sandwich",price:160,category:"snacks",img:"https://images.unsplash.com/photo-1551782450-a2132b4ba21d"},

{name:"Chocolate Cake",price:180,category:"dessert",img:"https://images.unsplash.com/photo-1551024601-bec78aea704b"}

];

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

    let menu = JSON.parse(localStorage.getItem("menu")) || [];

    menu.push({
        name: name,
        price: price,
        category: category,
        img: img
    });

    localStorage.setItem("menu", JSON.stringify(menu));

    alert("Menu item added!");

}
function addCart(i) {

    cart.push(menu[i]);

    alert("Added to cart");

}

function sendWhatsApp() {

    let text = "Order:%0A";

    cart.forEach(item => {
        text += item.name + " ₹" + item.price + "%0A";
    });

    window.open("https://wa.me/?text=" + text);

}
filterMenu();
