import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginSuccess } from './slice';
import { redirect, useNavigate } from 'react-router';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    try {
        const res = await axios.post(process.env.API_URL, { username, password});
        dispatch(loginSuccess(res.data));
        navigate('/');
    } catch (err) {
        alert('Login Failed');
    }
  };

  return (
    <div>
        <h2>Login</h2>
        <input value={username} onChange={e => setUsername(e.target.value)} placeholder='Username'/>
        <input type="password"  value={password} onChange={e => setPassword(e.target.value)} placeholder='Password'/>
        <button onClick={handleSubmit}>Login</button>
    </div>
  );
}

export default Login;