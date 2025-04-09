import axios from 'axios';
import { Link } from 'react-router';
import React from 'react';
import {useNavigate } from 'react-router';
import { useState } from 'react';
import env from "react-dotenv";

export default function Register() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();

    const apiURL = import.meta.env.VITE_API_URL;

    const handleSubmit = async (e) => {
        console.log("something");
        e.preventDefault();
        try {
            const res = await axios.post(`${apiURL}/register`, {name, email, password});
            alert('Registration successful')
            navigate('/login');
        } catch (err) {
            alert("registration error");
        }
    };

    return (
        <div>
            <h2>Register</h2>
            <input value={name} onChange={e => setName(e.target.value)} placeholder="Username" />
            <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" />
            <button onClick={handleSubmit}>Register</button>

            <p>Already have an account? <Link to="/login">Login here</Link></p>
        </div>
    )

}