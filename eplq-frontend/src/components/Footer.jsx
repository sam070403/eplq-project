import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

export default function Footer() {
    const d = new Date();
    let year = d.getFullYear();
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-600">
             EPLQ
            </h3>
            <p className="text-gray-400">
            EPLQ delivers cutting-edge solutions for privacy-preserving location-based queries, enabling secure and efficient access to spatial data.
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="https://facebook.com" className="text-gray-400 hover:text-indigo-400">
                <FaFacebook size={24} />
              </a>
              <a href="https://twitter.com" className="text-gray-400 hover:text-indigo-400">
                <FaTwitter size={24} />
              </a>
              <a href="https://linkedin.com" className="text-gray-400 hover:text-indigo-400">
                <FaLinkedin size={24} />
              </a>
              <a href="https://instagram.com" className="text-gray-400 hover:text-indigo-400">
                <FaInstagram size={24} />
              </a>
              <a href="https://github.com" className="text-gray-400 hover:text-indigo-400">
                <FaGithub size={24} />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-xl font-semibold mb-4 text-gray-200">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-indigo-400">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-indigo-400">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/articles" className="text-gray-400 hover:text-indigo-400">
                  Articles
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-indigo-400">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold mb-4 text-gray-200">Contact Us</h4>
            <div className="text-gray-400">
              <div className="flex items-center space-x-2">
                <HiOutlineMail size={24} />
                <span>info@eplq.com</span>
              </div>
             
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-400">
          <p>&copy; {year} EPLQ. All rights reserved.</p>
          <ul className="flex space-x-6 mt-4 md:mt-0">
            <li>
              <Link to="/privacy-policy" className="hover:text-indigo-400">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/terms" className="hover:text-indigo-400">
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
