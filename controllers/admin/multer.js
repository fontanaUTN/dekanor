const multer = require('multer');

function uploadImageNoticia() {
	const storage = multer.diskStorage({
		destination: './uploads/noticias/images',
		filename: function (req, file, cb) {
			let extension = file.originalname.slice(file.originalname.lastIndexOf('.'));
			cb(null, Date.now() + extension);
		}
	})

	const upload = multer({storage: storage}).array('image');

	return upload;
}

module.exports = uploadImageNoticia;