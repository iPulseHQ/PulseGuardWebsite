"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Dynamic login/signup links based on current page
  const getLoginLink = () => {
    if (pathname === '/guard') return 'https://app.pulseguard.pro/login';
    if (pathname === '/files') return 'https://files.pulseguard.pro/login';
    if (pathname === '/crm') return 'https://crm.pulseguard.pro/login';
    return 'https://app.pulseguard.pro/login';
  };

  const getSignupLink = () => {
    if (pathname === '/guard') return 'https://app.pulseguard.pro/register';
    if (pathname === '/files') return 'https://files.pulseguard.pro';
    if (pathname === '/crm') return 'https://crm.pulseguard.pro/sign-up';
    return 'https://app.pulseguard.pro/register';
  };

  return (
    <header className="bg-white h-[62px] border-b border-black/10 relative">
      <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <Image
            src="/assets/logodark.png"
            alt="PulseGuard Logo"
            width={150}
            height={150}
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/guard" className="text-black font-medium hover:text-gray-600 transition-colors">
            Guard
          </Link>
          <Link href="/files" className="text-black font-medium hover:text-gray-600 transition-colors">
            Files
          </Link>
          <Link href="/crm" className="text-black font-medium hover:text-gray-600 transition-colors">
            CRM
          </Link>
          <Link href="/pricing" className="text-black font-medium hover:text-gray-600 transition-colors">
            Pricing
          </Link>
          <Link href="/team" className="text-black font-medium hover:text-gray-600 transition-colors">
            About us
          </Link>
          <Link href="/blog" className="text-black font-medium hover:text-gray-600 transition-colors">
            Blog
          </Link>
          <a href="https://docs.pulseguard.pro/" target="_blank" rel="noopener noreferrer" className="text-black font-medium hover:text-gray-600 transition-colors">
            Docs
          </a>
        </nav>

        {/* Desktop Right side buttons */}
        <div className="hidden md:flex items-center gap-4">
          <a href={getLoginLink()} className="text-black font-medium hover:text-gray-600 transition-colors">
            Log in
          </a>
          <a href={getSignupLink()} className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-colors">
            Sign up →
          </a>
        </div>

        {/* Mobile menu button */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden flex items-center justify-center h-10 w-10 text-black hover:bg-gray-100 rounded-lg focus:outline-none"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 absolute top-full left-0 right-0 z-50 shadow-lg">
          <div className="py-4 px-4 space-y-2">
            <Link 
              href="/guard" 
              className="block py-3 px-4 text-black font-medium hover:bg-gray-100 rounded-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              Guard
            </Link>
            <Link 
              href="/files" 
              className="block py-3 px-4 text-black font-medium hover:bg-gray-100 rounded-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              Files
            </Link>
            <Link 
              href="/crm" 
              className="block py-3 px-4 text-black font-medium hover:bg-gray-100 rounded-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              CRM
            </Link>
            <Link 
              href="/pricing" 
              className="block py-3 px-4 text-black font-medium hover:bg-gray-100 rounded-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link 
              href="/team" 
              className="block py-3 px-4 text-black font-medium hover:bg-gray-100 rounded-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              About us
            </Link>
            <Link 
              href="/blog" 
              className="block py-3 px-4 text-black font-medium hover:bg-gray-100 rounded-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              Blog
            </Link>
            <a 
              href="https://docs.pulseguard.pro/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="block py-3 px-4 text-black font-medium hover:bg-gray-100 rounded-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              Docs
            </a>
            
            <div className="pt-4 border-t border-gray-200 mt-4">
              <a 
                href={getLoginLink()} 
                className="block py-3 px-4 text-black font-medium hover:bg-gray-100 rounded-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                Log in
              </a>
              <a 
                href={getSignupLink()} 
                className="block py-3 px-4 bg-black text-white font-medium rounded-lg hover:bg-gray-800 transition-colors mt-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Sign up →
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}