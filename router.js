const express = require ('express');
const router = express.Router();
// const uploadImagesProduct = require('./controllers/multer');

// View pages
router.get('/', (req, res) => res.render('index'));
router.get('/productos', (req, res) => res.render('productos'));
router.get('/sobre_Dekanor', (req, res) => res.render('sobre_nosotros'));
router.get('/contacto', (req, res) => res.render('contacto'));

// Admin

const adminAuth = require('./controllers/admin/auth');
router.get('/admin', (req, res) => res.render('admin_login', { message: 'none'}))
router.get('/admin/auth/:message', adminAuth.view )
router.post('/admin/auth', adminAuth.send )

const adminRegister = require('./controllers/admin/register');
router.get('/admin/register', (req, res) => res.render('admin_register', { message: 'none'}))
router.get('/admin/register/:message', adminRegister.view )
router.post('/admin/new', adminRegister.new )

const adminHome = require('./controllers/admin/home');
router.get('/admin/home', adminHome.view )

const adminNoticia = require('./controllers/admin/noticias');
router.get('/noticias', adminNoticia.view);
router.get('/admin/noticias', adminNoticia.view);
router.get('/noticias/:data', adminNoticia.each);
router.get('/admin/noticias/:data', adminNoticia.each);

const uploadImagesNoticia = require('./controllers/admin/multer');
const adminNoticiaAdd = require('./controllers/admin/noticia_add.js');
router.get('/admin/noticias/add', adminNoticiaAdd.view);
router.post('/admin/noticias/new', uploadImagesNoticia(), (req,res) => {
	adminNoticiaAdd.add(req, res);	
});

// Contacto
const contacto = require('./controllers/contacto');
router.post('/contacto_send', contacto.contactSend);

module.exports = router;