"use strict"

// Responsive
const header = document.querySelector('.header');
const menuShowResponsive = document.getElementById('menu_show-resp');
const menuExitResponsive = document.getElementById('menu_exit-resp');
const headerOptionsResponsive = document.getElementById('header_options-resp');

menuShowResponsive.addEventListener('click', function() {
	headerOptionsResponsive.style.transform = 'translateX(0)';
	headerOptionsResponsive.style.opacity = '1';
	headerOptionsResponsive.style.display = 'flex'
	menuShowResponsive.style.display = 'none';
	menuExitResponsive.style.display = 'block';
	header.style.position = 'fixed';
})

menuExitResponsive.addEventListener('click', function() {
	headerOptionsResponsive.style.transform = 'translateX(500px)';
	headerOptionsResponsive.style.opacity = '0';
	headerOptionsResponsive.style.display = 'none'
	menuExitResponsive.style.display = 'none';
	menuShowResponsive.style.display = 'block';
	header.style.position = 'relative';
})

// New Header

const leftMenu = document.getElementById('menu-left');
const leftFlecha = document.getElementById('flecha-left');
const headerList = document.querySelector('.header__list');
const serviceList = document.querySelector('.header__service');

function showNav() {
	leftMenu.style.display = 'none';
	leftFlecha.style.display = 'block';
	setTimeout( function() {
		leftFlecha.style.transform = 'translateX(-50vw)';
		leftFlecha.style.visibility = 'hidden';
		headerList.style.transform = 'translateX(0)';	
	}, 100)
}

function hideNav() {
	leftFlecha.style.transform = 'translateX(0)';
	leftFlecha.style.visibility = 'visible';
	headerList.style.transform = 'translateX(102%)';
	leftMenu.style.display = 'block';
	leftFlecha.style.display = 'none';
	serviceList.style.visibility = 'hidden';
	serviceList.style.transform = 'translateY(-300px)';
}

let contadorHeader = 0;

// Script initial btn 
const callusnowfooter = document.querySelector('#footer-call');

if(window.innerWidth <= 800 || screen.width <= 800){
	callusnowfooter.href = 'tel:+1 305-477-2679';
}