import './App.css';
import Layout from './components/Layout/Layout';
import ItemsPage from './pages/ItemsPage/ItemsPage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from './pages/LoginPage/LoginPage';
import SignUpPage from './pages/SignUpPage/SignUpPage';
import DetailsPage from './pages/DetailsPage/DetailsPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}/>
        <Route path="/items" element={<ItemsPage />}/>
        <Route path="/login" element={<LoginPage />}/>
        <Route path="/signUp" element={<SignUpPage />}/>
        <Route path="/details/:id" element={<DetailsPage />}/>
      </Routes>
    </Router>
  );
}

export default App;
