import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import GeminiChatWidget from './components/GeminiChatWidget';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import Category from './pages/Category';
import Blogs from './pages/Blogs';
import Pages from './pages/Pages';
import './App.css';

function App() {
  useEffect(() => {
    // Background music with user interaction
    const audioElement = document.getElementById('bg-music');
    if (audioElement) {
      const startAudio = () => {
        audioElement.muted = false;
        audioElement.volume = 0.1;
        audioElement.play().catch(() => {});
        document.removeEventListener('click', startAudio);
        document.removeEventListener('keydown', startAudio);
        document.removeEventListener('scroll', startAudio);
      };

      document.addEventListener('click', startAudio, { once: true });
      document.addEventListener('keydown', startAudio, { once: true });
      document.addEventListener('scroll', startAudio, { once: true });
    }
  }, []);

  return (
    <Router>
      <div className="App">
        <Header />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/category" element={<Category />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/pages" element={<Pages />} />
        </Routes>

        <Footer />

        {/* Background Music */}
        <audio id="bg-music" autoPlay loop muted>
          <source src="/audio/kt.mp3" type="audio/mpeg" />
        </audio>

        {/* Gemini Chat Widget */}
        <GeminiChatWidget />
      </div>
    </Router>
  );
}

export default App;
