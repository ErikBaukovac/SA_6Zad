import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';

import Header from './components/Header/Header';
import Main from './components/Main/Main';

import Home from './pages/Home';

function App() {
  return (
    <>
      <Header />
      <Main>
        <Route exact path="/" Component={Home} />
      </Main>
    </>
  );
}

export default App;
