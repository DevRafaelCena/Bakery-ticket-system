var express = require('express');
var router = express.Router();
const comandos = require('../controllers/comandos');
const ticket = require("../controllers/geraComanda");
const db = require('../models');
//const { InsufficientStorage } = require('http-errors');

const promocoes = require("../controllers/promocoes")

const upload = require("../config/upload");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/comandos', comandos.Libera)

router.get('/inicial' , async function(req, res, next){
 
  res.render('inicial', { title: 'Inicial' })
})

router.get('/adm' , promocoes.Lista)
router.post('/adm' ,upload.any(), promocoes.store)
router.put('/adm/:id', promocoes.edit)


router.get('/ticket', ticket.GeraTicket)


module.exports = router;
