import { useState } from 'react';
import {
  FormPhonebook,
  FormInput,
  FormLeable,
  FormButtonSubmit,
} from './Form.styled';
import { useDispatch, useSelector } from 'react-redux';
import { contactsSelector } from 'redux/selectors';
import { addContactPost } from 'redux/operations';
import Notiflix from 'notiflix';
const Form = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(contactsSelector);
  const handleChange = evt => {
    const { name, value } = evt.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };
  const dispatch = useDispatch();
  const handleSubmit = evt => {
    evt.preventDefault();
    const nameInputValue = evt.target.elements.name.value;
    const numberInputValue = evt.target.elements.number.value;
    const checkContact = contacts.find(
      contact => contact.name === nameInputValue
    );
    if (checkContact) {
      // window.alert(`${nameInputValue} is already in contacts.`);
      Notiflix.Notify.failure(
        `${nameInputValue} is already in contacts.`,

        {
          timeout: 3500,
          position: 'center-top',
        }
      );
      return;
    }
    const newContact = {
      name: nameInputValue,
      number: numberInputValue,
    };
    Notiflix.Notify.success('New contact added');
    dispatch(addContactPost(newContact));

    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };
  return (
    <FormPhonebook autoComplete="off" onSubmit={handleSubmit}>
      <div style={{ position: 'relative' }}>
        <FormLeable htmlFor="name">Name</FormLeable>
        <FormInput
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleChange}
          id="name"
          placeholder="Enter name"
        />
      </div>
      <div style={{ position: 'relative' }}>
        <FormLeable htmlFor="number">Phone</FormLeable>
        <FormInput
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={handleChange}
          id="number"
          placeholder="Enter number"
        />
      </div>
      <FormButtonSubmit type="submit">Add contact</FormButtonSubmit>
    </FormPhonebook>
  );
};
export default Form;
