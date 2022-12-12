
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import List from './components/List';
import Login from './components/Login';
import Register from './components/Register';
import NewItem from './components/NewItem';
import Home from './components/Home';
import UpdateItem from './components/UpdateItem';
import Users from './components/Users';
import UpdateUser from './components/UpdateUser';
import NewUser from './components/NewUser';


function App() {
  return (
   <>
   <BrowserRouter>
   <Routes>
       <Route path='/item' element={<List/>}/>
       <Route path='/new_item' element={<NewItem/>}/>
       <Route path='/login' element={<Login/>}/>
       <Route path='/register' element={<Register/>}/>
       <Route path='/users' element={<Users/>}/>
       <Route path='/home' element={<Home/>}/>
       <Route path='/update_item/:id' element={<UpdateItem/>}/>
       <Route path='/update_user/:id' element={<UpdateUser/>}/>
       <Route path='/new_user' element={<NewUser/>}/>


   </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
