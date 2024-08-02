import styled from "styled-components";

const Wrapper = styled.nav`
  position: absolute;
  top: 0;
  height: 118px;
  width: 100vw;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.span`
  font-size: 18px;
  font-weight: bold;
`;

const Center = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 20px;
`;

const List = styled.li`
  font-size: 14px;
  cursor: pointer;
  &:hover {
    color: #007bff;
  }
`;

const Right = styled.span`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 20px;
`;
const Nav = () => {
  return (
    <Wrapper>
      <Left>Carbon</Left>
      <Center>
        <List>Home</List>
        <List>Product</List>
        <List>Contact Us</List>
      </Center>
      <Right>
        <li>Sign In</li>
        <li>Sign Up</li>
      </Right>
    </Wrapper>
  );
};

export default Nav;
