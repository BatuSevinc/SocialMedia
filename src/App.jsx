import React from "react";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Navbar from "./components/navbar/Navbar";
import LeftBar from "./components/leftBar/LeftBar";
import RightBar from "./components/rightBar/RightBar";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
const App = () => {
  const currentUser = true; // 1 Numara

  const Layout = () => { 
    return (
      <div>
        <Navbar />
        <div style={{ display: "flex" }}>
          <LeftBar />
          <div style={{flex:6}}>
          <Outlet />
          </div>
          <RightBar />
        </div>
      </div>
    );
  };

  const ProtectedRoute = ({ children }) => { // 1 Numara Eğer kullanıcı girişi yapılmışsa anasayfaya git, kullanıcı girişi yapılmamışsa login sayfasına git.
    if (!currentUser) {
      return <Navigate to="/login" />;
    }
    return children;
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: ( // 1 Numara
        <ProtectedRoute>  
          <Layout />
        </ProtectedRoute>
      ),
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/profile/:id",
          element: <Profile />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
