import { useState, useCallback } from "react";
import { SYSTEM_PROMPT } from "./chatbotConfig";

export function useChatbot() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendMessage = useCallback(async (userText) => {
    if (!userText.trim() || loading) return;

    const userMessage = { role: "user", content: userText.trim() };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "claude-haiku-4-5-20251001",
          max_tokens: 1000,
          system: SYSTEM_PROMPT,
          messages: updatedMessages,
        }),
      });

      if (!response.ok) throw new Error("API request failed");

      const data = await response.json();
      const assistantText = data.content
        .filter((block) => block.type === "text")
        .map((block) => block.text)
        .join("");

      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: assistantText },
      ]);
    } catch (err) {
      setError("Sorry, something went wrong. Please try again.");
      console.error("Chatbot error:", err);
    } finally {
      setLoading(false);
    }
  }, [messages, loading]);

  const clearMessages = useCallback(() => {
    setMessages([]);
    setError(null);
  }, []);

  return { messages, loading, error, sendMessage, clearMessages };
}
