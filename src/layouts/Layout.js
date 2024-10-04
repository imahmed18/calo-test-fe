import React from 'react';

const Layout = ({ children }) => {
  return (
    <>
      <header>
        <h2>Header</h2>
      </header>
      {children}
      <footer>
        <h2>Footer</h2>
      </footer>
    </>
  );
};

export default Layout;
