const Unidade = require("../models/model.js");

exports.create = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "O conteúdo não pode ser vazio!"
    });
  }

  const unidade = new Unidade({
    nome: req.body.nome,
    endereco: req.body.endereco,
    tipo: req.body.tipo || false
  });

  Unidade.create(unidade, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Ocorreu um erro tentando cadastrar a Unidade."
      });
    else res.send(data);
  });
};

exports.findAll = (req, res) => {
  const nome = req.query.nome;

  Unidade.getAll(nome, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Ocorreu um erro tentando buscar as unidades."
      });
    else res.send(data);
  });
};

exports.findOne = (req, res) => {
  Unidade.findById(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Não foi localizada a unidade com id ${req.params.id}.`
        });
      } else {
        res.status(500).send({
          message: "Ocorreu um erro tentando recuperar a unidade com id " + req.params.id
        });
      }
    } else res.send(data);
  });
};

exports.findAllPublished = (req, res) => {
  Unidade.getAllPublished((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Ocorreu um erro tentando recuperar unidades."
      });
    else res.send(data);
  });
};

exports.update = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "O conteúdo não pode ser vazio!"
    });
  }

  console.log(req.body);

  Unidade.updateById(
    req.params.id,
    new Unidade(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Não foi localizada a unidade com id ${req.params.id}.`
          });
        } else {
          res.status(500).send({
            message: "Ocorreu um erro tentando atualizar a unidade com id " + req.params.id
          });
        }
      } else res.send(data);
    }
  );
};

exports.delete = (req, res) => {
  Unidade.remove(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Não foi localizada a unidade com id ${req.params.id}.`
        });
      } else {
        res.status(500).send({
          message: "Não foi possível remover a unidade com o id " + req.params.id
        });
      }
    } else res.send({ message: `Unidade removida com sucesso!` });
  });
};

exports.deleteAll = (req, res) => {
  Unidade.removeAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Ocorreu um erro tentando remover as unidades."
      });
    else res.send({ message: `Todas as unidades foram removidas com sucesso!` });
  });
};
