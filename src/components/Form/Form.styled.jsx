import styled from '@emotion/styled';

export const FormPhonebook = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  row-gap: 25px;

  margin-bottom: 40px;
`;

export const FormInput = styled.input`
  padding: 15px 10px;
  width: 350px;
  outline: none;
  background-color: #bababa;
  border-radius: 10px;
  font-size: 16px;

  &:focus {
    border-color: #5eff5e;
    box-shadow: inset 2px 1px 10px 0px rgba(94, 255, 94, 1);
    transition: box-shadow 250ms linear;
    transition: border-color 250ms linear;
  }
`;

export const FormLeable = styled.label`
  position: absolute;
  top: -20px;
  left: 15px;

  font-size: 16px;
  font-weight: 600;

  color: #9b9b9b;
`;
export const FormButtonSubmit = styled.button`
  width: 250px;

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
