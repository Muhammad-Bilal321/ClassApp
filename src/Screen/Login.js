import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../Config/firebaseConfig';

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await signInWithEmailAndPassword(auth, email, password);
      const user = res.user;
      console.log(user);
      navigate('/login');
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error(errorCode, errorMessage);
    }
  };

  return (
    <main class="container mt-5">
    <section>
      <div class="row justify-content-center">
        <div class="col-md-6">
          <h1 class="text-center">Login</h1>
          <form>
            <div class="mb-3">
              <label for="email-address" class="form-label">Email address</label>
              <input
                type="email"
                class="form-control"
                id="email-address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Email address"
              />
            </div>
  
            <div class="mb-3">
              <label for="password" class="form-label">Password</label>
              <input
                type="password"
                class="form-control"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Password"
              />
            </div>
  
            <button type="submit" onClick={onSubmit} class="btn btn-primary">
              Sign up
            </button>
          </form>
  
          <p class="mt-3 text-center">
            Create Account?{' '}
            <NavLink to="/signup">Click</NavLink>
          </p>
        </div>
      </div>
    </section>
  </main>
  );
};

export default Login;
