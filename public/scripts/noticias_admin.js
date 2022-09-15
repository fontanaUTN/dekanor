"use strict"

const lblFile = document.querySelector('.form__lbl-img');
const inputFile = document.getElementById('image');

inputFile.addEventListener('change', () => {
	lblFile.innerText = 'IMAGEN AGREGADA';
	lblFile.style.background = 'var(--color-secundary)';
});

const inputDate = document.getElementById('date');

const date = new Date();
let year = date.getFullYear();
let month = date.getMonth() + 1;
month = (month < 10 ? "0" : "") + month;
let day  = date.getDate();
day = (day < 10 ? "0" : "") + day;

inputDate.value = `${year}-${month}-${day}`;