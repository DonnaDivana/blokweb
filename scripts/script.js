// JavaScript Document


var hamburgerIcoon = document.querySelector('header nav button');

var dragonTurn = document.querySelector('section:nth-of-type(2) img')



hamburgerIcoon.addEventListener("click", navUitklappen);

if(dragonTurn) {
    dragonTurn.addEventListener("click", draaien);
}



function navUitklappen() {
   document.body.classList.toggle("uitgeklapt");
}

function draaien() {
    dragonTurn.classList.toggle("draaien"); 
}

