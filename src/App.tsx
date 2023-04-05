import { Link } from 'react-router-dom';
import './App.css';
import Button from 'app1/Button';
import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from 'nav/NavBar';

// const Button = React.lazy(() => import('app1/Button'));

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Shell app</h1>
      <Button />
      <NavBar />
      <hr />
      <Outlet />
    </div>
  );
};

export default App;
