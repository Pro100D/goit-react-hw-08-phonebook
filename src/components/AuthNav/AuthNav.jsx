import { AuthNavLink, AuthNavigation } from './AuthNav.styled';

const AuthNav = () => {
  return (
    <AuthNavigation>
      <AuthNavLink to="/register">Register</AuthNavLink>
      <AuthNavLink to="/login">login</AuthNavLink>
    </AuthNavigation>
  );
};
export default AuthNav;
