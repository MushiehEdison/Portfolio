import { useState, useEffect } from 'react';
import About from './content/About';
import Projects from './content/Projects';
import Skills from './content/Skills';
import Startup from './content/StartUp';
import Gallery from './content/Gallery';

export default function App() {
  const [currentView, setCurrentView] = useState('home');
  const [imageExpanded, setImageExpanded] = useState(false);

  // Handle navigation and URL updates
  useEffect(() => {
    // Get initial route from URL hash
    const hash = window.location.hash.slice(1) || 'home';
    setCurrentView(hash);

    // Listen for hash changes (browser back/forward)
    const handleHashChange = () => {
      const newHash = window.location.hash.slice(1) || 'home';
      setCurrentView(newHash);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (view) => {
    window.location.hash = view;
    setCurrentView(view);
  };

  if (currentView === 'about') return <About onBack={() => navigateTo('home')} />;
  if (currentView === 'projects') return <Projects onBack={() => navigateTo('home')} />;
  if (currentView === 'skills') return <Skills onBack={() => navigateTo('home')} />;
  if (currentView === 'startup') return <Startup onBack={() => navigateTo('home')} />;
  if (currentView === 'gallery') return <Gallery onBack={() => navigateTo('home')} />;

  return (
    <div className="fixed inset-0 bg-gray-50 overflow-hidden">
      {/* Header */}
      <header className="absolute top-0 left-0 right-0 flex justify-between items-center px-4 sm:px-8 py-4 sm:py-6 z-10">
        <div className="text-gray-600 text-base sm:text-lg font-mono">Mushieh Edison</div>
        <div className="text-gray-600 text-base sm:text-lg font-mono cursor-pointer hover:text-gray-900">
          HELLO WORLD
        </div>
        <a href="mailto:mushiehedison66@gmail.com" className="text-gray-600 text-base sm:text-lg font-mono cursor-pointer hover:text-gray-900">
          contact
        </a>
      </header>

      {/* Main Content */}
      <div className="h-full w-full flex flex-col items-center justify-center relative px-4">
        {/* Top Black Folder - Gallery */}
        <div 
          onClick={() => navigateTo('gallery')}
          className="absolute top-16 sm:top-24 left-1/2 transform -translate-x-1/2 cursor-pointer group"
        >
          <div className="relative">
            <div className="w-16 h-12 sm:w-20 sm:h-16 bg-black rounded-t-lg shadow-lg group-hover:shadow-2xl transition-all">
              <div className="absolute -top-2 left-2 w-8 h-3 sm:w-10 sm:h-4 bg-black rounded-t"></div>
            </div>
            <div className="text-center mt-2 text-[10px] sm:text-xs font-mono text-gray-700">Gallery</div>
          </div>
        </div>

        {/* Left Folder - About Me */}
        <div 
          onClick={() => navigateTo('about')}
          className="absolute left-4 sm:left-16 md:left-32 top-1/2 transform -translate-y-1/2 cursor-pointer group"
        >
          <div className="relative">
            <div className="w-20 h-16 sm:w-28 sm:h-20 md:w-32 md:h-24 bg-gradient-to-br from-gray-400 to-gray-500 rounded-t-lg shadow-lg group-hover:shadow-2xl transition-all">
              <div className="absolute -top-2 left-3 w-10 h-3 sm:w-14 sm:h-4 bg-gradient-to-br from-gray-400 to-gray-500 rounded-t"></div>
              <div className="absolute inset-0 bg-gray-300 opacity-50 rounded-t-lg" style={{
                backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(41, 41, 41, 0.1) 2px, rgba(0, 0, 0, 0.1) 4px)'
              }}></div>
            </div>
            <div className="text-center mt-2 text-[10px] sm:text-xs font-mono text-gray-700">About Me</div>
          </div>
        </div>

        {/* Center Image */}
        <div className="relative z-20">
          <img 
            src=" /me2.jpg"
            alt="Profile"
            onClick={() => setImageExpanded(!imageExpanded)}
            className={`cursor-pointer transition-all duration-500 shadow-2xl ${
              imageExpanded 
                ? 'w-[80vw] h-[80vh] sm:w-[70vw] sm:h-[70vh] md:w-[60vw] md:h-[60vh] object-cover' 
                : 'w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 object-cover rounded-sm'
            }`}
          />
        </div>

        {/* Right Bottom Folder - Projects */}
        <div 
          onClick={() => navigateTo('projects')}
          className="absolute right-4 sm:right-16 md:right-32 bottom-32 sm:bottom-40 cursor-pointer group"
        >
          <div className="relative">
            <div className="w-20 h-16 sm:w-28 sm:h-20 md:w-32 md:h-24 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-t-lg shadow-lg group-hover:shadow-2xl transition-all">
              <div className="absolute -top-2 left-3 w-10 h-3 sm:w-14 sm:h-4 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-t"></div>
              <div className="absolute inset-0 bg-yellow-300 opacity-30 rounded-t-lg" style={{
                backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(255,255,255,.3) 2px, rgba(255,255,255,.3) 4px)'
              }}></div>
            </div>
            <div className="text-center mt-2 text-[10px] sm:text-xs font-mono text-gray-700">Projects</div>
          </div>
        </div>

        {/* Bottom Left Folder - Skills */}
        <div 
          onClick={() => navigateTo('skills')}
          className="absolute left-8 sm:left-20 md:left-40 bottom-16 sm:bottom-24 cursor-pointer group"
        >
          <div className="relative">
            <div className="w-20 h-16 sm:w-28 sm:h-20 md:w-32 md:h-24 bg-gradient-to-br from-blue-400 to-blue-500 rounded-t-lg shadow-lg group-hover:shadow-2xl transition-all">
              <div className="absolute -top-2 left-3 w-10 h-3 sm:w-14 sm:h-4 bg-gradient-to-br from-blue-400 to-blue-500 rounded-t"></div>
              <div className="absolute inset-0 bg-blue-300 opacity-30 rounded-t-lg" style={{
                backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(255,255,255,.3) 2px, rgba(255,255,255,.3) 4px)'
              }}></div>
            </div>
            <div className="text-center mt-2 text-[10px] sm:text-xs font-mono text-gray-700">Skills</div>
          </div>
        </div>

        {/* Right Top Folder - Startup */}
        <div 
          onClick={() => navigateTo('startup')}
          className="absolute right-8 sm:right-20 md:right-40 top-24 sm:top-32 cursor-pointer group"
        >
          <div className="relative">
            <div className="w-20 h-16 sm:w-28 sm:h-20 md:w-32 md:h-24 bg-gradient-to-br from-green-400 to-green-500 rounded-t-lg shadow-lg group-hover:shadow-2xl transition-all">
              <div className="absolute -top-2 left-3 w-10 h-3 sm:w-14 sm:h-4 bg-gradient-to-br from-green-400 to-green-500 rounded-t"></div>
              <div className="absolute inset-0 bg-green-300 opacity-30 rounded-t-lg" style={{
                backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(255,255,255,.3) 2px, rgba(255,255,255,.3) 4px)'
              }}></div>
            </div>
            <div className="text-center mt-2 text-[10px] sm:text-xs font-mono text-gray-700">My Startup</div>
          </div>
        </div>
      </div>

      {/* Footer */}
    <footer className="absolute bottom-0 left-0 right-0 text-center py-4 sm:py-6 ">
      <div className=" text-[4px] sm:text-xs font-mono space-x-2 sm:space-x-4">
        <a href="https://www.instagram.com/_only_edi?utm_source=qr&igsh=c2lvZ3VoZzM3Nm5s" target="_blank" rel="noopener noreferrer" className="hover:text-gray-500 cursor-pointer">instagram</a>
        <span>/</span>
        <a href="https://www.linkedin.com/in/mushieh-edison-614782293" target="_blank" rel="noopener noreferrer" className="hover:text-gray-500 cursor-pointer">linkedin</a>
        <span>/</span>
        <a href="http://www.github.com/MushiehEdison" target="_blank" rel="noopener noreferrer" className="hover:text-gray-500 cursor-pointer">github</a>
      </div>
    </footer>
    </div>
  );
}