import React from "react";
import { Message } from "./Message";
import ScrollToBottom from "react-scroll-to-bottom";

export default function Messages({ messages }) {
  return (
    <ScrollToBottom className="h-[calc(100%-144px)] px-4 overflow-auto messages-box ">
      <div className="mb-auto">
        {messages.map((message, i) => (
          <Message message={message} key={i} />
        ))}
      </div>
    </ScrollToBottom>
  );
}
