import React from "react";
import { Link, NavLink } from "react-router-dom";
import Search from "./Search";
import { logout } from "firebase.js";
import Icon from "./Icon";
import { useSelector } from "react-redux";
import { useState } from "react";
import classNames from "classnames";
export const Header = () => {
  const user = useSelector((state) => state.auth.user);
  const [open, setOpen] = useState(false);
  return (
    <div className="flex h-full ">
      <header
        className={classNames({
          " flex  bg-white w-[250px]  h-[100vh] border-r border-gray-300  duration-500": true,
          "w-[100px] ": open,
        })}
      >
        <div
          className={classNames({
            "grid-row-3 gap-16 grid w-[250px]   pt-8 pl-6 relative justify-betweenitems-centerh-[60px] container mx-auto ": true,
            "w-[150px]": open,
          })}
        >
          <div>
            <Link to="/">
              {open ? (
                <Icon name="instagram" size={24} />
              ) : (
                <img
                  className=" h-[32px] w-fit"
                  src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png"
                />
              )}
            </Link>
          </div>
          <nav className=" grid gap-8 items-center gap-x-5 w-fit">
            <NavLink
              to="/"
              onClick={() => setOpen(false)}
              className="flex text-base focus:font-semibold gap-4"
            >
              <Icon name="Home" size={24} />
              {!open && <p>Home</p>}
            </NavLink>
            <NavLink
              onClick={() => setOpen(!open)}
              className="flex text-base focus:font-semibold gap-4"
            >
              <Icon name="search" size={24} />
              {!open && <p>Search</p>}
            </NavLink>
            <NavLink
              to="/"
              onClick={() => setOpen(false)}
              className="flex text-base focus:font-semibold gap-4"
            >
              <Icon name="explore" size={24} />
              {!open && <p>Explore</p>}
            </NavLink>
            <NavLink
              onClick={() => setOpen(false)}
              to="/inbox"
              className="flex text-base focus:font-semibold gap-4"
            >
              <Icon name="direct" size={24} />
              {!open && <p>Messages</p>}
            </NavLink>
            <NavLink
              onClick={() => setOpen(false)}
              to="/"
              className="flex text-base focus:font-semibold gap-4"
            >
              <Icon name="notifications" size={24} />{" "}
              {!open && <p>Notifications</p>}
            </NavLink>
            <NavLink
              onClick={() => setOpen(false)}
              to="/"
              className="flex text-base focus:font-semibold gap-4"
            >
              <Icon name="create" size={24} /> {!open && <p>Create</p>}
            </NavLink>

            <NavLink
              onClick={() => setOpen(false)}
              to={`/${user.username}`}
              className="flex text-base focus:font-semibold gap-4"
            >
              <img src="./avatar.jpg" className="w-6 h-6 rounded-full" />{" "}
              {!open && <p>Profile</p>}
            </NavLink>
          </nav>
          <div className="w-fit">
            <NavLink
              to="/logout"
              className="flex text-base focus:font-semibold gap-4 pt-60 "
            >
              <Icon name="settigns" size={24} /> {!open && <p>Log Out</p>}
            </NavLink>
          </div>
        </div>
      </header>
      {open && <Search className="h-full duration-500" />}
    </div>
  );
};
