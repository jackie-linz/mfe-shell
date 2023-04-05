import { Link } from 'react-router-dom';
import './App.css';
import Button from 'app1/Button';
import React from 'react';
import { Outlet } from 'react-router-dom';

// const Button = React.lazy(() => import('app1/Button'));

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Shell app</h1>
      <Button />
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/page1">Page 1</Link>
          </li>
          <li>
            <Link to="/app1">App 1</Link>
          </li>
        </ul>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
};

export default App;
