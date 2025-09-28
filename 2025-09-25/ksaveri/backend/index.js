const express = require("express");
const app = express();
const port = 3000;
const catsRoutes = require("./routes/cats.routes");
const todoRoutes = require("./routes/todo.routes");
const adminRoutes = require("./routes/admin.routes");
const authRoutes = require("./routes/auth.routes");
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.use("/cats", catsRoutes);
app.use("/todos", todoRoutes);
app.use("/admin", adminRoutes);
app.use("/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
