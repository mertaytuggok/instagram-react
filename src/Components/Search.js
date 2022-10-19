import Icon from "./Icon";
import { AiFillCloseCircle } from "react-icons/ai";
import { useState } from "react";
import classNames from "classnames";

export default function Search() {
  const [open, setOpen] = useState(false);
  return (
    <div className=" w-[268px] relative  ">
      <span
        className={classNames({
          "  absolute top-0 text-[#8e8e8e] pointer-events-none left-0 h-9 w-9 flex items-center justify-center": true,
          hidden: open,
        })}
      >
        <Icon name="search" />
      </span>
      <input
        onFocus={() => setOpen(true)}
        onBlur={() => setOpen(false)}
        className="h-9 w-full focus:pl-3 outline-none pl-9 bg-[#efefef]"
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
  );
}
