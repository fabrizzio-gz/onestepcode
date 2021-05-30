const { Pool } = require("pg");

const pool = new Pool({
  user: "my_user",
  password: "123456",
  database: "db",
  host: "localhost",
  port: 5432,
});

const insert = async () => {
  try {
    await pool.query("INSERT INTO my_table VALUES (4, 'Nick', 50)");
    console.log("success");
  } catch (err) {
    console.error(err);
  }
};

const insertParam = async (id, name, age) => {
  try {
    await pool.query("INSERT INTO my_table VALUES ($1, $2, $3)", [
      id,
      name,
      age,
    ]);
    console.log("success");
  } catch (err) {
    console.error(err);
  }
};

// DO NOT USE
const insertUnsafe = async (id, name, age) => {
  try {
    await pool.query(`INSERT INTO my_table VALUES (${id}, ${name}, ${age})`);
    console.log("success");
  } catch (err) {
    console.error(err);
  }
};

const getRow = async (id) => {
  try {
    const res = await pool.query("SELECT * FROM my_table WHERE id=$1", [id]);
    console.log(res.rows[0]);
  } catch (err) {
    console.error(err);
  }
};

// Terminate connection
// pool.end();
