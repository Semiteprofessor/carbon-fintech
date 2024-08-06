import styled from "styled-components";
import PaymentChart from "./PaymentChart";
import StatsContent from "./StatsContent";
import PopIcons from "../../ui/PopIcons";

const StyledDashboardLayout = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 3rem;
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
  background: linear-gradient(
    90deg,
    rgba(255, 133, 221, 1) 0%,
    rgba(172, 133, 255, 1) 0%,
    rgba(255, 133, 133, 1) 0%,
    rgba(135, 255, 133, 1) 100%
  );
`;

const PopUpContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 4rem;
`;

const Chart = styled.div`
  flex: 1;
  height: 30rem;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
`;

const DashboardLayout = ({}) => {
  return (
    <StyledDashboardLayout>
      <Stats>
        <StatsContent />
        <PopUpContainer>
          <PopIcons title="Top Up" />
          <PopIcons title="Send" />
          <PopIcons title="Withdraw" />
        </PopUpContainer>
      </Stats>
      <Chart>
        <PaymentChart />{" "}
      </Chart>
    </StyledDashboardLayout>
  );
};

export default DashboardLayout;
