const jwt = require("jsonwebtoken");
const tokenModel = require("../models/token-model");

class TokenService {
  generateToken(id, email, role) {
    const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET, {
      expiresIn: "30m",
    });
    const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET, {
      expiresIn: "30d",
    });
    return {
      accessToken,
      refreshToken,
    };
  }

  async saveToken(userId, refreshToken) {
    const tokenData = await tokenModel.findById(userId);
    if (tokenData) {
      return tokenModel.save(userId, refreshToken);
    }

    const token = await tokenModel.create(userId, refreshToken);
    return token;
  }

  async removeToken(refreshToken) {
    const tokenData = await tokenModel.delete(refreshToken);
    return tokenData;
  }
}

module.exports = new TokenService();
