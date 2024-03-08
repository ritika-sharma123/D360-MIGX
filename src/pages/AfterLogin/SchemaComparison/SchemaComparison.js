import React from "react";
import Button from "../../../components/Button";
import { useNavigate } from "react-router-dom";
// import "./index.scss";
import Table from "../../../components/Table";
import "./SchemaComparison.scss";
import Union from "../../../images/Union.png";
import styled from "styled-components";
import SchemaTable from "../../../components/SchemaTable";
const SchemaComparison = () => {
  const TableContainer = styled.table``;
  const tableData = [
    {
      Schema: "demodb",
      Table: "image",
      Column: "body",
      SourceDatatype: "blob",
      TargetDatatype: "Bytea",
    },
    {
      Schema: "demodb",
      Table: "image",
      Column: "body",
      SourceDatatype: "blob",
      TargetDatatype: "Bytea",
    }, {
      Schema: "demodb",
      Table: "image",
      Column: "body",
      SourceDatatype: "blob",
      TargetDatatype: "Bytea",
    }, {
      Schema: "demodb",
      Table: "image",
      Column: "body",
      SourceDatatype: "blob",
      TargetDatatype: "Bytea",
    }, {
      Schema: "demodb",
      Table: "image",
      Column: "body",
      SourceDatatype: "blob",
      TargetDatatype: "Bytea",
    }
  ];
  const naviGate = useNavigate();
  const addNewProject = () => {
    naviGate("/createproject");
  };
  return (
    <>
      <div className="project-container">
        {/* <Header/>
        <SideNav/> */}
        <div className="project-heading-part">
          <h2>Schema Comparison</h2>

        </div>
        <div className="table-container">
          <SchemaTable data={tableData} />
        </div>
      </div>
    </>
  );
};

export default SchemaComparison;
