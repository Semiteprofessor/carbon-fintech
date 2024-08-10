import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { HiChartBar, HiMiniCog6Tooth } from "react-icons/hi2";

import { FaCreditCard, FaExchangeAlt } from "react-icons/fa";
import { GoHomeFill } from "react-icons/go";
import { RiMessage3Fill } from "react-icons/ri";

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    color: var(--color-grey-600);
    font-size: 1.6rem;
    font-weight: 500;
    padding: 1.2rem 2.4rem;
    transition: all 0.3s;
  }

  /* This works because react-router places the active class on the active NavLink */
  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-grey-800);
    background-color: var(--color-grey-50);
    border-radius: var(--border-radius-sm);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-brand-600);
  }
`;

const SideNav = () => {
  return (
    <nav>
      <NavList>
        <li>
          <StyledNavLink to="/app/dashboard">
            <GoHomeFill />
            <span>Dashboard</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/app/activity">
            <HiChartBar />
            <span>Activity</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/app/bills">
            <FaCreditCard />
            <span>Bills</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/app/transactions">
            <FaExchangeAlt />
            <span>Transactions</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/app/complaints">
            <RiMessage3Fill />
            <span>Complaints</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/app/settings">
            <HiMiniCog6Tooth />
            <span>Settings</span>
          </StyledNavLink>
        </li>
      </NavList>
    </nav>
  );
};

export default SideNav;
