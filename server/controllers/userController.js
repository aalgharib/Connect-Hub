import User from "../models/userModel.js";

//Get all users
const list = async (req, res) => {
  try {
    let users = await User.find().select("name email updated created");
    res.json(users);
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err),
    });
  }
};

// Register new user
const registerUser = async (req, res, next) => {
  const user = new User(req.body);
  try {
    await user.save();
    return res.status(200).json({
      message: "New user registered successfully!",
    });
  } catch (err) {
    return res.status(400).json({
      //   error: errorHandler.getErrorMessage(err),
    });
  }
};

const findUserById = async (req, res, next, id) => {
  try {
    let user = await User.findById(id);
    if (!user)
      return res.status("400").json({
        error: "User not found",
      });
    req.profile = user;
    next();
  } catch (err) {
    return res.status("400").json({
      error: "Could not retrieve user",
    });
  }
};


const findUserProfile = (req, res) => {
  // eliminate password related fields before sending the user object
  req.profile.hashedPassword = undefined;
  req.profile.salt = undefined;
  return res.json(req.profile);
};


const update = async (req, res) => {
  /*try {
    let user = req.profile;
    user = extend(user, req.body);
    user.updated = Date.now();
    await user.save();
    user.hashed_password = undefined;
    user.salt = undefined;
    res.json(user);
  } catch (err) {
    return res.status(400).json({
      //   error: errorHandler.getErrorMessage(err),
    });
  }*/
  try {
    const updateUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json({ user: updateUser, message: 'User updated successfully.' });
} catch (error) {
    console.log(error);
    res.status(500).json(error);
}
};

const read = (req, res) => {
  req.profile.hashed_password = undefined;
  req.profile.salt = undefined;
  return res.json(req.profile);
};

const deleteUser = async (req, res, next) => {
 /* let user = req.profile;
  user.remove((err, deletedUser) => {
    if (err) {
      return res.status(400).json({
        // error: errorHandler.getErrorMessage(err),
      });
        deletedUser.hashedPassword = undefined;
    user.salt = undefined;
    res.json(user);
    ///
    res.status(200).json({
      message: "User deleted successfully!",
    });
  }); };
*/
      try {
        const deletedUser = await User.findByIdAndDelete(req.params.id);
        res.json({ user: deletedUser, message: 'User deleted successfully.' });
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
    }
  

export default { registerUser, findUserById, read, list, deleteUser, update };
