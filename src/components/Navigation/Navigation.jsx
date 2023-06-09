import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/selectors';
import { Nav, NavigationLink } from './Navigation.styled';

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <Nav>
      <NavigationLink to="/">Home</NavigationLink>
      {isLoggedIn && <NavigationLink to="/contacts">Contacts</NavigationLink>}
    </Nav>
  );
};
export default Navigation;
