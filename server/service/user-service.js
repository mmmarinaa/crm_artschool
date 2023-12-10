const UserModel = require("../models/user-model");
const ApiError = require("../exceptions/api-error");
const bcrypt = require("bcrypt");
const tokenService = require("./token-service");
const UserDto = require("../dtos/user-dto");

class UserService {
  async registration(login, password) {
    const candidate = await UserModel.findOne({ login });
    if (candidate) {
      throw ApiError.BadRequest("Пользователь с таким логином уже существует");
    }
    const user = await UserModel.create({ login, password });
  }

  async login(login, password) {
    const user = await UserModel.findByLogin(login);
    if (!user) {
      throw ApiError.BadRequest("Пользователь не найден");
    }
    const isPassEquals = await bcrypt.compare(password, user.password);
    if (!isPassEquals) {
      throw ApiError.BadRequest("Неверный пароль");
    }
    const userDto = new UserDto(user);
    const tokens = tokenService.generateToken({ ...userDto });
    //res.setHeader("Authorization", `Bearer ${tokens.accessToken}`);
    //await tokenService.saveToken(userDto.id, tokens.refreshToken);

    return {
      ...tokens,
      user: userDto,
    };
  }
  async logout(refreshToken) {
    const token = await tokenService.removeToken(refreshToken);
    return token;
  }
}

module.exports = new UserService();
