const Router = require("express").Router;
const userController = require("../controllers/user-controller");
const router = new Router();
const authMiddleware = require("../middlewares/auth-middleware");

router.post("/registration", userController.registration);
router.post("/login", userController.login);
router.post("/logout");
router.get("/auth", authMiddleware, userController.check);

module.exports = router;
