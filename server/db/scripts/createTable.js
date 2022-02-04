import query from "../index.js";

const sqlString = `CREATE TABLE todos (id SERIAL PRIMARY KEY, todo TEXT)`;

async function createTodosTable() {
  const res = await query(sqlString);
  console.log(res);
}

createTodosTable();
