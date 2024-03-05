import React from "react";
import "./Target.scss";
import BreadCrumbs from "../../../components/BreadCrumbs";
import Input from "../../../components/Input";
import InputSelector from "../../../components/InputSelector";
import Header from "../../../components/Headers";
import SideNav from "../../../components/SideNav";
const Target = () => {
  const breadData = [
    { path: "projects", text: "Project " },
    { path: "targets", text: "Target" },
  ];
  const databaseType = ["", "Oracle DB", "PostgreSQL", "AWS S3"];
  return (
    
    <div className="target-container">
      <BreadCrumbs breadData={breadData} />
      <div className="target">
        <h3>Target Database: Redshift</h3>
        <Input inputType="text" labelText="Server name" />
        <Input inputType="text" labelText="Server port" />
      
        <InputSelector
          labelText="Database name"
          optionValue={databaseType}
        />
        <Input inputType="text" labelText="User name" />
        <Input inputType="password" labelText="Password" />
      </div>
    </div>
  );
};
export default Target;
