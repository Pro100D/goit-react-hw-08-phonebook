import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logInUser } from 'redux/operations';

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
    <form onSubmit={handleSubmit}>
      <label>
        Email
        <input type="email" name="email" onChange={handleChange} />
      </label>
      <label>
        Password
        <input type="password" name="password" onChange={handleChange} />
      </label>
      <button type="submit">Войти</button>
    </form>
  );
};

export default LoginForm;
