import React, { useState, useEffect } from 'react';
import { createBrowserRouter, createHashRouter, RouterProvider,  } from "react-router-dom";
import Home from "./Home/Home";
import About from "./About/About";
import Gallery from "./Gallery/Gallery";
import Contact from "./Contact/Contact";
import Login from "./Login/Login";
import Tv from "./Tv/Tv";
// import Movies from "./Movies/Movies";
import Register from "./Register/Register";
import People from "./People/People";
import Layout from "./Layout/Layout";
import NotFound from "./NotFound/NotFound";
import Mobile from "./Gallery/Mobile/Mobile";
import Web from "./Gallery/Web/Web";
import ProtectRoute from './ProtectRoute/ProtectRoute';
import MovieDetails from './MovieDetails/MovieDetails';
// import { jwtDecode } from 'jwt-decode';

export default function App() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    if (localStorage.getItem("userToken") !== null) {
      saveUserData();
    }
  }, []);

  function saveUserData() {
    let token = localStorage.getItem("userToken");
    let userDataa = localStorage.getItem("userData"); // ✅ اسم صح

    if (token && userDataa) {
      const parsedUser = JSON.parse(userDataa);
      setUserData(parsedUser);
      console.log("🔐 User Logged In:", parsedUser);
    } else {
      setUserData(null);
    }
  }

  

  const routers = createHashRouter([
    {
      path: '/',
      element: <Layout userData={userData} setUserData={setUserData} />,
      children: [
        { path: 'Home', element: <ProtectRoute saveUserData={saveUserData} userData={userData}> <Home userData={userData}/> </ProtectRoute>},
        { path: 'about', element: <ProtectRoute saveUserData={saveUserData} userData={userData}><About userData={userData} /></ProtectRoute>},
        { path: 'Login', element: <Login saveUserData={saveUserData} /> },
        { path: 'Register', element: <Register /> },
        { path: 'People', element: <ProtectRoute saveUserData={saveUserData} userData={userData}> <People userData={userData}/> </ProtectRoute>},
        { path: 'contact', element: <ProtectRoute saveUserData={saveUserData} userData={userData}> <Contact userData={userData}/> </ProtectRoute>},
        // { path: 'Tv', element: <ProtectRoute saveUserData={saveUserData} userData={userData}> <Tv userData={userData} /> </ProtectRoute>},
        { path: 'MovieDetails/:id/:media_type', element: <ProtectRoute saveUserData={saveUserData} userData={userData}> <MovieDetails userData={userData}/> </ProtectRoute>},
        { path: '*', element: <NotFound /> }
        // {
        //   path: 'gallery', element: <ProtectRoute> <Gallery /> </ProtectRoute>, children: [
        //     { path: 'Web',  element: <ProtectRoute> <Web /> </ProtectRoute> },
        //     { path: 'Mobile', element: <ProtectRoute> <Mobile /> </ProtectRoute> }
        //   ]
        // },
        // { path: 'Movies', element: <ProtectRoute> <Movies /> </ProtectRoute> },
       
      ]
    }
  ]);

  return <RouterProvider router={routers} />
}
