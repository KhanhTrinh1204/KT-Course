import { useState } from 'react';
import { CONFIG } from '../config';
import qaData from '../data/kt-course-qa.json';

export const useGeminiChat = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      content: 'Xin chào! Tôi là trợ lý AI của KAY TEE. Tôi có thể giúp gì cho bạn về khóa học tiếng Nhật?',
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);

  const formatResponse = (text) => {
    return text
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      .replace(/```([\s\S]*?)```/g, '<pre><code>$1</code></pre>')
      .replace(/`(.*?)`/g, '<code>$1</code>')
      .replace(/\n/g, '<br>');
  };

  // Build context from Q&A data
  const buildContext = () => {
    let context = qaData.systemPrompt + '\n\n';
    context += 'THÔNG TIN QUAN TRỌNG:\n';
    context += `- Giảng viên: ${qaData.context.instructor.name}\n`;
    context += `- Trình độ: ${qaData.context.instructor.qualifications.join(', ')}\n`;
    context += `- Website: ${qaData.context.website.name} - ${qaData.context.website.purpose}\n`;
    context += `- Các môn học: JPD113, JPD123, JPD133\n\n`;
    
    // Add sample Q&A for context
    context += 'MỘT SỐ CÂU HỎI THƯỜNG GẶP:\n';
    qaData.qa.slice(0, 10).forEach(item => {
      context += `Q: ${item.question}\nA: ${item.answer}\n\n`;
    });
    
    return context;
  };

  const sendMessage = async (userMessage) => {
    if (!userMessage.trim()) return;

    const userMsg = {
      id: Date.now(),
      content: userMessage,
      isUser: true,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, userMsg]);
    setIsLoading(true);

    try {
      // Build enhanced prompt with context
      const contextPrompt = buildContext();
      const fullPrompt = `${contextPrompt}\n\nCâu hỏi của người dùng: ${userMessage}\n\nHãy trả lời dựa trên thông tin về KT-Course và Khánh Trịnh ở trên. Nếu không biết, hãy gợi ý liên hệ qua Facebook.`;

      const requestBody = {
        contents: [{
          parts: [{ text: fullPrompt }]
        }],
        generationConfig: CONFIG.GENERATION_CONFIG
      };

      const response = await fetch(
        `${CONFIG.GEMINI_API_URL}${CONFIG.GEMINI_MODEL}:generateContent?key=${CONFIG.GEMINI_API_KEY}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(requestBody)
        }
      );

      const data = await response.json();

      if (!response.ok) {
        const errorMessage = data.error?.message || 'API request failed';
        if (response.status === 429) {
          throw new Error('Bạn đã gửi quá nhiều tin nhắn. Vui lòng đợi một chút rồi thử lại. 🙏');
        } else if (response.status === 400) {
          throw new Error('Yêu cầu không hợp lệ. Vui lòng thử lại.');
        } else if (response.status === 403) {
          throw new Error('API key không hợp lệ hoặc bị hạn chế.');
        }
        throw new Error(errorMessage);
      }

      const aiResponse = data.candidates?.[0]?.content?.parts?.[0]?.text || 'No response generated';
      
      const aiMsg = {
        id: Date.now() + 1,
        content: formatResponse(aiResponse),
        isUser: false,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiMsg]);

    } catch (error) {
      console.error('Gemini API Error:', error);
      const errorMsg = {
        id: Date.now() + 1,
        content: `Xin lỗi, đã có lỗi xảy ra: ${error.message}`,
        isUser: false,
        isError: true,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  return { messages, isLoading, sendMessage };
};
