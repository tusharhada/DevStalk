import React from "react";
import Card from "Components/Project/ProjectCard";

const ProjectList = ({ projects }) => {
  return (
    <ol className="slide-grid">
      {projects &&
        projects.map((project) => (
          <Card
            key={project._id}
            projectId={project._id}
            userId={project.creator}
            userName={project.creatorName}
            projectDomain={project.domain}
            projectTitle={project.title}
            projectLogo={project.logo}
            projectTagline={project.tagline}
            projectImage={project.images[0]}
            projectLikes={project.likeCount}
            projectViews={project.viewCount}
          />
        ))}
    </ol>
  );
};

export default ProjectList;
