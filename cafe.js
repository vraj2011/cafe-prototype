let menu = JSON.parse(localStorage.getItem("menu")) || [
    { name: "Cappuccino", price: 120, img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93" },
    { name: "Latte", price: 140, img: "https://images.unsplash.com/photo-1498804103079-a6351b050096" }
];

let cart = [];
let reviews = JSON.parse(localStorage.getItem("reviews")) || [];

function showMenu() {

    let list = document.getElementById("menu-list");
    list.innerHTML = "";

    menu.forEach((item, i) => {

        let div = document.createElement("div");
        div.className = "item";

        div.innerHTML = `
<img src="${item.img}">
<h3>${item.name}</h3>
<p>₹${item.price}</p>
<button onclick="addCart(${i})">Add to Cart</button>
`;

        list.appendChild(div);

    });

}

function addCart(i) {

    cart.push(menu[i]);

    showCart();

}

function showCart() {

    let list = document.getElementById("cart-list");
    list.innerHTML = "";

    let total = 0;

    cart.forEach(c => {
        total += c.price;

        let p = document.createElement("p");
        p.innerText = c.name + " ₹" + c.price;
        list.appendChild(p);

    });

    document.getElementById("total").innerText = "Total ₹" + total;

    let text = cart.map(c => c.name).join(", ");

    document.getElementById("whatsapp").href =
        "https://wa.me/919876543210?text=Order:" + text;

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

    showMenu();

}

function showReviews() {

    let list = document.getElementById("review-list");
    list.innerHTML = "";

    reviews.forEach(r => {

        let div = document.createElement("div");
        div.className = "review";

        div.innerHTML =
            "<b>" + r.name + "</b> ⭐" + r.rating +
            "<p>" + r.text + "</p>";

        list.appendChild(div);

    });

}

function addReview() {

    let name = document.getElementById("name").value;
    let text = document.getElementById("review").value;
    let rating = document.getElementById("rating").value;

    reviews.push({ name, text, rating });

    localStorage.setItem("reviews", JSON.stringify(reviews));

    showReviews();

}

showMenu();
showReviews();