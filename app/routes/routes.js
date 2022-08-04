module.exports = app => {
  const unidade = require("../controllers/controller.js");

  var router = require("express").Router();


  router.post("/", unidade.create);

  // Retrieve all unidade
  router.get("/", unidade.findAll);

  // Retrieve all published unidade
  router.get("/published", unidade.findAllPublished);

  // Retrieve a single Tutorial with id
  router.get("/:id", unidade.findOne);

  // Update a Tutorial with id
  router.put("/:id", unidade.update);

  // Delete a Tutorial with id
  router.delete("/:id", unidade.delete);

  // Delete all unidade
  router.delete("/", unidade.deleteAll);

  app.use('/api/unidades', router);
};
