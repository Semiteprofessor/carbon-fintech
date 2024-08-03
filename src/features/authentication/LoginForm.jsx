import { useState } from "react";

import Form from "../../ui/Form";
import Input from "../../ui/Input";
import FormRowVertical from "../../ui/FormRowVertical";

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
          type="emial"
          id="email"
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        //   disabled{isLoading}
        />
      </FormRowVertical>
    </Form>
  );
};

export default LoginForm;
