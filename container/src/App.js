import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { GlobalStyles } from './GlobalStyles';

import Header from './Layout/Header';
import Footer from './Layout/Footer';
import { Main, App } from './App.styles';
import Reports from './pages/reports';
import Contact from './pages/Contact';

export default () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <App>
        <Header />
        <Main>
          <Routes>
            <Route path='/' element={<Reports />} />
            <Route path='/reports' element={<Reports />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </Main>
        <Footer />
      </App>
    </BrowserRouter>
  )
}