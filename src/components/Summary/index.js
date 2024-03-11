import React from "react";
import "./index.scss";

const Summary = ({ summary = "SOURCE ORACLE PERSON: DIM_PERSON", detail }) => {
  return (
    <>
      <details className="detail-class">
        <summary className="summary-class">{summary}</summary>
        <p>
          <h4>Source SQL</h4>
          <pre>
            SELECT column_name(s) FROM table_name WHERE column_name operator ANY
            (SELECT column_name FROM table_name WHERE condition) SELECT
            column_name(s) (SELECT column_name FROM table_name WHERE condition);
            SELECT column_name(s) FROM table_name WHERE column_name operator ANY
            (SELECT column_name FROM table_name WHERE condition)
          </pre>
        </p>
      </details>
    </>
  );
};

export default Summary;
