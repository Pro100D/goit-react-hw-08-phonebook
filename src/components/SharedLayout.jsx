import { useSelector } from 'react-redux';
import UserMenu from './UserMenu/UserMenu';
import { selectIsLoggedIn } from 'redux/selectors';

const { Link, Outlet } = require('react-router-dom');

const SharedLayout = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <>
      <header>
        <nav>
          <Link to="/register">Register</Link>
          <Link to="/login">login</Link>
          <Link to="/contacts">Contacts</Link>
        </nav>
        {isLoggedIn && <UserMenu />}
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};
export default SharedLayout;
