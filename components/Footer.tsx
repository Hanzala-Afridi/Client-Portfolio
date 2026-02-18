import Link from 'next/link';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';

export default function Footer() {
  const quickLinks = [
    { href: '/', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#services', label: 'Services' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Portfolio Description */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-blue-400">Portfolio</h3>
            <p className="text-gray-300 leading-relaxed">
              Crafting web solutions that blend creativity, performance, and modern tech.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://pk.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Github size={24} />
              </a>
              <a
                href="mailto:shariqwork2001@gmail.com"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Mail size={24} />
              </a>
              <a
                href="tel:+923171025656"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Phone size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-blue-400">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-blue-400">Connect</h3>
            <div className="space-y-2">
              <p className="text-gray-300">
                <span className="font-medium">Email:</span> shariqwork2001@gmail.com
              </p>
              <p className="text-gray-300">
                <span className="font-medium">Phone:</span> +92 317 1025656
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2026 MALIK MUHAMMAD SHARIQ. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}