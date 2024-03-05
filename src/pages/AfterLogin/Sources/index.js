import React from "react";
import "./index.scss";
import InputSelector from "../../../components/InputSelector";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
const Sources = () => {
  const databaseType = ["", "Oracle DB", "PostgreSQL", "AWS S3"];
  return (
    <div className="source-container">
      <h2>Source Database: Oracle</h2>
      <div>
        <InputSelector labelText="Server Name" optionValue={databaseType} />
        <InputSelector labelText="Server Port" optionValue={databaseType} />
        <InputSelector labelText="Database Name" optionValue={databaseType} />
        <InputSelector labelText="User Name" optionValue={databaseType} />
        <Input inputType="text" labelText="Password" />
      </div>
    </div>
  );
};

export default Sources;
