import React from "react";
import styled from "styled-components";
import "./index.scss";
const TableContainer = styled.table``;
const Table = ({ data }) => {
  return (
    <>
      <TableContainer className="data-table">
        <tr>
          <th>ProjectName</th>
          <th>Description</th>
          <th>Source Database</th>
          <th>Target Database</th>
        </tr>
        {data.map((item, index) => {
          return (
            <tr>
              <td>{item.ProjectName}</td>
              <td>{item.Description}</td>
              <td>{item.SourceDB}</td>
              <td>{item.TargetDB}</td>
            </tr>
          );
        })}
      </TableContainer>
    </>
  );
};

export default Table;
