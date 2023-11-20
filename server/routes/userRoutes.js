import express from "express";
import userCtrl from "../controllers/userController.js";
import authCtrl from "../controllers/authController.js";
const router = express.Router();

//Route that will register a new user
router.route("/api/users").post(userCtrl.registerUser);

//Routes for Read, update, and delete user 
router
  .route("/api/users/:userId")
  .get(authCtrl.requireSignin, userCtrl.read) // Read user
  .put(authCtrl.requireSignin, authCtrl.hasAuthorization, userCtrl.update) // Update user
  .delete(authCtrl.requireSignin, authCtrl.hasAuthorization, userCtrl.deleteUser); // Delete user

//Routes for register and list users
router.route("/api/users")
  .post(userCtrl.registerUser) // Register user
  .get(userCtrl.list); // List users

// Param middleware for userId
router.param("userId", userCtrl.findUserById);
router.route("/api/users").get(userCtrl.list);
router.route("/api/users/:userId").get(userCtrl.read);
router.route("/api/users/:userId").put(userCtrl.update);
router.route("/api/users/:userId").delete(userCtrl.deleteUser);

export default router;
