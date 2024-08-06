import DashboardLayout from "../features/dashboard/DashboardLayout";
import styled from "styled-components";
import Title from "../ui/Title";
import RecentTransactionTable from "../features/dashboard/RecentTransactionTable";
import DashboardPopUp from "../ui/DashboardPopUp";
import { usePopUp } from "../context/PopUpContext";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  height: 100vh;
`;

const Dashboard = () => {
  const { topUp, setTopUp, send, setSend, withdraw, setWithdraw } = usePopUp();
  return (
    <Wrapper>
      {topUp && <DashboardPopUp title="Top Up" />}
      {send && <DashboardPopUp title="Send" />}
      {withdraw && <DashboardPopUp title="Withdraw" />}
      <Title>Dashboard</Title>
      <DashboardLayout />
      <RecentTransactionTable />
    </Wrapper>
  );
};

export default Dashboard;
