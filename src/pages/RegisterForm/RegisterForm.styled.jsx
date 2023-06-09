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

export const RegisterFeld = styled.label`
  position: absolute;
  top: -25px;
  left: 15px;

  color: #9b9b9b;
`;
export const RegisterInput = styled.input`
  padding: 15px 10px;
  width: 350px;
  outline: none;
  background-color: #bababa;
  border-radius: 10px;
  font-size: 16px;

  &:focus {
    border-color: #5eff5e;
    box-shadow: inset 2px 1px 10px 0px rgba(94, 255, 94, 1);
  }
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

  &:hover,
  &:focus {
    transition: box-shadow 250ms linear;
    box-shadow: inset 2px 1px 15px 0px rgba(94, 255, 94, 1);
  }
`;
