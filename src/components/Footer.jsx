import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillFacebook } from 'react-icons/ai';
import { Link, NavLink } from 'react-router-dom';

export default function Footer() {
  return (
    <div className="mt-10">
      <footer className="footer p-10 bg-[#A5EA82] text-base-content">
        <aside>
          <img src="/img/logo.png" alt="logo greenwaste" />
          <p>
            Membawa Harapan dan Tindakan Nyata untuk Penanganan Limbah, <br />
            Sebagai Pionir Dalam Menciptakan Masa Depan yang Lebih Berkelanjutan
            Bagi Semua
          </p>
        </aside>
        <nav>
          <header className="footer-title text-black">Connect With Us</header>
          <Link to="/">
            <p className="link link-hover">Home</p>
          </Link>
          <Link to="/solution">
            <p className="link link-hover">Solution</p>
          </Link>
          <Link to="/forum">
            <p className="link link-hover">Forum</p>
          </Link>
        </nav>
        <nav>
          <header className="footer-title text-black">Follow Us</header>
          <span className="flex">
            <AiFillFacebook size={20} />
            <a className="mx-1 link link-hover">Facebook</a>
          </span>
          <span className="flex">
            <AiFillGithub size={20} />
            <a className="mx-1 link link-hover">Github</a>
          </span>
          <span className="flex">
            <AiFillInstagram size={20} />
            <a className="mx-1 link link-hover">Instagram</a>
          </span>
        </nav>
      </footer>
    </div>
  );
}
