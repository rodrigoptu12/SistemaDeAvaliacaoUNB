const express = require("express");
const router = express.Router();

router.get("/logout", function(req, res) {
    res.clearCookie("jwtToken"); // Remove o cookie contendo o token JWT
    res.redirect("/"); // Redireciona para a página de login
    res.locals.isLoggedIn = false;
  });
  
module.exports = router;

