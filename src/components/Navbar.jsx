import React from 'react';
import { useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';

function Navbar() {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div className="navbar bg-base-100 shadow-md mt-2">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>

          {/* MOBILE MENU */}
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <NavLink to="/">
              <li>
                <a>Home</a>
              </li>
            </NavLink>

            <NavLink to="/solution">
              <li>
                <a>Solution</a>
              </li>
            </NavLink>
            <li>
              <NavLink to="/forum">
                <a>Forum</a>
              </NavLink>
              <ul className="p-2 min-w-max">
                <NavLink to="/forum/all-question">
                  <li>
                    <a>All Question</a>
                  </li>
                </NavLink>
                <NavLink to="/forum/ask-question">
                  <li>
                    <a>Ask Question</a>
                  </li>
                </NavLink>
                <NavLink to="/forum/my-question">
                  <li>
                    <a>My Question</a>
                  </li>
                </NavLink>
                <NavLink to="/forum/my-participation">
                  <li>
                    <a>My Participation</a>
                  </li>
                </NavLink>
              </ul>
            </li>
            <div className="mt-1 py-3">
              {currentUser ? (
                <Link to="/profile">
                  <img
                    src="/img/avatar.png"
                    alt="avatar icon"
                    className="rounded-full w-7 h-7 object-cover"
                  />
                </Link>
              ) : (
                <div>
                  <NavLink to="/register">
                    <a className="mx-2 bg-gray-100 p-2 rounded-md">Register</a>
                  </NavLink>

                  <NavLink to="/login">
                    <a className="bg-green-500 p-2 rounded-md text-white">
                      Login
                    </a>
                  </NavLink>
                </div>
              )}
            </div>
          </ul>
        </div>
        <div className="normal-case text-xl navbar-center">
          <img src="/img/logo.png" alt="" />
        </div>
      </div>

      {/* DEKSTOP MENU */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <NavLink to="/">
            <li className="font-bold text-base">
              <a>Home</a>
            </li>
          </NavLink>

          <NavLink to="/solution">
            <li className="font-bold text-base">
              <a>Solution</a>
            </li>
          </NavLink>
          <li tabIndex={0}>
            <details>
              <summary className="font-bold text-base">Forum</summary>
              <ul className="p-2 min-w-max ">
                <NavLink to="/forum/all-question">
                  <li>
                    <a>All Question</a>
                  </li>
                </NavLink>
                <NavLink to="/forum/ask-question">
                  <li>
                    <a>Ask Question</a>
                  </li>
                </NavLink>
                <NavLink to="/forum/my-question">
                  <li>
                    <a>My Question</a>
                  </li>
                </NavLink>
                <NavLink to="/forum/my-participation">
                  <li>
                    <a>My Participation</a>
                  </li>
                </NavLink>
              </ul>
            </details>
          </li>
        </ul>
      </div>

      {/* BUTTON */}
      <div className="hidden lg:inline-flex lg:navbar-end gap-1">
        {currentUser ? (
          <Link to="/profile">
            <img
              src="/img/avatar.png"
              alt="avatar icon"
              className="rounded-full w-7 h-7 object-cover"
            />
          </Link>
        ) : (
          <div>
            <NavLink to="/register">
              <span className="mx-2  rounded-md p-2 text-base text-green-700 font-semibold border border-green-700 hover:bg-green-700 hover:text-white cursor-pointer">
                Register
              </span>
            </NavLink>
            <NavLink to="/login">
              <span className=" bg-green-500 text-white rounded-md p-2 text-base font-semibold cursor-pointer hover:bg-green-700 hover:text-white">
                Login
              </span>
            </NavLink>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
