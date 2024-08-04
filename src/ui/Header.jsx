import React from "react";
import styled from "styled-components";
import UserAvatar from "../features/authentication/UserAvatar";

const StyledHeader = styled.header`
  background-color: #fff;
  padding: 20px 100px 20px 100px;

  display: flex;
  gap: 2.4rem;
  align-items: center;
  justify-content: flex-end;
`;
const Header = () => {
  return (
    <StyledHeader>
      <UserAvatar />
    </StyledHeader>
  );
};

export default Header;
