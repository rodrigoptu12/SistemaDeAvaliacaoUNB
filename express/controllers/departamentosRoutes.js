// departamentosRoutes.js

const express = require("express");
const router = express.Router();
const pool = require("../configDB"); // Importa o pool do módulo db.js

// Listar todos os departamentos
router.get("/departamentos", (req, res) => {
  const query = "SELECT * FROM departamento";
  const user = req.user;
  pool.query(query, (err, result) => {
    if (err) {
      console.error(err);
      return res.render("departamentos", {
        departamentos: [],
        mensagem: "Falha ao obter departamentos.",
      });
    }

    const departamentos = result.rows;
    res.render("departamentos", { user, departamentos, mensagem: null });
  });
});

// Criar um novo departamento
router.post("/departamentos", (req, res) => {
  const { id, nome } = req.body;
  const query = "INSERT INTO departamento (id, nome) VALUES ($1, $2)";

  pool.query(query, [id, nome], (err, result) => {
    if (err) {
      console.error(err);
      return res.render("departamentos", {
        mensagem: "Falha ao criar o departamento.",
      });
    }

    res.redirect("/departamentos");
  });
});

// Atualizar um departamento
router.post("/departamentos/update", (req, res) => {
  const { id, nome } = req.body;
  const query = "UPDATE departamento SET nome = $1 WHERE id = $2";

  pool.query(query, [nome, id], (err, result) => {
    if (err) {
      console.error(err);
      return res.json({ mensagem: "Falha ao atualizar o departamento." });
    }

    if (result.rowCount > 0) {
      return res.redirect("/departamentos");
    } else {
      return res.json({ mensagem: "Departamento não encontrado." });
    }
  });
});

// Remover um departamento
router.post("/departamentos/delete", (req, res) => {
  const id = req.body.id;
  const query = "DELETE FROM departamento WHERE id = $1";

  pool.query(query, [id], (err, result) => {
    if (err) {
      console.error(err);
      mensagem = "Falha ao remover o departamento.";
      return res.json({ mensagem: "Falha ao remover o departamento." });
    }

    if (result.rowCount > 0) {
      return res.redirect("/departamentos");
    } else {
      return res.json({ mensagem: "Departamento não encontrado." });
    }
  });
});

module.exports = router;
