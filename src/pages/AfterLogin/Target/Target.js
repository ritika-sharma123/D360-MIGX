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
        <InputSelector labelText="Server Name" optionValue={databaseType} />
        <InputSelector labelText="Server Port" optionValue={databaseType} />
        <InputSelector labelText="Database Name" optionValue={databaseType} />
        <InputSelector labelText="User Name" optionValue={databaseType} />
        <div className="target-button-container">
          {/* <Button buttonText="Next" background="blue" color="white" />
          <Button buttonText="Previous" background="white" color="black" />
          <Button buttonText="Cancel" background="white" color="black" /> */}
        </div>
      </div>
    </div>
  );
};
export default Target;
