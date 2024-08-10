import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Logo from "./Logo";
import { useAuth } from "../context/AuthContext";

const Wrapper = styled.nav`
  position: absolute;
  padding: 20px 100px 20px 100px;
  top: 0;
  height: 118px;
  width: 100vw;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Center = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;
  gap: 45px;
`;

const List = styled(NavLink)`
  list-style: none;
  text-decoration: none;
  font-weight: 500;
`;

const Right = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;
  gap: 30px;
`;

const RightList = styled(NavLink)`
  /* &.active:link,
  &.active:visited, */
  &:hover {
    background-color: #2b007aa6;
    /* transition: cubic-bezier(0.075, 0.82, 0.165, 1); */
    box-shadow: 4px 4px 0 gray;
    /* transform: skewX(10deg); */
    padding: 8px;
    border-radius: 4px;
    color: #fff;
  }
  font-size: 16px;
  font-weight: 500;
  list-style: none;
  text-decoration: none;
`;

const Nav = () => {
  const { isAuthenticated } = useAuth();
  console.log(isAuthenticated);
  return (
    <Wrapper>
      <Logo />
      <Center>
        <List to="/">Home</List>
        <List to="/product">Product</List>
        <List to="/contact">Contact Us</List>
      </Center>
      <Right>
        <RightList to="/login">Login</RightList>
        <RightList to="/register">Sign Up</RightList>
      </Right>
    </Wrapper>
  );
};

export default Nav;
