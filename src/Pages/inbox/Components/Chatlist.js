import classNames from "classnames";
import { NavLink, useParams } from "react-router-dom";

export default function Chatlist() {
  const { conversationId } = useParams();
  const chats = [
    {
      id: 1,
      user: {
        avatar:
          "https://pbs.twimg.com/profile_images/1091440211282837506/04o0DRyD_400x400.jpg",
        name: "Mert Aytuğ Gök",
      },
      unread: true,
      lastMessage: " Selam ",
    },
    {
      id: 2,
      user: {
        avatar:
          "https://pbs.twimg.com/profile_images/1437390988209709062/QLWTvO6h_400x400.jpg",
        name: "Mahmut Can",
      },

      lastMessage: "Kahve ?",
    },
    {
      id: 3,
      user: {
        avatar:
          "https://pbs.twimg.com/profile_images/1362365661440315394/OL_xEE-e_400x400.jpg",
        name: "Nihat Can",
      },
      lastMessage: "Polonyaya selamlar!",
    },
  ];
  return (
    <div className=" h-[calc(100%-60px)] overflow-auto py-3">
      <header className="flex items-center justify-between px-5 mb-1">
        <h6 className="text-base font-semibold">Messages</h6>
        <button className=" text-brand text-sm font-semibold ">
          8 requests
        </button>
      </header>
      {chats.map((chat) => (
        <NavLink
          className={classNames({
            "h-[72px] flex items-center gap-x-4 hover:bg-zinc-50 px-5": true,
            "font-semibold": chat?.unread,
            "!bg-[#efefef]": +conversationId === chat.id,
          })}
          key={chat.id}
          to={`/inbox/${chat.id}`}
        >
          <img
            src={chat.user.avatar}
            className="w-14 h-14 rounded-full"
            alt=""
          />
          <div>
            <h6 className="text-sm">{chat.user.name}</h6>
            <p className={`text-sm ${!chat?.unread && "text-[#8e8e8e]"}`}>
              {chat.lastMessage}
            </p>
          </div>
        </NavLink>
      ))}
    </div>
  );
}
