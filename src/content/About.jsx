import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-black to-gray-900 overflow-hidden">
      {/* Back Button */}
      <Link
        to='/'
        className="absolute top-4 sm:top-6 left-4 sm:left-8 text-white hover:text-gray-300 transition-colors z-20"
      >
        <span className="text-xl sm:text-2xl">←</span>
      </Link>

      {/* Date */}
      <div className="absolute top-4 sm:top-6 right-4 sm:right-8 text-white text-xs sm:text-sm font-mono opacity-80">
        {new Date().toLocaleDateString('en-US', {
          month: 'long',
          day: 'numeric',
          year: 'numeric',
        })}
      </div>

      {/* Content */}
      <div className="h-full w-full flex items-center justify-center px-4 sm:px-8 md:px-16 lg:px-32">
        <div className="max-w-3xl text-white font-mono leading-relaxed">
          <div className="space-y-4 sm:space-y-6 text-sm sm:text-base">
            <p>
              I spend most of my time chasing ideas — coding, learning, and
              creating things that speak louder than words. Some days I get
              lost in lines of code, other days I’m just trying to understand
              how everything connects — people, systems, logic, and life itself.
            </p>

            <p>
              I build not for perfection, but for meaning. Every project I
              touch carries a piece of curiosity — a question, a problem, a
              solution that could make something a little better.
            </p>

            <p>
              Technology, for me, isn’t just work. It’s expression. It’s how I
              think, how I dream, how I contribute to the world around me.
            </p>

            <p>
              I’ve made mistakes, hit walls, rewritten the same code a hundred
              times. But each step keeps me grounded — reminding me that growth
              isn’t instant; it’s built line by line, day by day.
            </p>

            <p>
              As I move forward, I carry one goal: to keep creating — useful
              things, honest things, things that last. Because at the end of
              the day, all I want is for my work to mean something <br/>
              <i> ( and make money too , very important ). </i> 
            </p>
            

            <p className="text-xs sm:text-sm opacity-70 pt-2"> - Edison </p>


            {/* Download Resume Button */}
            <div className="pt-6">
              <a
                href=" /PROFILE.pdf" // replace with your actual resume path
                download
                className="text-white font-semibold border-0 bg-transparent hover:text-gray-300 underline underline-offset-4 decoration-gray-500 transition-all"
              >
                ↓ Download Resume
              </a>
            </div>
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
