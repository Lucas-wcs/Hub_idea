const jwt = require("jsonwebtoken"); // Import the jwt module
const { verifyToken } = require("./auth"); // Import the verifyToken function
// Ce test vérifie que le middleware appelle la fonction `next` si l'en-tête "Authorization" est valide
it("should call next() if Authorization header is valid", () => {
  // Simule l'objet de requête
  const req = {
    get: jest.fn().mockReturnValue("Bearer validToken"),
  };

  // Simule l'objet de réponse
  const res = {
    sendStatus: jest.fn(),
  };

  // Simule la fonction next
  const next = jest.fn();

  // Appelle le middleware verifyToken
  const SECRET_KEY = "your_secret_key"; // Define the SECRET_KEY variable

  verifyToken(req, res, next);

  // Assertions
  expect(req.get).toHaveBeenCalledWith("Authorization");
  expect(jwt.verify).toHaveBeenCalledWith("validToken", SECRET_KEY);
  expect(req.auth).toBeDefined();
  expect(next).toHaveBeenCalled();
  expect(res.sendStatus).not.toHaveBeenCalled();
});

// Ce test vérifie que le middleware envoie un statut 401 si l'en-tête "Authorization" est manquant
it("should send 401 status if Authorization header is missing", () => {
  // Simule l'objet de requête
  const req = {
    get: jest.fn(),
  };

  // Simule l'objet de réponse
  const res = {
    sendStatus: jest.fn(),
  };

  // Simule la fonction next
  const next = jest.fn();

  // Appelle le middleware verifyToken
  verifyToken(req, res, next);

  // Assertions
  expect(req.get).toHaveBeenCalledWith("Authorization");
  expect(jwt.verify).not.toHaveBeenCalled();
  expect(req.auth).toBeUndefined();
  expect(next).not.toHaveBeenCalled();
  expect(res.sendStatus).toHaveBeenCalledWith(401);
});

// Ce test vérifie que le middleware envoie un statut 401 si l'en-tête "Authorization" a un type invalide
it("should send 401 status if Authorization header has invalid type", () => {
  // Simule l'objet de requête
  const req = {
    get: jest.fn().mockReturnValue("InvalidToken"),
  };

  // Simule l'objet de réponse
  const res = {
    sendStatus: jest.fn(),
  };

  // Simule la fonction next
  const next = jest.fn();

  // Appelle le middleware verifyToken
  verifyToken(req, res, next);

  // Assertions
  expect(req.get).toHaveBeenCalledWith("Authorization");
  expect(jwt.verify).not.toHaveBeenCalled();
  expect(req.auth).toBeUndefined();
  expect(next).not.toHaveBeenCalled();
  expect(res.sendStatus).toHaveBeenCalledWith(401);
});

// Ce test vérifie que le middleware envoie un statut 401 si la vérification du jeton échoue
it("should send 401 status if token verification fails", () => {
  // Simule l'objet de requête
  const req = {
    get: jest.fn().mockReturnValue("Bearer invalidToken"),
  };

  // Simule l'objet de réponse
  const res = {
    sendStatus: jest.fn(),
  };

  // Simule la fonction next
  const next = jest.fn();

  // Appelle le middleware verifyToken
  const SECRET_KEY = "your_secret_key"; // Define the SECRET_KEY variable

  verifyToken(req, res, next);

  // Assertions
  expect(req.get).toHaveBeenCalledWith("Authorization");
  expect(jwt.verify).toHaveBeenCalledWith("invalidToken", SECRET_KEY);
  expect(req.auth).toBeUndefined();
  expect(next).not.toHaveBeenCalled();
  expect(res.sendStatus).toHaveBeenCalledWith(401);
});
