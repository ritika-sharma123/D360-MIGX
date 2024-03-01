import React from "react";
import styled from "styled-components";
import "./index.scss";
import Union from "../../images/Union.png";
const ButtonContainer = styled.div`
  background-color: ${(props) =>
    props.background ? props.background : "white"};
  padding: ${(props) => (props.padding ? props.padding : "10px")};
`;
const ButtonDiv = styled.div`
  color: ${(props) => (props.color ? props.color : "black")};
`;
const Button = ({
  clickHandler,
  buttonText,
  width,
  background,
  padding,
  color,
}) => {
  return (
    <>
      <ButtonContainer
        className="button-container"
        width={width}
        background={background}
        padding={padding}
        color={color}
      >
        <img src={Union} alt="" width="15" height="15" />
        <ButtonDiv onClick={clickHandler} color={color} className="button-text">
          {buttonText}
        </ButtonDiv>
      </ButtonContainer>
    </>
  );
};

export default Button;
