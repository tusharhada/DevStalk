import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    id: { type: String },
    location: { type: String, default: "Jaipur,Rajasthan" },
    teams: { type: [String], default: [] },
    username: { type: String },
    userTitle: {
      type: String,
      default: "UI Designer, love something simple and clean",
    },
    organization: {
      type: String,
      default: "Jaipur Engineering College and Research Centre",
    },
    designation: { type: String, default: "Network Engineer" },
    bio: {
      type: String,
      default:
        "HHere to bring change to developer community by putting my ideas out.Here to bring change to developer community by putting my ideas out.Here to bring change to developer community by putting my ideas out.Here to bring change to developer community by putting my ideas out.Here to bring change to developer community by putting my ideas out.Here to bring change to developer community by putting my ideas out.Here to bring change to developer community by putting my ideas out.ere to bring change to developer community by putting my ideas out.",
    },
    avatar: { type: String },
    linkedin: { type: String, default: "www.linked.in" },
    github: { type: String, default: "www.github.com" },
    youtube: { type: String, default: "www.youtube.com" },
    twitter: { type: String, default: "www.twitter.com" },
    website: { type: String, default: "www.my.com" },
    devto: { type: String, default: "www.devto.com" },
    medium: { type: String, default: "www.medium.com" },
    hashnode: { type: String, default: "www.hashnode.com" },
    instagram: { type: String, default: "www.instagram.com" },
    facebook: { type: String, default: "www.facebook.com" },
    skills: {
      type: [String],
      default: ["UI Designer", "UX Designer", "FrontEnd Developer"],
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
