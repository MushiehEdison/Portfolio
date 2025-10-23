import { useState } from 'react';
import ProjectDetail from './ProjectDetail';

export default function Projects({ onBack }) {
  const [selectedProject, setSelectedProject] = useState(null);

const projects = [
  {
    id: 1,
    title: "Business Analytics Platform",
    year: "2025",
    description: "An AI-powered business analytics platform that serves as a data center for companies. It analyzes company records, identifies patterns, visualizes market and competitor data, and generates tailored business and marketing strategies for growth.",
    tech: ["React", "Python", "MySQL", "Flask", "Chart.js"],
    features: [
      "AI-driven data analysis",
      "Market and competitor insights",
      "Interactive dashboards and visualizations",
      "Predictive business strategy generation",
      "Company record analytics and pattern detection"
    ],
    challenges: "Building real-time data processing and ensuring insights remain accurate across large datasets.",
    outcome: "Enabled companies to make data-driven decisions and identify key market opportunities faster.",
    link: "#",
    color: "from-black to-black"
  },
  {
    id: 2,
    title: "E-Commerce Website",
    year: "2025",
    description: "An online marketplace for vendors and clients to buy and sell goods. Anyone can register as a buyer or seller and manage products seamlessly.",
    tech: ["PHP", "MySQL", "JavaScript", "Bootstrap", "HTML", "CSS"],
    features: [
      "Vendor and customer registration",
      "Product management and search",
      "Order tracking and checkout system",
      "Secure payment integration",
      "Responsive design for all devices"
    ],
    challenges: "Designing a secure and scalable architecture to handle multiple vendors and transactions.",
    outcome: "Launched successfully with a growing number of sellers and buyers engaging daily.",
    link: "#",
    color: "from-black to-black"
  },
  {
    id: 3,
    title: "AI-Powered Patient Education System",
    year: "2025",
    description: "An intelligent health assistant that educates and advises patients in both English and French. Users can interact with the system through text or voice, receiving medical guidance and personalized health advice.",
    tech: ["Python", "React", "PostgreSQL", "FastAPI", "SpeechRecognition"],
    features: [
      "Voice and text-based interaction",
      "Bilingual support (English & French)",
      "AI-driven health education and recommendations",
      "Patient history and progress tracking",
      "Secure data storage"
    ],
    challenges: "Training the AI to handle medical data accurately and respond naturally in both languages.",
    outcome: "Improved patient understanding of health topics and reduced clinic consultation time by 30%.",
    link: "#",
    color: "from-black to-black"
  },
  {
    id: 4,
    title: "Blood Bank Forecasting System",
    year: "2025",
    description: "A predictive system that analyzes blood donation data to forecast future blood availability and demand across hospitals and regions.",
    tech: ["Python", "React", "MySQL", "TensorFlow"],
    features: [
      "Predictive blood supply analytics",
      "Hospital data integration",
      "Interactive data visualization",
      "Shortage and demand forecasting",
      "User-friendly admin dashboard"
    ],
    challenges: "Ensuring prediction accuracy and handling incomplete donation records efficiently.",
    outcome: "Enabled hospitals to manage blood stocks more efficiently and reduce shortages.",
    link: "#",
    color: "from-black to-black"
  },
  {
    id: 5,
    title: "Full Experts Consulting Website",
    year: "2024",
    description: "Developed a professional website for Full Experts Consulting to showcase services, projects, and team expertise with a modern, responsive design.",
    tech: ["HTML", "CSS", "JavaScript", "Bootstrap", "PHP"],
    features: [
      "Company portfolio and team showcase",
      "Service presentation pages",
      "Contact and inquiry forms",
      "SEO optimization",
      "Fast and mobile-friendly layout"
    ],
    challenges: "Creating a sleek, corporate look while maintaining responsiveness and fast performance.",
    outcome: "Increased company visibility and client inquiries through the online platform.",
    link: "https://full-expert.com/",
    color: "from-black to-black"
  },
  {
    id: 6,
    title: "NGO and Company Websites",
    year: "2024",
    description: "Built multiple modern websites for NGOs and private organizations with responsive, user-friendly interfaces.",
    tech: ["HTML", "CSS", "JavaScript", "Bootstrap", "React"],
    features: [
      "Organization showcase pages",
      "Project and event listings",
      "Contact and feedback forms",
      "Responsive layouts",
      "Fast performance and elegant design"
    ],
    challenges: "Ensuring each site reflected the organization’s identity while maintaining a consistent standard.",
    outcome: "Delivered professional online presence for multiple organizations.",
    links: [
      "https://luxuryterrace.netlify.app/",
      "https://lubs.netlify.app/",
      "https://armureriebissoung.netlify.app/"
    ],
    color: "from-black to-black"
  },
  {
    id: 7,
    title: "Fitness Website with Payment Integration",
    year: "2024",
    description: "Developed a responsive fitness website with integrated payment features for fitness plans and programs.",
    tech: ["React", "Node.js", "Express", "Stripe", "MongoDB"],
    features: [
      "Fitness plan display and subscription",
      "Online payment processing",
      "Responsive and clean UI design",
      "Admin control panel",
      "User account management"
    ],
    challenges: "Integrating secure payment systems and ensuring smooth performance across devices.",
    outcome: "Enabled users to easily subscribe and manage fitness plans online.",
    link: "https://fitness-z41z.onrender.com/",
    color: "from-black to-black"
  }
];




  if (selectedProject) {
    return (
      <ProjectDetail 
        project={selectedProject} 
        onBack={() => setSelectedProject(null)} 
      />
    );
  }

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-gray-800 to-gray-900 overflow-y-auto">
      {/* Back Button */}
      <button 
        onClick={onBack}
        className="fixed top-4 sm:top-6 left-4 sm:left-8 text-white hover:text-gray-300 transition-colors z-20"
      >
        <span className="text-xl sm:text-2xl">←</span>
      </button>

      {/* Title */}
      <div className="fixed top-4 sm:top-6 left-1/2 transform -translate-x-1/2 text-white text-lg sm:text-xl md:text-2xl font-mono font-bold z-20">
        My Projects
      </div>

      {/* Grid of Folders */}
      <div className="min-h-full w-full px-4 sm:px-8 md:px-16 lg:px-24 pt-20 sm:pt-24 pb-16">
        <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 sm:gap-8 md:gap-10">
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="cursor-pointer group"
            >
              {/* Folder */}
              <div className="relative">
                {/* Folder Tab */}
                <div className="absolute -top-2 left-0 w-16 sm:w-20 md:w-24 h-4 sm:h-5 md:h-6 bg-gradient-to-b from-yellow-300 to-yellow-400 rounded-t-md shadow-md z-10"></div>
                
                {/* Folder Body */}
                <div className="relative w-full h-20 sm:h-24 md:h-28 bg-gradient-to-b from-yellow-400 to-yellow-500 rounded-lg shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2 group-hover:scale-105">
                  {/* Folder shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-lg"></div>
                  
                  {/* Folder texture */}
                  <div className="absolute inset-0 rounded-lg opacity-10" style={{
                    backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 3px, rgba(0,0,0,.1) 3px, rgba(0,0,0,.1) 6px)'
                  }}></div>

                  {/* Folder front flap */}
                  <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-b from-transparent to-black/10 rounded-b-lg"></div>
                </div>
                
                {/* Label */}
                <div className="text-center mt-3 sm:mt-4 px-1">
                  <p className="text-white text-xs sm:text-sm md:text-base font-mono font-semibold group-hover:text-yellow-300 transition-colors line-clamp-2">
                    {project.title}
                  </p>
                  <p className="text-gray-400 text-[10px] sm:text-xs font-mono mt-1">
                    {project.year}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Hint */}
      <div className="fixed bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 text-white text-xs sm:text-sm font-mono opacity-60 text-center z-20">
        <div>Click any folder to view project details</div>
        <div className="mt-1">← back to home</div>
      </div>
    </div>
  );
}