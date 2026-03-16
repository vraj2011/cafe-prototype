const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show")

        }

    })

})

document.querySelectorAll(".hidden")
    .forEach(el => observer.observe(el))


window.addEventListener("load", () => {

    document.getElementById("loader").style.display = "none"
    let reviews = JSON.parse(localStorage.getItem("reviews")) || []

    function displayReviews() {

        let list = document.getElementById("reviewList")

        if (!list) return

        list.innerHTML = ""

        reviews.forEach(r => {

            list.innerHTML += `

<div class="review">

<p>${r.text}</p>

<h4>- ${r.name}</h4>

</div>

`

        })

    }

    function addReview() {

        let name = document.getElementById("reviewName").value
        let text = document.getElementById("reviewText").value

        reviews.push({ name, text })

        localStorage.setItem("reviews", JSON.stringify(reviews))

        displayReviews()

    }

    displayReviews()
})