import React from 'react';
import { NavbarComponent } from '../components/Navbar/Navbar';
import { SidebarComponent } from '../components/Sidebar/Sidebar';

const Layout = ({ children }) => {
  return (
    <>
      <NavbarComponent />
      <SidebarComponent>
        {children}
      </SidebarComponent>
    </>
  );
};

export default Layout;
