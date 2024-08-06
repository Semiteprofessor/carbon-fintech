import { MdOutlineAddCard } from "react-icons/md";
import { TbCreditCardPay } from "react-icons/tb";
import { PiHandWithdrawBold } from "react-icons/pi";
import styled from "styled-components";
import { usePopUp } from "../context/PopUpContext";

const StyledPop = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  cursor: pointer;
`;

const Icon = styled.div`
  width: 7rem;
  height: 7rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #600affc4;
`;

const PopTitle = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
  color: #600affc4;
`;

const PopIcons = ({ title }) => {
  const { topUp, setTopUp, send, setSend, withdraw, setWithdraw } = usePopUp();
  const handleTopUp = () => {
    setTopUp((topUp) => !topUp);
  };
  const handleSend = () => {
    setSend((send) => !send);
  };
  const handleWithdraw = () => {
    setWithdraw((withdraw) => !withdraw);
  };
  return (
    <>
      {title === "Top Up" && (
        <StyledPop onClick={handleTopUp}>
          <Icon>
            <MdOutlineAddCard size={36} color="#fff" />
          </Icon>
          <PopTitle>{title}</PopTitle>
        </StyledPop>
      )}
      {title === "Send" && (
        <StyledPop onClick={handleSend}>
          <Icon>
            <MdOutlineAddCard size={36} color="#fff" />
          </Icon>
          <PopTitle>{title}</PopTitle>
        </StyledPop>
      )}
      {title === "Send" && (
        <StyledPop onClick={handleWithdraw}>
          <Icon>
            <MdOutlineAddCard size={36} color="#fff" />
          </Icon>
          <PopTitle>{title}</PopTitle>
        </StyledPop>
      )}
    </>
  );
};

export default PopIcons;
