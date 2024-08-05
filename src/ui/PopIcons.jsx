import { MdOutlineAddCard } from "react-icons/md";
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
  width: 8rem;
  height: 8rem;
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
const PopIcons = ({ children }) => {
  return (
    <StyledPop>
      <Icon>
        <MdOutlineAddCard size={34} color="#fff" />
      </Icon>
      <PopTitle>{children}</PopTitle>
    </StyledPop>
  );
};

export default PopIcons;
