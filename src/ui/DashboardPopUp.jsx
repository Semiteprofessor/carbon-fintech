import styled from "styled-components";
import { FaWallet } from "react-icons/fa6";

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
  max-width: 494px;
  height: 566px;
  width: 0 auto;
  background-color: white;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Icon = styled.div`
display: flex;
`;

const DashboardPopUp = () => {
  return (
    <StyledPopUp>
      <Container>Hello</Container>
    </StyledPopUp>
  );
};

export default DashboardPopUp;
