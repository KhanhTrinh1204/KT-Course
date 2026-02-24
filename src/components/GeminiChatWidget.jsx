import React, { useState, useRef, useEffect } from 'react';
import { useGeminiChat } from '../hooks/useGeminiChat';
import './GeminiChatWidget.css';

const GeminiChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const { messages, isLoading, sendMessage } = useGeminiChat();
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() && !isLoading) {
      sendMessage(inputValue);
      setInputValue('');
    }
  };

  return (
    <div className="gemini-chat-widget">
      <button
        className="gemini-chat-button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Open chat"
      >
        <svg viewBox="0 0 24 24">
          <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"/>
        </svg>
      </button>

      {isOpen && (
        <div className="gemini-chat-container">
          <div className="gemini-chat-header">
            <h3>💬 Trợ lý AI KAY TEE</h3>
            <button
              className="gemini-chat-close"
              onClick={() => setIsOpen(false)}
              aria-label="Close chat"
            >
              &times;
            </button>
          </div>

          <div className="gemini-chat-messages">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`gemini-message ${message.isUser ? 'user' : 'bot'} ${message.isError ? 'error' : ''}`}
              >
                {!message.isUser && (
                  <div className="gemini-avatar">
                    <img src="/img/ava-wed.jpg" alt="AI Avatar" />
                  </div>
                )}
                <div
                  className="gemini-message-content"
                  dangerouslySetInnerHTML={{ __html: message.content }}
                />
                {message.isUser && (
                  <div className="gemini-avatar">
                    <i className="fa-solid fa-user"></i>
                  </div>
                )}
              </div>
            ))}
            {isLoading && (
              <div className="gemini-message bot">
                <div className="gemini-avatar">
                  <img src="/img/ava-wed.jpg" alt="AI Avatar" />
                </div>
                <div className="gemini-message-content gemini-typing">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <form className="gemini-chat-input-container" onSubmit={handleSubmit}>
            <input
              ref={inputRef}
              type="text"
              className="gemini-chat-input"
              placeholder="Nhập tin nhắn..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              disabled={isLoading}
              autoComplete="off"
            />
            <button
              type="submit"
              className="gemini-chat-send"
              disabled={isLoading || !inputValue.trim()}
              aria-label="Send message"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
              </svg>
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default GeminiChatWidget;
