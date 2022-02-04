import express from "express";
import { createTodo, deleteTodo, editTodo, getTodos } from "../models/index.js";
const router = express.Router();

// Get all to-do's

router.get("/", async function (req, res) {
  const todos = await getTodos();
  res.json({ success: true, payload: todos });
});

// Delete to-do

router.delete("/:id", async function (req, res) {
  let id = Number(req.params.id);
  const todo = await deleteTodo(id);
  res.json({ success: true, payload: todo.rows });
});

// Create to-do

router.post("/", async function (req, res) {
  let todo = req.body;
  const output = await createTodo(todo);
  res.json({ success: true, payload: output.rows });
});

// Update to-do

router.patch("/:id", async function (req, res) {
  let id = Number(req.params.id);
  let todo = req.body;
  const output = await editTodo(todo, id);
  res.json({ succes: true, payload: output.rows });
});

export default router;
