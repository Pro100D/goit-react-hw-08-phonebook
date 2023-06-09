import { Route, Routes } from 'react-router-dom';
import RegisterForm from '../pages/RegisterForm/RegisterForm';
import SharedLayout from './SharedLayout';
import LoginForm from '../pages/LoginForm/LoginForm';
import Contacts from '../pages/Contacts/Contacts';
import { useEffect } from 'react';
import { fetchCurrentUser } from 'redux/operations';
import { useDispatch } from 'react-redux';
import PrivateRaute from './PrivateRoute';
import RestrictedRoute from './RestrictedRoute';
import Home from 'pages/Home/Home';
const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<RegisterForm />}
            />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginForm />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRaute redirectTo="/register" component={<Contacts />} />
          }
        />
      </Route>
    </Routes>
  );
};
export default App;
