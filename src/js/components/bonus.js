let modalBonus = document.getElementById("bonus");
let btn = document.getElementById("targetbonus");
let span = document.getElementsByClassName("bonus__close")[0];

const openModal =() =>{
    modalBonus.style.display = "block";
}
function closeModal(){
    modalBonus.style.display = "none";
}
btn.addEventListener('click', openModal);
span.addEventListener('click', closeModal);