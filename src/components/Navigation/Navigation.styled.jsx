import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
  display: flex;
  gap: 10px;
`;

export const NavigationLink = styled(NavLink)`
  color: #9b9b9b;

  font-size: 18px;

  &.active {
    color: #5eff5e;
    text-shadow: 2px 1px 2px rgba(140, 246, 99, 1);
  }
`;
