// Slider
const slider = document.querySelector("#slider");
let sliderSection = document.querySelectorAll(".slider__section");
let sliderSectionLast = sliderSection[sliderSection.length - 1];

slider.insertAdjacentElement('afterbegin', sliderSectionLast);

function Next() {
	let sliderSectionFirst = document.querySelectorAll(".slider__section")[0];
	slider.style.marginLeft = "-200%";
	slider.style.transition = "all 0.5s";
	setTimeout( function(){
		slider.style.transition = "none";
		slider.insertAdjacentElement('beforeend', sliderSectionFirst);
		slider.style.marginLeft = "-100%";
	}, 500);
}

setInterval(function(){
	Next();
}, 5000);

// Years
let sectionYear = document.querySelector(".years");
const numberHa = document.getElementById('ha');
const numberYears = document.getElementById('years');

let contYears = 0;
let contHa = 0;

function showText () {

	let scrollTop = window.innerHeight;
	let topNumber = sectionYear.getBoundingClientRect().top;

	if(topNumber <= scrollTop / 1.3 ){

		if (contYears == 0 && contHa == 0) {
	    
			let countHa = setInterval(() => {
				contHa += 1;

				numberHa.textContent = `+${contHa}K`;

				if (contHa >= 99) {
					clearInterval(countHa);
				}
			}, 2000 / 100);

			let countYears = setInterval(() => {
				contYears += 1;

				numberYears.textContent = `+${contYears}`;
	    
				if (contYears >= 9) {
					clearInterval(countYears);
				}
			}, 2000 / 10);
		}
	}
	else {
		contYears = 0;
		contHa = 0;
	}
}

window.addEventListener('scroll', showText);

// Images
const images = document.querySelectorAll('.gallery__images');
let imagesNow = [1, 2, 3, 4, 5, 6];

const imageEdit = () => {
	let arrPoss = Math.floor(Math.random() * (6 - 0)) + 0;
	let NumberImg = Math.floor(Math.random() * (16 - 1)) + 1;

	if(imagesNow.includes(NumberImg)){
		imageEdit();
	}
	else {

		images[arrPoss].src = `/resources/images/home/gallery-${NumberImg}.jpg`;
		imagesNow[arrPoss] = NumberImg;
	}
}

setInterval(imageEdit, 2500);

// TEST
const API_SOJA_URL = "https://api.matbarofex.com.ar/v1/rest/indices/I.AGTKSOYA";
const API_MAIZ_URL = "https://api.matbarofex.com.ar/v1/rest/indices/I.AGTKCORA";
const API_TRIGO_URL = "https://api.matbarofex.com.ar/v1/rest/indices/I.AGTKWHEA";

const soja = document.getElementById('soja');
const maiz = document.getElementById('maiz');
const trigo = document.getElementById('trigo');

function ajax(url, method) {
	const request = new XMLHttpRequest();
	request.open(method, url, false);
	request.send({ 
		"action": "suscribe",
		"symbols": ["I.AGTKSOYA"]
	});
	return request.responseText;
}

const fede = ajax (
	"https://api.matbarofex.com.ar/v1/indices",
	"POST"
)

console.log(fede);

function ajaxProduct(url, method) {
	const request = new XMLHttpRequest();
	request.open(method, url, false);
	request.send(null);
	return request.responseText;
}

const fedeProduct = ajaxProduct (
	API_SOJA_URL,
	'GET'
)

console.log(fedeProduct);

// fetch(myRequest)
// .then(function(response) {
// 	return response.blob();
// })
// .then(function(myBlob) {
// 	console.log(myBlob)
// });


// fetch(myRequest)
// .then((response) => { console.log(response); response.json() })
// .then((data) => {
// 	soja.dataset.price = data.underlyingPx;
// });

// fetch(`${API_MAIZ_URL}`)
// .then((response) => response.json())
// .then((data) => {
// 	maiz.dataset.price = data.underlyingPx;
// });

// fetch(`${API_TRIGO_URL}`)
// .then((response) => response.json())
// .then((data) => {
// 	trigo.dataset.price = data.underlyingPx;
// });