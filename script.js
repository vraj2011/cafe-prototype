let cart = [];

let menu = [

    { name: "Cappuccino", price: 120, category: "coffee", img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93" },

    { name: "Sandwich", price: 160, category: "snacks", img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d" },

    { name: "Cake", price: 180, category: "dessert", img: "https://images.unsplash.com/photo-1551024601-bec78aea704b" }

];

function filterMenu() {

    let list = document.getElementById("menu-list");

    if (!list) return;

    list.innerHTML = "";

    menu.forEach((item, i) => {

        let div = document.createElement("div");

        div.className = "item";

        div.innerHTML = `

<img src="${item.img}">
<h3>${item.name}</h3>
<p>₹${item.price}</p>

<button onclick="addCart(${i})">Add</button>

`;

        list.appendChild(div);

    });

}

filterMenu();

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
