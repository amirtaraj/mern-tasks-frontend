import React, { useState, useEffect } from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { func } from 'prop-types';
import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons"; // Import the Sun and Moon icons

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    table {
      color: ${({ theme }) => theme.tableColor};
    }
  }
`;

const Button = styled.button`
  background: ${({ theme }) => theme.background};
 
  color: ${({ theme }) => theme.text};
  position: fixed;
  bottom: 40px;
  right: 10px;
  cursor: pointer;
  padding: 0.6rem;
  position: fixed;

`;

const lightTheme = {
  background: 'white',
  text: 'black',
  tableColor: 'black'
};

const darkTheme = {
  background: 'black',
  text: 'white',
  tableColor: 'white'
};

const Toggle = ({ toggleTheme }) => {
  const [isDark, setIsDark] = useState(false);

  const handleToggle = () => {
    setIsDark((prevIsDark) => !prevIsDark);
  };

  useEffect(() => {
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDark(prefersDarkScheme.matches);

    const handleChange = (event) => {
      setIsDark(event.matches);
    };

    prefersDarkScheme.addEventListener('change', handleChange);

    return () => {
      prefersDarkScheme.removeEventListener('change', handleChange);
    };
  }, []);

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Button onClick={handleToggle}>
        {isDark ? <FontAwesomeIcon icon={faSun} /> : <FontAwesomeIcon icon={faMoon} />}
      </Button>
      {/* Your application content here */}
    </ThemeProvider>
  );
};

Toggle.propTypes = {
  toggleTheme: func.isRequired,
};

const App = () => {
  return (
    <Toggle>
      {/* Your application content here */}
    </Toggle>
  );
};

export default App;
