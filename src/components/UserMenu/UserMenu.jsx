import { useDispatch, useSelector } from 'react-redux';
import { logOutUser } from 'redux/operations';
import { selectEmail } from 'redux/selectors';
import { UserBtn, UserEmail, UserMenuContainer } from './UserMenu.styled';

const UserMenu = () => {
  const email = useSelector(selectEmail);
  const dispatch = useDispatch();
  return (
    <UserMenuContainer>
      <UserEmail>{email}</UserEmail>
      <UserBtn onClick={() => dispatch(logOutUser())}>Logout</UserBtn>
    </UserMenuContainer>
  );
};
export default UserMenu;
