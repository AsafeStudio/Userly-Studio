import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Chatbot } from './components/Chatbot';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<'home' | 'services' | 'about'>('home');

  const navigateTo = (page: 'home' | 'services' | 'about') => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={navigateTo} />;
      case 'services':
        return <Services />;
      case 'about':
        return <About />;
      default:
        return <Home onNavigate={navigateTo} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar onNavigate={navigateTo} />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
};

export default App;