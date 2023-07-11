const JwtStrategy = require("passport-jwt").Strategy;
const jwt = require("jsonwebtoken");
const ExtractJwt = require("passport-jwt").ExtractJwt;
const passport = require("passport");
// const cookieParser = require("cookie-parser");
const pool = require("../db"); // Importa o pool do módulo db.js

const jwtOptions = {
  secretOrKey: "seu_secreto",
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
};

passport.use(
  new JwtStrategy(jwtOptions, async function (payload, done) {
    try {
      const query = "SELECT * FROM Estudantes WHERE id = $1";
      const values = [payload.userId];
      const result = await pool.query(query, values);

      if (result.rows.length > 0) {
        done(null, result.rows[0]);
      } else {
        done(null, false);
      }
    } catch (error) {
      console.error(error);
      done(error);
    }
  })
);

module.exports = {
  login: async function (req, res, next) {
    try {
      const { username, password } = req.body;

      // Verifique as credenciais do usuário no banco de dados
      const query = "SELECT * FROM Estudantes WHERE nome = $1 AND senha = $2";
      const values = [username, password];
      const result = await pool.query(query, values);

      if (result.rows.length > 0) {
        // As credenciais estão corretas, gere o token JWT
        const userId = result.rows[0].id;
        const token = jwt.sign({ userId }, "seu_secreto", { expiresIn: "1h" });

        res.setHeader("Set-Cookie", `jwtToken=${token}`);
        return res.redirect("/");
      } else {
        // As credenciais estão incorretas
        res.status(401).json({ error: "Credenciais inválidas" });
      }
    } catch (error) {
      console.error(error);
      next(error);
    }
  },

  // Função do middleware para definir o cabeçalho "Authorization" com o token JWT do cookie e autenticar com Passport

  isAuthenticated: function (req, res, next) {
    const token = req.cookies.jwtToken; // Obtenha o token JWT do cookie
    req.headers["authorization"] = "Bearer " + token; // Defina o cabeçalho "Authorization" com o token JWT
    // Autenticar com Passport
    passport.authenticate(
      "jwt",
      { session: false },
      function (err, user, info) {
        if (err) {
          console.error(err);
          return next(err);
        }
        if (!user) {
          // redirect to login page
          // se tiver na /, não redireciona
          if (req.path === "/"){
            return next();
          }
          return res.redirect("/");
        }

        req.user = user;
        next();
      }
    )(req, res, next);
  },
};
