const express = require('express');
const app = express();
const { Pool } = require('pg');

const pool = new Pool({
  user: 'rodri',
  host: '127.0.0.1',
  database: 'rodri',
  password: 'rodri',
  port: 5432,
});

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.urlencoded({ extended: true }));

app.get('/estudantes', (req, res) => {
  const query = 'SELECT * FROM estudantes';

  pool.query(query, (err, result) => {
    if (err) {
      console.error(err);
      return res.render('estudantes', { estudantes: [], mensagem: 'Falha ao obter estudantes.' });
    }

    const estudantes = result.rows;
    res.render('estudantes', { estudantes, mensagem: null });
  });
});


app.post('/estudantes', (req, res) => {
  const { nome, email, matricula, curso, senha } = req.body;
  const query =
    'INSERT INTO estudantes (nome, email, matricula, curso, senha) VALUES ($1, $2, $3, $4, $5)';

  pool.query(query, [nome, email, matricula, curso, senha], (err, result) => {
    if (err) {
      console.error(err);
      return res.render('estudantes', { mensagem: 'Falha ao criar o estudante.' });
    }

    
  });
});







app.delete('/estudantes/:id', (req, res) => {
  const id = req.params.id;
  const query = 'DELETE FROM estudantes WHERE id = $1';

  pool.query(query, [id], (err, result) => {
    if (err) {
      console.error(err);
      return res.json({ mensagem: 'Falha ao remover o estudante.' });
    }

    if (result.rowCount > 0) {
      return res.json({ mensagem: 'Estudante removido com sucesso!' });
    } else {
      return res.json({ mensagem: 'Estudante não encontrado.' });
    }
  });
});


app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});
