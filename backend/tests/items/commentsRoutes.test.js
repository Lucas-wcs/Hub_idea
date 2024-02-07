// Import required dependencies
const jwt = require("jsonwebtoken");
const { app, request } = require("../setup");
// Générez un token valide pour les tests
const generateValidToken = () => {
  const user = {
    id: 1,
    isAdmin: 0,
  };
  return jwt.sign(user, process.env.APP_SECRET, {
    expiresIn: "1h",
  });
};

// Test suite for the GET /api/comments route
// Test de la route "readAll" de la table "comment"

describe("GET api/comments", () => {
  it("should get comments", async () => {
    const token = generateValidToken();

    const response = await request(app)
      .get("/api/comments")
      .set("Authorization", `Bearer ${token}`);
    expect(response.status).toBe(200);
  });
});
