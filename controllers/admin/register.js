"use strict"
const connection = require('../../database/db');
const bcryptjs = require('bcryptjs');

exports.view = (req, res) => {
	const message = req.params.message.replace(/_/g,' ').replace('&&','');

	res.render ('admin_register', { message: message });
}

exports.new = async (req, res) => {
	
	const user = req.body.user.toLowerCase();
	const password = req.body.password;
	const code = req.body.code;

	let passwordHaash = await bcryptjs.hash(password, 8);

	if(code == 2525) {
		if (user && password){
			connection.query('INSERT INTO login_admin SET ?', { user: user, password: passwordHaash}, async(error, results)=>{
			 	if(error){
			 		console.log(error);
			 		res.redirect('/page_error');
			 	}
			 	else
			 	{
			 		res.redirect('/admin');
			 	}
			})
		}
		else {
			res.redirect('/admin/register/Ingrese_los_datos_correspondientes');
		}
	}
	else {
		res.redirect('/admin/register/Código_ingresado_invalido')
	}		
}