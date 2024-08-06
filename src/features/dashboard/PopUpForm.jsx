import { useState } from "react";

import Form from "../../ui/Form";
import Input from "../../ui/Input";
import FormRowVertical from "../../ui/FormRowVertical";
import Button from "../../ui/Button";
import styled from "styled-components";
import { Link } from "react-router-dom";

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

const Limit = styled.span`
  font-weight: 500;
  font-size: 16px;
  color: #333;
  text-decoration: none;
  color: red;
`;

const PopUpForm = () => {
  const [amount, setAmount] = useState("");
  const [walletId, setWalletId] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!amount || !walletId) return;

    setAmount("");
    setWalletId("");
  };
  return (
    <Form onSubmit={handleSubmit}>
      <FormRowVertical label="Amount">
        <Input
          type="amount"
          id="amount"
          autoComplete="amount"
          placeholder="Enter AMount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          //   disabled={isLoading}
        />
      </FormRowVertical>

      <FormRowVertical label="walletId">
        <Input
          type="walletId"
          id="walletId"
          autoComplete="walletId"
          placeholder="Enter Wallet ID"
          value={walletId}
          onChange={(e) => setWalletId(e.target.value)}
          //   disabled={isLoading}
        />
      </FormRowVertical>

      <Button
        type="submit"
        title="Proceed"
        backgroundColor="#2B007A"
        color="#fff"
        padding="12px 24px 12px 24px"
        borderRadius={5}
        width="100%"
        path="/dashboard"
      />

      <DontHave>
        <Label>Your daily withdrawal limit is</Label>
        <Limit>₦50,000</Limit>
      </DontHave>
    </Form>
  );
};

export default PopUpForm;
