import React from "react";
import styled from "styled-components";
import "./index.scss";
const TableContainer = styled.table``;
const SchemaTable = ({ data }) => {
  return (
    <>
      <TableContainer className="data-table">
      <tr>
          <th>Schema</th>
          <th>Table</th>
          <th>Column</th>
          <th>Source Datatype</th>
          <th>Target Datatype</th>
        </tr>
        {data.map((item, index) => {
          return (
            <tr>
             <td>{item.Schema}</td>
              <td>{item.Table}</td>
              <td>{item.Column}</td>
              <td>{item.SourceDatatype}</td>
              <td>{item.TargetDatatype}</td>
            </tr>
          );
        })}
      </TableContainer>
    </>
  );
};

export default SchemaTable;
