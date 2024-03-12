import React from "react";
import "./index.scss";
import TextAreaInput from "../Textarea";

const Summary = ({
  summary = "SOURCE ORACLE PERSON: DIM_PERSON",
  onChange,
}) => {
  return (
    <>
      <details className="detail-class">
        <summary className="summary-class">{summary}</summary>
        <p>
          <h4>Source SQL</h4>
          <TextAreaInput name={"nnn"} onChange={onChange} />
        </p>
      </details>
    </>
  );
};

export default Summary;
