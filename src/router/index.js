import React from 'react'
import { createBrowserRouter } from 'react-router-dom';
import EditorPage from '../pages/editor';
import Login from '../pages/login';
import Home from '../pages/home';
import TemplateDetail from '../pages/template-detail';
import BaseLayout from '../layout/base-layout';
import Works from '../pages/works';
import Settings from '../pages/settings';

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
      {
        path: '/settings',
        element: <Settings />
      },
    ]
  },
  {
    path: '/editor/:id',
    element: <EditorPage />
  },
  {
    path: '/login',
    element: <Login />
  },
]);

export default router;
