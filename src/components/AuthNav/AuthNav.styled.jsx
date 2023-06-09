import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const AuthNavigation = styled.div`
  display: flex;
  gap: 20px;
`;
export const AuthNavLink = styled(NavLink)`
  font-size: 18px;
  color: #9b9b9b;

  &.active {
    color: #5eff5e;
    text-shadow: 2px 1px 2px rgba(140, 246, 99, 1);
  }
`;
