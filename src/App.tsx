import './App.css';
import React from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';
import Page1 from './Page1';
const NavBar = React.lazy(() => import('nav/NavBar'));
const App1Page = React.lazy(() => import('app1/Page'));
const CraButton = React.lazy(() => import('cra/Button'));

const App: React.FC = () => {
  return (
    <div className="App">
      <React.Suspense fallback={<>...</>}>
        <NavBar />
      </React.Suspense>

      <Routes>
        <Route path="/page1/*" element={<Page1 />} />
        <Route
          path="/app1/*"
          element={
            <React.Suspense fallback={<>...</>}>
              <App1Page />
            </React.Suspense>
          }
        />
      </Routes>

      <hr />
      <CraButton />
    </div>
  );
};

export default App;
