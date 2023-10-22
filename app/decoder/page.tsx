"use client";
import { fetchEventSource } from "@microsoft/fetch-event-source";
import { useRef, useState, useEffect, useMemo } from "react";

const decoderPage = () => {
  const [loading, setloading] = useState<boolean>(false);
  const [query, setQuery] = useState<string>("");

  const messageListRef = useRef<HTMLDivElement>(null);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (!query) {
      alert("Please input your message");
      return;
    }
    const question = query.trim();
    setloading(true);
    setQuery("");
    const ctrl = new AbortController();

    try {
      fetchEventSource("api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          question,
        }),
        signal: ctrl.signal,
        onerror: (err) => {
          setloading(false);
          ctrl.abort();
        },
      });
    } catch (error) {
      setloading(false);
      alert("error");
    }
  };

  return (
    <div className="h-screen w-screen r bg-white">
      <div className="w-full max-w-[1000px] mx-auto">
        <p className="text-black/60">
          Enter the cron pattern in the first box and a human readable
          interperation will be presented in the cron pattern meaning box
        </p>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <textarea
            name="userinput"
            id="userinput"
            ref={textAreaRef}
            placeholder={loading ? "loading" : "what is the message"}
            value={query}
          />
          <button type="submit" className="bg-blue-400">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default decoderPage;
