import React from 'react';

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <nav>This is navbar</nav>
      {children}
      <footer>This is footer</footer>
    </React.Fragment>
  );
};

export default Layout;
