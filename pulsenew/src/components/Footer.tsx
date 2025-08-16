import Link from "next/link";
import { Linkedin, Github, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 text-gray-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* ProductHunt Badge */}
        <div className="text-center mb-12 pb-8 border-b border-gray-200">
          <h3 className="text-lg font-semibold mb-4 text-gray-800">Rate us on Product Hunt</h3>
          <a href="https://www.producthunt.com/products/pulseguard-2/reviews" target="_blank" rel="noopener noreferrer">
            <img 
              src="https://api.producthunt.com/widgets/embed-image/v1/product_review.svg?product_id=1074601&theme=light" 
              alt="PulseGuard - Complete monitoring solution for websites, devices & services | Product Hunt" 
              style={{ width: '250px', height: '54px' }} 
              width="250" 
              height="54" 
              className="hover:scale-105 transition-transform duration-300 mx-auto"
            />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-6">
            <img
            src="/assets/logodark.png"
            alt="PulseGuard Logo"
            width={150}
            height={150}
          />
            </div>
            <p className="text-gray-600 mb-6">
              Complete monitoring solution for websites, devices & services. 
              Keep your digital infrastructure running smoothly.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/company/pulseguardnl" className="text-gray-600 hover:text-black transition-colors" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/pulseguard_/" className="text-gray-600 hover:text-black transition-colors" target="_blank" rel="noopener noreferrer">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://github.com/pulseguard-nl" className="text-gray-600 hover:text-black transition-colors" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-gray-800">Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-600 hover:text-black transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/features" className="text-gray-600 hover:text-black transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-gray-600 hover:text-black transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-gray-600 hover:text-black transition-colors">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-600 hover:text-black transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Platform */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Platform</h4>
            <ul className="space-y-3">
              <li>
                <a href="https://app.pulseguard.pro" className="text-gray-400 hover:text-white transition-colors">
                  Dashboard
                </a>
              </li>
              <li>
                <a href="https://app.pulseguard.pro/domains" className="text-gray-400 hover:text-white transition-colors">
                  Domains
                </a>
              </li>
              <li>
                <a href="https://app.pulseguard.pro/device-monitoring" className="text-gray-400 hover:text-white transition-colors">
                  Devices
                </a>
              </li>
              <li>
                <a href="https://app.pulseguard.pro/subscriptions" className="text-gray-400 hover:text-white transition-colors">
                  Subscriptions
                </a>
              </li>
              <li>
                <a href="https://docs.pulseguard.pro/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  Documentation
                </a>
              </li>
            </ul>
          </div>
          
          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Support</h4>
            <ul className="space-y-3">
              <li>
                <a href="https://arjandh.notion.site/1ff0645fff30819ab883fe1e29743e7c?pvs=105" className="text-gray-400 hover:text-white transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="mailto:info@pulseguard.pro" className="text-gray-400 hover:text-white transition-colors">
                  Email Support
                </a>
              </li>
              <li>
                <a href="https://app.pulseguard.pro/privacy" className="text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="https://app.pulseguard.pro/terms" className="text-gray-400 hover:text-white transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 text-center text-gray-500 text-sm">
          <p>
            &copy; {new Date().getFullYear()} PulseGuard is onderdeel van{" "}
            <a href="https://imdigital.info" className="text-blue-400 hover:text-blue-300">
              IM Digital
            </a>
            {" "}- All rights reserved - Contact:{" "}
            <a href="mailto:info@pulseguard.pro" className="text-blue-400 hover:text-blue-300">
              info@pulseguard.pro
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}