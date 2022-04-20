const express = require('express');
const userController = require('../controllers/userController.js');

const router = express.Router();

router
  .get('/users', userController.listarUsers)
  .get('/users/:id', userController.listarUser)
  .post('/cadastrar', userController.cadastrarUser)
  .put('/editar/:id', userController.editarUser)
  .delete('/deletar/:id', userController.deletarUser)

module.exports = router;