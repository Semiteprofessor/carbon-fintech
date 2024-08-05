import styled from "styled-components";
import PaymentChart from "./PaymentChart";
import StatsContent from "./StatsContent";

const StyledDashboardLayout = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 4rem;
`;

const Stats = styled.div`
  flex: 1;
  height: 35rem;
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

const StyledStatsContent = styled.div`
  background-color: #600affc4;
  border-radius: 10px;
  position: relative;
  height: 18rem;
  overflow: hidden;
`;

const Image1 = styled.img`
  position: absolute;
  left: -2rem;
  bottom: -2em;
`;

const Image2 = styled.img`
  position: absolute;
  right: -1rem;
  width: 9rem;
`;

const Chart = styled.div`
  flex: 1;
  height: 35rem;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
`;

const DashboardLayout = () => {
  return (
    <StyledDashboardLayout>
      <Stats>
        <StyledStatsContent>
          <Image1 src="./images/dash1.png" />
          <Image2 src="./images/dash2.png" />
        </StyledStatsContent>
      </Stats>
      <Chart>
        <PaymentChart />{" "}
      </Chart>
    </StyledDashboardLayout>
  );
};

export default DashboardLayout;
