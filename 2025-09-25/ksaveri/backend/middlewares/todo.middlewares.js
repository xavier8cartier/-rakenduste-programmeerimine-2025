const { body, validationResult } = require("express-validator");

const validateTodo = [
  body("title")
    .isString()
    .notEmpty()
    .withMessage("Title is required and must be a string"),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

module.exports = { validateTodo };
