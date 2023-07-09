//  const express = require('express');
//  const pool = require("..db");  / Importa o pool do módulo db.js
//  const router = express.Router();

//  router.post('/login', async (req, res) => {
//    const { username, password } = req.body;

//    try {
//      const query = 'SELECT * FROM Estudantes WHERE nome = \$1 AND senha = \$2';
//      const values = [username, password];
//      const result = await pool.query(query, values);

//      if (result.rows.length > 0) {
//        res.json({ message: 'Login successful' });
//      } else {
//        res.status(401).json({ message: 'Invalid credentials' });
//      }
//    } catch (error) {
//      console.error(error);
//      res.status(500).json({ message: 'Internal server error' });
//    }
//  });

// //   retornar view de login
//  router.get('/login', (req, res) => {
//      res.render('login');
//  });

// module.exports = router;
