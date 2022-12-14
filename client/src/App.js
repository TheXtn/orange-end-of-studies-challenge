import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Pages/Login'
import Register from './Pages/Register'
import Home from './Pages/Home'
import ListItem from './Pages/ListItem'

const App = () => {
	return (
		<div>
			<BrowserRouter>
      <Routes>
				<Route path="/login" exact element={<Login/>} />
				<Route path="/register" exact element={<Register/>} />
        <Route path="/home" exact element={<Home/>} />
        <Route path="/listitem" exact element={<ListItem/>} />
        </Routes>
			</BrowserRouter>
		</div>
	)
}

export default App