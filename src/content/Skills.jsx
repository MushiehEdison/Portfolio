import React from 'react';

export default function Skills({ onBack }) {
  const skillCategories = [
    {
      category: "Frontend Development",
      skills: [
        { name: "React.js", level: 85, icon: "⚛️" },
        { name: "JavaScript", level: 90, icon: "🟨" },
        { name: "HTML", level: 95, icon: "🌐" },
        { name: "CSS", level: 90, icon: "🎨" },
        { name: "Tailwind", level: 80, icon: "💨" },
        { name: "Bootstrap", level: 75, icon: "🅱️" }
      ]
    },
    {
      category: "Backend Development",
      skills: [
        { name: "Python", level: 90, icon: "🐍" },
        { name: "Flask", level: 85, icon: "🧪" },
        { name: "Django", level: 75, icon: "🎯" },
        { name: "MySQL", level: 80, icon: "🗄️" }
      ]
    },
    {
      category: "AI & Data Science",
      skills: [
        { name: "NumPy", level: 75, icon: "🔢" },
        { name: "pandas", level: 80, icon: "🐼" },
        { name: "Matplotlib", level: 70, icon: "📊" },
        { name: "Scikit-learn", level: 70, icon: "🤖" }
      ]
    },
    {
      category: "Tools & Design",
      skills: [
        { name: "Git", level: 85, icon: "🔀" },
        { name: "Figma", level: 70, icon: "🎨" },
        { name: "WordPress", level: 80, icon: "📝" },
        { name: "Wix", level: 80, icon: "🌟" }
      ]
    }
  ];

  return (
    <div className="fixed inset-0 bg-green-900 overflow-hidden">
      {/* Back Button */}
      <button
        onClick={onBack}
        className="absolute top-4 sm:top-6 left-4 sm:left-8 text-white hover:text-green-200 transition-colors z-20"
      >
        <span className="text-xl sm:text-2xl">←</span>
      </button>

      {/* Title */}
      <div className="absolute top-4 sm:top-6 left-1/2 transform -translate-x-1/2 text-white text-lg sm:text-xl md:text-2xl font-mono font-bold">
        Technical Skills
      </div>

      {/* Content */}
      <div className="h-full w-full flex items-center justify-center px-4 sm:px-8 md:px-16 lg:px-32 pt-16 sm:pt-20">
        <div className="max-w-4xl w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="bg-white bg-opacity-20 backdrop-blur-sm p-4 sm:p-6 rounded-lg hover:bg-opacity-30 transition-all"
              >
                <h3 className="text-white font-mono font-bold text-base sm:text-lg md:text-xl mb-3 sm:mb-4 border-b border-white border-opacity-30 pb-2">
                  {category.category}
                </h3>
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="text-white text-xs sm:text-sm font-mono flex items-center group"
                    >
                      <span className="mr-2 sm:mr-3 group-hover:scale-125 transition-transform">{skill.icon}</span>
                      <span className="group-hover:text-green-200 transition-colors">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-6 sm:mt-8 text-center">
            <p className="text-white text-xs sm:text-sm font-mono opacity-80">
              Always learning and exploring new technologies
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Navigation Hint */}
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 text-white text-xs sm:text-sm font-mono opacity-60">
        click ← to return home
      </div>
    </div>
  );
}