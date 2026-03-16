let cart = JSON.parse(localStorage.getItem("cart")) || []

const cartDiv = document.getElementById("cartItems")

let total = 0

cart.forEach((item, index) => {

    cartDiv.innerHTML += `

<p>

${item.name} x ${item.qty}
₹${item.price * item.qty}

<button onclick="removeItem(${index})">Remove</button>

</p>

`

    total += item.price * item.qty

})

document.getElementById("total").innerText = "Total: ₹" + total


function removeItem(index) {

    cart.splice(index, 1)

    localStorage.setItem("cart", JSON.stringify(cart))

    location.reload()

}


function buyNow() {

    let message = "Hello, I want to order:%0A"

    cart.forEach(item => {

        message += `${item.name} x ${item.qty} - ₹${item.price * item.qty}%0A`

    })

    message += "Total: ₹" + total

    window.open(`https://wa.me/9429602970?text=${message}`)

}