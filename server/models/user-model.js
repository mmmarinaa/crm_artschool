const pgp = require("pg-promise")();

const dbConfig = {
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
};

const db = pgp(dbConfig);

const User = {
  findByLogin: (login) => {
    return new Promise((resolve, reject) => {
      db.oneOrNone("SELECT * FROM users WHERE login = $1", [login])
        .then((result) => {
          if (!result) {
            resolve(null); // Если пользователь не найден, возвращаем null
            return;
          }

          const user = {
            id: result.id,
            login: result.login,
            password: result.password,
          };

          resolve(user);
        })
        .catch((err) => {
          console.error("Ошибка при поиске пользователя:", err);
          reject(err);
        });
    });
  },
};

module.exports = User;
