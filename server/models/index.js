import query from "../db/index.js";

//Get all the to-do's

export async function getTodos() {
  const data = await query(`SELECT * FROM todos`);
  return data.rows;
}

//Delete to-do

export async function deleteTodo(id) {
  const data = await query(`DELETE FROM todos WHERE id = ${id} RETURNING *`);
  return data;
}

//Create to-do

export async function createTodo(item) {
  const data = await query(`INSERT INTO todos (todo) VALUES ($1) RETURNING *`, [
    item.todo,
  ]);
  return data;
}

//Edit to-do

export async function editTodo(item, id) {
  const data = await query(
    `UPDATE todos SET todo = ($1) WHERE id = ${id} RETURNING *`,
    [item.todo]
  );
  return data;
}
