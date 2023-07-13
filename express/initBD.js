const fs = require("fs");
const pool = require("./configDB");

// Função para ler e executar um arquivo SQL
const executeSQLFile = async (filePath, successMessage) => {
  try {
    const sql = fs.readFileSync(filePath).toString();
    await pool.query(sql);
    console.log(successMessage);
  } catch (err) {
    console.error(err);
  }
};

// Executar arquivos SQL
const sqlFiles = [
  { filePath: "./sql/assessment.sql", successMessage: "Tabela assessments criada com sucesso!" },
  { filePath: "./sql/basedata.sql", successMessage: "Dados inseridos com sucesso!" },
  { filePath: "./sql/procedure.sql", successMessage: "Procedure criada com sucesso!" },
  { filePath: "./sql/view.sql", successMessage: "View criada com sucesso!" }
];

async function runSQLFiles() {
  for (const sqlFile of sqlFiles) {
    await executeSQLFile(sqlFile.filePath, sqlFile.successMessage);
  }
}

runSQLFiles();
