import React from 'react'
import { Route, Router } from 'react-router'
import Editor from '../pages/editor';
import Login from '../pages/login';
import Template from '../pages/template';
import TemplateList from '../pages/template-list';
import { createBrowserRouter } from 'react-router-dom';

import '../assets/css/reset.css';
import '../assets/css/layout.css';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />
  },
  {
    path: '/templates',
    element: <TemplateList />
  },
  {
    path: '/template/:id',
    element: <Template />
  },
  {
    path: '/editor',
    element: <Editor />
  },
  
]);

export default router;

// export default function AppRouter() {
//   return (
//     <Router>
//       <Route path='/' Component={<Login />}></Route>
//       <Route path='/templates' Component={<TemplateList />}></Route>
//       <Route path='/template/:id' Component={<Template />}></Route>
//       <Route path='/editor' Component={<Editor />}></Route>
//     </Router>
//   )
// }
