const bcrypt = require("bcrypt");
const userService = require("../service/user-service");
const jwt = require("jsonwebtoken");
const ApiError = require("../exceptions/api-error");
const { User } = require("../models/models");
const Token = require("../models/token-model");

const generateJwt = (id, login, role) => {
  return jwt.sign({ id, login, role }, process.env.JWT_ACCESS_SECRET, {
    expiresIn: "24h",
  });
};

class UserController {
  async registration(req, res, next) {
    try {
    } catch (e) {
      next(e);
    }
  }

  async login(req, res, next) {
    try {
      const { login, password } = req.body;
      const user = await User.findOne({ where: { login } });
      if (!user) {
        return next(ApiError.internal("Пользователь не найден"));
      }
      let comparePassword = bcrypt.compareSync(password, user.password);
      if (!comparePassword) {
        return next(ApiError.internal("Указан неверный пароль"));
      }
      console.log("ТОКЕН", user.id, user.login, user.role_id);
      const token = generateJwt(user.id, user.login, user.role_id);

      return res.json({ token });
    } catch (e) {
      next(e);
    }
  }
  async check(req, res, next) {
    const token = generateJwt(req.user.id, req.user.login, req.user.role_id);
    return res.json({ token });
  }

  async logout(req, res, next) {
    try {
      const { refreshToken } = req.cookies;
      const token = await userService.logout(refreshToken);
      res.clearCookie("refreshToken");
      return res.json(token);
    } catch (e) {
      next(e);
    }
  }

  async refresh(req, res, next) {
    try {
    } catch (e) {
      next(e);
    }
  }

  async getAccount(req, res, next) {
    try {
      const password = "12345";
      const hashPassword = await bcrypt.hash(password, 7);
      res.json(hashPassword);
    } catch (e) {
      next(e);
    }
  }
}

module.exports = new UserController();
