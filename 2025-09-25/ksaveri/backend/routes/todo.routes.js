const express = require("express");
const router = express.Router();
const todoController = require("../controllers/todo.controller");
const { validateTodo } = require("../middlewares/todo.middlewares");

router.get("/", todoController.read);
router.post("/", validateTodo, todoController.create);
router.put("/:id", validateTodo, todoController.update);
router.delete("/:id", todoController.delete);

module.exports = router;
