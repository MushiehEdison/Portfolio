import { useState } from 'react';

export default function Gallery({ onBack }) {
  const [selectedItem, setSelectedItem] = useState(null);
  const [activeTab, setActiveTab] = useState('photos');

  const galleryData = {
    photos: [
      {
        id: 1,
        url: "../public/extra-c/CM3A1667.jpg",
        title: "CODE2CARE Hackathon 2025",
        description: "Team HEXA celebration after winning 3rd place with innovative AI solution"
      },
      {
        id: 2,
        url: "../public/extra-c/CM3A1717.jpg",
        title: "Hackathon Award Ceremony",
        description: "Receiving the 3rd place certificate and 250,000 FCFA prize"
      },
      {
        id: 3,
        url: "../public/extra-c/CM3A1595.jpg",
        title: "CODE2CARE Team Collaboration",
        description: "Working with the team on AI solutions for Douala General Hospital"
      },
      {
        id: 4,
        url: "../public/extra-c/IMG_6577.jpg",
        title: "Hackathon Presentation",
        description: "Presenting our AI solution to the judges and audience"
      }
    ],
    certifications: [
      {
        id: 1,
        url: "../public/extra-c/20250901_105601.jpg",
        title: "VTIB Full Stack Developer Certification",
        description: "Certificate of completion for Full Stack Development program",
        date: "2025"
      },
      {
        id: 2,
        url: "../public/extra-c/IMG-20250403-WA0007.jpg",
        title: "Full-Experts Consulting Internship Certificate",
        description: "Attestation for successful completion of internship",
        date: "2024"
      },
      {
        id: 3,
        url: "../public/extra-c/Screenshot 2025-10-23 022854.png",
        title: "CODE2CARE Hackathon Participation Certificate",
        description: "Certificate for attending Predictive Analytics and AI Integration training",
        date: "August 6, 2025"
      }
    ],
    events: [
      {
        id: 1,
        url: "../public/extra-c/IMG-20250810-WA0007.jpg",
        title: "CODE2CARE Hackathon 2025",
        description: "Participated in the AI and Data Science hackathon organized by Data Science Without Borders",
        date: "July 2025"
      }
    ]
  };

  const currentData = galleryData[activeTab];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 z-40 flex items-center justify-center p-4 sm:p-8">
      {/* Back Button */}
      <button 
        onClick={onBack}
        className="absolute top-4 sm:top-6 left-4 sm:left-8 text-white hover:text-green-200 transition-colors z-30"
      >
        <span className="text-xl sm:text-2xl">←</span>
      </button>

      {/* Title */}
      <div className="absolute top-4 sm:top-6 left-1/2 transform -translate-x-1/2 text-white text-lg sm:text-xl md:text-2xl font-mono font-bold z-20">
        Gallery
      </div>

      {/* Tabs */}
      <div className="absolute top-16 sm:top-20 left-1/2 transform -translate-x-1/2 flex gap-2 sm:gap-4 z-20">
        <button
          onClick={() => setActiveTab('photos')}
          className={`px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-mono rounded transition-all ${
            activeTab === 'photos'
              ? 'bg-white text-black'
              : 'bg-white bg-opacity-20 text-white hover:bg-opacity-30'
          }`}
        >
          Photos
        </button>
        <button
          onClick={() => setActiveTab('certifications')}
          className={`px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-mono rounded transition-all ${
            activeTab === 'certifications'
              ? 'bg-white text-black'
              : 'bg-white bg-opacity-20 text-white hover:bg-opacity-30'
          }`}
        >
          Certifications
        </button>
        <button
          onClick={() => setActiveTab('events')}
          className={`px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-mono rounded transition-all ${
            activeTab === 'events'
              ? 'bg-white text-black'
              : 'bg-white bg-opacity-20 text-white hover:bg-opacity-30'
          }`}
        >
          Events
        </button>
      </div>

      {/* Gallery Grid */}
      <div className="h-full w-full overflow-y-auto pt-28 sm:pt-32 pb-16 px-4 sm:px-8 md:px-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {currentData.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="group cursor-pointer relative overflow-hidden rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 bg-white bg-opacity-10 backdrop-blur-sm"
            >
              <img
                src={item.url}
                alt={item.title}
                className="w-full h-48 sm:h-56 md:h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white font-mono font-bold text-sm sm:text-base mb-1">
                    {item.title}
                  </h3>
                  <p className="text-white text-xs sm:text-sm font-mono opacity-80">
                    {item.description}
                  </p>
                  {item.date && (
                    <p className="text-white text-xs font-mono opacity-60 mt-1">
                      {item.date}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for expanded view */}
      {selectedItem && (
        <div
          onClick={() => setSelectedItem(null)}
          className="fixed inset-0 bg-black bg-opacity-90 z-40 flex items-center justify-center p-4 sm:p-8"
        >
          <div className="relative max-w-5xl w-full">
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute -top-10 right-0 text-white text-2xl sm:text-3xl hover:text-gray-300 transition-colors"
            >
              ✕
            </button>
            <img
              src={selectedItem.url}
              alt={selectedItem.title}
              className="w-full max-h-[70vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
            <div className="mt-4 text-center">
              <h3 className="text-white font-mono font-bold text-lg sm:text-xl md:text-2xl mb-2">
                {selectedItem.title}
              </h3>
              <p className="text-white text-sm sm:text-base font-mono opacity-80">
                {selectedItem.description}
              </p>
              {selectedItem.date && (
                <p className="text-white text-xs sm:text-sm font-mono opacity-60 mt-2">
                  {selectedItem.date}
                </p>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Bottom Hint */}
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 text-white text-xs sm:text-sm font-mono opacity-60 z-20">
        ← back to home
      </div>
    </div>
  );
}