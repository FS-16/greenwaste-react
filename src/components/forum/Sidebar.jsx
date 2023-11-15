import React from "react";
import { IoListCircle } from "react-icons/io5";
import { RiQuestionFill, RiAccountCircleFill } from "react-icons/ri";
import { SiQuantconnect } from "react-icons/si";
import { NavLink } from "react-router-dom";

function Sidebar() {
  const navigation = [
    {
      name: "All Question",
      href: "/forum/all-question",
      icon: (
        <IoListCircle
          size={30}
          className={({ iconActive }) => {
            return !iconActive;
          }}
        />
      ),
    },
    {
      name: "Ask Question",
      href: "/forum/ask-question",
      icon: (
        <RiQuestionFill
          size={30}
          className={({ iconActive }) => {
            return !iconActive;
          }}
        />
      ),
    },
    {
      name: "My Question",
      href: "/forum/my-question",
      icon: (
        <RiAccountCircleFill
          size={30}
          className={({ iconActive }) => {
            return !iconActive;
          }}
        />
      ),
    },
    {
      name: "My Participation",
      href: "/forum/my-participation",
      icon: (
        <SiQuantconnect
          size={30}
          className={({ iconActive }) => {
            return !iconActive;
          }}
        />
      ),
    },
  ];

  return (
    <div>
      <div className="flex flex-col mt-10 border-r-2">
        {/* SIDEBAR */}
        <div className="pr-16">
          {navigation.map((item) => (
            <NavLink
              to={item.href}
              key={item.name}
              className={({ isActive }) => {
                return !isActive
                  ? "text-gray-600 flex flex-row items-center gap-2 p-2 font-normal text-base hover:bg-[#cff3bd] hover:rounded-full m-2"
                  : "text-[#1a643d] bg-[#cff3bd] rounded-full flex flex-row items-center gap-2 p-1 font-semibold text-base w-48 border-2 border-green-800 m-2";
              }}
            >
              {item.icon}
              {item.name}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
