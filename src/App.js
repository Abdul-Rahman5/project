import logo from './logo.svg';
import './App.css';
import Layout from './Components/Layout/Layout';
import { RouterProvider, createBrowserRouter ,Navigate } from 'react-router-dom';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import NotFound from './Components/NotFound/NotFound';
import Ragister from './Components/Ragister/Ragister';
import ForGetPassword from './Components/forGetPassword/forGetPassword';
import ForGetPasswordTwo from './Components/forGetPasswordTwo/forGetPasswordTwo';
import ForGetPasswordOne from './Components/forGetPasswordOne/forGetPasswordOne';
import { useEffect, useState } from 'react';
import jwtDecode from 'jwt-decode';
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute';

function App() {
  
  // useEffect(() => {
  //   if (localStorage.getItem('userToken')!==null) {
  //     setuserData();
  //   }

  // }, [])
  
  //user data
  // const [userData, setuserData] = useState(null);
  // function saveUserData() {
  //  let encodedToken= localStorage.getItem("userToken");
  //  let decodedToken=jwtDecode(encodedToken);
  //  setuserData(decodedToken);

  //   }
    

  let router=createBrowserRouter([
    {path:'',element:<Layout />,children:[
      {index:true,element: <ProtectedRoute><Home/></ProtectedRoute> },
      {path:'register',element:<Ragister/>},
      {path:'login',element:<Login />},
      {path:'forGetPassword',element:<ForGetPassword/>},
      {path:'forGetPasswordOne',element:<ForGetPasswordOne/>},
      {path:'forGetPasswordTwo',element:<ForGetPasswordTwo/>},
      {path:'*',element:<NotFound/>},
    ]}
  ])
  return <RouterProvider router={router} > </RouterProvider>
}

export default App;
