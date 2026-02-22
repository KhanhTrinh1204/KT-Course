// Configuration file - DO NOT commit actual API keys
// Create a .env file and add your GEMINI_API_KEY there

const CONFIG = {
  // For development: You can temporarily set the key here
  // For production: Use environment variables or a backend proxy
  GEMINI_API_KEY: window.ENV?.GEMINI_API_KEY || '',
  GEMINI_MODEL: 'gemini-2.0-flash-exp',
  GEMINI_API_URL: 'https://generativelanguage.googleapis.com/v1beta/models/'
};

// Export for use in other files
window.APP_CONFIG = CONFIG;
