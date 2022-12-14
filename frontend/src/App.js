
import './App.css';
import React from "react";
import PublicRouteHandler from './utils/PublicRouteHandler';
import PrivateRoute from './utils/PrivateRoute';
import {BrowserRouter,Route,Routes} from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";


function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/Login' element={<Login/>}/>
          <Route path='/Register' element={<Register/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
