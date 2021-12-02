// JavaScript Document

var mobielNav = document.querySelector('nav'); 
var hamburgerIcoon = document.querySelector('header div');

var dragonTurn = document.querySelector('section:nth-of-type(2) img')


function navUitklappen() {
    mobielNav.classList.toggle("uitgeklapt");
}

function draaien() {
    dragonTurn.classList.toggle("draaien"); 
}



hamburgerIcoon.addEventListener('click', navUitklappen);
dragonTurn.addEventListener("click", draaien);

