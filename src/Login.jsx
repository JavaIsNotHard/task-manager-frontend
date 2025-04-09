import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginSuccess } from './slice';
import { redirect, useNavigate, Link } from 'react-router';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const apiURL = import.meta.env.VITE_API_URL;

  const handleSubmit = async (e) => {
    console.log(`response from the server `);
    try {
        const res = await axios.post(`${apiURL}/login`, { username, password});
        dispatch(loginSuccess(res.data));
        navigate('/');
    } catch (err) {
        alert('Login Failed');
        console.log(err);
    }
  };

  return (
    <div>
        <h2>Login</h2>
        <input value={username} onChange={e => setUsername(e.target.value)} placeholder='Username'/>
        <input type="password"  value={password} onChange={e => setPassword(e.target.value)} placeholder='Password'/>
        <button onClick={handleSubmit}>Login</button>
        <p>Don't have an account? <Link to="/register">Register here</Link></p> {/* Add register link */}
    </div>
  );
}

export default Login;