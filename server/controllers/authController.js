import User from "../models/userModel.js";
import jwt from "jsonwebtoken";
import { expressjwt } from "express-jwt";
import config from "../config/config.js";

//Sign in a user
const signin = async (req, res) => {
  try {
    //Find a user by the email
    let user = await User.findOne({ email: req.body.email });
    if (!user) return res.status("401").json({ error: "User not found" });
    //Authenticate the password
    if (!user.authenticate(req.body.password)) {
      return res
        .status("401")
        .send({ error: "Email and password don't match." });
    }
    //Creating a JWT token and setting that token ina cookie 
    const token = jwt.sign({ _id: user._id }, config.jwtSecret);
    res.cookie("t", token, { expire: new Date() + 9999 });
    //Responding with the token and user information
    return res.json({
      token,
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (err) {
    return res.status("401").json({ error: "Could not sign in" });
  }
};

//Sign out a user 
const signout = (req, res) => {
  res.clearCookie("t");
  return res.status(200).json({
    message: "Sign out successful!",
  });
};

//This middleware will check if a user is signed in 
const requireSignin = expressjwt({
  secret: config.jwtSecret,
  algorithms: ["HS256"],
  //Authenticated user information will be stored in theauth userproperty of the request object 
  userProperty: "auth",
});

//This middleware will check if the user has authorization 
const hasAuthorization = (req, res) => {
  const authorized = req.profile && req.auth && req.profile._id == req.auth._id;
  if (!authorized) {
    return res.status(403).json({
      error: "User is not authorized!",
    });
  }
};
export default { signin, signout, requireSignin, hasAuthorization };

