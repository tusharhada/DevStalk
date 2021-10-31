import express from "express";
import mongoose from "mongoose";

import projectModel from "../models/project.model.js";

const router = express.Router();

export const getProjects = async (req, res) => {
  const { page } = req.query;
  try {
    const LIMIT = 8;
    const startIndex = (Number(page) - 1) * LIMIT; // get the starting index of every page

    const total = await projectModel.countDocuments({});
    const projects = await projectModel
      .find()
      .sort({ _id: -1 })
      .limit(LIMIT)
      .skip(startIndex);

    //const projects = await projectModel.find()
    //res.send(projects.reverse().splice(0, 100))
    //res.status(200).json(projects)
    res.json({
      data: projects,
      currentPage: Number(page),
      numberOfPages: Math.ceil(total / LIMIT),
      total,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getProjectsBySearch = async (req, res) => {
  const { searchQuery, techStack } = req.query;
  try {
    const title = new RegExp(searchQuery, "i");
    //const projects = await projectModel.find({ $or: [ { title }, {techStack: { $in: techStack.split(',')} }] })
    const projects = await projectModel.find({
      $or: [{ title }, { techStack: { $in: techStack.split(",") } }],
    });
    res.json({ data: projects });
  } catch (err) {
    console.log(err);
    res.status(404).json({ message: err });
  }
};

export const getProject = async (req, res) => {
  const { id } = req.params;

  try {
    const Project = await projectModel.findById(id);
    res.status(200).json(Project);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getTrending = async (req, res) => {
  try {
    const projects = await projectModel.aggregate([
      {
        $addFields: { likes: { $size: { $ifNull: ["$likeCount", []] } } },
      },
      { $sort: { likeCount: -1 } },
    ]);
    res.json(projects);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getPlayoffs = async (req, res) => {
  try {
    const projects = await projectModel.find({ playoffs: "true" });
    res.status(200).json(projects);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const createProject = async (req, res) => {
  const project = req.body;
  const newProject = new projectModel({
    ...project,
    creator: req.userId,
    createdAt: new Date().toISOString(),
  });
  //    const { creator, logo, title, domain, tagline, images, description, video, github, website, techStack, docs } = req.body
  //    const newProject = new projectModel({ creator, logo, title, domain, tagline, images, description, video, github, website, techStack, docs })
  try {
    await newProject.save();
    res.status(201).json(newProject);
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};

export const updateProject = async (req, res) => {
  const { id } = req.params;
  const {
    creator,
    logo,
    title,
    domain,
    tagline,
    images,
    description,
    video,
    github,
    website,
    techStack,
    docs,
  } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No Project with id: ${id}`);

  const updatedProject = {
    creator,
    logo,
    title,
    domain,
    tagline,
    images,
    description,
    video,
    github,
    website,
    techStack,
    docs,
    _id: id,
  };

  await projectModel.findByIdAndUpdate(id, updatedProject, { new: true });

  res.json(updatedProject);
};

export const deleteProject = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No Project with id: ${id}`);

  await projectModel.findByIdAndRemove(id);

  res.json({ message: "Project deleted successfully." });
};

export const likeProject = async (req, res) => {
  const { id } = req.params;

  if (!req.userId) {
    return res.json({ message: "Unauthenticated" });
  }

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No Project with id: ${id}`);

  const project = await projectModel.findById(id);
  const index = project.likeCount.findIndex((id) => id === String(req.userId));

  if (index === -1) {
    project.likeCount.push(req.userId);
  } else {
    project.likeCount = project.likeCount.filter(
      (id) => id !== String(req.userId)
    );
  }

  const updatedProject = await projectModel.findByIdAndUpdate(id, project, {
    new: true,
  });
  res.status(200).json(updatedProject);
};

export default router;
