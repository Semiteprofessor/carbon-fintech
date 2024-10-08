import { Link } from "react-router-dom";
import styled from "styled-components";
import PropTypes from "prop-types";

const ButtonStyle = styled.button`
  cursor: pointer;
`;

const Button = ({
  type,
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
    <ButtonStyle
      onClick={onClick}
      type={type}
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
  );
};

Button.propTypes = {
  type: PropTypes.string,
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
  title: PropTypes.string.isRequired,
  border: PropTypes.string,
  borderRadius: PropTypes.string,
  onClick: PropTypes.func,
  padding: PropTypes.string,
  outline: PropTypes.bool,
  fontWeight: PropTypes.string,
  width: PropTypes.string,
};

export default Button;
