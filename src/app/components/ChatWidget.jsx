"use client";
import React, { useState, useRef, useEffect } from "react";
import { FiMessageCircle, FiX } from "react-icons/fi";
import Chat from "../../../chat";

const initialMessages = [
  { from: "bot", text: "Hello! I'm Ruhit, How can I help you today?" },
];

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (open && messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, open]);

  function getBotResponse(query) {
    let response = "";
    const originalConsoleLog = console.log;
    console.log = (msg) => {
      response = msg;
    };
    Chat(query);
    console.log = originalConsoleLog;
    return response;
  }

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg = { from: "user", text: input };
    const botMsg = { from: "bot", text: getBotResponse(input) };
    setMessages((msgs) => [...msgs, userMsg, botMsg]);
    setInput("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSend();
  };

  return (
    <>
      {/* Chat Icon Button */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-50 bg-[#23232a] p-4 rounded-full shadow-lg hover:bg-[#34343c] transition-colors"
        aria-label="Open chat"
      >
        <FiMessageCircle size={28} color="#fff" />
      </button>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-end justify-end">
          <div
            className=" bg-opacity-40 absolute inset-0"
            onClick={() => setOpen(false)}
          />
          <div
            className="relative m-6 w-full max-w-xs sm:max-w-sm bg-[#23232a] rounded-xl shadow-2xl flex flex-col"
            style={{ height: 420 }}
          >
            {/* Header */}
            <div className="p-4 bg-[#1a1a1e] rounded-t-xl text-white font-semibold text-lg flex items-center justify-between">
              <span className="">💬</span>
              <button
                onClick={() => setOpen(false)}
                className="ml-2 p-1 rounded hover:bg-[#23232a] transition-colors"
                aria-label="Close chat"
              >
                <FiX size={20} color="#fff" />
              </button>
            </div>
            {/* Messages */}
            <div
              className="flex-1 overflow-y-auto p-4 space-y-2 text-white bg-[#23232a]"
              style={{ minHeight: 0 }}
            >
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${
                    msg.from === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`px-3 py-2 rounded-lg max-w-[80%] ${
                      msg.from === "user" ? "bg-[#3a3a40]" : "bg-[#151518]"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
            {/* Input */}
            <div className="p-3 bg-[#1a1a1e] rounded-b-xl flex gap-2">
              <input
                className="flex-1 px-3 py-2 rounded bg-[#23232a] text-white outline-none border border-[#34343c] focus:border-[#555]"
                placeholder="Type your message..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
              />
              <button
                className="bg-[#34343c] text-white px-4 py-2 rounded hover:bg-[#444] transition-colors"
                onClick={handleSend}
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
