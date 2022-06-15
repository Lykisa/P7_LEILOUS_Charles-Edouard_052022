//Ajout de la constante pour utiliser express
const express = require('express');
//Ajout de la constante pour faire appel au routeur
const router = express.Router();

//Import du controlleur 'user'
const userCtrl = require('../controllers/user');
const auth = require('../middleware/auth');

//Etablissement des différentes routes de l'API avec leur middleware + controlleurs
router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login)
router.delete('/delete', auth, userCtrl.deleteOneUser);

module.exports = router;