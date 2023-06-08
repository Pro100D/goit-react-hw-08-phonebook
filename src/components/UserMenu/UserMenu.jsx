import { useDispatch, useSelector } from 'react-redux';
import { logOutUser } from 'redux/operations';
import { selectEmail } from 'redux/selectors';

const UserMenu = () => {
  const email = useSelector(selectEmail);
  const dispatch = useDispatch();
  return (
    <div>
      <p>{email}</p>
      <button onClick={() => dispatch(logOutUser())}>Logout</button>
    </div>
  );
};
export default UserMenu;
