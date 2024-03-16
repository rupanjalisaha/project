import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Array from './pages/Array';
import Stack from './pages/Stack';
import Queue from './pages/Queue';
import LinkedList from './pages/LinkedList';
import Tree from './pages/Tree';
import Graph from './pages/Graph';
import SignUp from './pages/SignUp';
import Resume from './pages/Resume';
import Blog from './pages/Blog';
import Quiz from './pages/Quiz';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "Array",
    element: <Array/>
  },
  {
    path: "Stack",
    element: <Stack/>
  },
  {
    path: "Queue",
    element: <Queue/>
  },
  {
    path: "LinkedList",
    element: <LinkedList/>
  },
  {
    path: "Tree",
    element: <Tree/>
  },
  {
    path: "Graph",
    element: <Graph/>
  },
  {
    path: "SignUp",
    element: <SignUp/>
  },
    {
    path: "Blog",
    element: <Blog/>
  },
  {
    path: "Quiz",
    element: <Quiz/>
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);
