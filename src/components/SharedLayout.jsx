import AppBar from './AppBar/AppBar';

const { Outlet } = require('react-router-dom');

const SharedLayout = () => {
  return (
    <>
      <AppBar />
      <main>
        <Outlet />
      </main>
    </>
  );
};
export default SharedLayout;
