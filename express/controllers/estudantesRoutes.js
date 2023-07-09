// estudantesRoutes.js

const express = require("express");
const router = express.Router();
const pool = require("../db"); // Importa o pool do módulo db.js

router.get("/estudantes", (req, res) => {
  const query = "SELECT * FROM estudantes";

  pool.query(query, (err, result) => {
    if (err) {
      console.error(err);
      return res.render("estudantes", {
        estudantes: [],
        mensagem: "Falha ao obter estudantes.",
      });
    }

    const estudantes = result.rows;
    res.render("estudantes", { estudantes, mensagem: null });
  });
});

router.post("/estudantes", (req, res) => {
  const { nome, email, matricula, curso, senha } = req.body;
  const query =
    "INSERT INTO estudantes (nome, email, matricula, curso, senha) VALUES ($1, $2, $3, $4, $5)";

  pool.query(query, [nome, email, matricula, curso, senha], (err, result) => {
    if (err) {
      console.error(err);
      return res.render("estudantes", {
        mensagem: "Falha ao criar o estudante.",
      });
    }
  });
  // Redireciona para a página de estudantes
  res.redirect("/estudantes");
});

// Atualizar estudante
router.post("/estudantes/update", (req, res) => {
  const { id, nome, email, matricula, curso, senha } = req.body;
  const query =
    "UPDATE estudantes SET nome = $1, email = $2, matricula = $3, curso = $4, senha = $5 WHERE id = $6";

  pool.query(
    query,
    [nome, email, matricula, curso, senha, id],
    (err, result) => {
      if (err) {
        console.error(err);
        return res.json({ mensagem: "Falha ao atualizar o estudante." });
      }

      if (result.rowCount > 0) {
        return res.redirect("/estudantes");
      } else {
        return res.json({ mensagem: "Estudante não encontrado." });
      }
    }
  );
});

router.post("/estudantes/delete", (req, res) => {
  const id = req.body.id;
  const query = "DELETE FROM estudantes WHERE id = $1";

  pool.query(query, [id], (err, result) => {
    if (err) {
      console.error(err);
      return res.json({ mensagem: "Falha ao remover o estudante." });
    }
    if (result.rowCount > 0) {
      return res.redirect("/estudantes");
    } else {
      return res.json({ mensagem: "Estudante não encontrado." });
    }
  });
});

module.exports = router;
