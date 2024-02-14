"use client";
import React from "react";
import { useChat } from "ai/react";

const ChatBot = () => {
  const { handleInputChange, input, handleSubmit, messages, isLoading } =
    useChat();

  console.log(messages);

  return (
    <section className="flex justify-center items-center">
      <form className="max-w-xl w-full" onSubmit={handleSubmit}>
        <div className="text-white max-h-96 h-full overflow-y-auto">
          {messages.map((mess, index) => (
            <div
              className={`flex flex-col mb-2 p-2 rounded-md ${
                mess.role === "assistant"
                  ? "self-end bg-gray-800"
                  : "self-start bg-blue-700"
              }`}
              key={index}
            >
              <span
                className={`text-xs text-white ${
                  mess.role === "assistant" ? "text-right" : "text-left"
                }`}
              >
                {mess.role}
              </span>
              {mess.content}
            </div>
          ))}
        </div>

        <div className="flex justify-between my-4">
          <label className="text-slate-500 block font-bold my-2">
            Escribí algo
          </label>
          <button
            className="bg-blue-600 text-white px-3 py-2 rounded-md focus:outline-none disabled:opacity-50"
            disabled={isLoading || !input}
          >
            Enviar
          </button>
        </div>
        <textarea
          rows={4}
          value={input}
          placeholder="escribí tu mensaje acá"
          className="text-black bg-slate-300 px-3 py-2 w-full rounded-md focus:outline-none"
          onChange={handleInputChange}
        ></textarea>
      </form>
    </section>
  );
};

export default ChatBot;
