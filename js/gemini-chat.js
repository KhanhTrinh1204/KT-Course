// Gemini Chat Widget
(function() {
  'use strict';

  // Get configuration from global config
  const CONFIG = window.APP_CONFIG || {
    GEMINI_API_KEY: '',
    GEMINI_MODEL: 'gemini-2.5-pro',
    GEMINI_API_URL: 'https://generativelanguage.googleapis.com/v1beta/models/'
  };

  // Chat state
  let chatHistory = [];
  let isOpen = false;

  // Create chat widget HTML
  function createChatWidget() {
    const chatWidget = document.createElement('div');
    chatWidget.id = 'gemini-chat-widget';
    chatWidget.innerHTML = `
      <style>
        #gemini-chat-widget {
          position: fixed;
          bottom: 20px;
          right: 20px;
          z-index: 9999;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }
        
        #gemini-chat-button {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border: none;
          cursor: pointer;
          box-shadow: 0 4px 12px rgba(0,0,0,0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.3s ease;
        }
        
        #gemini-chat-button:hover {
          transform: scale(1.1);
        }
        
        #gemini-chat-button svg {
          width: 30px;
          height: 30px;
          fill: white;
        }
        
        #gemini-chat-container {
          display: none;
          position: fixed;
          bottom: 90px;
          right: 20px;
          width: 380px;
          height: 550px;
          background: white;
          border-radius: 12px;
          box-shadow: 0 8px 32px rgba(0,0,0,0.2);
          flex-direction: column;
          overflow: hidden;
        }
        
        #gemini-chat-container.open {
          display: flex;
        }
        
        #gemini-chat-header {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 16px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        #gemini-chat-header h3 {
          margin: 0;
          font-size: 16px;
          font-weight: 600;
        }
        
        #gemini-chat-close {
          background: none;
          border: none;
          color: white;
          font-size: 24px;
          cursor: pointer;
          padding: 0;
          width: 30px;
          height: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        #gemini-chat-messages {
          flex: 1;
          overflow-y: auto;
          padding: 16px;
          background: #f5f5f5;
        }
        
        .gemini-message {
          margin-bottom: 12px;
          display: flex;
          gap: 8px;
        }
        
        .gemini-message.user {
          flex-direction: row-reverse;
        }
        
        .gemini-message-content {
          max-width: 75%;
          padding: 10px 14px;
          border-radius: 12px;
          word-wrap: break-word;
        }
        
        .gemini-message.user .gemini-message-content {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
        }
        
        .gemini-message.bot .gemini-message-content {
          background: white;
          color: #333;
          box-shadow: 0 1px 2px rgba(0,0,0,0.1);
        }
        
        #gemini-chat-input-container {
          padding: 16px;
          background: white;
          border-top: 1px solid #e0e0e0;
          display: flex;
          gap: 8px;
        }
        
        #gemini-chat-input {
          flex: 1;
          padding: 10px 14px;
          border: 1px solid #e0e0e0;
          border-radius: 20px;
          outline: none;
          font-size: 14px;
        }
        
        #gemini-chat-input:focus {
          border-color: #667eea;
        }
        
        #gemini-chat-send {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          border: none;
          border-radius: 50%;
          width: 40px;
          height: 40px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: opacity 0.3s;
        }
        
        #gemini-chat-send:hover {
          opacity: 0.9;
        }
        
        #gemini-chat-send:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
        
        .gemini-typing {
          display: flex;
          gap: 4px;
          padding: 10px 14px;
        }
        
        .gemini-typing span {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #999;
          animation: typing 1.4s infinite;
        }
        
        .gemini-typing span:nth-child(2) {
          animation-delay: 0.2s;
        }
        
        .gemini-typing span:nth-child(3) {
          animation-delay: 0.4s;
        }
        
        @keyframes typing {
          0%, 60%, 100% {
            transform: translateY(0);
          }
          30% {
            transform: translateY(-10px);
          }
        }
      </style>
      
      <button id="gemini-chat-button" aria-label="Open chat">
        <svg viewBox="0 0 24 24">
          <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"/>
        </svg>
      </button>
      
      <div id="gemini-chat-container">
        <div id="gemini-chat-header">
          <h3>💬 Chat với AI</h3>
          <button id="gemini-chat-close" aria-label="Close chat">&times;</button>
        </div>
        <div id="gemini-chat-messages">
          <div class="gemini-message bot">
            <div class="gemini-message-content">
              Xin chào! Tôi là trợ lý AI. Tôi có thể giúp gì cho bạn?
            </div>
          </div>
        </div>
        <div id="gemini-chat-input-container">
          <input 
            type="text" 
            id="gemini-chat-input" 
            placeholder="Nhập tin nhắn..."
            autocomplete="off"
          />
          <button id="gemini-chat-send" aria-label="Send message">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
              <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
            </svg>
          </button>
        </div>
      </div>
    `;
    
    document.body.appendChild(chatWidget);
  }

  // Toggle chat
  function toggleChat() {
    isOpen = !isOpen;
    const container = document.getElementById('gemini-chat-container');
    if (isOpen) {
      container.classList.add('open');
      document.getElementById('gemini-chat-input').focus();
    } else {
      container.classList.remove('open');
    }
  }

  // Add message to chat
  function addMessage(content, isUser = false) {
    const messagesContainer = document.getElementById('gemini-chat-messages');
    const messageDiv = document.createElement('div');
    messageDiv.className = `gemini-message ${isUser ? 'user' : 'bot'}`;
    messageDiv.innerHTML = `
      <div class="gemini-message-content">${content}</div>
    `;
    messagesContainer.appendChild(messageDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }

  // Show typing indicator
  function showTyping() {
    const messagesContainer = document.getElementById('gemini-chat-messages');
    const typingDiv = document.createElement('div');
    typingDiv.className = 'gemini-message bot';
    typingDiv.id = 'gemini-typing-indicator';
    typingDiv.innerHTML = `
      <div class="gemini-message-content gemini-typing">
        <span></span><span></span><span></span>
      </div>
    `;
    messagesContainer.appendChild(typingDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }

  // Hide typing indicator
  function hideTyping() {
    const typingIndicator = document.getElementById('gemini-typing-indicator');
    if (typingIndicator) {
      typingIndicator.remove();
    }
  }

  // Call Gemini API
  async function callGeminiAPI(message) {
    try {
      const response = await fetch(
        `${CONFIG.GEMINI_API_URL}${CONFIG.GEMINI_MODEL}:generateContent?key=${CONFIG.GEMINI_API_KEY}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            contents: [{
              parts: [{
                text: message
              }]
            }]
          })
        }
      );

      if (!response.ok) {
        throw new Error(`API Error: ${response.status}`);
      }

      const data = await response.json();
      return data.candidates[0].content.parts[0].text;
    } catch (error) {
      console.error('Gemini API Error:', error);
      return 'Xin lỗi, đã có lỗi xảy ra. Vui lòng thử lại sau.';
    }
  }

  // Send message
  async function sendMessage() {
    const input = document.getElementById('gemini-chat-input');
    const sendButton = document.getElementById('gemini-chat-send');
    const message = input.value.trim();
    
    if (!message) return;
    
    // Add user message
    addMessage(message, true);
    input.value = '';
    sendButton.disabled = true;
    
    // Show typing indicator
    showTyping();
    
    // Call API
    const response = await callGeminiAPI(message);
    
    // Hide typing and show response
    hideTyping();
    addMessage(response, false);
    sendButton.disabled = false;
    input.focus();
  }

  // Initialize chat widget
  function init() {
    // Check if API key is set
    if (!CONFIG.GEMINI_API_KEY) {
      console.warn('⚠️ Gemini API key not set. Please set GEMINI_API_KEY in js/env.js');
    }

    createChatWidget();
    
    // Event listeners
    document.getElementById('gemini-chat-button').addEventListener('click', toggleChat);
    document.getElementById('gemini-chat-close').addEventListener('click', toggleChat);
    document.getElementById('gemini-chat-send').addEventListener('click', sendMessage);
    document.getElementById('gemini-chat-input').addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        sendMessage();
      }
    });
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
