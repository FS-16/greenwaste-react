import React from 'react';
import handleTitle from '../handle/handleTitle';
import { useSelector } from 'react-redux';

function Profile() {
  const { currentUser } = useSelector((state) => state.user);

  handleTitle('Profile | GreenWaste');
  return (
    <div className="mt-10 p-3 max-w-lg mx-auto">
      <h1 className="text-center text-3xl font-semibold">Profile</h1>

      <form className="flex flex-col gap-5">
        <img
          src="/img/avatar.png"
          alt="profile image"
          className="rounded-full w-24 h-24 object-cover cursor-pointer self-center mt-4"
        />
        <input
          type="text"
          placeholder="Username"
          className="border p-3 rounded"
          id="username"
        />
        <input
          type="email"
          placeholder="Email"
          className="border p-3 rounded"
          id="email"
        />
        <input
          type="password"
          placeholder="Password"
          className="border p-3 rounded"
          id="password"
        />
        <button className="bg-green-500 text-white rounded-lg p-4 uppercase hover:opacity-95 disabled:opacity-80">
          Update User
        </button>
      </form>

      <div className="flex flex-row justify-between mt-2">
        <button className="bg-red-500 text-white rounded-lg p-2">
          Delete Account
        </button>
        <button className="bg-red-500 text-white rounded-lg p-2">Logout</button>
      </div>
    </div>
  );
}

export default Profile;
