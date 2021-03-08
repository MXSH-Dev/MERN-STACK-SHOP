import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSechema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timesteamps: true,
  }
);

userSechema.methods.matchPassword = async (enteredPassword, hash) => {
  // console.log(hash);
  return await bcrypt.compare(enteredPassword, hash);
};

userSechema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

const User = mongoose.model("User", userSechema);

export default User;
