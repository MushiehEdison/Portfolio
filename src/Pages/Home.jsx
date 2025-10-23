import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Custom Folder Icon Component
const FolderIcon = ({ color = "#FCD34D", size = 120 }) => (
  <svg width={size} height={size * 0.75} viewBox="0 0 120 90" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Tab background */}
    <path 
      d="M15 15C15 12.2386 17.2386 10 20 10H42L52 20H105C107.761 20 110 22.2386 110 25V30H15V15Z" 
      fill={color}
      stroke="#000000ff"
      strokeWidth="1.5"
    />
    {/* Main folder body */}
    <path 
      d="M15 25H110C112.761 25 115 27.2386 115 30V80C115 82.7614 112.761 85 110 85H20C17.2386 85 15 82.7614 15 80V25Z" 
      fill={color}
      stroke="#000000ff"
      strokeWidth="1.5"
    />
    {/* Diagonal pattern */}
    <defs>
      <pattern id={`pattern-${color}`} x="0" y="0" width="8" height="8" patternUnits="userSpaceOnUse">
        <path d="M0 8L8 0M-2 2L2 -2M6 10L10 6" stroke="#666" strokeWidth="0.5" opacity="0.15"/>
      </pattern>
    </defs>
    <rect x="15" y="25" width="100" height="60" fill={`url(#pattern-${color})`}/>
  </svg>
);

export default function Home() {
  const [imageExpanded, setImageExpanded] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="fixed inset-0 bg-gray-50 overflow-hidden">
      {/* Header */}
      <header className="absolute top-0 left-0 right-0 flex justify-between items-center px-4 sm:px-8 py-4 sm:py-6 z-10">
        <div className="text-gray-600 text-xs sm:text-sm font-mono">Mushieh Edison</div>
        <div className="text-gray-600 text-xs sm:text-sm font-mono cursor-pointer">
          HELLO WORLD
        </div>
        <a href="mailto:mushiehedison66@gmail.com" className="text-gray-600 text-xs sm:text-sm font-mono cursor-pointer">
          contact
        </a>
      </header>

      {/* Main Content */}
      <div className="h-full w-full flex flex-col items-center justify-center relative px-4">
        {/* Top Black Folder - Gallery */}
        <div 
          onClick={() => navigate('/gallery')}
          className="absolute top-12 sm:top-20 left-1/2 transform -translate-x-1/2 cursor-pointer"
        >
          <div className="flex flex-col items-center">
            <div className="drop-shadow-lg">
              <FolderIcon 
                color="#000000ff" 
                size={window.innerWidth < 640 ? 60 : window.innerWidth < 768 ? 80 : 100}
              />
            </div>
            <div className="text-center mt-1 text-[10px] sm:text-xs font-mono text-gray-700">Gallery</div>
          </div>
        </div>

        {/* Left Folder - About Me */}
        <div 
          onClick={() => navigate('/about')}
          className="absolute left-4 sm:left-16 md:left-32 top-1/2 transform -translate-y-1/2 cursor-pointer"
        >
          <div className="flex flex-col items-center">
            <div className="drop-shadow-lg">
              <FolderIcon 
                color="#4b4b4bff" 
                size={window.innerWidth < 640 ? 70 : window.innerWidth < 768 ? 100 : 120}
              />
            </div>
            <div className="text-center mt-1 text-[10px] sm:text-xs font-mono text-gray-700">About Me</div>
          </div>
        </div>

        {/* Center Image */}
        <div className="relative z-20">
          <img 
            src="/me2.jpg"
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
          onClick={() => navigate('/projects')}
          className="absolute right-4 sm:right-16 md:right-32 bottom-32 sm:bottom-40 cursor-pointer"
        >
          <div className="flex flex-col items-center">
            <div className="drop-shadow-lg">
              <FolderIcon 
                color="#061a5eff" 
                size={window.innerWidth < 640 ? 70 : window.innerWidth < 768 ? 100 : 120}
              />
            </div>
            <div className="text-center mt-1 text-[10px] sm:text-xs font-mono text-gray-700">Projects</div>
          </div>
        </div>

        {/* Bottom Left Folder - Skills */}
        <div 
          onClick={() => navigate('/skills')}
          className="absolute left-8 sm:left-20 md:left-40 bottom-16 sm:bottom-24 cursor-pointer"
        >
          <div className="flex flex-col items-center">
            <div className="drop-shadow-lg">
              <FolderIcon 
                color="#0b4d1fff" 
                size={window.innerWidth < 640 ? 70 : window.innerWidth < 768 ? 100 : 120}
              />
            </div>
            <div className="text-center mt-1 text-[10px] sm:text-xs font-mono text-gray-700">Skills</div>
          </div>
        </div>

        {/* Right Top Folder - Startup */}
        <div 
          onClick={() => navigate('/startup')}
          className="absolute right-8 sm:right-20 md:right-40 top-20 sm:top-28 cursor-pointer"
        >
          <div className="flex flex-col items-center">
            <div className="drop-shadow-lg">
              <FolderIcon 
                color="#dba100ff" 
                size={window.innerWidth < 640 ? 70 : window.innerWidth < 768 ? 100 : 120}
              />
            </div>
            <div className="text-center mt-1 text-[10px] sm:text-xs font-mono text-gray-700">Startup</div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="absolute bottom-0 left-0 right-0 text-center py-4 sm:py-6">
        <div className="text-xs sm:text-xs font-mono space-x-2 sm:space-x-4">
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