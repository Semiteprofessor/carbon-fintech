import styled from "styled-components";
import Logo from "../../ui/Logo";
import LoginForm from "./LoginForm";
import Heading from "../../ui/Heading";

const StyledLogin = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledLogo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 0 8rem;
`;

const LeftContent = styled.div``;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 7rem;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 40px;
  text-align: center;
  padding: 20px 100px 20px 100px;
`;
const Right = styled.div`
  flex: 1;
  background-image: url("./images/login.png");
  background-size: cover;
  background-position: center;
  margin-right: 100px;
`;

const Login = () => {
  return (
    <StyledLogin>
      <StyledLogo>
        <Logo /> <LeftContent />
      </StyledLogo>
      <Wrapper>
        <Left>
          <Heading as="h1">Log in to your Account</Heading>
          <Heading as="h4">
            Log in to you Account to continue the Carbon experience
          </Heading>
          <LoginForm />
        </Left>
        <Right />
      </Wrapper>
    </StyledLogin>
  );
};

export default Login;
