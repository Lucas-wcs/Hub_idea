const tables = require("../tables");

// If the request fails, handle the error (not shown in this code snippet)

const login = async (req, res, next) => {
  // If the request fails, handle the error (not shown in this code snippet)
  const { email, password } = req.body;

  try {
    // If the request fails, handle the error (not shown in this code snippet)
    const user = await tables.User.getByMail(email);
    // If the user is found and the password matches
    if (user[0] && user[0].password === password) {
      // Deleting the password from the user object for security reasons
      delete user[0].password;
      // Sending the response with status 200 (OK) and the user data
      res.status(200).send(user[0]);
    } else {
      // If the email or password is incorrect, sending a response with status 400 (Bad Request)
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
