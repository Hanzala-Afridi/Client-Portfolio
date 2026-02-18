import { Github, Linkedin, Mail } from 'lucide-react';

export default function SocialButtons() {
  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <a
        href="#contact"
        onClick={(e) => {
          e.preventDefault();
          const element = document.querySelector('#contact');
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }}
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 hover:transform hover:scale-105 shadow-lg hover:shadow-xl text-center"
      >
        Contact Me
      </a>
      <div className="flex gap-3">
        <a
          href="https://pk.linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-lg transition-all duration-200 hover:transform hover:scale-105 shadow-lg hover:shadow-xl"
          title="LinkedIn"
        >
          <Linkedin size={20} />
        </a>
        <a
          href="https://github.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-800 hover:bg-gray-900 text-white p-3 rounded-lg transition-all duration-200 hover:transform hover:scale-105 shadow-lg hover:shadow-xl"
          title="GitHub"
        >
          <Github size={20} />
        </a>
        <a
          href="mailto:shariqwork2001@gmail.com"
          className="bg-red-500 hover:bg-red-600 text-white p-3 rounded-lg transition-all duration-200 hover:transform hover:scale-105 shadow-lg hover:shadow-xl"
          title="Email"
        >
          <Mail size={20} />
        </a>
      </div>
    </div>
  );
}