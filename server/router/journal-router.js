const Router = require("express").Router;
const router = new Router();
const journalController = require("../controllers/journal-controller");
const authMiddleware = require("../middlewares/auth-middleware");

router.get("/", authMiddleware, journalController.getAll);
router.get("/:id", authMiddleware, journalController.getOne);

module.exports = router;
