import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ButtonStyle = styled.button`
  list-style: none;
  text-decoration: none;
`;

const Button = ({
  path,
  color,
  backgroundColor,
  title,
  border,
  borderRadius,
  onClick,
  padding,
  outline,
  fontWeight,
  width,
}) => {
  return (
    <Link to={path}>
      <ButtonStyle
        onClick={onClick}
        style={{
          padding,
          outline,
          backgroundColor,
          color,
          border,
          fontWeight,
          width,
          borderRadius,
        }}
      >
        {title}
      </ButtonStyle>
    </Link>
  );
};

export default Button;
