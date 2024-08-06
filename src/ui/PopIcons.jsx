import { MdOutlineAddCard } from "react-icons/md";
import { TbCreditCardPay } from "react-icons/tb";
import { PiHandWithdrawBold } from "react-icons/pi";
import styled from "styled-components";

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
  return (
    <StyledPop>
      <Icon>
        {title === "Top Up" ? (
          <MdOutlineAddCard size={36} color="#fff" />
        ) : title === "Send" ? (
          <TbCreditCardPay size={36} color="#fff" />
        ) : (
          <PiHandWithdrawBold size={36} color="#fff" />
        )}
      </Icon>
      <PopTitle>{title}</PopTitle>
    </StyledPop>
  );
};

export default PopIcons;
