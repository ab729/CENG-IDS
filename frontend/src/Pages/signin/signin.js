import './signin.css';

import React from 'react'
import { useState } from 'react';
import { useLogin } from '../../hooks/useLogin';

export default function Signin() {
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const { login, loading } = useLogin();

const handleSubmit = async(e) => {
  e.preventDefault();
  await login(email, password);
}

  return (
      <form className="box" onSubmit={handleSubmit}>
        <h2>Sign in</h2>
        <label>
          <span>Email:</span>
          <input
            type="email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          <span>Password:</span>
          <input
            type="text"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>

        <button type="submit" diabled={loading}>
          Sign in
        </button>
      </form>
  );
}
