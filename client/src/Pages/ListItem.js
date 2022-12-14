import {useState} from 'react';
// import { useHistory } from 'react-router-dom'
// import './App.css';

function App() {
  // const history = useHistory()

  async function registerUser(event){
    event.preventDefault()
    const response = await fetch('http://localhost:8000/api/register',{
      method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				name,
				email,
				password,
			}),
    })
    const data = await response.json()

		if (data.status === 'ok') {
			// history.push('/login')
      console.log("okk")
		}
  }
  return (
    <div className="App">
      <h1>Register</h1>
        <form onSubmit={registerUser}>
          <input 
          type="text" 
          placeholder=" Name"
          value={name}
          onChange={(e)=>setName(e.target.value)}
          />
          <br/><br/>
          <input 
          type="email" 
          placeholder="Email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          />
          <br/><br/>
          <input 
          type="password" 
          placeholder="Password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          />
          <br/><br/>
          <input type="submit" value="Register"/>
        </form>
    </div>
  );
}

export default App;