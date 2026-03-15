window.addEventListener("load",function(){

setTimeout(function(){

document.getElementById("loader").style.display="none";

},2000);

});

function reserveTable(){

let name=document.getElementById("name").value

let date=document.getElementById("date").value

let guests=document.getElementById("guests").value

let text=`Reservation:%0AName:${name}%0ADate:${date}%0AGuests:${guests}`

window.open("https://wa.me/919999999999?text="+text)

}