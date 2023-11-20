import express from "express";
import authCtrl from "../controllers/authController.js";
const router = express.Router();

//Route for user sign in
router.route("/auth/signin").post(authCtrl.signin);

//Route for user sign out
router.route("/auth/signout").get(authCtrl.signout);

export default router;
