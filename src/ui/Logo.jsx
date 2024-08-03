import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)``;

const StyledLogo = styled.span`
  font-size: 36px;
  font-weight: bold;
  color: #4300c2;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

const Icon = styled.img`
  width: 30px;
  height: 30px;
`;

const Logo = () => {
  return (
    <StyledLink to="/">
      <StyledLogo>
        <Icon src="./images/logo.png" />
        Carbon
      </StyledLogo>
    </StyledLink>
  );
};

export default Logo;
