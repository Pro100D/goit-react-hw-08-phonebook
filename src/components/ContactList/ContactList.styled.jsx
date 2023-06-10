import styled from '@emotion/styled';

export const ListContact = styled.ul`
  display: flex;
  flex-wrap: wrap;

  gap: 13px;
`;

export const ListContactItem = styled.li`
  display: flex;

  align-items: center;
  justify-content: space-between;
  gap: 25px;

  padding: 15px 20px;

  border: 2px solid rgba(94, 255, 94, 1);
  border-radius: 6px;

  background-color: #292929;
  box-shadow: inset 2px 1px 10px 0px rgba(94, 255, 94, 1);
`;

export const ListContactInfo = styled.p`
  margin-bottom: 0;

  font-size: 18px;

  color: #5eff5e;
  text-shadow: 1px 1px 2px rgba(140, 246, 99, 1);
`;

export const ListRemoveBtn = styled.button`
  padding: 10px 25px;

  border-radius: 10px;

  background-color: #292929;
  color: #5eff5e;

  font-size: 15px;
  font-weight: 700;
  border-color: #03ae03;
  transition: box-shadow 250ms linear;

  :hover,
  :focus {
    box-shadow: inset 2px 1px 10px 0px rgba(94, 255, 94, 1);
    transition: box-shadow 250ms linear;
  }
`;
