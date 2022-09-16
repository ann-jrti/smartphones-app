import React from 'react';
import './App.scss';
import {
  Route,
  Routes,
  BrowserRouter } from 'react-router-dom';
import { SmartphoneDetails } from './pages/SmartphoneDetails';
import { SmartphonesList } from './pages/SmartphonesList';
import { Header } from './components';

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
            <Route
            path='/'
            element={<SmartphonesList />}
            />
            <Route
            path='/:id'
            element={<SmartphoneDetails />}
            />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
