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

// Test suite for the GET /api/comments/:id route
describe("GET api/comments", () => {
  it("should get comments", async () => {
    const token = generateValidToken();

    const response = await request(app)
      .get("/api/comments")
      .set("Authorization", `Bearer ${token}`);
    expect(response.status).toBe(200);
  });
});

// Test suite for the GET /api/comments/:id route
describe("GET api/comments/:id", () => {
  it("should get a comment", async () => {
    const token = generateValidToken();

    const response = await request(app)
      .get("/api/comments/1")
      .set("Authorization", `Bearer ${token}`);
    expect(response.status).toBe(200);
  });
});

// Test suite for the POST /api/comments route
describe("POST api/comments", () => {
  it("should create a comment", async () => {
    const token = generateValidToken();
    const testComment = {
      userId: 1,
      ideaId: 3,
      description: "Test comment",
    };
    const response = await request(app)
      .post("/api/comments")
      .set("Authorization", `Bearer ${token}`)
      .send(testComment);
    expect(response.status).toBe(201);
  });
});

// Test suite for the DELETE /api/comments/:id route
describe("DELETE api/comments/:id", () => {
  it("should delete a comment", async () => {
    const token = generateValidToken();

    const response = await request(app)
      .delete("/api/comments/1")
      .set("Authorization", `Bearer ${token}`);
    expect(response.status).toBe(204);
  });
});
