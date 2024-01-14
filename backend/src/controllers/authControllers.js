const argon2 = require("argon2");
const jwt = require("jsonwebtoken");
const tables = require("../tables");

// If the request fails, handle the error (not shown in this code snippet)

const login = async (req, res, next) => {
  // If the request fails, handle the error (not shown in this code snippet)
  const { email } = req.body;

  try {
    // If the request fails, handle the error (not shown in this code snippet)
    const result = await tables.User.getByMail(email);

    if (result && result[0]) {
      const user = result[0];
      const verified = await argon2.verify(user.password, req.body.password);

      if (verified) {
        // Respond with the user and a signed token in JSON format (but without the hashed password)
        delete user.hashed_password;

        const token = await jwt.sign(
          { userId: user.id, isAdmin: user.isAdmin },
          process.env.APP_SECRET,
          {
            expiresIn: "1h",
          }
        );

        res.json({
          token,
          user,
        });
      } else {
        res.status(400).send("Incorrect mail ou mot de passe");
      }
    } else {
      res.status(400).send("Incorrect mail ou mot de passe");
    }
  } catch (err) {
    // If an error occurs, pass it to the next error handler
    next(err);
  }
};

// Asynchronous function to handle signing up a new user
const signin = async (req, res, next) => {
  // Extracting email and password from the request body
  const { email, password } = req.body;

  try {
    // Creating a new user
    const result = await tables.User.create(email, password);

    // If the user is successfully created, sending a response with status 201 (Created)
    if (result.inertId) {
      res.status(201);
    } else {
      // If the user creation fails, sending a response with status 400 (Bad Request)
      res.status(400);
    }
  } catch (err) {
    // If an error occurs, pass it to the next error handler
    next(err);
  }
};

// Exporting the login and signin functions
module.exports = { login, signin };
