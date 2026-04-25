import { useState, useEffect, useRef } from "react";
import "./Chatbot.css";
import { useChatbot } from "./useChatbot";
import { CHATBOT_CONFIG } from "./chatbotConfig";

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const { messages, loading, error, sendMessage, clearMessages } = useChatbot();
  const messagesEndRef = useRef(null);

  // Auto scroll to latest message
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, loading]);

  const handleSend = () => {
    if (!input.trim() || loading) return;
    sendMessage(input);
    setInput("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleSuggestion = (text) => {
    sendMessage(text);
  };

  const handleToggle = () => {
    setOpen((prev) => !prev);
    if (!open) clearMessages();
  };

  return (
    <div className="chatbot-bubble">

      {/* ── CHAT WINDOW ── */}
      {open && (
        <div className="chatbot-window">

          {/* Header */}
          <div className="chatbot-header">
            <div className="chatbot-header-info">
              <div className="chatbot-avatar">B</div>
              <div className="chatbot-header-text">
                <h4>{CHATBOT_CONFIG.name}</h4>
                <p>BSOAA Melbourne Assistant</p>
              </div>
            </div>
            <button className="chatbot-close" onClick={() => setOpen(false)} aria-label="Close chat">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div className="chatbot-messages">

            {/* Welcome screen — shown when no messages yet */}
            {messages.length === 0 && (
              <div className="chatbot-welcome">
                <div className="chatbot-welcome-logo">
                  <img src="/bsoaa_melbourne/basava_logo.png" alt="BSOAA" />
                </div>
                <p>{CHATBOT_CONFIG.welcomeMessage}</p>
                <div className="chatbot-suggestions">
                  {CHATBOT_CONFIG.suggestions.map((s) => (
                    <button
                      key={s}
                      className="chatbot-suggestion-btn"
                      onClick={() => handleSuggestion(s)}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Conversation messages */}
            {messages.map((msg, i) => (
              <div key={i} className={`chatbot-msg ${msg.role}`}>
                {msg.role === "assistant" && (
                  <div className="chatbot-msg-avatar">B</div>
                )}
                <div className="chatbot-msg-bubble">{msg.content}</div>
              </div>
            ))}

            {/* Typing indicator */}
            {loading && (
              <div className="chatbot-msg assistant">
                <div className="chatbot-msg-avatar">B</div>
                <div className="chatbot-typing">
                  <span /><span /><span />
                </div>
              </div>
            )}

            {/* Error message */}
            {error && <div className="chatbot-error">{error}</div>}

            <div ref={messagesEndRef} />
          </div>

          {/* Input area */}
          <div className="chatbot-input-area">
            <input
              className="chatbot-input"
              type="text"
              placeholder="Ask about BSOAA..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              disabled={loading}
            />
            <button
              className="chatbot-send"
              onClick={handleSend}
              disabled={loading || !input.trim()}
              aria-label="Send message"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13"/>
                <polygon points="22 2 15 22 11 13 2 9 22 2"/>
              </svg>
            </button>
          </div>

        </div>
      )}

      {/* ── TOGGLE BUTTON ── */}
      <button
        className="chatbot-toggle"
        onClick={handleToggle}
        aria-label={open ? "Close chat" : "Open chat"}
      >
        {open ? (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
          </svg>
        )}
      </button>

    </div>
  );
}
