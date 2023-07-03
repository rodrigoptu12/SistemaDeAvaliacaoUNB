const { Pool } = require("pg");

const pool = new Pool({
  user: "rodri",
  host: "127.0.0.1",
  database: "rodri",
  password: "rodri",
  port: 5432,
});

module.exports = pool;