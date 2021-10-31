import {
  START_LOADING,
  END_LOADING,
  FETCH_PROJECT,
  FETCH_ALL,
  FETCH_BY_SEARCH,
  CREATE,
  UPDATE,
  DELETE,
  LIKE,
} from "../constants/actionTypes";

import * as api from "../api/index.js";

export const getProject = (id) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.fetchProject(id);
    dispatch({ type: FETCH_PROJECT, payload: { project: data } });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error.message);
  }
};

export const getTrendingProject = () => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.fetchTrendingProjects();
    dispatch({
      type: FETCH_ALL,
      payload: { data },
    });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error.message);
  }
};

export const getProjects = (page) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const {
      data: { data, currentPage, numberOfPages },
    } = await api.fetchProjects(page);
    dispatch({
      type: FETCH_ALL,
      payload: { data, currentPage, numberOfPages },
    });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error.message);
  }
};

export const getProjectsBySearch = (searchQuery) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const {
      data: { data },
    } = await api.fetchProjectsBySearch(searchQuery);

    dispatch({ type: FETCH_BY_SEARCH, payload: { data } });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};

export const createProject = (project, history) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.createProject(project);

    history.push("/");

    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateProject = (id, project) => async (dispatch) => {
  try {
    const { data } = await api.updateProject(id, project);

    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const likeProject = (id) => async (dispatch) => {
  try {
    const { data } = await api.likeProject(id);

    dispatch({ type: LIKE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deleteProject = (id) => async (dispatch) => {
  try {
    await api.deleteProject(id);

    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};
