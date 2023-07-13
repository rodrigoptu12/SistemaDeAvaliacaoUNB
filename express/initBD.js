// Ler arquivos .sql na pasta ./sql e executar

const fs = require("fs");
const pool = require("./configDB");

// Ler Todos os arquivos assessments.sql, basedata.sql, procedure.sql e view.sql

const sql = fs.readFileSync("./sql/assessment.sql").toString();
pool.query(sql, (err, res) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Tabela assessments criada com sucesso!");
  }
});

const sql2 = fs.readFileSync("./sql/basedata.sql").toString();
pool.query(sql2, (err, res) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Dados inseridos com sucesso!");
  }
});

const sql3 = fs.readFileSync("./sql/procedure.sql").toString();
pool.query(sql3, (err, res) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Procedure criada com sucesso!");
  }
});

const sql4 = fs.readFileSync("./sql/view.sql").toString();
pool.query(sql4, (err, res) => {
  if (err) {
    console.log(err);
  } else {
    console.log("View criada com sucesso!");
  }
});



