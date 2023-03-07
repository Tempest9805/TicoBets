let modal = document.getElementById("modal-login");
let span = document.getElementsByClassName("login__close")[0];
let banner = document.getElementsByClassName("trigger1")[0];
let trigger = document.querySelectorAll(".modal-trigger");

function openModal(){
    modal.style.display = "block";
}
function closeModal(){
    modal.style.display = "none";
}
if (banner) {
    banner.addEventListener('click', openModal);
}

for(let element of trigger){
    element.addEventListener('click', openModal);
}
span.addEventListener('click', closeModal);
