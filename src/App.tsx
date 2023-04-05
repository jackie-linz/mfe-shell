import './App.css';
import React from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';
import NavBar from 'nav/NavBar';
import Page1 from './Page1';
import App1Page from 'app1/Page';

// const Button = React.lazy(() => import('app1/Button'));

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Shell app</h1>
      <NavBar />
      <hr />

      <Routes>
        <Route path="/page1/*" element={<Page1 />} />
        <Route path="/app1/*" element={<App1Page />} />
      </Routes>
    </div>
  );
};

export default App;
