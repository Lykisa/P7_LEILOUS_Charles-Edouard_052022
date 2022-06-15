//Ajout de la constante pour utiliser Express
const express = require('express');
//Ajout de la constante pour faire appel au routeur
const router = express.Router();

//Import des middleware 'auth' et 'multer'
const auth = require('../middleware/auth')

//Import du controlleur des posts
const postCtrl = require('../controllers/post');

//Etablissement des différentes routes de l'API avec leur middleware et leur controlleurs dans l'ordre
router.post('/', auth , postCtrl.createPost);
router.delete('/:id', auth, postCtrl.deletePost);
router.get('/:id', auth, postCtrl.getOnePost);
router.get('/', auth, postCtrl.getAllPost);

module.exports = router;
