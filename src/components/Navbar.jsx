import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <div className="">
      <nav className="container mx-auto px-10 flex flex-row justify-between p-5">
        <div className="">
          <img src="/img/logo.png" alt="logo" />
        </div>

        <ul className="flex flex-row gap-10 items-center ">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/solution">About</NavLink>
          </li>
          <li>
            <NavLink to="/forum">Forum</NavLink>
          </li>
        </ul>

        <div className="flex flex-row gap-10">
          <button>Register</button>
          <button>Login</button>
        </div>
      </nav>

      <hr />
    </div>
  );
}

export default Navbar;
