import React from "react";
import "./CreateProject.scss";
import BreadCrumbs from "../../../components/BreadCrumbs";
import Input from "../../../components/Input";
import InputSelector from "../../../components/InputSelector";
import Header from "../../../components/Headers";
import SideNav from "../../../components/SideNav";
const CreateProject = () => {
  const breadData = [
    { path: "projects", text: "Project " },
    { path: "createproject", text: "Create Project" },
  ];
  const databaseType = ["", "Oracle DB", "PostgreSQL", "AWS S3"];
  return (
    
    <div className="create-project-container">
      <BreadCrumbs breadData={breadData} />
      <div className="create-project">
        <h3>Create Projects</h3>
        <Input inputType="text" labelText="Project Name" />
        <InputSelector
          labelText="Source Database Type"
          optionValue={databaseType}
        />
        <InputSelector
          labelText="Target Database Type"
          optionValue={databaseType}
        />
      </div>
    </div>
  );
};
export default CreateProject;
