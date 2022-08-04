module.exports = app => {
  const unidade = require("../controllers/controller.js");

  var router = require("express").Router();


  router.post("/", unidade.create);

  router.get("/", unidade.findAll);

  router.get("/tipo", unidade.findAllTipo);

  router.get("/:id", unidade.findOne);

  router.put("/:id", unidade.update);

  router.delete("/:id", unidade.delete);

  router.delete("/", unidade.deleteAll);

  app.use('/api/unidades', router);
};
