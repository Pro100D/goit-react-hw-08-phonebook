import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { singUpUser } from 'redux/operations';
import {
  FormRegister,
  RegisterFeld,
  RegisterInput,
  RegistrationButton,
} from './RegisterForm.styled';

const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);

      case 'email':
        return setEmail(value);

      case 'password':
        return setPassword(value);

      default:
        break;
    }
  };

  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(singUpUser({ name, email, password }));
    e.target.reset();
  };

  return (
    <FormRegister onSubmit={handleSubmit}>
      <div
        style={{
          position: 'relative',
        }}
      >
        <RegisterFeld htmlFor="name">Name</RegisterFeld>
        <RegisterInput
          type="text"
          name="name"
          onChange={handleChange}
          placeholder="Enter name"
          id="name"
        />
      </div>
      <div
        style={{
          position: 'relative',
        }}
      >
        <RegisterFeld htmlFor="email">Email</RegisterFeld>
        <RegisterInput
          type="email"
          name="email"
          onChange={handleChange}
          placeholder="Enter email"
          id="email"
        />
      </div>
      <div
        style={{
          position: 'relative',
        }}
      >
        <RegisterFeld htmlFor="password">Password</RegisterFeld>
        <RegisterInput
          type="password"
          name="password"
          onChange={handleChange}
          placeholder="Enter password"
        />
      </div>
      <RegistrationButton type="submit">Зарегестрироваться</RegistrationButton>
    </FormRegister>
  );
};
export default RegisterForm;
