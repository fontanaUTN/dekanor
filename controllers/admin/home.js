"use strict"

exports.view = (req, res) => {
	if (req.session.loggedim) {
		res.render('admin_home')
	}
	else {
		res.redirect('/admin')
	}
}