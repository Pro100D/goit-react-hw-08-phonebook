import styled from '@emotion/styled';

export const LoginRegister = styled.form`
  display: flex;
  row-gap: 25px;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  padding-top: 100px;

  margin-right: auto;
  margin-left: auto;

  width: 400px;
`;

export const LoginButton = styled.button`
  width: 300px;

  margin-left: auto;
  margin-right: auto;

  padding: 10px 10px;

  border-radius: 10px;
  font-size: 16px;
  color: #252525;
  background-color: #bababa;
  transition: color 250ms linear;
  &:hover,
  &:focus {
    box-shadow: inset 2px 1px 15px 0px rgba(94, 255, 94, 1);
    transition: box-shadow 250ms linear;
    color: #ffffff;
    transition: color 250ms linear;
  }
`;
