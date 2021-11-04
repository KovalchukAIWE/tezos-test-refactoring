import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Provider from './Provider/Provider';

import Header from './Header';
import Navigation from '../router/Navigation';
import Footer from './Footer';

const App = () => {
  return (
    <BrowserRouter>
    <Provider>
      <Header />
      <Navigation />
      <Footer />
    </Provider>
    </BrowserRouter>
  );
};

export default App;
