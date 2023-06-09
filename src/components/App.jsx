import { Route, Routes } from 'react-router-dom';
import SharedLayout from './SharedLayout';
import { lazy, useEffect } from 'react';
import { fetchCurrentUser } from 'redux/operations';
import { useDispatch, useSelector } from 'react-redux';
import PrivateRaute from './PrivateRoute';
import RestrictedRoute from './RestrictedRoute';
import { selectIsRefreshing } from 'redux/selectors';

const ContactsPage = lazy(() => import('pages/Contacts/Contacts'));
const HomePage = lazy(() => import('pages/Home/Home'));
const RegisterFormPage = lazy(() => import('pages/RegisterForm/RegisterForm'));
const LoginFormPage = lazy(() => import('pages/LoginForm/LoginForm'));
const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return isRefreshing ? (
    <div>Loading...</div>
  ) : (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<RegisterFormPage />}
            />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<LoginFormPage />}
            />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRaute redirectTo="/register" component={<ContactsPage />} />
          }
        />
      </Route>
    </Routes>
  );
};
export default App;
