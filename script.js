let menu = JSON.parse(localStorage.getItem("menu")) || [
    { name: "Cappuccino", price: 120, img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93" },
    { name: "Latte", price: 140, img: "https://images.unsplash.com/photo-1498804103079-a6351b050096" },
    { name: "Cold Coffee", price: 160, img: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735" }
];

let cart = JSON.parse(localStorage.getItem("cart")) || [];

let reviews = JSON.parse(localStorage.getItem("reviews")) || [];

let qty = {};

function showMenu() {

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

<div class="qty">
<button onclick="decrease(${i})">−</button>
<span id="qty-${i}">0</span>
<button onclick="increase(${i})">+</button>
</div>
`;

        list.appendChild(div);

    });

}

function increase(i) {

    qty[i] = (qty[i] || 0) + 1;

    document.getElementById("qty-" + i).innerText = qty[i];

    updateCart();

}

function decrease(i) {

    if (!qty[i]) return;

    qty[i]--;

    document.getElementById("qty-" + i).innerText = qty[i];

    updateCart();

}

function updateCart() {

    cart = [];

    menu.forEach((item, i) => {

        if (qty[i]) {

            cart.push({ ...item, quantity: qty[i] });

        }

    });

    localStorage.setItem("cart", JSON.stringify(cart));

}

function showCart() {

    let list = document.getElementById("cart-list");

    if (!list) return;

    list.innerHTML = "";

    let total = 0;

    let orderText = "";

    cart.forEach(item => {

        let price = item.price * item.quantity;

        total += price;

        let p = document.createElement("p");

        p.innerText = item.name + " x" + item.quantity + " = ₹" + price;

        list.appendChild(p);

        orderText += item.name + " x" + item.quantity + ", ";

    });

    let totalText = document.getElementById("total");

    if (totalText) totalText.innerText = "Total ₹" + total;

    let whatsapp = document.getElementById("whatsapp");

    if (whatsapp)

        whatsapp.href = "https://wa.me/919876543210?text=Order: " + orderText;

}

function addReview() {

    let name = document.getElementById("name").value;

    let text = document.getElementById("review").value;

    let rating = document.getElementById("rating").value;

    reviews.push({ name, text, rating });

    localStorage.setItem("reviews", JSON.stringify(reviews));

    showReviews();

}

function showReviews() {

    let list = document.getElementById("review-list");

    if (!list) return;

    list.innerHTML = "";

    reviews.forEach(r => {

        let div = document.createElement("div");

        div.className = "review";

        div.innerHTML = "<b>" + r.name + "</b><br>" + "⭐".repeat(r.rating) + "<p>" + r.text + "</p>";

        list.appendChild(div);

    });

}

function addMenu() {

    let pass = document.getElementById("admin-pass").value;

    if (pass != "1234") {

        alert("Wrong password");

        return;

    }

    let name = document.getElementById("food-name").value;

    let price = document.getElementById("food-price").value;

    let img = document.getElementById("food-img").value;

    menu.push({ name, price, img });

    localStorage.setItem("menu", JSON.stringify(menu));

    alert("Menu item added");

}

showMenu();

showCart();

showReviews();