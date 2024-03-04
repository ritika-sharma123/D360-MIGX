import React from "react";
import Button from "./../../components/Button";
import "./index.scss";
const Projects = () => {
  const addNewProject = () => {
    console.log("hi");
  };
  return (
    <>
      <div className="project-container">
        <div className="project-heading-part">
          <h2>Project</h2>
          <Button
            clickHandler={addNewProject}
            buttonText="Add New Project"
            background="white"
            color="black"
          />
        </div>
      </div>
    </>
  );
};

export default Projects;
