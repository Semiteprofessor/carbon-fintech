import { useState } from "react";

import Form from "../../ui/Form";
import Input from "../../ui/Input";
import FormRowVertical from "../../ui/FormRowVertical";
import Button from "../../ui/Button";

const LoginForm = () => {
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

      <Button
        type="submit"
        title="Log in"
        backgroundColor="#2B007A"
        color="#fff"
        padding="12px 24px 12px 24px"
        borderRadius={5}
        width="100%"
      />
    </Form>
  );
};

export default LoginForm;
