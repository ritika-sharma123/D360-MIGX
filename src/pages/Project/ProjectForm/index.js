import React from "react";
import "./index.scss";
import Input from "./../../../components/Input";
import InputSelector from "../../../components/InputSelector";

const ProjectForm = () => {
  const databaseType = ["", "Oracle DB", "PostgreSQL", "AWS S3"];
  return (
    <div className="create-project-container">
      <div className="create-project">
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
export default ProjectForm;
