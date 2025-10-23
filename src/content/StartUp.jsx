import { Link } from "react-router-dom";

export default function Startup() {
  return (
    <div className="fixed inset-0 bg-yellow-600  overflow-hidden">
      {/* Back Button */}
      <Link
        to='/'
        className="absolute top-4 sm:top-6 left-4 sm:left-8 text-white hover:text-gray-300 transition-colors z-20"
      >
        <span className="text-xl sm:text-2xl">←</span>
      </Link>

      {/* Date / Est */}
      <div className="absolute top-4 sm:top-6 right-4 sm:right-8 text-white text-xs sm:text-sm font-mono opacity-80">
        Est. 2024
      </div>

      {/* Content */}
      <div className="h-full w-full flex items-center justify-center px-4 sm:px-8 md:px-16 lg:px-32">
        <div className="max-w-3xl text-white">
          {/* Company Logo/Name */}
          <div className="text-center mb-6 sm:mb-10">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-mono mb-2 sm:mb-4">
              PRIMEHUB
            </h1>
            <p className="text-sm sm:text-base md:text-lg font-mono opacity-90">
              Creating software solutions that empower companies and reshape society
            </p>
          </div>

          {/* Description */}
          <div className="font-mono leading-relaxed space-y-4 sm:space-y-6 text-sm sm:text-base">
            <p>
              We are a software startup offering a wide range of services including web development,
              app development, web app development, digital marketing, AI-powered applications, and networking services.
            </p>

            <p>
              Our goal is to create software solutions that help companies grow in multiple aspects — improving operations,
              enhancing customer engagement, optimizing marketing, and leveraging AI for smarter business decisions.
            </p>

            <p>
              We also build personal projects that aim to reshape society. Our current major project is <strong>PrimeStore</strong>:
              an online marketplace where everyone can buy and sell with ease.
            </p>

            <p className="pt-2">
              Visit our website: <a 
                href="https://primehub237.ct.ws/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="underline hover:text-green-300"
              >
                primehub237.ct.ws
              </a>
            </p>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 my-6 sm:my-8">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm p-4 rounded-lg text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">50+</div>
                <div className="text-xs sm:text-sm opacity-80">Projects Delivered</div>
              </div>
              <div className="bg-white bg-opacity-10 backdrop-blur-sm p-4 rounded-lg text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">30+</div>
                <div className="text-xs sm:text-sm opacity-80">Happy Clients</div>
              </div>
              <div className="bg-white bg-opacity-10 backdrop-blur-sm p-4 rounded-lg text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">10+</div>
                <div className="text-xs sm:text-sm opacity-80">Team Members</div>
              </div>
            </div>

            <p className="text-xs sm:text-sm opacity-70 pt-4 sm:pt-6">
              Interested in working together? Let's create something impactful.
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
