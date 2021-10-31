import { React, useEffect, useState, lazy, Suspense } from "react";
import { MainBody, SubBody } from "Components/Utilities/BodyType";
import { useDispatch, useSelector } from "react-redux";
import {
  getProjects,
  getProjectsBySearch,
  getTrendingProject,
} from "actions/projects";
import { useHistory, useLocation } from "react-router-dom";

import Filter from "./Filter";
import ProjectList from "./ProjectList";
import SearchElement from "Components/SearchElement";
import NoResults from "Components/Utilities/NoResults";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Gallery = ({ category }) => {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const history = useHistory();
  const query = useQuery();
  const [search, setSearch] = useState("");
  const [tags, setTags] = useState([]);
  const searchQuery = query.get("searchQuery");
  const [localProject, setLocalProject] = useState([]);

  useEffect(() => {
    console.log(category);
    if (category === "popular" || category === "following") {
      if (page) {
        dispatch(getProjects(page));
      }
    } else if (category === "recent") {
      dispatch(getTrendingProject());
    }
  }, [dispatch, page, category]);

  const { projects, isLoading } = useSelector((state) => state.projects);

  const loadMore = () => {
    setPage((page) => page + 1);
  };

  const LoadMore = () => {
    return (
      <button
        onClick={loadMore}
        className="primary_button primary_button--dark"
      >
        {isLoading ? "Loading more..." : "Load more projects"}
      </button>
    );
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const searchProject = () => {
    if (search.trim() || tags) {
      console.log(search);
      dispatch(getProjectsBySearch({ search, techStack: tags.join(",") }));
      history.push(
        `/projects/search?searchQuery=${search || ""}&techStack=${tags.join(
          ","
        )}`
      );
    }
  };

  const [filterType, setFilterType] = useState("all");
  const filterHandler = ({ filterType }) => {
    setFilterType(filterType);
  };

  // const [filteredProjects, setFilteredProjects] = useState(projects);
  // useEffect(() => {
  //   const temp = projects
  //     .filter((project) => {
  //       let state = false;
  //       project.techStack.filter((tag) => {
  //         if (tag === filterType) {
  //           state = true;
  //         }
  //       });
  //       return state;
  //     })
  //     .map((project) => {
  //       return project;
  //     });
  //   console.log(temp);
  //   if (filterType !== "all") {
  //     setFilteredProjects(temp);
  //   }
  // }, [filterType]);

  return (
    <>
      {category === "search" ? (
        <SearchElement
          searchProject={searchProject}
          handleChange={handleChange}
          totalResults={projects.length}
        />
      ) : (
        ""
      )}
      <MainBody className=" flex flex-col justify-center">
        <Filter category={category} filterHandler={filterHandler} />
        <SubBody>
          {projects.length !== 0 ? (
            <ProjectList projects={projects} />
          ) : (
            <NoResults searchValue={search} />
          )}
        </SubBody>
        <SubBody className="flex flex-row items-center justify-center">
          {projects.length !== 0 ? <LoadMore /> : ""}
        </SubBody>
      </MainBody>
    </>
  );
};

export default Gallery;
