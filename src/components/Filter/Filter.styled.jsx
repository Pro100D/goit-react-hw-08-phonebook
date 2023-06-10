import styled from '@emotion/styled';

export const Fiterlable = styled.label`
  font-size: 18px;
  font-weight: 600;
  margin-right: 15px;
  color: #9b9b9b;
`;
export const FilterInput = styled.input`
  padding: 10px 15px;

  border-radius: 10px;
  border-color: ${({ theme }) => theme.colors.prymeryBgColor};
  outline: none;

  font-size: 19px;

  width: 200px;
  transition: background-color 250ms linear;
  background-color: #bababa;
  &:focus {
    border-color: #5eff5e;
    box-shadow: inset 2px 1px 10px 0px rgba(94, 255, 94, 1);
    transition: box-shadow 250ms linear;
    transition: border-color 250ms linear;
  }
`;

export const BlockLable = styled.div`
  margin-bottom: 30px;
`;
