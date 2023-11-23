import mongoose from "mongoose";
import crypto from "crypto";
//const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
  },
  email: {
    type: String,
    trim: true,
    unique: "Email already exists",
    match: [/.+\@.+\..+/, "Please fill a valid email address"],
    required: "Email is required",
  },
  created: {
    type: Date,
    default: Date.now,
  },
  updated: {
    type: Date,
    default: Date.now,
  },
  hashed_password: {
    type: String,
    required: "Password is required",
  },
  salt: String,
});
UserSchema.virtual("password")
  .set(function (password) {
    this._password = password;
    this.salt = this.makeSalt();
    this.hashed_password = this.encryptPassword(password);
    //this.hashed_password = password;
    console.log(this.hashed_password);
  })
  .get(function () {
    return this._password;
  });
UserSchema.path("hashed_password").validate(function (v) {
  if (this._password && this._password.length < 6) {
    this.invalidate("password", "Password must be at least 6 characters.");
  }
  if (this.isNew && !this._password) {
    this.invalidate("password", "Password is required");
  }
}, null);
UserSchema.methods = {
  authenticate: function (plainText) {
    return this.encryptPassword(plainText) === this.hashed_password;
  },
  encryptPassword: function (password) {
    if (!password) return "";
    try {
      return crypto
        .createHmac("sha1", this.salt)
        .update(password)
        .digest("hex");
    } catch (err) {
      console.log(err);
      return "";
    }
  },
  makeSalt: function () {
    return Math.round(new Date().valueOf() * Math.random()) + "";
  },
};
//module.exports = mongoose.model('User', UserSchema);
export default mongoose.model("User", UserSchema);

// import mongoose from "mongoose";
// import crypto from "crypto";
// const Schema = mongoose.Schema;

// //Defining a user schema
// const userSchema = new Schema({
//   name: {
//     type: String,
//     trim: true,
//     required: "User Name is required",
//   },
//   email: {
//     type: String,
//     trim: true,
//     unique: "Email already exists",
//     match: [/.+\@.+\..+/, "Please fill a valid email address"],
//     required: "Email is required",
//   },
//   hashedPassword: {
//     type: String,
//     required: "Password is required",
//   },
//   salt: {
//     type: String,
//   },
// }, { timestamps: true });

// // Virtual property for handling plain text password
// userSchema
//   .virtual("password")
//   .set(function (password) {
//     this._password = password;
//     this.salt = this.makeSalt();
//     this.hashedPassword = this.encryptedPassword(password);
//   })
//   .get(function () {
//     return this._password;
//   });

// //Methods to authenticate a user by comapring an encrypted password
// userSchema.methods = {
//   authenticate: function (plainText) {
//     return this.encryptedPassword(plainText) === this.hashedPassword;
//   },
//   //This method will generate the encrypted password
//   encryptedPassword: function (password) {
//     if (!password) return "";
//     try {
//       return crypto
//         .createHmac("sha1", this.salt)
//         .update(password)
//         .digest("hex");
//     } catch (err) {
//       return "";
//     }
//   },
//   //This method will generate a salt for password encryption
//   makeSalt: function () {
//     return Math.round(new Date().valueOf() * Math.random()) + "";
//   },
// };

// //validating the password field
// userSchema.path("hashedPassword").validate(function (v) {
//   if (this.hashedPassword && this._password.length < 6) {
//     this.invalidate("password", "Password must be at least 6 characters long.");
//   }
//   if (this.isNew && !this._password) {
//     this.invalidate("password", "Password is required.");
//   }
// }, null);

// export default mongoose.model("User", userSchema);
