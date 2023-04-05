import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from 'react-router-dom';
import './index.css';
import App1Page from 'app1/Page';
import Page1 from './Page1';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />,
//     children: [
//       {
//         path: 'page1',
//         element: <Page1 />,
//       },
//       {
//         path: 'app1',
//         element: <App1Page />,
//       },
//     ],
//   },
// ]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
