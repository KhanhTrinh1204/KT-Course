// Environment variables loader
// This file should load your environment variables
// NOTE: For client-side apps, API keys should ideally be handled by a backend

window.ENV = {
  // Load from your actual .env file or backend
  // For now, you need to manually set this or use a build tool
  GEMINI_API_KEY: '' // Will be loaded from .env or set manually
};

// If you're using a build tool like Vite, Webpack, or Parcel:
// They can inject environment variables at build time
// Example with Vite: import.meta.env.VITE_GEMINI_API_KEY
