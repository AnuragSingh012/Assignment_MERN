import React, { useState } from 'react';
import axios from 'axios';

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = async () => {
    try {
      const res = await axios.post("http://localhost:4000/api/auth/login", {
        email: email,
        password: password
      });
      localStorage.setItem('token', res.data.token);
      alert("Logged In")
    } catch (err) {
      console.error("Login failed:", err.response.data.message);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter email"
        onChange={e => setEmail(e.target.value)}
        value={email}
      />
      <input
        type="password"
        placeholder="Enter password"
        onChange={e => setPassword(e.target.value)}
        value={password}
      />
      <button onClick={loginUser}>Submit</button>
    </div>
  );
};

export default SignIn;
