import express from "express";
import userCtrl from "../controllers/userController.js";
//import authCtrl from "../controllers/authController.js";
const router = express.Router();

router
  .route("/api/users/:userId")
//.get(authCtrl.requireSignin, userCtrl.read) // Read user
//.put(authCtrl.requireSignin, authCtrl.hasAuthorization, userCtrl.update) // Update user
// .delete(authCtrl.requireSignin, authCtrl.hasAuthorization, userCtrl.deleteUser); // Delete user

router.route("/api/users")
  .post(userCtrl.registerUser) // Register user
  .get(userCtrl.list); // List users

// Param middleware for userId
router.param("userId", userCtrl.findUserById);

export default router;
