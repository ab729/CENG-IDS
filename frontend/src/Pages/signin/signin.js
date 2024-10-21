import './signin.css';

import React from 'react'
import { useState } from 'react';


export default function Signin() {
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

  return (
    <div>
      <form className="box">
        <h2>Sign in</h2>
        <label>
          <span>Email:</span>
          <input type="email" value={email} required onChange={(e) => setEmail(e.target.value)}/>
        </label>
        <label>
          <span>Password:</span>
          <input type="email" required value={password} onChange={(e) => setPassword(e.target.value)}/>
        </label>

        <button type="submit">Sign in</button>
      </form>
    </div>
  );
}
