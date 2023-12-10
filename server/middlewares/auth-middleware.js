// const ApiError = require("../exceptions/api-error");
// const tokenService = require("../service/token-service");
// module.exports = function (req, res, next) {
//   try {
//     const authorizationHeader = req.headers.authorization;
//     if (!authorizationHeader) {
//       return next(ApiError.UnathorizedError());
//     }

//     const accessToken = authorizationHeader.split(" ")[1];
//     if (!accessToken) {
//       return next(ApiError.UnathorizedError());
//     }

//     const userData = tokenService.validateAccessToken(accessToken);
//     if (!userData) {
//       return next(ApiError.UnathorizedError());
//     }

//     req.user = userData;
//     next();
//   } catch (e) {
//     return next(ApiError.UnathorizedError());
//   }
// };

const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
  if (req.method === "OPTIONS") {
    next();
  }
  try {
    const token = req.headers.authorization.split(" ")[1];
    if (!token) {
      return res.status(401).json({ message: "Пользователь не авторизован" });
    }
    const decoded = jwt.verify(token, process.env.JWT_ACCESS_SECRET);
    req.user = decoded;
    next();
  } catch (e) {
    res.status(401).json({ message: "Пользователь не авторизован" });
  }
};
