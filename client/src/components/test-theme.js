import React, { useContext } from 'react';
import ThemeContext from './theme-context';

function Layout(){
  const theme = useContext(ThemeContext);
  return (
    <div style={theme}>
      <p> THIS IS SAMPLE THEMED TEXT </p>
    </div>
  )
}

export default Layout;