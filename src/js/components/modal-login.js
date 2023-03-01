let modal = document.getElementById("modal-login");
let btn = document.getElementById("btnlogin");
let span = document.getElementsByClassName("login__close")[0];
let banner = document.getElementsByClassName("trigger1")[0];

function openModal(){
    modal.style.display = "block";
}
function closeModal(){
    modal.style.display = "none";
}
if (banner) {
    banner.addEventListener('click', openModal);
}
btn.addEventListener('click', openModal);
span.addEventListener('click', closeModal);
