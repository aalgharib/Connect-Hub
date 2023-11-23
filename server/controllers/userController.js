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
const registerUser = async (req, res) => {
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

//Finding a user by ID
const findUserById = async (req, res, next, id) => {
  try {
    let user = await User.findById(id);
    if (!user)
      return res.status(400).json({
        error: "User not found",
      });
    req.profile = user;
    next();
  } catch (err) {
    return res.status(400).json({
      error: "Could not retrieve user",
    });
  }
};



//Updating a user profile
const update = async (req, res) => {
  try {
    const updateUser = await User.findByIdAndUpdate(req.params.userId, req.body, { new: true });
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


//Delete a user profile 
const deleteUser = async (req, res, next) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.userId);
    res.json({ user: deletedUser, message: 'User deleted successfully.' });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
}


export default { registerUser, findUserById, read, list, deleteUser, update };
