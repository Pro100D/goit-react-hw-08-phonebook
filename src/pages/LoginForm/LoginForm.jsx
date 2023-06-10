import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logInUser } from 'redux/operations';
import { LoginButton, LoginRegister } from './LoginForm.styled';
import { FormInput, FormLeable } from 'components/Form/Form.styled';

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
        <FormLeable htmlFor="email">Email</FormLeable>
        <FormInput
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
        <FormLeable htmlFor="password">Password</FormLeable>
        <FormInput
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
