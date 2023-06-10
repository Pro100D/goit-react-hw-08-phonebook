import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { singUpUser } from 'redux/operations';
import { FormRegister, RegistrationButton } from './RegisterForm.styled';
import { FormInput, FormLeable } from 'components/Form/Form.styled';

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
        <FormLeable htmlFor="name">Name</FormLeable>
        <FormInput
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
        <FormLeable htmlFor="email">Email</FormLeable>
        <FormInput
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
        <FormLeable htmlFor="password">Password</FormLeable>
        <FormInput
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
