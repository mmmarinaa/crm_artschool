require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const pgp = require("pg-promise")();

const PORT = process.env.PORT || 5000;
const app = express();

const dbConfig = {
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
};

const db = pgp(dbConfig);
app.use(express.json());
app.use(cookieParser());
app.use(cors());

const start = async () => {
  try {
    app.listen(PORT, () => console.log(`Server started on PORT = ${PORT}`));
    await db.connect();
  } catch (e) {
    console.log(e);
  }
};

start();
