import styled from '@emotion/styled';

export const UserMenuContainer = styled.div`
  display: flex;
  gap: 20px;
  align-items: baseline;
`;
export const UserEmail = styled.p`
  margin: 0;
  color: #9b9b9b;
  font-size: 18px;
`;
export const UserBtn = styled.button`
  padding: 5px 10px;
  border-radius: 10px;
  font-size: 16px;
  color: #252525;
  background-color: #bababa;
  transition: color 250ms linear;
  &:hover,
  &:focus {
    transition: box-shadow 250ms linear;
    box-shadow: inset 2px 1px 15px 0px rgba(94, 255, 94, 1);
    color: #ffffff;
    transition: color 250ms linear;
  }
`;
