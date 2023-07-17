// disciplinasRoutes.js

const express = require("express");
const router = express.Router();
const pool = require("../configDB"); // Importa o pool do módulo db.js

router.get("/turmas", (req, res) => {
  const query =
    "SELECT Turmas.*, Disciplinas.nome AS nome_disciplina, Professores.nome AS nome_professor FROM Turmas JOIN Disciplinas ON Turmas.disciplina_id = Disciplinas.id JOIN Professores ON Turmas.professor_id = Professores.id;";
  const user = req.user;
  pool.query(query, (err, result) => {
    if (err) {
      console.error(err);
      return res.render("estudantes", {
        disciplinas: [],
        mensagem: "Falha ao obter disciplinas.",
      });
    }

    const disciplinas = result.rows;
    res.render("turmas", { user, disciplinas, mensagem: null });
  });
});

router.get("/turmas/:id/avaliacoes", (req, res) => {
  const { id } = req.params;
  const user = req.user;
  const turma_id = id;
  const query =
    "SELECT a.*, e.nome AS nome_aluno FROM Avaliacoes a INNER JOIN Estudantes e ON a.estudante_id = e.id WHERE a.turma_id = $1";
  pool.query(query, [id], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).send("Falha ao obter as avaliações.");
    }
    if (result.rowCount > 0) {
      const avaliacoes = result.rows;
      return res.render("avaliacoes", {
        avaliacoes,
        user,
        turma_id,
        mensagem: null,
      });
    }
    return res.render("avaliacoes", { avaliacoes: [], user, turma_id, mensagem: null });  
  });
});


// criar avaliação
router.post("/turmas/:id/avaliacoes", (req, res) => {
  const { descricao, nota, turma_id, estudante_id } = req.body;
  const query =
    "INSERT INTO Avaliacoes (estudante_id, turma_id, comentario, nota) VALUES ($1, $2, $3, $4)";
  pool.query(
    query,
    [estudante_id, turma_id, descricao, nota],
    (err, result) => {
      if (err) {
        console.error(err);
        return res.json({ mensagem: "Falha ao criar avaliação." });
      }
      return res.redirect(`/turmas/${turma_id}/avaliacoes`);
    }
  );
});

// Deletar avaliação

router.delete("/turmas/:id/avaliacoes/:id_avaliacao", (req, res) => {
  const { id, id_avaliacao } = req.params;
  const query = "DELETE FROM Avaliacoes WHERE id = $1";
  pool.query(query, [id_avaliacao], (err, result) => {
    if (err) {
      console.error(err);
      return res.json({ mensagem: "Falha ao deletar avaliação." });
    }
    return res.redirect(`/turmas/${id}/avaliacoes`);
  });
});

// Editar avaliação

router.put("/turmas/:id/avaliacoes/:id_avaliacao", (req, res) => {
  const { id, id_avaliacao } = req.params;
  const { descricao, nota } = req.body;
  const query = "UPDATE Avaliacoes SET comentario = $1, nota = $2 WHERE id = $3";
  pool.query(query, [descricao, nota, id_avaliacao], (err, result) => {
    if (err) {
      console.error(err);
      return res.json({ mensagem: "Falha ao editar avaliação." });
    }
    return res.redirect(`/turmas/${id}/avaliacoes`);
  });
});


module.exports = router;
