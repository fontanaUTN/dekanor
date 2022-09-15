"use strict"
const nodemailer = require('nodemailer');

exports.contactSend = async (req, res)=> {
	try {
		const name = req.body.name;
		const email = req.body.email;
		const phone = req.body.phone;
		let message = req.body.message;

		if(message == '') { message = 'No hay mensaje'; }

		if( message.toLowerCase().includes('porn') || message.toLowerCase().includes('tube') || message.toLowerCase().includes('videos') || message.toLowerCase().includes('seo') || message.toLowerCase().includes('http') || message.toLowerCase().includes('free')) {
			res.redirect('/contacto');
		}
		else if (name == "" && email == "" && phone == ""){
			res.redirect('/contacto_none');
		}
		else {

			let transporter = nodemailer.createTransport({
			host: process.env.DB_HOST_MAIL,
			port: 465,
			secure: true, 
			auth: {
					user: process.env.DB_EMAIL,
					pass: process.env.DB_PASS, 
				},
			});

			await transporter.sendMail({
	    		from: `"WEB DEKANOR" <${process.env.DB_EMAIL}>`,
	    		to: 'fontana.utn@gmail.com',
	    		subject: `${name} - Dekanor - Contacto`, 
	    		html: `
		    	<div style="border: 5px solid #ad8866; padding: 5px; margin: 5px;">
					<span style="padding: 20px; background: #ad8866; display: flex; aling-items: center; justify-content: center; flex-wrap: wrap;">
						<img style="width: 40%;" src="http://drive.google.com/uc?export=view&id=1LVUXc2fAOpAzvJIe41qqy_WBiFgMkBih">
					</span>
					<span style="width: calc(100% - 44px); border: 2px solid #ad8866; display: block; background: #ffffff; padding: 0 20px 20px 20px;">
						<h2 style="color: #1f1e1f; font-size: 2.25em; margin: 10px 0 0 0;"><b>NUEVO CONTACTO</b></h2>
						<p style="color: #1f1e1f; margin-block-end: 5px;"><b>Nombre:</b> ${name}</p>
						<p style="color: #1f1e1f; margin-block-end: 5px;"><b>Email:</b> ${email}</p>
						<p style="color: #1f1e1f; margin-block-end: 5px;"><b>Teléfono:</b> ${phone}</p>
						<p style="color: #1f1e1f; margin-block-end: 5px;"><b>Mensaje:</b>${message}</p>
					</span>
					<span style="width: calc(100% - 20px); display: flex;  justify-content: flex-end;  background: #ad8866; padding: 10px;">
						<a style="margin-left: auto; color: #1f1e1f;" href="https://dekanor.com">www.dekanor.com</a>
					</span>
				</div>
		    	`, 
			});
		
			res.redirect('/contacto');
		}
	}
	catch(error) {
		res.redirect('/error_page');
	}
}