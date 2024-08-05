import styled from "styled-components";
import PaymentChart from "./PaymentChart";

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;

const Stats = styled.div`
  flex: 1;
`;
const Chart = styled.div`
  flex: 1;
`;

function DashboardLayout() {
  return (
    <StyledDashboardLayout>
      <Stats>10000</Stats>
      <Chart>{/* <PaymentChart /> */}</Chart>
    </StyledDashboardLayout>
  );
}

export default DashboardLayout;
