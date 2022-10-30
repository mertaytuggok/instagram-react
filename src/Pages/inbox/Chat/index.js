import Header from "./Components/Header";
import Reply from "./Components/Reply";
import Messages from "./Components/Messages";
import { useState } from "react";

export default function Chat() {
  const user = {
    name: "Mert Aytuğ Gök",
    avatar:
      "https://pbs.twimg.com/profile_images/1091440211282837506/04o0DRyD_400x400.jpg",
  };
  const [messages, setMessages] = useState([
    {
      from: {
        id: "ndFdg2WGkQPS3VOBOvIbHOgORjL2",
        name: "Mert Aytuğ Gök",
        avatar:
          "https://pbs.twimg.com/profile_images/1091440211282837506/04o0DRyD_400x400.jpg ",
      },
      message: "grup",
    },

    {
      from: {
        id: "7w42vtIHOhRn8tBP7uNd3wTnXn72",
        name: "Can Çatı",
        avatar:
          "https://pbs.twimg.com/profile_images/1437390988209709062/QLWTvO6h_400x400.jpg",
      },
      message: "test",
    },
    {
      from: {
        id: "7w42vtIHOhRn8tBP7uNd3wTnXn72",
        name: "Can Çatı",
        avatar:
          "https://pbs.twimg.com/profile_images/1437390988209709062/QLWTvO6h_400x400.jpg",
      },
      message: "deneme",
    },
    {
      from: {
        id: "7w42vtIHOhRn8tBP7uNd3wTnXn72",
        name: "Can Çatı",
        avatar:
          "https://pbs.twimg.com/profile_images/1437390988209709062/QLWTvO6h_400x400.jpg",
      },
      message: "mersin",
    },
    {
      from: {
        id: "ndFdg2WGkQPS3VOBOvIbHOgORjL2",
        name: "Mert Aytuğ Gök",
        avatar:
          "https://pbs.twimg.com/profile_images/1091440211282837506/04o0DRyD_400x400.jpg ",
      },
      message:
        "aksdjasnkd aıudhaksdhask dad adhaskdhakdhjajsd akdjakjjdhadkajsdhaksdjhaskdj",
    },
    {
      from: {
        id: "7w42vtIHOhRn8tBP7uNd3wTnXn72",
        name: "Can Çatı",
        avatar:
          "https://pbs.twimg.com/profile_images/1437390988209709062/QLWTvO6h_400x400.jpg",
      },
      message: "test",
    },
  ]);
  return (
    <div className=" flex-1">
      <Header user={user} />
      <Messages messages={messages} />

      <Reply setMessages={setMessages} />
    </div>
  );
}
