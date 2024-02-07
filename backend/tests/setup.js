/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
const path = require("path");
// Load environment variables from .env file
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });

const request = require("supertest");

const app = require("../src/app");
const tables = require("../src/tables");
const database = require("../database/client");

afterAll((done) => {
  database.end().then(done);
});

module.exports = { app, database, request, tables };
