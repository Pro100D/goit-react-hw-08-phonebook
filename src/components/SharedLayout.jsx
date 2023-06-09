import { Suspense } from 'react';
import AppBar from './AppBar/AppBar';

const { Outlet } = require('react-router-dom');

const SharedLayout = () => {
  return (
    <>
      <AppBar />
      <main
        style={{
          paddingLeft: 15,
          paddingRight: 15,
        }}
      >
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};
export default SharedLayout;
