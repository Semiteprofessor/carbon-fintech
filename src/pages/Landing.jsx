import styled from "styled-components";
import Nav from "../ui/Nav";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  /* align-items: center;
  justify-content: space-between; */
`;

const Left = styled.div`
  height: 100vh;
  width: 50%;
  background-color: var(--color-grey-0);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Right = styled.div`
  height: 100vh;
  width: 50%;
  background-image: url("./images/img1.png");
  background-position: center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Landing = () => {
  return (
    <Container>
      <Nav />
      <Left>Hello</Left>
      <Right>Man</Right>
    </Container>
  );
};

export default Landing;
