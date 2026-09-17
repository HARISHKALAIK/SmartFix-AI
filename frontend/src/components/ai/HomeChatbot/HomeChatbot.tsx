import { useState } from "react";
import { Bot, X, Send } from "lucide-react";

interface ChatMessage {
  id: number;
  text: string;
  sender: "user" | "bot";
}

export default function HomeChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");

  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 1,
      text: "Hi! 👋 I'm SmartFix AI Assistant. How can I help you?",
      sender: "bot",
    },
  ]);

  const sendMessage = () => {
    const text = message.trim();

    if (!text) return;

    const userMessage: ChatMessage = {
      id: Date.now(),
      text,
      sender: "user",
    };

    setMessages((prev) => [...prev, userMessage]);
    setMessage("");

    setTimeout(() => {
      const botMessage: ChatMessage = {
        id: Date.now() + 1,
        text: getResponse(text),
        sender: "bot",
      };

      setMessages((prev) => [...prev, botMessage]);
    }, 500);
  };

  const getResponse = (text: string): string => {
    const input = text.toLowerCase();

    if (
      input.includes("hi") ||
      input.includes("hello") ||
      input.includes("hey")
    ) {
      return "Hi! 👋 How can I help you with SmartFix AI?";
    }

    if (
      input.includes("smartfix") ||
      input.includes("what is smartfix")
    ) {
      return "SmartFix AI is an intelligent service management platform for reporting problems, assigning technicians, tracking requests, and managing SLA.";
    }

    if (
      input.includes("report") ||
      input.includes("problem") ||
      input.includes("issue")
    ) {
      return "You can report a problem by creating a service request and providing the issue details, category, priority, and location.";
    }

    if (
      input.includes("track") ||
      input.includes("status")
    ) {
      return "You can track your service request to see its current status and progress.";
    }

    if (
      input.includes("technician") ||
      input.includes("assign")
    ) {
      return "SmartFix AI can help assign suitable technicians based on the problem and service requirements.";
    }

    if (input.includes("sla")) {
      return "SLA stands for Service Level Agreement. SLA management helps monitor response and resolution targets.";
    }

    if (
      input.includes("thank") ||
      input.includes("thanks")
    ) {
      return "You're welcome! 😊";
    }

    return "I'm sorry, I don't have an answer for that yet. Try asking about SmartFix AI, reporting a problem, tracking, technicians, or SLA.";
  };

  return (
    <>
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="
            fixed bottom-6 right-6 z-[9999]
            w-14 h-14
            rounded-full
            bg-gradient-to-br from-blue-500 to-indigo-600
            text-white
            flex items-center justify-center
            shadow-2xl
            hover:scale-110
            transition-all
          "
          aria-label="Open SmartFix AI"
        >
          <Bot className="w-7 h-7" />

          <span
            className="
              absolute
              -top-0.5
              -right-0.5
              w-4
              h-4
              rounded-full
              bg-green-400
              border-2
              border-white
            "
          />
        </button>
      )}

      {isOpen && (
        <div
          className="
            fixed
            bottom-6
            right-6
            z-[9999]
            w-[360px]
            max-w-[calc(100vw-2rem)]
            h-[520px]
            max-h-[calc(100vh-2rem)]
            rounded-3xl
            bg-slate-950
            border
            border-white/10
            shadow-2xl
            overflow-hidden
            flex
            flex-col
          "
        >
          {/* HEADER */}

          <div
            className="
              flex
              items-center
              justify-between
              px-5
              py-4
              border-b
              border-white/10
              bg-gradient-to-r
              from-blue-600/20
              to-indigo-600/20
            "
          >
            <div className="flex items-center gap-3">
              <div
                className="
                  w-10
                  h-10
                  rounded-xl
                  bg-gradient-to-br
                  from-blue-500
                  to-indigo-600
                  flex
                  items-center
                  justify-center
                "
              >
                <Bot className="w-5 h-5 text-white" />
              </div>

              <div>
                <h3 className="text-sm font-semibold text-white">
                  SmartFix AI
                </h3>

                <p className="text-xs text-green-400">
                  ● Online & ready
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="
                w-9
                h-9
                rounded-lg
                flex
                items-center
                justify-center
                text-slate-400
                hover:text-white
                hover:bg-white/10
              "
              aria-label="Close chatbot"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* MESSAGES */}

          <div
            className="
              flex-1
              overflow-y-auto
              p-5
              space-y-4
            "
          >
            {messages.map((chat) => (
              <div
                key={chat.id}
                className={`flex ${
                  chat.sender === "user"
                    ? "justify-end"
                    : "justify-start"
                }`}
              >
                <div
                  className={`
                    max-w-[85%]
                    px-4
                    py-3
                    rounded-2xl
                    text-sm
                    ${
                      chat.sender === "user"
                        ? "bg-blue-600 text-white rounded-tr-sm"
                        : "bg-white/10 text-slate-200 rounded-tl-sm"
                    }
                  `}
                >
                  {chat.text}
                </div>
              </div>
            ))}
          </div>

          {/* INPUT */}

          <div className="p-4 border-t border-white/10">
            <div
              className="
                flex
                items-center
                gap-2
                p-2
                rounded-2xl
                bg-white/5
                border
                border-white/10
              "
            >
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    sendMessage();
                  }
                }}
                placeholder="Ask SmartFix AI..."
                className="
                  flex-1
                  bg-transparent
                  outline-none
                  px-3
                  text-sm
                  text-white
                  placeholder:text-slate-500
                "
              />

              <button
                onClick={sendMessage}
                disabled={!message.trim()}
                className="
                  w-10
                  h-10
                  rounded-xl
                  bg-blue-600
                  text-white
                  flex
                  items-center
                  justify-center
                  hover:bg-blue-500
                  disabled:opacity-50
                "
                aria-label="Send message"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}