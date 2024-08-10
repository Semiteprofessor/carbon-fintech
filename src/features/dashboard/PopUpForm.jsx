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

const PopUpForm = ({ title }) => {
  const [amount, setAmount] = useState("");
  const [walletId, setWalletId] = useState("");
  const [account, setAccount] = useState("");
  const [receivingAccount, setReceivingAccount] = useState("");

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
          placeholder="Enter Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          //   disabled={isLoading}
        />
      </FormRowVertical>

      <FormRowVertical
        label={`${
          title === "Top Up"
            ? "Wallet ID"
            : title === "Send"
            ? "Account"
            : "Receiving Account"
        }`}
      >
        <Input
          type={`${
            title === "Top Up"
              ? "walletId"
              : title === "Send"
              ? "account"
              : "receivingAccount"
          }`}
          id={`${
            title === "Top Up"
              ? "walletId"
              : title === "Send"
              ? "account"
              : "receivingAccount"
          }`}
          autoComplete={`${
            title === "Top Up"
              ? "walletId"
              : title === "Send"
              ? "account"
              : "receivingAccount"
          }`}
          placeholder={`${
            title === "Top Up"
              ? "Enter Wallet ID"
              : title === "Send"
              ? "Enter Account"
              : "Enter Receiving Account"
          }`}
          value={`${
            title === "Top Up"
              ? walletId
              : title === "Send"
              ? account
              : receivingAccount
          }`}
          onChange={
            title === "Top Up"
              ? (e) => setWalletId(e.target.value)
              : title === "Send"
              ? (e) => setAccount(e.target.value)
              : (e) => setReceivingAccount(e.target.value)
          }
          //   disabled={isLoading}
        />
      </FormRowVertical>

      <Button
        type="submit"
        title="Proceed"
        backgroundColor="#2B007A"
        color="#fff"
        padding="12px 24px 12px 24px"
        borderRadius="5px"
        width="100%"
      />

      <DontHave>
        <Label>Your daily withdrawal limit is</Label>
        <Limit>₦50,000</Limit>
      </DontHave>
    </Form>
  );
};

export default PopUpForm;
