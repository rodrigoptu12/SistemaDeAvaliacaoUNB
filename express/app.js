const { renderFile } = require("ejs");
const express = require("express");
const estudantesRoutes = require("./estudantesRoutes");
const app = express();


app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.urlencoded({ extended: true }));

// Registrar as rotas definidas no estudantesRoutes.js
app.use("/", estudantesRoutes);

app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});
