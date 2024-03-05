import React from "react";
import Button from "../../../components/Button";
import { useNavigate } from "react-router-dom";
import "./index.scss";
import Table from "../../../components/Table";

const Projects = () => {
  const tableData = [
    {
      ProjectName: "Project1",
      Description: "Description1",
      SourceDB: "Source DB",
      TargetDB: "target DB",
    },
    {
      ProjectName: "Project2",
      Description: "Description2",
      SourceDB: "Source DB",
      TargetDB: "target DB",
    },
    {
      ProjectName: "Project3",
      Description: "Description3",
      SourceDB: "Source DB",
      TargetDB: "target DB",
    },
  ];
  const naviGate = useNavigate();
  const addNewProject = () => {
    naviGate("/createproject");
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
        <div className="table-container">
          <Table data={tableData} />
        </div>
      </div>
    </>
  );
};

export default Projects;
