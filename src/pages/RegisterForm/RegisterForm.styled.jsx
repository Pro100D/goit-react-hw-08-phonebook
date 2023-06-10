import styled from '@emotion/styled';

export const FormRegister = styled.form`
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

export const RegistrationButton = styled.button`
  width: 300px;

  margin-left: auto;
  margin-right: auto;

  padding: 10px 10px;

  border-radius: 10px;
  font-size: 16px;
  color: #252525;
  background-color: #bababa;
  transition: box-shadow 250ms linear;
  transition: color 250ms linear;
  &:hover,
  &:focus {
    transition: box-shadow 250ms linear;
    box-shadow: inset 2px 1px 15px 0px rgba(94, 255, 94, 1);
    color: #ffffff;
    transition: color 250ms linear;
  }
`;
