// disciplinasRoutes.js

const express = require("express");
const router = express.Router();
const pool = require("../configDB"); // Importa o pool do módulo db.js
const multer = require("multer");

// Configuração do multer para processar o upload da imagem
const storage = multer.memoryStorage();
const upload = multer();

router.get("/perfil", (req, res) => {
  const user = req.user;
  const imagem = user.imagem
    ? `data:image/png;base64,${user.imagem.toString("base64")}`
    : null;

  res.render("perfil", { user, imagem, mensagem: null });
});


router.post("/perfil/upload", upload.single("image"), (req, res) => {
  const { id } = req.user;
  const { buffer } = req.file;
  const query = "UPDATE Estudantes SET imagem = $1 WHERE id = $2";
  pool.query(query, [buffer, id], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).send("Falha ao inserir a imagem.");
    }
    return res.redirect(`/perfil`);
  });
});

module.exports = router;
