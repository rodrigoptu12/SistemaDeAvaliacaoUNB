// disciplinasRoutes.js

const express = require("express");
const router = express.Router();
const pool = require("../db"); // Importa o pool do módulo db.js

router.get("/disciplinas", (req, res) => {
  const query =
    "SELECT Turmas.*, Disciplinas.nome AS nome_disciplina, Professores.nome AS nome_professor FROM Turmas JOIN Disciplinas ON Turmas.disciplina_id = Disciplinas.id JOIN Professores ON Turmas.professor_id = Professores.id;";

  pool.query(query, (err, result) => {
    if (err) {
      console.error(err);
      return res.render("estudantes", {
        disciplinas: [],
        mensagem: "Falha ao obter disciplinas.",
      });
    }

    const disciplinas = result.rows;
    res.render("turmas", { disciplinas, mensagem: null });
  });
});

module.exports = router;
