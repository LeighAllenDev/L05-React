import React from 'react';
import { Routes, Route } from 'react-router-dom;'
import NavBar from './components/NavBar';
import styles from './App.module.css';

function App() {
  return (
    <>
      <NavBar />
      <div className={styles.App} >
        <div className={styles.Container}>
          <Routes>

          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
