import React, { useState } from 'react'
import axios from "axios";

const SignUp = () => {

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const registerUser = async () => {
    try {
      
      const res = await axios.post("http://localhost:4000/api/auth/register", {
      username,
      email,
      password
    });

    alert(res.data.message);
    console.log(res.data.message);
    } catch (err){
        alert(err.response?.data?.message || "Registration failed" );
    }
  }

  return (
    <div>
      <input type="text" placeholder='Enter username' onChange={e => setUsername(e.target.value)} value={username}  />
      <input type="email" placeholder='Enter email' onChange={e => setEmail(e.target.value)} value={email}  />
      <input type="password" placeholder='Enter Password' onChange={e => setPassword(e.target.value)} value={password}  />
      <button onClick={registerUser} >Submit</button>
    </div>
  )
}

export default SignUp