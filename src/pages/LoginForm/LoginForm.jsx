import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logInUser } from 'redux/operations';
import {
  LoginButton,
  LoginFeld,
  LoginInput,
  LoginRegister,
} from './LoginForm.styled';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
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
    dispatch(logInUser({ email, password }));
    e.target.reset();
  };

  return (
    <LoginRegister onSubmit={handleSubmit}>
      <div
        style={{
          position: 'relative',
        }}
      >
        <LoginFeld htmlFor="email">Email</LoginFeld>
        <LoginInput
          type="email"
          id="email"
          name="email"
          placeholder="Enter email"
          onChange={handleChange}
        />
      </div>
      <div
        style={{
          position: 'relative',
        }}
      >
        <LoginFeld htmlFor="password">Password</LoginFeld>
        <LoginInput
          type="password"
          name="password"
          id="password"
          placeholder="Enter password"
          onChange={handleChange}
        />
      </div>
      <LoginButton type="submit">Войти</LoginButton>
    </LoginRegister>
  );
};

export default LoginForm;
