import React from "react";

export const Stories = ({ user }) => {
  return (
    <div className="w-[300px] h-full pt-8 pr-8 cursor-pointer ">
      <p className="text-base font-bold">Stories</p>
      {user.map((data, i) => (
        <div key={i} className="flex m-4 gap-4 justify-start items-center">
          <div className="w-[65px] h-[65px] rounded-full justify-center items-center ring-2 ring-offset-2 ring-red-400 ">
            <img
              src={data.avatar}
              className="w-[65px] h-[65px] rounded-full  "
            />
          </div>
          <p className="font-semibold  text-[#262626]">{data.userName}</p>
        </div>
      ))}
    </div>
  );
};
