const express = require("express");
const router = express.Router();
const auth = require("../util/auth"); // Importa o arquivo de autenticação
const pool = require("../configDB"); // Importa o pool do módulo db.js
// Rota de login
router.post("/login", auth.login);

router.post("/register", (req, res) => {
  const { name , email, matricula, curso, password } = req.body;
  const query =
    "INSERT INTO estudantes (nome, email, matricula, curso, senha) VALUES ($1, $2, $3, $4, $5)";
  console.log(req.body)
  console.log(query)
  pool.query(query, [name, email, matricula, curso, password], (err, result) => {
    if (err) {
      console.error(err);
      return res.render("estudantes", {
        mensagem: "Falha ao criar o estudante.",
      });
    }

    // Redireciona para a página de estudantes
    res.redirect("/");
  });
});


module.exports = router;