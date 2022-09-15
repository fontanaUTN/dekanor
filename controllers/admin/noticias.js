"use strict"
const connection = require('../../database/db');
const bcryptjs = require('bcryptjs');
const fs = require('fs')

exports.view = (req, res) => {
	if (req.session.loggedim) {
		req.session.loggedim = true;

		connection.query('SELECT * FROM noticias', (error, results)=> {
			if(error){
				console.log(error);
				res.render('page_error');
			}
			else{



				res.render('noticias', {
					login: true,
					results
				});	
			}
		})
	}
	else {
		connection.query('SELECT * FROM noticias', (error, results)=> {
			if(error){
				console.log(error);
				res.render('page_error');
			}
			else{

				console.log(results.length)
				console.log(4234234)

				res.render('noticias', {
					login: false,
					results
				});	
			}
		})
	}
}

exports.each = async (req, res) => {

	const id = req.params.data.split('&&')[1];
	
	console.log(id);

	if (req.session.loggedim) {
		req.session.loggedim = true;

		connection.query('SELECT * FROM noticias WHERE id=?', [id], (error, results)=> {
			if(error){
				console.log(error);
				res.render('page_error');
			}
			else{
				res.render('article', {
					login: true,
					results
				});	
			}
		})
	}
	else {
		connection.query('SELECT * FROM noticias WHERE id=?', [id], (error, results)=> {
			if(error){
				console.log(error);
				res.render('page_error');
			}
			else{
				res.render('article', {
					login: false,
					results
				});	
			}
		})
	}		
}