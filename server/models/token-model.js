const pgp = require("pg-promise")();

const dbConfig = {
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
};

const db = pgp(dbConfig);

const Token = {
  create: (userId, refreshToken) => {
    return new Promise((resolve, reject) => {
      const query =
        "INSERT INTO tokens (user_id, refresh_token) VALUES ($1, $2) RETURNING *";
      const values = [userId, refreshToken];

      db.one(query, values)
        .then((result) => {
          const token = {
            id: result.id,
            user: userId,
            refreshToken: refreshToken,
          };

          resolve(token);
        })
        .catch((err) => {
          console.error("Ошибка при создании токена:", err);
          reject(err);
        });
    });
  },
  findById: (userId) => {
    return new Promise((resolve, reject) => {
      db.any("SELECT * FROM tokens WHERE user_id = $1", [userId])
        .then((result) => {
          resolve(result);
        })
        .catch((err) => {
          console.error("Ошибка при поиске токена:", err);
          reject(err);
        });
    });
  },
  save: (userId, token) => {
    return new Promise((resolve, reject) => {
      const query =
        "UPDATE tokens SET refresh_token = $1 WHERE user_id = $2 RETURNING *";
      const values = [token, userId];

      db.one(query, values)
        .then((result) => {
          resolve(result.affectedRows);
        })
        .catch((err) => {
          console.error("Ошибка при обновлении токена:", err);
          reject(err);
        });
    });
  },
  delete: (refreshToken) => {
    return new Promise((resolve, reject) => {
      const query = "DELETE FROM tokens WHERE refresh_token = $1 RETURNING *";
      const values = [refreshToken];

      db.oneOrNone(query, values)
        .then((result) => {
          resolve(result);
        })
        .catch((err) => {
          console.error("Ошибка при удалении токена:", err);
          reject(err);
        });
    });
  },
};

module.exports = Token;
