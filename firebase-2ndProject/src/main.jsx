import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from './components/Root.jsx';
import Home from './components/Home.jsx';
import SignIn from './components/SignIn.jsx';
import SignUp from './components/SignUp.jsx';
import FirebaseAuthProvider from './components/contexts/FirebaseAuthProvider.jsx';
import Profile from './components/Profile.jsx';
import PrivateRoutes from './components/routes/PrivateRoutes.jsx';
import DashBoard from './components/DashBoard.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "signIn", Component: SignIn },
      { path: "signUp", Component: SignUp },
      {
        path:"profile",element:<PrivateRoutes><Profile></Profile></PrivateRoutes>
      },
      {
        path:"dashBoard",element:<PrivateRoutes><DashBoard></DashBoard></PrivateRoutes>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FirebaseAuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </FirebaseAuthProvider>
  </StrictMode>,
)
