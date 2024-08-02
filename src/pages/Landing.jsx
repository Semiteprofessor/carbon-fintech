import styled from "styled-components";
import Nav from "../ui/Nav";

const Container = styled.div`
  height: 100vh;
  background-color: var(--color-grey-0);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Page = styled.div`
  height: 100%;
  background-color: var(--color-grey-0);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Landing = () => {
  return (
    <Container>
      <Nav />
      
    </Container>
  );
};

export default Landing;
