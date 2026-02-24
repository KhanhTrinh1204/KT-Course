# KT Course - Japanese Learning Platform 🎌

A modern, interactive Japanese language learning platform built with React and Vite, featuring an AI-powered chat assistant using Google Gemini API.

![React](https://img.shields.io/badge/React-18.2.0-blue)
![Vite](https://img.shields.io/badge/Vite-5.0.8-purple)
![License](https://img.shields.io/badge/License-Private-red)

## ✨ Features

- 📚 **Course Information** - Comprehensive Japanese course details (JPD113, JPD123, JPD133)
- 🤖 **AI Chat Assistant** - Powered by Google Gemini 2.5 Pro
- 🎨 **Modern UI/UX** - Responsive design with smooth animations
- 🌙 **Dark Mode** - Toggle between light and dark themes
- 🎵 **Background Music** - Ambient audio player
- ⚡ **Fast Performance** - Built with Vite for lightning-fast HMR
- 📱 **Mobile Responsive** - Optimized for all screen sizes
- 🎯 **TypeWriter Effect** - Dynamic text animation
- 🎠 **Course Carousel** - Interactive course showcase

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm
- Google Gemini API key ([Get one here](https://aistudio.google.com/app/apikey))

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd KT-Course

# Install dependencies
npm install

# Create environment file
cp .env.example .env.local

# Add your Gemini API key to .env.local
VITE_GEMINI_API_KEY=your_api_key_here

# Start development server
npm run dev
```

Visit `http://localhost:5173`

## 📦 Scripts

```bash
npm run dev      # Start development server (port 5173)
npm run build    # Build for production
npm run preview  # Preview production build
```

## 🏗️ Project Structure

```
KT-Course/
├── public/              # Static assets
│   ├── audio/          # Background music
│   ├── css/            # Global stylesheets
│   ├── img/            # Images and photos
│   └── svg/            # SVG icons and patterns
├── src/
│   ├── components/     # React components
│   │   ├── Header.jsx
│   │   ├── BioSection.jsx
│   │   ├── CoursesSection.jsx
│   │   ├── GeminiChatWidget.jsx
│   │   └── GeminiChatWidget.css
│   ├── hooks/          # Custom React hooks
│   │   ├── useGeminiChat.js
│   │   ├── useScrollHeader.js
│   │   └── useTypewriter.js
│   ├── config.js       # App configuration
│   ├── App.jsx         # Main app component
│   ├── App.css         # App styles
│   ├── index.jsx       # Entry point
│   └── index.css       # Global styles
├── .env.local          # Environment variables (not committed)
├── .gitignore          # Git ignore rules
├── index.html          # HTML template
├── package.json        # Dependencies
├── vite.config.js      # Vite configuration
└── README.md           # This file
```

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file in the root directory:

```env
VITE_GEMINI_API_KEY=your_gemini_api_key_here
```

### Vite Config

Customize `vite.config.js` for your needs:

```javascript
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    open: true
  }
})
```

### Gemini AI Settings

Edit `src/config.js` to adjust AI behavior:

```javascript
export const CONFIG = {
  GEMINI_MODEL: 'gemini-2.5-pro',
  GENERATION_CONFIG: {
    temperature: 0.7,      // Creativity (0.0-1.0)
    topK: 40,
    topP: 0.95,
    maxOutputTokens: 8192  // Response length
  }
}
```

## 🎨 Customization

### Change Theme Colors

Edit `public/css/style.css` or component CSS files to customize colors and styles.

### Modify Chat Widget

- **Avatar**: Replace `/img/ava-wed.jpg` with your image
- **Welcome Message**: Edit `src/hooks/useGeminiChat.js`
- **Styling**: Modify `src/components/GeminiChatWidget.css`

### Add New Courses

Update the `courses` array in `src/App.jsx`:

```javascript
const courses = [
  {
    id: 1,
    title: 'Your Course Title',
    tag: '#YourTag',
    duration: 'Duration',
    image: './img/your-image.jpg',
    // ... more fields
  }
]
```

## 🛠️ Tech Stack

- **Frontend Framework**: React 18.2.0
- **Build Tool**: Vite 5.0.8
- **AI Integration**: Google Gemini 2.5 Pro API
- **Styling**: CSS3 with Flexbox/Grid
- **Icons**: Font Awesome 6.4.2
- **Language**: JavaScript (ES6+)

## 📱 Features Breakdown

### AI Chat Widget
- Real-time conversation with Gemini AI
- Markdown support (bold, italic, code blocks)
- Typing indicators
- Error handling
- Message history
- Avatar display

### Interactive Components
- Auto-typing text effect
- Smooth scroll animations
- Course carousel with navigation
- Dark mode toggle
- Mobile hamburger menu
- Search functionality

### Performance
- Fast HMR with Vite
- Optimized bundle size
- Lazy loading images
- Efficient re-renders

## 🔐 Security

- API keys stored in environment variables
- `.env.local` excluded from Git
- No sensitive data in client code
- HTTPS recommended for production

## 📝 Development Guidelines

### Code Style
- Use functional components with hooks
- Follow React best practices
- Keep components small and focused
- Use meaningful variable names

### Git Workflow
```bash
# Create feature branch
git checkout -b feature/your-feature

# Make changes and commit
git add .
git commit -m "feat: your feature description"

# Push to remote
git push origin feature/your-feature
```

## 🚢 Deployment

### Build for Production

```bash
npm run build
```

Output will be in the `dist/` folder.

### Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Deploy to Netlify

```bash
# Build
npm run build

# Deploy dist/ folder to Netlify
```

## 🐛 Troubleshooting

### Port Already in Use
Change port in `vite.config.js`:
```javascript
server: { port: 3000 }
```

### API Key Not Working
1. Check `.env.local` file exists
2. Verify key starts with `VITE_`
3. Restart dev server after changing env

### Build Errors
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

## 📄 License

Private - All rights reserved

## 👤 Author

**Khánh Trịnh (KAY TEE)**

- Facebook: [@kaytee1204](https://www.facebook.com/kaytee1204/)
- YouTube: [Learn Japanese Channel](https://www.youtube.com/@khanhtrinhchannel)
- University: FPT University Hanoi

## 🙏 Acknowledgments

- Google Gemini API for AI capabilities
- Font Awesome for icons
- React community for excellent tools
- All students and supporters

## 📞 Support

For questions about Japanese courses:
- Contact via Facebook: [kaytee1204](https://www.facebook.com/kaytee1204/)
- Watch tutorials on YouTube
- Join live courses via Google Meet

---

**Made with ❤️ by Khánh Trịnh**

*Teaching Japanese • Building Dreams • Connecting Cultures*
