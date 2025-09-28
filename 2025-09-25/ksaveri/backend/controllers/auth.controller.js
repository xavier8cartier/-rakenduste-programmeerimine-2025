const jwt = require("jsonwebtoken");
const { SECRET } = require("../middlewares/auth.middlewares");

// in memory store for testing lmao
const users = [{ username: "admin", password: "secret", role: "admin" }];

exports.login = (req, res) => {
  const { username, password } = req.body;
  const user = users.find(
    (u) => u.username === username && u.password === password
  );
  if (!user) {
    return res.status(401).json({ error: "Invalid credentials" });
  }
  const token = jwt.sign({ username: user.username, role: user.role }, SECRET, {
    expiresIn: "1h",
  });
  res.json({ token });
};

exports.ping = (req, res) => {
  res.json({ message: "Pong! Token valid.", user: req.user });
};
