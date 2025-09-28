const { body, validationResult } = require("express-validator");

const catsRouteMiddleware = (req, res, next) => {
  console.log("Time: ", Date.now());
  next();
};

const catsGetRouteMiddleware = (req, res, next) => {
  console.log("GET middleware");
  next();
};

const validateCat = [
  body("name")
    .isString()
    .notEmpty()
    .withMessage("Name is required, must be a str"),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

module.exports = { catsRouteMiddleware, catsGetRouteMiddleware, validateCat };
