import { Link } from "react-router-dom";
import styled from "styled-components";
import PropTypes from "prop-types";

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

Button.propTypes = {
  path: PropTypes.string.isRequired,
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
