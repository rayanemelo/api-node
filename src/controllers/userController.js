const users = require('../models/Users.js');

class UserController {

  static listarUsers = (req, res) => {
    users.find((err, all) => {
      res.status(201).send(all);
    });
  }

  static listarUser = (req, res) => {
    let id = req.params.id;

    users.findById(id, (err, user) => {
      if (err) {
        res.status(400)
          .send({ message: `${err.message}. Usuário não localizado.` })
      } else {
        res.status(200).send(user)
      }
    })
  }

  static cadastrarUser = (req, res) => {
    let user = new users(req.body);

    user.save((err) => {
      if (!err) {
        res.status(201).send(user.toJSON());
      } else {
        res.status(500).send({ message: `${err.message}. Falha ao cadastrar usuário!` })
      }
    })
  }

  static editarUser = (req, res) => {
    const id = req.params.id;

    users.findByIdAndUpdate(id, { $set: (req.body) }, (err) => {
      if (!err) {
        res.status(200).send({ message: "Usuário atualizado" })
      } else {
        res.status(500).send({ message: `${err.message}. Erro ao atualizar usuário.` })
      }
    })
  }

  static deletarUser = (req, res) => {
    let id = req.params.id;
    users.findByIdAndDelete(id, (err) => {
      if (!err) {
        res.send({ message: "Usuário deletado." })
      } else {
        res.status(500).send({ message: err.message })
      }
    });
  }
}

module.exports = UserController;