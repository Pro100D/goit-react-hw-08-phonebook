import { Route, Routes } from 'react-router-dom';
import RegisterForm from '../pages/RegisterForm/RegisterForm';
import SharedLayout from './SharedLayout';
import LoginForm from '../pages/LoginForm/LoginForm';
import Contacts from '../pages/Contacts/Contacts';
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route
          index
          element={
            <div>
              <h1>Home</h1>
            </div>
          }
        />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/contacts" element={<Contacts />} />
      </Route>
    </Routes>
  );
};
export default App;
