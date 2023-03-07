let modal = document.getElementById("modal-casino-games");
let span = document.getElementsByClassName("modal__close")[0];
let banner = document.getElementsByClassName("trigger2")[0];
let trigger2 = document.querySelectorAll(".modal-trigger2");

function openModal(){
    modal.style.display = "block";
}
function closeModal(){
    modal.style.display = "none";
}
if (banner) {
    banner.addEventListener('click', openModal);
}

for(let element of trigger2){
    element.addEventListener('click', openModal);
}
span.addEventListener('click', closeModal);