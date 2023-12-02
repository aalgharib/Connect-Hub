import express from "express";
import userCtrl from "../controllers/userController.js";
import authCtrl from "../controllers/authController.js";
const router = express.Router();

//Route that will register a new user and list users
router
  .route("/api/users")
  .post(userCtrl.registerUser)
  .get(userCtrl.list);

//Routes for Read, update, and delete user 
router
  .route("/api/users/:userId")
  .get(authCtrl.requireSignin, userCtrl.read) // Read user
  .put(authCtrl.requireSignin, authCtrl.hasAuthorization, userCtrl.update) // Update user
  .delete(authCtrl.requireSignin, authCtrl.hasAuthorization, userCtrl.deleteUser); // Delete user


// Param middleware for userId
router.param("userId", userCtrl.findUserById);
// router.param("userId", userCtrl.read);
router.route("/api/users/:userId").get(userCtrl.read);

export default router;
