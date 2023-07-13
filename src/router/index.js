import React from 'react'
import { createBrowserRouter } from 'react-router-dom';
import Editor from '../pages/editor';
import Login from '../pages/login';
import Home from '../pages/home';
import TemplateDetail from '../pages/template-detail';
import BaseLayout from '../layout/base-layout';
import Works from '../pages/works';

import '../assets/css/reset.css';
import '../assets/css/layout.css';


const router = createBrowserRouter([
  {
    path: '/',
    element: <BaseLayout />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: '/template/:templateId',
        element: <TemplateDetail />,
      },
      {
        path: '/works',
        element: <Works />
      },
    ]
  },
  {
    path: '/editor/:id',
    element: <Editor />
  },
  {
    path: '/login',
    element: <Login />
  },
]);

export default router;
