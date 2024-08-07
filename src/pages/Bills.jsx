import styled from "styled-components";
import Title from "../ui/Title";
import BillBoard from "../ui/BillBoard";
import Heading from "../ui/Heading";
import BillContent from "../ui/BillContent";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  height: 100vh;
`;

const BillsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
  padding: 20px;
  background-color: #fff;
  gap: 10px;
`;

const Right = styled.div`
  flex: 1;
`;

const Bills = () => {
  return (
    <Wrapper>
      <Title>Bills</Title>
      <BillBoard />
      <BillsContainer>
        <Left>
          <Heading as="h1">Bills Payment</Heading>
          <BillContent />
        </Left>
        <Right></Right>
      </BillsContainer>
    </Wrapper>
  );
};

export default Bills;
