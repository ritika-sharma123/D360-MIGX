import React from "react";
import styled from "styled-components";
import Label from "../Label";

const TextArea = styled.textarea`
  width: 100%;
  min-height: 150px;
  height: auto;
  overflow-y: scroll;
  box-sizing: border-box;
  margin-top: 10px;
  padding: 8px 12px 8px 12px;
  border: 1px solid #d9d9d9;
  outline: none;
  resize: none;
`;

const TextAreaContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`;

const TextAreaInput = ({ name, onChange }) => {
  return (
    <TextAreaContainer>
      <TextArea
        placeholder="Enter"
        onChange={onChange}
        name={name}
        value={`SELECT column_name,
        CASE
          WHEN condition THEN 'Result_1'
          WHEN condition THEN 'Result_2'
          ELSE 'Result_3'
        END
      FROM table_name;
      SELECT column_name,
        CASE
          WHEN condition THEN 'Result_1'
          WHEN condition THEN 'Result_2'
          ELSE 'Result_3'
        END
      FROM table_name;`}
      />
    </TextAreaContainer>
  );
};

export default TextAreaInput;
