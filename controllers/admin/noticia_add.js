"use strict"
const connection = require('../../database/db');

exports.view = (req, res) => {
	if (req.session.loggedim) {
		req.session.loggedim = true;
		res.render('admin_noticias_add');
	}
	else {
		res.redirect('/admin');
	}
}

exports.add = (req, res) => {
	if (req.session.loggedim) {

		req.session.loggedim = true;

		const date = req.body.date;
		const title = req.body.title.replace(/  /g, ' ');
		const content = req.body.content.replace(/\n/g, '<br>').replace(/  /g, ' ');
		const files = req.files;

		const image = files[0].filename;

		connection.query('INSERT INTO noticias SET ?', { date:date, title:title, content:content, image:image },
		(error, results) => {
			if(error){
				console.log(error);
				res.render('page__error');
			}
			else{
				res.redirect('/admin/noticias');
			}
		})
		

	}
	else {
		res.redirect('/admin');
	}
}