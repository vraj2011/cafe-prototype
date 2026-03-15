let password = "1234"

function unlock() {

    let pass = document.getElementById("admin-pass").value

    if (pass === password) {

        document.getElementById("admin-panel").style.display = "block"

    } else {

        alert("Wrong password")

    }

}