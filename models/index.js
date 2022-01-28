import query from "../db/index.js";

export async function getTodos() {
  const data = await query(`SELECT * FROM todos`);
  return data.rows;
}

export async function deleteTodo(id) {
  const data = await query(`DELETE FROM todos WHERE id = ${id};`);
  return data;
}
