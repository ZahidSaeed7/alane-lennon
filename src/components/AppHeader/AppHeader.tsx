import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import styles from './AppHeader.module.css';
import { Link } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../common/hooks/useReduxHooks';
import { Theme, toggleTheme } from '../../common/reducers/theme.reducer';

const AppHeader: React.FC = () => {
  const theme = useAppSelector((state) => state.theme.theme);
  const dispatch = useAppDispatch();

  return (
    <Navbar
      bg={theme}
      variant={theme}
      className={`mb-4 ${styles.headerVisible} ${theme === Theme.Light ? styles.headerLightBorder : ''}`}
    >
      <Container className="d-flex justify-content-between align-items-center">
        <Navbar.Brand as={Link} to="/" className={styles.navbarBrand}>Rick and Morty Viewer</Navbar.Brand>
        <Button
          variant={theme === Theme.Light ? 'dark' : 'light'}
          onClick={() => dispatch(toggleTheme())}
          className={styles.themeButton}
        >
          {theme === Theme.Light ? 'Dark' : 'Light'} Mode
        </Button>
      </Container>
    </Navbar>
  );
};

export default AppHeader; 