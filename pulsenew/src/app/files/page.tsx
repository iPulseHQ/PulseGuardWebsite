import { Shield, Clock, Eye, Server, Github } from "lucide-react";

export default function PulseFiles() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h1 className="text-[48px] font-bold text-black leading-[52px] tracking-[-1.5px] mb-6">
          PulseFiles
        </h1>
        <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
          Share files safe and temporarily with encryption. European data saving, 
          GDPR compliant, and completely secure.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a href="https://files.pulseguard.pro/signup" className="bg-black text-white px-8 py-3 rounded-md hover:bg-gray-800 transition-colors">
            Get Started
          </a>
          <a href="https://files.pulseguard.pro/login" className="text-black font-medium hover:text-gray-600 transition-colors">
            Sign In →
          </a>
        </div>
      </section>

      {/* Features Grid */}
      <section className="max-w-7xl mx-auto px-4 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* AES-256 Encryption */}
          <div className="bg-[#f6f5f4] rounded-xl p-8">
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6">
              <Shield className="w-6 h-6 text-red-600" />
            </div>
            <h3 className="text-xl font-bold text-black mb-4">AES-256-CBC Encryption</h3>
            <p className="text-gray-600 leading-relaxed">
              Military-grade encryption ensures your files are completely secure 
              during transfer and storage.
            </p>
          </div>

          {/* Auto-deletion */}
          <div className="bg-[#f6f5f4] rounded-xl p-8">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
              <Clock className="w-6 h-6 text-orange-600" />
            </div>
            <h3 className="text-xl font-bold text-black mb-4">7-Day Auto-deletion</h3>
            <p className="text-gray-600 leading-relaxed">
              Files are automatically deleted after 7 days, ensuring no permanent 
              storage of sensitive data.
            </p>
          </div>

          {/* Zero Knowledge */}
          <div className="bg-[#f6f5f4] rounded-xl p-8">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
              <Eye className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold text-black mb-4">Zero Knowledge Storage</h3>
            <p className="text-gray-600 leading-relaxed">
              We never see your files. Everything is encrypted on your device 
              before upload.
            </p>
          </div>

          {/* Dutch Datacenter */}
          <div className="bg-[#f6f5f4] rounded-xl p-8">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
              <Server className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-black mb-4">Dutch Datacenter</h3>
            <p className="text-gray-600 leading-relaxed">
              All data stored in Netherlands datacenters, fully GDPR compliant 
              and European privacy protected.
            </p>
          </div>

          {/* Open Source */}
          <div className="bg-[#f6f5f4] rounded-xl p-8">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
              <Github className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-black mb-4">Open Source</h3>
            <p className="text-gray-600 leading-relaxed">
              Fully transparent code available on GitHub. Audit our security 
              yourself.
            </p>
          </div>

          {/* No Tracking */}
          <div className="bg-[#f6f5f4] rounded-xl p-8">
            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-6">
              <Eye className="w-6 h-6 text-gray-600" />
            </div>
            <h3 className="text-xl font-bold text-black mb-4">No Tracking</h3>
            <p className="text-gray-600 leading-relaxed">
              We don&apos;t track who uploads what. Complete anonymity and privacy 
              protection.
            </p>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="bg-[#F6F5F4] py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-black text-center mb-12">
            How PulseFiles Works
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold text-black mb-3">Upload & Encrypt</h3>
              <p className="text-gray-600">
                Select your file and it gets encrypted with AES-256-CBC on your device 
                before upload.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold text-black mb-3">Share Link</h3>
              <p className="text-gray-600">
                Get a secure link with decryption key that you can share with 
                anyone you trust.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold text-black mb-3">Auto-Delete</h3>
              <p className="text-gray-600">
                Files are automatically deleted after 7 days, ensuring no 
                permanent storage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Get Started CTA */}
      <section className="max-w-4xl mx-auto px-4 py-20 text-center">
        <h2 className="text-3xl font-bold text-black mb-6">Start sharing files securely</h2>
        <p className="text-xl text-gray-600 mb-8">
          Join users who trust PulseFiles for secure, encrypted file sharing 
          with automatic deletion and European data protection.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="https://files.pulseguard.pro" className="bg-black text-white px-8 py-3 rounded-md hover:bg-gray-800 transition-colors"> 
            Visit PulseFiles →
          </a>
        </div>
      </section>
    </div>
  );
}