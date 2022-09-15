"use strict"
const connection = require('../../database/db');
const bcryptjs = require('bcryptjs');
const fs = require('fs')

exports.view = (req, res) => {
	const message = req.params.message.replace(/_/g,' ');

	res.render('admin_login', { message:message});
}

exports.send = async (req, res)=> {
	
	const user = req.body.user.toLowerCase();
	const password = req.body.password;
	const code = req.body.code;

	let passwordHaash = await bcryptjs.hash(password, 8);

	if(code == 2525) {
		if (user && password){
			connection.query('SELECT * FROM login_admin WHERE user =?', [user], async (error, results)=>{
				if (Object.keys(results).length == 0 || !(await bcryptjs.compare(password, results[0].password))){
					res.redirect('/admin');
				}
				else {
					req.session.loggedim = true;
					res.redirect('/admin/home');
				}
			})
		}
		else {
			res.redirect('/admin/auth/Los_datos_ingresados_son_incorrectos');
		}
	}
	else {
		res.redirect('/admin/auth/Los_datos_ingresados_son_incorrectos')
	}		
}