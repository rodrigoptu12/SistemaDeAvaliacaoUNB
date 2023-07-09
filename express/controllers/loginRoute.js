const express = require("express");
const router = express.Router();
const auth = require("../util/auth"); // Importa o arquivo de autenticação

// Rota de login
router.post("/login", auth.login);

// Rota protegida do dashboard
router.get("/dashboard", auth.setAuthorizationHeaderAndAuthenticate, function (req, res) {
  res.send("Welcome to the dashboard, " + req.user.nome);
});

// Render the login view
router.get("/login", (req, res) => {
  res.render("login");
});

module.exports = router;