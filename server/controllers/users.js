import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import UserModel from "../models/user.model.js";
import projectModel from "../models/project.model.js";

const secret = "test";

export const signin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const oldUser = await UserModel.findOne({ email });
    if (!oldUser)
      return res.status(404).json({ message: "User doesn't exist" });

    const isPasswordCorrect = await bcrypt.compare(password, oldUser.password);

    if (!isPasswordCorrect)
      return res.status(400).json({ message: "Invalid credentials" });
    const token = jwt.sign({ email: oldUser.email, id: oldUser._id }, secret, {
      expiresIn: "1h",
    });

    res.status(200).json({ result: oldUser, token });
  } catch (err) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const signup = async (req, res) => {
  const { email, password, firstName, lastName } = req.body;

  try {
    const oldUser = await UserModel.findOne({ email });
    if (oldUser)
      return res
        .status(400)
        .json({ message: "User already exists with email id" });

    const hashedPassword = await bcrypt.hash(password, 12);
    const result = await UserModel.create({
      email,
      password: hashedPassword,
      name: `${firstName} ${lastName}`,
      username: `@${firstName}`,
    });
    const token = jwt.sign({ email: result.email, id: result._id }, secret, {
      expiresIn: "1h",
    });

    res.status(201).json({ result, token });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
    console.log(error);
  }
};

export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id))
      return res.status(404).send(`No Project with id: ${id}`);

    const user = req.body;

    const updatedUser = { ...user, _id: id };
    await UserModel.findByIdAndUpdate(id, updatedUser, { new: true });
    res.json(updatedUser);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const getUser = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await UserModel.find({ _id: id });
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getMyProjects = async (req, res) => {
  const { id } = req.params;

  try {
    const projects = await projectModel.find({ creator: id });
    res.status(200).json(projects);
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const getLikedProjects = async (req, res) => {
  const { id } = req.params;
  try {
    const projects = await projectModel.find({ likeCount: id });
    res.status(200).json(projects);
  } catch (err) {
    res.json({ message: err.message });
  }
};
