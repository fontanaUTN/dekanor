"use strict"

const productTitle = document.querySelector('.product__title');
const productContent = document.querySelector('.product__content');
const productContainer = document.querySelector('.product');

const herbicidas = [
	"Adengo",
	"Flumy",
	"Guardian",
	"Harness",
	"Laudis",
	"Equip",
	"Percutor",
	"Brodal",
	"Latium Super",
	"Sencorex Duo Super",
	"Prodigio",
	"Finish",
	"Sulfentrazone",
	"Cletodim 24%",
	"Clomazone",
	"Finesse",
	"Nicosulfuron",
	"S-Metolaclor",
	"Carfentrazone",
	"Terbyne",
	"2,4-D Etil Hexil",
	"Atrazina",
	"Dicamba",
	"Fomesafen",
	"Glufosinato de Amonio",
	"Haloxifop",
	"Metsulfuron",
	"Paracuat",
	"Picloram",
	"Diclosulam"
]

const insecticidas = [
	"Belt",
	"Solomon",
	"Alsystin",
	"Clap",
	"Larvin",
	"Desis Forte",
	"Desis Flow",
	"Movento Plus",
	"Bifentrin",
	"Lambdacialotrina",
	"Deltametrina ",
	"Zetametrina",
	"Gammacialotrina",
	"Dinotefuran",
	"Mercaptotion"
]

const fungicidas = [
	"Cripton Xpro",
	"Cripton",
	"Sphere Max"
]

const coadyuvantes = [
	"Optimizer",
	"Metil Degser Olio",
	"Degser olio",
	"Eco Degser Wet",
	"Sulfadeg Full",
	"Rizo Spray Extremo",
	"Rizo Spray Integrum",
	"Silwet L Ag",
	"Rizo Spray Corrector",
	"Eco Rizo Spray",
	"Celerity Xtremo"
]

const maiz = [
	"Regent ET",
	"Create pack fast",
	"Create pack",
	"Cropstar"
]

const showProducts = (title, products) => {
	productTitle.textContent = `${title}`;

	closeProducts();

	products.forEach((product) => {
		let productHtml = document.createElement('p');
		productHtml.classList.add('product__text');
		productHtml.textContent = product;

		productContent.append(productHtml);
	})

	productContainer.style.visibility = 'visible';
}

const closeProducts = () => {
	productContainer.style.visibility = 'hidden';
	productContent.innerHTML = '';
}