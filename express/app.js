const { renderFile } = require("ejs");
const express = require("express");
const estudantesRoutes = require("./controllers/estudantesRoutes");
const departamentosRoutes = require("./controllers/departamentosRoutes");
const loginRoutes = require("./controllers/loginRoutes");
const logoutRoutes = require("./controllers/logoutRoutes");
const turmasRoutes = require("./controllers/turmasRoutes");
const perfilRoutes = require("./controllers/perfilRoutes");
const pool = require("./configDB"); // Importa o pool do módulo db.js
const auth = require("./util/auth"); // Importa o arquivo de autenticação
const cookieParser = require("cookie-parser");
const app = express();

app.use(cookieParser());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", "./views");
// Registrar as rotas definidas no loginRoute.js
app.use("/", loginRoutes);





// Registrar o middleware de autenticação para todas as rotas abaixo
app.use(auth.isAuthenticated);

app.get("/", (req, res) => {
  const user = req.user
  res.render("home", { user });
});

///# Rotas autenticadas
// Registrar as rotas definidas no estudantesRoutes.js
app.use("/", estudantesRoutes);
// Registrar as rotas definidas no departamentosRoutes.js
app.use("/", departamentosRoutes);
// Registrar as rotas definidas no disciplinasRoutes.js
app.use("/", turmasRoutes);
// Registrar as rotas definidas no logoutRoute.js
app.use("/", logoutRoutes);
// Registrar as rotas definidas no perfilRoutes.js
app.use("/", perfilRoutes);
///# Fim das rotas autenticadas


app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});
