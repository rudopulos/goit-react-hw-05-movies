import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.header`
  border-bottom: 1px solid #e7e9fc;
  box-shadow: 0px 2px 1px rgba(46, 47, 66, 0.08),
    0px 1px 1px rgba(46, 47, 66, 0.16), 0px 1px 6px rgba(46, 47, 66, 0.08);
`;

export const Navigation = styled.nav`
  padding: 20px;
  font-size: 24px;
  font-weight: 700;
  display: flex;
  gap: 15px;
`;

export const StyledNavLink = styled(NavLink)`
  color: #000;
  &.active {
    color: #ef3c5a;
  }
  text-decoration: none;
`;

export const Main = styled.main`
  width: 1440px;
`;
