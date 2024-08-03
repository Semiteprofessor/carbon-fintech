import styled from "styled-components";
import Logo from "../../ui/Logo";

const StyledLogin = styled.div`
  text-align: center;
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
  padding: 2rem;
`;
const Right = styled.div`
  flex: 1;
  padding: 2rem;
`;

const Login = () => {
  return (
    <StyledLogin>
      <StyledLogo>
        <Logo /> <LeftContent />
      </StyledLogo>
      <Wrapper>
        <Left>
          <form>
            <input type="text" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button type="submit">Login</button>
          </form>
        </Left>
        <Right>
          <p>Don't have an account?</p>
          <button>Sign Up</button>
        </Right>
      </Wrapper>
    </StyledLogin>
  );
};

export default Login;
