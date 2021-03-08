import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";

// auth user get token
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  res.send({ email, password });
});

export { authUser };
