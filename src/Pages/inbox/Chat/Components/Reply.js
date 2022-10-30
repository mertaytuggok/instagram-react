import Icon from "Components/Icon";
import { useState } from "react";

export default function Reply({ setMessages }) {
  const [message, setMessage] = useState("");
  const sendMessage = (e) => {
    e.preventDefault();
    setMessages((messages) => [
      ...message,
      {
        from: {
          id: "ndFdg2WGkQPS3VOBOvIbHOgORjL2",
          name: "Mert Aytuğ Gök",
          avatar:
            "https://pbs.twimg.com/profile_images/1091440211282837506/04o0DRyD_400x400.jpg ",
        },
        message: "grup",
      },
    ]);
  };
  return (
    <footer className=" h-[84px] flex items-center justify-center px-6">
      <from
        onSubmit={sendMessage}
        className="h-11 border rounded-full flex item w-full pl-[11px] pr-2"
      >
        <button
          type="button"
          className="w-10 h-[42px] flex items-center justify-center"
        >
          <Icon name="emoji" size={24} />
        </button>
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Message...."
          className=" flex-1 outline-none placeholder:text-gray-500 h-10 text-sm px-[9px]"
        />
        {!message && (
          <>
            {" "}
            <button
              type="button"
              className="w-10 h-[42px] flex items-center justify-center"
            >
              <Icon name="picture" size={24} />
            </button>
            <button
              type="button"
              className="w-10 h-[42px] flex items-center justify-center"
            >
              <Icon name="Notifications" size={24} />
            </button>
          </>
        )}
        {message && (
          <button
            type="submit"
            className=" text-brand font-semibold text-sm px-4"
          >
            Send
          </button>
        )}
      </from>
    </footer>
  );
}
