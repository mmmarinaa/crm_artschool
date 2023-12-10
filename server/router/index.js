const Router = require("express").Router;
const router = new Router();
const userRouter = require("./user-router");
const journalRouter = require("./journal-router");

router.use("/user", userRouter);
router.use("/journal", journalRouter);
// router.get("/user", authMiddleware, userController.getAccount);

module.exports = router;
