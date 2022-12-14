import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Pages/Login'
import Register from './Pages/Register'
import Home from './Pages/Home'

const App = () => {
	return (
		<div>
			<BrowserRouter>
      <Routes>
				<Route path="/login" exact element={<Login/>} />
				<Route path="/register" exact element={<Register/>} />
        <Route path="/home" exact element={<Home/>} />
        </Routes>
			</BrowserRouter>
		</div>
	)
}

export default App