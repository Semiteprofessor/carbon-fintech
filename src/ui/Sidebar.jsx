import Logo from "./Logo";
import styled from "styled-components";
import SideNav from "./SideNav";

const StyledSidebar = styled.aside`
  background-image: url("./images/sidebar.png");
  background-position: center;
  background-size: cover;
  height: 100vh;
  padding: 3.2rem 2.4rem;

  grid-row: 1 / -1;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;
const Sidebar = () => {
  return (
    <StyledSidebar>
      <Logo />
      <SideNav />
    </StyledSidebar>
  );
};

export default Sidebar;
