import Form from "../../ui/Form";
import Input from "../../ui/Input";
import FormRow from "../../ui/FormRow";
import Button from "../../ui/Button";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: left;
  margin-bottom: 1rem;
  gap: 0.5em;
`;

const DontHave = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5em;
  margin-top: 1em;
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

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2em;
`;

const SignupForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call API to login with email and password
    console.log("Login with email:", email, "password:", password);
    if (!email || !password) return;

    setEmail("");
    setPassword("");
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <FormRow label="Email Address">
          <Input
            type="email"
            id="email"
            autoComplete="email"
            placeholder="Enter Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            //   disabled={isLoading}
          />
        </FormRow>

        <FormRow label="Password">
          <Input
            type="password"
            id="password"
            autoComplete="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            //   disabled={isLoading}
          />
        </FormRow>
      </Row>
      <Row>
        <FormRow label="Email Address">
          <Input
            type="email"
            id="email"
            autoComplete="email"
            placeholder="Enter Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            //   disabled={isLoading}
          />
        </FormRow>

        <FormRow label="Password">
          <Input
            type="password"
            id="password"
            autoComplete="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            //   disabled={isLoading}
          />
        </FormRow>
      </Row>
      <Row>
        <FormRow label="Email Address">
          <Input
            type="email"
            id="email"
            autoComplete="email"
            placeholder="Enter Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            //   disabled={isLoading}
          />
        </FormRow>

        <FormRow label="Password">
          <Input
            type="password"
            id="password"
            autoComplete="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            //   disabled={isLoading}
          />
        </FormRow>
      </Row>

      <Container>
        <Label>I agree to Carbon </Label>
        <ForgotPassword to="/terms"> Terms and Conditions</ForgotPassword>
      </Container>

      <Button
        type="submit"
        title="Sign up"
        backgroundColor="#2B007A"
        color="#fff"
        padding="12px 24px 12px 24px"
        borderRadius="5px"
        width="100%"
        path="/otp"
      />

      <DontHave>
        <Label>Already have an account?</Label>
        <ForgotPassword to="/login">Login</ForgotPassword>
      </DontHave>
    </Form>
  );
};

export default SignupForm;
