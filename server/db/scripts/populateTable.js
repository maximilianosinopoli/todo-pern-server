import query from "../index.js";
import todos from "../../data.js";

async function insertTodos() {
  for (let i = 0; i < todos.length; i++) {
    const newQuery = `INSERT INTO todos (todo) VALUES ($1)`;
    const queryCall = await query(newQuery, [todos[i].todo]);
  }
  console.log("Table succesfully populated!");
}

insertTodos();
