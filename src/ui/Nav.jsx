import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

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

const Left = styled.span`
  font-size: 36px;
  font-weight: bold;
  color: #4300c2;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

const Logo = styled.img`
  width: 30px;
  height: 30px;
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
  &.active:link,
  &.active:visited {
    background-color: #4300c2;
    padding: 8px;
    border-radius: 4px;
    color: #fff;
  }
  list-style: none;
  text-decoration: none;
`;

const Right = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;
  gap: 20px;
`;
const Nav = () => {
  return (
    <Wrapper>
      <Left>
        <Logo src="./images/logo.png" />
        Carbon
      </Left>
      <Center>
        <List to="/">Home</List>
        <List to="/product">Product</List>
        <List to="/contact">Contact Us</List>
      </Center>
      <Right>
        <List to="/login">Login</List>
        <List to="/register">Sign Up</List>
      </Right>
    </Wrapper>
  );
};

export default Nav;
