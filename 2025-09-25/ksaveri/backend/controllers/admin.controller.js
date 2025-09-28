const { todos } = require("./todo.controller");

exports.readAll = (req, res) => {
  res.json(todos);
};

exports.toggleDeleted = (req, res) => {
  try {
    const { id } = req.params;
    const todo = todos.find((t) => t.id === id);
    if (!todo) return res.status(404).json({ error: "Todo not found" });
    todo.deleted = !todo.deleted;
    todo.updatedAt = Date.now();
    res.json(todo);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};
