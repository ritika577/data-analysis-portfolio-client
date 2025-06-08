import React from 'react';

const Layout = ({ children }) => {
  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#fff'
    }}>
      {children}
    </div>
  );
};

export default Layout;
