const { v4: uuidv4 } = require("uuid");

let cats = [
  {
    id: "7d613b93-fa3e-4ef3-a9d2-e09e5ca6e4e6",
    name: "Meow",
    createdAt: 1727098800585,
    updatedAt: null,
    deleted: false,
  },
  {
    id: "2dc9ce08-d345-4fed-8560-4c6b66fb0836",
    name: "Kitty",
    createdAt: 1727098952739,
    updatedAt: null,
    deleted: false,
  },
];

exports.create = (req, res) => {
  try {
    const { name } = req.body;
    const newCat = {
      id: uuidv4(),
      name,
      createdAt: Date.now(),
      updatedAt: null,
      deleted: false,
    };
    cats.push(newCat);
    res.status(201).json(newCat);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

exports.read = (req, res) => {
  const activeCats = cats.filter((cat) => !cat.deleted);
  res.json(activeCats);
};

exports.update = (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    const cat = cats.find((c) => c.id === id && !c.deleted);
    if (!cat) return res.status(404).json({ error: "Cat not found" });
    cat.name = name;
    cat.updatedAt = Date.now();
    res.json(cat);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

exports.delete = (req, res) => {
  try {
    const { id } = req.params;
    const cat = cats.find((c) => c.id === id);
    if (!cat) return res.status(404).json({ error: "Cat not found" });
    cat.deleted = true;
    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};
