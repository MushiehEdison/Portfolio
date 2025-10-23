export default function ProjectDetail({ project, onBack }) {
  return (
    <div className={`fixed inset-0 bg-gradient-to-br ${project.color} overflow-y-auto`}>
      {/* Back Button */}
      <button 
        onClick={onBack}
        className="fixed top-4 sm:top-6 left-4 sm:left-8 text-white hover:text-gray-100 transition-colors z-20"
      >
        <span className="text-xl sm:text-2xl">←</span>
      </button>

      {/* Content */}
      <div className="min-h-full w-full flex items-center justify-center px-4 sm:px-8 md:px-16 lg:px-32 py-20 sm:py-24">
        <div className="max-w-4xl w-full">
          {/* Header */}
          <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-6 sm:p-8 md:p-10 mb-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-2">
              <h1 className="text-white font-mono font-bold text-2xl sm:text-3xl md:text-4xl">
                {project.title}
              </h1>
              <span className="text-white text-sm sm:text-base font-mono opacity-80 bg-white bg-opacity-20 px-3 py-1 rounded">
                {project.year}
              </span>
            </div>
            <p className="text-white text-sm sm:text-base md:text-lg font-mono opacity-90 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Tech Stack */}
          <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-6 sm:p-8 mb-6">
            <h2 className="text-white font-mono font-bold text-lg sm:text-xl md:text-2xl mb-4">
              Tech Stack
            </h2>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {project.tech.map((tech, index) => (
                <span 
                  key={index}
                  className="bg-white bg-opacity-30 text-white text-xs sm:text-sm font-mono px-3 py-1.5 sm:px-4 sm:py-2 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Features */}
          <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-6 sm:p-8 mb-6">
            <h2 className="text-white font-mono font-bold text-lg sm:text-xl md:text-2xl mb-4">
              Key Features
            </h2>
            <div className="space-y-2 sm:space-y-3">
              {project.features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <span className="text-white text-lg mr-3 mt-0.5">•</span>
                  <span className="text-white text-sm sm:text-base font-mono opacity-90">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Challenges & Outcome */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-6 sm:p-8">
              <h2 className="text-white font-mono font-bold text-lg sm:text-xl mb-3">
                Challenges
              </h2>
              <p className="text-white text-sm sm:text-base font-mono opacity-90 leading-relaxed">
                {project.challenges}
              </p>
            </div>

            <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-6 sm:p-8">
              <h2 className="text-white font-mono font-bold text-lg sm:text-xl mb-3">
                Outcome
              </h2>
              <p className="text-white text-sm sm:text-base font-mono opacity-90 leading-relaxed">
                {project.outcome}
              </p>
            </div>
          </div>

          {/* Links */}
          {project.link && (
            <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-6 sm:p-8 text-center">
              <a 
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-gray-800 font-mono font-bold text-sm sm:text-base px-6 py-3 sm:px-8 sm:py-4 rounded-lg hover:bg-opacity-90 transition-all"
              >
                View Live Project →
              </a>
            </div>
          )}
        </div>
      </div>

      {/* Bottom Hint */}
      <div className="fixed bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 text-white text-xs sm:text-sm font-mono opacity-60">
        ← back to projects
      </div>
    </div>
  );
}