import React from "react";
import Icon from "./Icon";
import { Stories } from "./Stories";

export const Posts = () => {
  const user = [
    {
      userName: "mertaytuggok",
      avatar:
        "https://pbs.twimg.com/profile_images/1091440211282837506/04o0DRyD_400x400.jpg ",
      post: "https://pbs.twimg.com/profile_images/1091440211282837506/04o0DRyD_400x400.jpg ",
    },
    {
      userName: "mcancati",
      avatar:
        "https://pbs.twimg.com/profile_images/1437390988209709062/QLWTvO6h_400x400.jpg",
      post: "https://pbs.twimg.com/profile_images/1437390988209709062/QLWTvO6h_400x400.jpg",
    },
    {
      userName: "nihatcan",
      avatar:
        "https://pbs.twimg.com/profile_images/1362365661440315394/OL_xEE-e_400x400.jpg",
      post: "https://pbs.twimg.com/profile_images/1362365661440315394/OL_xEE-e_400x400.jpg",
    },
  ];
  return (
    <div className="flex ">
      <div className=" w-[470px] h-[695px]   border-b mt-3 ">
        {user.map((user, i) => (
          <div key={i}>
            {" "}
            <div className=" w-full h-[56px] flex gap-5 p-1 mt-5 justify-between items-center font-semibold ">
              <img src={user.avatar} className="w-8 h-8 rounded-full " />{" "}
              <p className=" w-full text-left">{user.userName}</p>
              <button>
                <Icon name="options" size={24} />
              </button>
            </div>
            <img className="w-[472px] h-[472px] bg-white" src={user.post}></img>
            <div className=" grid gap-y-2 ">
              <div className="w-full flex justify-between h-[46px] items-center">
                <div className="flex gap-x-3">
                  <button>
                    <Icon name="notifications" size={24} />
                  </button>
                  <button>
                    <Icon name="comment" size={24} />
                  </button>
                  <button>
                    {" "}
                    <Icon name="share" size={24} />
                  </button>
                </div>

                <button>
                  {" "}
                  <Icon name="save" size={24} />
                </button>
              </div>
              <div className="text-[#262626] justify-start font-semibold text-sm">
                8,563 likes
              </div>
              <div className="text-[#262626] justify-start font-semibold text-sm">
                mcancati
              </div>
              <div className="text-[#8e8e8e] justify-start font-normal text-sm">
                Wiev all 103 comments
              </div>
              <input
                className=" w-full  h-[24px] p-3 outline-none  rounded-md "
                placeholder="Add a comment..."
              />
            </div>
          </div>
        ))}
      </div>
      <div className="fixed  right-0">
        <Stories user={user} />
      </div>
    </div>
  );
};
