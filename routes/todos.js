import express from "express";
import { deleteTodo, getTodos } from "../models/index.js";
const router = express.Router();

/* GET todos listing. */
router.get("/", async function (req, res) {
  const todos = await getTodos();
  res.json({ success: true, payload: todos });
});

router.delete("/:id", async function (req, res) {
  let id = Number(req.params.id);
  await deleteTodo(id);
  const todos = await getTodos();
  res.json({ success: true, payload: todos });
});

export default router;
