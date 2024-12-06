const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { testConnection } = require("./Database/db.js");
const Router = require("./router/index.js");

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use(Router);

app.listen(process.env.APP_PORT, async () => {
  await testConnection();
  console.log(`Running at http://localhost:${process.env.APP_PORT}`);
});
