import Heading from "./Heading";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 10px 20px 10px 20px;
  background-color: #600aff;
  color: white;
`;

const Title = ({ children }) => {
  return (
    <Wrapper>
      <Heading as="h1">{children}</Heading>
    </Wrapper>
  );
};

export default Title;
