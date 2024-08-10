import { useEffect, useState } from "react";

import Form from "../../ui/Form";
import Input from "../../ui/Input";
import FormRowVertical from "../../ui/FormRowVertical";
import Button from "../../ui/Button";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const DontHave = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5em;
  margin-top: 1em;
`;

const StyledCheckbox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5em;
  margin: 0.5em 0.5em 1em 0;
`;

const Label = styled.span`
  font-weight: 500;
  font-size: 16px;
  color: #333;
`;

const ForgotPassword = styled(Link)`
  font-weight: 500;
  font-size: 16px;
  color: #333;
  text-decoration: none;
  color: blue;
`;

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login, isAuthenticated } = useAuth();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login with email:", email, "password:", password);

    if (email && password) login(email, password);
    setEmail("");
    setPassword("");
  };

  useEffect(() => {
    if (isAuthenticated) navigate("/dashboard", { replace: true });
  }, [isAuthenticated, navigate]);

  return (
    <Form onSubmit={handleSubmit}>
      <FormRowVertical label="Email Address">
        <Input
          type="email"
          id="email"
          autoComplete="email"
          placeholder="Enter Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          //   disabled={isLoading}
        />
      </FormRowVertical>

      <FormRowVertical label="Password">
        <Input
          type="password"
          id="password"
          autoComplete="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          //   disabled={isLoading}
        />
      </FormRowVertical>

      <Container>
        <StyledCheckbox>
          <Label>Remember Me</Label>
          <Input type="checkbox" />
        </StyledCheckbox>
        <ForgotPassword to="/forgot-password">Forgot Password?</ForgotPassword>
      </Container>

      <Button
        type="submit"
        title="Log in"
        backgroundColor="#2B007A"
        color="#fff"
        padding="12px 24px 12px 24px"
        borderRadius="5px"
        width="100%"
      />

      <DontHave>
        <Label>Don't have an account?</Label>
        <ForgotPassword to="/sign-up">Sign up</ForgotPassword>
      </DontHave>
    </Form>
  );
};

export default LoginForm;
