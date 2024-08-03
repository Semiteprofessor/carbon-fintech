import styled from "styled-components";
import Nav from "../ui/Nav";
import Button from "../ui/Button";

const Wrapper = styled.div`
  display: flex;
  /* flex-direction: row;
  height: 100vh;
  width: 100%;
  align-items: center;
  justify-content: space-between; */
`;

const Left = styled.div`
  flex: 1;
  height: 100vh;
  background-color: var(--color-grey-0);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LeftContainer = styled.div`
  padding: 100px 0px 100px 100px;
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const LeftTitle = styled.h1`
  font-size: 48px;
  color: #2b007a;
  font-weight: bold;
  /* text-align: left; */
`;

const Lifestyle = styled.h1`
  font-size: 48px;
  background-color: #0c7a1adb;
  padding: 5px 15px 5px 15px;
  border-radius: 4px;
  color: #fff;
  font-weight: bold;
  width: max-content;
`;

const Description = styled.p`
  font-size: 24px;
  color: #4f4f4fc4;
  line-height: 40px;
  width: 632px;
`;

const Right = styled.div`
  flex: 1;
  height: 100vh;
  background-image: url("./images/img1.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const Landing = () => {
  return (
    <Wrapper>
      <Nav />
      <Left>
        <LeftContainer>
          <Title>
            <LeftTitle>Digital Banking For All</LeftTitle>
            <Lifestyle>Lifestyle</Lifestyle>
          </Title>
          <Description>
            Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa
            mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien.
          </Description>
          <Button
            path="/get-started"
            title="Get Started"
            backgroundColor="#2B007A"
            color="#fff"
            padding="12px 24px 12px 24px"
            borderRadius={5}
            border="none"
            fontWeight={500}
            width="max-content"
          />
        </LeftContainer>
      </Left>
      <Right />
    </Wrapper>
  );
};

export default Landing;
