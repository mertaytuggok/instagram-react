import React from "react";
import { Link, NavLink } from "react-router-dom";
import Search from "./Search";
import { logout } from "firebase.js";
import Icon from "./Icon";
import { useSelector } from "react-redux";
import classNames from "classnames";
export const Header = () => {
  const user = useSelector((state) => state.auth.user);
  return (
    <header className=" bg-white w-full border border-gray-100 ">
      <div className="flex items-center justify-between h-[60px] container mx-auto ">
        <Link to="/">
          <img
            className=" h-[29px]"
            src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png"
          />
        </Link>
        <Search />

        <nav className=" flex items-center gap-x-5">
          <NavLink to="/">
            {({ isActive }) => (
              <Icon name={isActive ? "Home-filled" : "Home"} size={24} />
            )}
          </NavLink>
          <NavLink to="/inbox">
            {({ isActive }) => (
              <Icon name={isActive ? "direct-filled" : "direct"} size={24} />
            )}
          </NavLink>
          <NavLink to="/">
            <Icon name="create" size={24} />
          </NavLink>
          <NavLink to="/">
            <Icon name="explore" size={24} />
          </NavLink>
          <NavLink to="/">
            <Icon name="notifications" size={24} />
          </NavLink>
          <NavLink to={`/${user.username}`}>
            {({ isActive }) => (
              <img
                src="./avatar.jpg"
                className={classNames({
                  "w-6 h-6 rounded-full": true,
                  "ring-1 ring-offset-1 ring-black": isActive,
                })}
              />
            )}
          </NavLink>
        </nav>
      </div>
    </header>
  );
};
