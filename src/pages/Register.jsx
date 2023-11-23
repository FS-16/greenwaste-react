import React from 'react';
import handleTitle from '../handle/handleTitle';
import { Link } from 'react-router-dom';

function Register() {
  handleTitle('Register | GreenWaste');

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold mt-10">Register</h1>

      <form className="flex flex-col gap-5 mt-5">
        <input
          type="text"
          placeholder="Username"
          className="border p-3 rounded-lg"
          id="username"
        />

        <input
          type="email"
          placeholder="Email"
          className="border p-3 rounded-lg"
          id="email"
        />

        <input
          type="password"
          placeholder="Password"
          className="border p-3 rounded-lg"
          id="password"
        />

        <button className="bg-green-500 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80">
          Register
        </button>
      </form>

      <div className="flex fle-col gap-2 mt-5">
        <p>Have already Account ?</p>
        <Link to={'/login'}>
          <span className="text-green-600">Login</span>
        </Link>
      </div>
    </div>
  );
}

export default Register;
