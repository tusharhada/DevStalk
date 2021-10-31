import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:8081" });

//const url = 'http://localhost:8081/projects'

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }
  return req;
});

export const createProject = (newProject) => API.post("/projects", newProject);
export const deleteProject = (id) => API.delete(`/projects/${id}`);
export const updateProject = (id, updatedProject) =>
  API.patch(`/projects/${id}`, updatedProject);

export const fetchProject = (id) => API.get(`/projects/${id}`);
export const fetchProjects = (page) => API.get(`/projects?page=${page}`);
export const fetchProjectsBySearch = (searchQuery) =>
  API.get(
    `/projects/search?searchQuery=${searchQuery.search || ""}&techStack=${
      searchQuery.techStack
    }`
  );
export const fetchTrendingProjects = () => API.get(`/projects/trending`);

export const likeProject = (id) => API.patch(`/projects/${id}/likeProject`);

export const fetchUser = (id) => API.get(`/user/${id}`);
export const fetchUserProject = (id) => API.get(`/user/${id}/projects`);
export const fetchUserLikedProject = (id) =>
  API.get(`/user/${id}/likedProjects`);
export const updateUser = (id, updatedUser) =>
  API.patch(`/user/${id}`, updatedUser);

export const signIn = (formData) => API.post("/user/signin", formData);
export const signUp = (formData) => API.post("/user/signup", formData);
