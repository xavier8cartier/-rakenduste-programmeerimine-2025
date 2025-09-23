const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(express.json());

let books = [
  { id: 1, title: "My book 1", author: "Author 1" },
  { id: 2, title: "My book 2", author: "Auhtor 2" },
];

app.post("/books", (req, res) => {
  const newBook = { id: books.length + 1, ...req.body };
  books.push(newBook);
  res.status(201).json(newBook);
});

app.get("/books", (req, res) => {
  res.json(books);
});

app.get("/books/:id", (req, res) => {
  const book = books.find((b) => b.id === parseInt(req.params.id));
  if (!book) return res.status(404).json({ error: "Book not found" });
  res.json(book);
});

app.put("/books/:id", (req, res) => {
  const index = books.findIndex((b) => b.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ error: "Book not found" });
  books[index] = { ...books[index], ...req.body };
  res.json(books[index]);
});

app.delete("/books/:id", (req, res) => {
  const index = books.findIndex((b) => b.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ error: "Book not found" });
  const deletedBook = books.splice(index, 1);
  res.json(deletedBook[0]);
});

app.get("/users/:userId/books/:bookId", (req, res) => {
  const { userId, bookId } = req.params;
  const book = books.find((b) => b.id === parseInt(bookId));
  if (!book) return res.status(404).json({ error: "Book not found" });
  res.json({
    userId: userId,
    bookId: bookId,
    bookDetails: book,
    message: "This book is from the users library",
  });
});

app.get("/flights/:from-:to", (req, res) => {
  const { from, to } = req.params;
  res.json({
    from: from,
    to: to,
    flightInfo: `Flight from ${from} to ${to} departs at 14:00, price 150€ `,
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
