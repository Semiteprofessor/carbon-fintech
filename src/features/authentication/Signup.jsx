import styled from "styled-components";
import Logo from "../../ui/Logo";
import SignupForm from "./SignupForm";
import Heading from "../../ui/Heading";

const StyledSignup = styled.div`
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
  margin-top: 3rem;
`;

const Left = styled.div`
  flex: 1;
  background-image: url("./images/signup.png");
  background-size: cover;
  background-position: center;
  margin-right: 100px;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
  text-align: center;
  padding: 20px 100px 20px 100px;
`;

const Signup = () => {
  return (
    <StyledSignup>
      <StyledLogo>
        <Logo /> <LeftContent />
      </StyledLogo>
      <Wrapper>
        <Left />
        <Right>
          <Heading as="h1">Sign Up for an Account</Heading>
          <Heading as="h4">
            Let’s get you all set up for the Carbon experience
          </Heading>
          <SignupForm />
        </Right>
      </Wrapper>
    </StyledSignup>
  );
};

export default Signup;
