const express = require("express");
const router = express.Router();
const auth = require("../util/auth"); // Importa o arquivo de autenticação
const pool = require("../configDB"); // Importa o pool do módulo db.js
// Rota de login

// Rota do ranking
router.get("/ranking", (req, res) => {
  const query = `SELECT * FROM TurmasMediaNotas`;
  const user = req.user;
  pool.query(query, (err, result) => {
    if (err) {
      console.log(err);
      res.status(400).send("Erro ao buscar ranking");
    } else {
      const ranking = result.rows; // Modificação: Convertemos o resultado para um array de objetos
      res.render("ranking", { user, ranking }); // Modificação: Passamos o array de objetos como variável 'ranking' para a view
    }
  });
});
module.exports = router;
