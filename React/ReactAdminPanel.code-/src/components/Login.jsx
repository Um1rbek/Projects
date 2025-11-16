import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const [username, setUsername] = useState("johnd");
  const [password, setPassword] = useState("m38rmF$");




  const navigate  = useNavigate()

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const api = "https://fakestoreapi.com";

    const user = {
      username,
      password,
    };

    axios.post(`${api}/auth/login`, user)
      .then((res) => {
        if (res?.data?.token) {
          localStorage.setItem("token", res?.data?.token);
navigate('/dashboard')
          alert("Login successful!");

        }
      })

  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm">
        <h1 className="text-2xl font-semibold text-center mb-4">Login</h1>

        <div className="mb-4">
          <label className="block mb-1 font-medium">Username</label>
          <input
            onChange={handleUsername}
            type="text"
            name="username"
            value={username}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1 font-medium">Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handlePassword}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md transition"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
