import styled from "styled-components";
import Heading from "./Heading";

const StyledDashboardLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const Stats = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  height: 30rem;
  padding: 10px 30px;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  background: #433d3d;
`;

const BillBoard = () => {
  return (
    <StyledDashboardLayout>
      <Stats></Stats>
    </StyledDashboardLayout>
  );
};

export default BillBoard;
