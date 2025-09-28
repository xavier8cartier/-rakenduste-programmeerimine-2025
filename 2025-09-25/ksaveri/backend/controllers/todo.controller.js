const { v4: uuidv4 } = require("uuid");

let todos = [];

exports.create = (req, res) => {
  try {
    const { title } = req.body;
    const newTodo = {
      id: uuidv4(),
      title,
      createdAt: Date.now(),
      updatedAt: null,
      deleted: false,
    };
    todos.push(newTodo);
    res.status(201).json(newTodo);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

exports.read = (req, res) => {
  const activeTodos = todos.filter((todo) => !todo.deleted);
  res.json(activeTodos);
};

exports.update = (req, res) => {
  try {
    const { id } = req.params;
    const { title } = req.body;
    const todo = todos.find((t) => t.id === id && !t.deleted);
    if (!todo) return res.status(404).json({ error: "Todo not found" });
    todo.title = title;
    todo.updatedAt = Date.now();
    res.json(todo);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

exports.delete = (req, res) => {
  try {
    const { id } = req.params;
    const todo = todos.find((t) => t.id === id);
    if (!todo) return res.status(404).json({ error: "Todo not found" });
    todo.deleted = true;
    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

exports.todos = todos;
