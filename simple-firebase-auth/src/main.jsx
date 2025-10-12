import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from './components/Root.jsx';
import Home from './components/Home.jsx';
import LogIn from './components/LogIn.jsx';
import Register from './components/Register.jsx';
const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children:[
      {
        index:true,
        Component:Home,
      },
      {
        path:'login',
        Component:LogIn,
      },
      {
        path:'register',
        Component:Register,
      }
    ]
  }, 
  
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
