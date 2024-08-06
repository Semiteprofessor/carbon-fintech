import styled from "styled-components";
import { IoWalletOutline } from "react-icons/io5";
import Heading from "./Heading";
import FormRowVertical from "./FormRowVertical";
import Input from "./Input";
import PopUpForm from "../features/dashboard/PopUpForm";
import { IoCloseCircle } from "react-icons/io5";
import { usePopUp } from "../context/PopUpContext";

const StyledPopUp = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  backdrop-filter: blur(5px);
`;

const Container = styled.div`
  position: relative;
  max-width: 544px;
  height: auto;
  width: 0 auto;
  background-color: white;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
`;

const Icon = styled.div`
  height: 11rem;
  width: 11rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #b2b2b2;
`;

const CloseBtn = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  border-radius: 50%;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.8s ease;
  cursor: pointer;
`;

const DashboardPopUp = ({ title }) => {
  const { topUp, send, withdraw, setTopUp, setSend, setWithdraw } = usePopUp();

  const handleTopUp = () => {
    setTopUp((topUp) => !topUp);
    setSend(false);
    setWithdraw(false);
  };
  const handleSend = () => {
    setSend((send) => !send);
    setTopUp(false);
    setWithdraw(false);
  };
  const handleWithdraw = () => {
    setWithdraw((withdraw) => !withdraw);
    setTopUp(false);
    setSend(false);
  };

  return (
    <>
      <StyledPopUp>
        <CloseBtn
          onClick={
            title === "Top Up"
              ? handleTopUp
              : title === "Send"
              ? handleSend
              : handleWithdraw
          }
        >
          <IoCloseCircle size={54} color="#fff" />
        </CloseBtn>
        <Container>
          <Icon>
            <IoWalletOutline size={76} color="#fff" />
          </Icon>
          {title === "Top Up" ? (
            <>
              <Heading as="h1">Send to a Carbon Wallet</Heading>
              <Heading as="h4">Send money to another Carbon Wallet</Heading>
            </>
          ) : title === "Send" ? (
            <>
              <Heading as="h1">Top up your wallet</Heading>
              <Heading as="h4">
                Top up your Wallet from your bank acount
              </Heading>
            </>
          ) : (
            <>
              <Heading as="h1">Withdraw from wallet</Heading>
              <Heading as="h4">
                Withdraw from your wallet into your bank account
              </Heading>
            </>
          )}

          <FormRowVertical>
            <PopUpForm title={title} />
          </FormRowVertical>
        </Container>
      </StyledPopUp>
    </>
  );
};

export default DashboardPopUp;
