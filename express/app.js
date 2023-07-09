const { renderFile } = require("ejs");
const express = require("express");
const estudantesRoutes = require("./controllers/estudantesRoutes");
const departamentosRoutes = require("./controllers/departamentosRoutes");
const loginRoutes = require("./controllers/loginRoute");
const turmasRoutes = require("./controllers/turmasRoutes");
const pool = require("./db"); // Importa o pool do módulo db.js
const auth = require("./util/auth"); // Importa o arquivo de autenticação
const app = express();

// /// teste
// const JwtStrategy = require("passport-jwt").Strategy;
// const jwt = require("jsonwebtoken");
// const ExtractJwt = require("passport-jwt").ExtractJwt;
// const passport = require("passport");
const cookieParser = require("cookie-parser");
app.use(cookieParser());
// // Configurar a estratégia JWT
// const jwtOptions = {
//   secretOrKey: "seu_secreto",
//   jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
// };

// passport.use(
//   new JwtStrategy(jwtOptions, async function (payload, done) {
//     try {
//       const query = "SELECT * FROM Estudantes WHERE id = $1";
//       const values = [payload.userId];
//       const result = await pool.query(query, values);

//       if (result.rows.length > 0) {
//         done(null, result.rows[0]);
//       } else {
//         done(null, false);
//       }
//     } catch (error) {
//       console.error(error);
//       done(error);
//     }
//   })
// );

// app.use(express.urlencoded({ extended: true }));
// app.use(passport.initialize());

// app.post("/login", async function (req, res, next) {
//   try {
//     const { username, password } = req.body;

//     // Verifique as credenciais do usuário no banco de dados
//     const query = "SELECT * FROM Estudantes WHERE nome = $1 AND senha = $2";
//     const values = [username, password];
//     const result = await pool.query(query, values);

//     if (result.rows.length > 0) {
//       // As credenciais estão corretas, gere o token JWT
//       const userId = result.rows[0].id;
//       const token = jwt.sign({ userId }, "seu_secreto", { expiresIn: "1h" });

//       res.setHeader("Set-Cookie", `jwtToken=${token}`);
//     } else {
//       // As credenciais estão incorretas
//       res.status(401).json({ error: "Credenciais inválidas" });
//     }
//   } catch (error) {
//     console.error(error);
//     next(error);
//   }
// });

// // Função do middleware para definir o cabeçalho "Authorization" com o token JWT do cookie e autenticar com Passport
// function setAuthorizationHeaderAndAuthenticate(req, res, next) {
//   const token = req.cookies.jwtToken; // Obtenha o token JWT do cookie
//   req.headers["authorization"] = "Bearer " + token; // Defina o cabeçalho "Authorization" com o token JWT

//   // Autenticar com Passport
//   passport.authenticate("jwt", { session: false })(req, res, next);
// }

// // Rota protegida usando o middleware personalizado
// app.get(
//   "/dashboard",
//   setAuthorizationHeaderAndAuthenticate,
//   function (req, res) {
//     res.send("Welcome to the dashboard, " + req.user.nome);
//   }
// );

// // Render the login view
// app.get("/login", (req, res) => {
//   res.render("login");
// });

// // Middleware de autenticação personalizado
// function isAuthenticated(req, res, next) {
//   passport.authenticate("jwt", { session: false }, function (err, user, info) {
//     if (err) {
//       console.error(err);
//       return next(err);
//     }
//     if (!user) {
//       return res.status(401).json({ error: "Acesso não autorizado" });
//     }
//     req.user = user;
//     next();
//   })(req, res, next);
// }

//// FIM TESTE

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", "./views");

// Registrar as rotas definidas no estudantesRoutes.js
app.use("/", estudantesRoutes);

// Registrar as rotas definidas no departamentosRoutes.js
app.use("/", departamentosRoutes);

// Registrar as rotas definidas no disciplinasRoutes.js
app.use("/", turmasRoutes);
// Registrar as rotas definidas no loginRoute.js
app.use("/", loginRoutes);

app.get("/", (req, res) => {
  res.render("home");
});

app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});
