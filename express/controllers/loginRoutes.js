const express = require("express");
const router = express.Router();
const auth = require("../util/auth"); // Importa o arquivo de autenticação

// Rota de login
router.post("/login", auth.login);

router.post("/register", (req, res) => {
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
  res.redirect("/");
});


module.exports = router;