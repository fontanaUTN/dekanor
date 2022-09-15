"use strict"

const noticiaContent = document.querySelectorAll('.noticia-content');

noticiaContent.forEach((noticia) => {
	let textContent = noticia.textContent;
	noticia.innerHTML = textContent;
})