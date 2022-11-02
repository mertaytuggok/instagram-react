import { AiFillCloseCircle } from "react-icons/ai";
import { useState } from "react";
import classNames from "classnames";
import Icon from "./Icon";

export default function Search() {
  const [open, setOpen] = useState(false);
  return (
    <div className=" w-[397px] h-full border-r border-gray-300 rounded-r-3xl   ">
      <div className="grid justify-center items-center p-8 border-b border-gray-300">
        <div className="text-[22px] font-semibold  mb-8">Search</div>
        <div className="relative ">
          <span
            className={classNames({
              "  absolute top-0 text-[#8e8e8e] pointer-events-none left-0 h-9 w-9 flex items-center justify-center": true,
              hidden: open,
            })}
          >
            <Icon name="search" />
          </span>{" "}
          <input
            onFocus={() => setOpen(true)}
            onBlur={() => setOpen(false)}
            className="h-9 focus:pl-3 outline-none pl-9 rounded-md w-[364px]  bg-[#efefef]"
            placeholder="Search"
          />
          <button
            onClick={() => setOpen(false)}
            className={classNames({
              " absolute text-[#c7c7c7] hidden  top-0 right-0  w-9 h-9  items-center justify-center": true,
              "!flex": open,
            })}
          >
            <AiFillCloseCircle />
          </button>
        </div>
      </div>
      <div className="p-8 font-semibold text-base">Recent</div>
    </div>
  );
}
