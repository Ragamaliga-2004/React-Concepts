import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Login = ({setIsLoggedIn,setUser}) => {
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
        const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault()
        if(userName==="Admin" && password==="Raga@2004") {
            setIsLoggedIn(true)
            setUser({userName})
            navigate("/dashboard");
         }
         else{
            setError("Invalid username / Password");
         }
         
    }

  return (
    <form onSubmit={handleSubmit}>
        <label htmlFor="Name">Name</label>
        <input type="text" id='Name'value={userName} onChange={(e)=>setUserName(e.target.value)}/>
        <br />
        <label htmlFor="password">Password</label>
        <input type="text"  id="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
        {error && <p style={{color:'red'}}>{error}</p>}
        <br />
        <button type='submit'>Login</button>
    </form>
  )
}

export default Login