const express = require("express");

const ctrl = require("../../controllers/auth");
const { ctrlWrapper } = require("../../helpers");
const { validateBody, authenticate } = require("../../middlewares");
const { schemas } = require("../../models/user");

const router = express.Router();

router.post("/signup", validateBody(schemas.signupSchema), ctrlWrapper(ctrl.signup));
router.post("/login", validateBody(schemas.loginSchema), ctrlWrapper(ctrl.login));
router.get("/logout", authenticate, ctrlWrapper(ctrl.logout));
router.get("/current", authenticate, ctrlWrapper(ctrl.getCurrent));

module.exports = router;
