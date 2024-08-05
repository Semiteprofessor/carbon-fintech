import Heading from "../ui/Heading";
import DashboardLayout from "../features/dashboard/DashboardLayout";
import styled from "styled-components";
import Title from "../ui/Title";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  height: 100vh;
`;

const Dashboard = () => {
  return (
    <Wrapper>
      <Title>Dashboard</Title>
      <DashboardLayout />
    </Wrapper>
  );
};

export default Dashboard;
