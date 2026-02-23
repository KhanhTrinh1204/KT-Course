export const CONFIG = {
  GEMINI_API_KEY: import.meta.env.VITE_GEMINI_API_KEY || '',
  GEMINI_MODEL: 'gemini-2.5-pro',
  GEMINI_API_URL: 'https://generativelanguage.googleapis.com/v1beta/models/',
  GENERATION_CONFIG: {
    temperature: 0.7,
    topK: 40,
    topP: 0.95,
    maxOutputTokens: 8192
  }
};
