import ConatctList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import Form from 'components/Form/Form';
import { ContactsSeaction, ContactsTitle } from './Contacts.styled';

const Contacts = () => {
  return (
    <ContactsSeaction>
      <ContactsTitle>Phonebook</ContactsTitle>
      <Form />
      <h2
        style={{
          color: '#9b9b9b',
        }}
      >
        Contacts
      </h2>
      <Filter />
      <ConatctList />
    </ContactsSeaction>
  );
};
export default Contacts;
