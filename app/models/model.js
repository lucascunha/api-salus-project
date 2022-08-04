const sql = require("./db.js");

// Construtor
const Unidade = function(unidade) {
  this.nome = unidade.nome;
  this.endereco = unidade.endereco;
  this.tipo = unidade.tipo;
};

Unidade.create = (newunidade, result) => {
  sql.query("INSERT INTO unidades SET ?", newunidade, (err, res) => {
    if (err) {
      console.log("erro: ", err);
      result(err, null);
      return;
    }

    console.log("unidade cadastrada: ", { id: res.insertId, ...newunidade });
    result(null, { id: res.insertId, ...newunidade });
  });
};

Unidade.findById = (id, result) => {
  sql.query(`SELECT * FROM unidades WHERE id = ${id}`, (err, res) => {
    if (err) {
      console.log("erro: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("unidade localizada: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found unidade with the id
    result({ kind: "not_found" }, null);
  });
};

Unidade.getAll = (nome, result) => {
  let query = "SELECT * FROM unidades";

  if (nome) {
    query += ` WHERE nome LIKE '%${nome}%'`;
  }

  sql.query(query, (err, res) => {
    if (err) {
      console.log("erro: ", err);
      result(null, err);
      return;
    }

    console.log("unidades: ", res);
    result(null, res);
  });
};

Unidade.getAlltipo = result => {
  sql.query("SELECT * FROM unidades WHERE tipo=true", (err, res) => {
    if (err) {
      console.log("erro: ", err);
      result(null, err);
      return;
    }

    console.log("unidades: ", res);
    result(null, res);
  });
};

Unidade.updateById = (id, unidade, result) => {
  sql.query(
    "UPDATE unidades SET nome = ?, endereco = ?, tipo = ? WHERE id = ?",
    [unidade.nome, unidade.endereco, unidade.tipo, id],
    (err, res) => {
      if (err) {
        console.log("erro: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found unidade with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("unidade atualizada: ", { id: id, ...unidade });
      result(null, { id: id, ...unidade });
    }
  );
};

Unidade.remove = (id, result) => {
  sql.query("DELETE FROM unidades WHERE id = ?", id, (err, res) => {
    if (err) {
      console.log("erro: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found unidade with the id
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("foi removida a unidade com o id: ", id);
    result(null, res);
  });
};

Unidade.removeAll = result => {
  sql.query("DELETE FROM unidades", (err, res) => {
    if (err) {
      console.log("erro: ", err);
      result(null, err);
      return;
    }

    console.log(`foram removidas ${res.affectedRows} unidades`);
    result(null, res);
  });
};

module.exports = Unidade;