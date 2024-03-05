import React from "react";
import "./Target.scss";
import BreadCrumbs from "../../../components/BreadCrumbs";
import Input from "../../../components/Input";
import InputSelector from "../../../components/InputSelector";
import Header from "../../../components/Headers";
import SideNav from "../../../components/SideNav";
import { useForm } from "react-hook-form";
import Button from "../../../components/Button";
const Target = () => {
  const breadData = [
    { path: "projects", text: "Project " },
    { path: "targets", text: "Target" },
  ];
  const databaseType = ["", "Oracle DB", "PostgreSQL", "AWS S3"];
  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm({
    criteriaMode: "all",
  });
  return (
    
    <div className="target-container">
      <BreadCrumbs breadData={breadData} />
      <div className="target">
        <h3>Target Database: Redshift</h3>
        <Input inputType="text" labelText="Server name" reference={register("servername", {
                required: "Server name field is required.",
                name: "servername",
                pattern: {
                  value: /^\S*$/,
                  message: `Please enter valid text`,
                },
              })} />
        <Input inputType="text" labelText="Server port"   reference={register("serverport", {
                required: "Server port field is required.",
                name: "serverport",
                pattern: {
                  value: /^\S*$/,
                  message: `Please enter valid text`,
                },
              })}/>
      
        <InputSelector
          labelText="Database name"
          optionValue={databaseType}
        />
        <Input inputType="text" labelText="User name"  reference={register("username", {
                required: "Username field is required.",
                name: "username",
                pattern: {
                  value: /^\S*$/,
                  message: `Please enter valid text`,
                },
              })}/>
        <Input inputType="password" labelText="Password" reference={register("password", {
                required: "Password field is required.",
                name: "password",
                pattern: {
                  value: /^\S*$/,
                  message: `Please enter valid text`,
                },
              })}/>
                <div className="target-button-container">
          <Button buttonText="Next" background="blue" color="white" />
          <Button buttonText="Previous" background="white" color="black" />
          <Button buttonText="Cancel" background="white" color="black" />
        </div>
      </div>
    </div>
  );
};
export default Target;
