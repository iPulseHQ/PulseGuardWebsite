import { Users, Calendar, FileText, BarChart3, Mail, Phone } from "lucide-react";

export default function PulseCRM() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h1 className="text-[48px] font-bold text-black leading-[52px] tracking-[-1.5px] mb-6">
          PulseCRM
        </h1>
        <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
          ERP and CRM solution designed for small companies. Manage your customers, 
          projects, and business processes in one integrated platform.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a href="https://crm.pulseguard.pro" className="bg-black text-white px-8 py-3 rounded-md hover:bg-gray-800 transition-colors">
            Get Started
          </a>
        </div>
      </section>

      {/* Features Grid */}
      <section className="max-w-7xl mx-auto px-4 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Customer Management */}
          <div className="bg-[#f6f5f4] rounded-xl p-8">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
              <Users className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-black mb-4">Customer Management</h3>
            <p className="text-gray-600 leading-relaxed">
              Keep track of all your customers, their contact information, 
              purchase history, and communication preferences.
            </p>
          </div>

          {/* Project Planning */}
          <div className="bg-[#f6f5f4] rounded-xl p-8">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
              <Calendar className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-black mb-4">Project Planning</h3>
            <p className="text-gray-600 leading-relaxed">
              Plan and track projects with deadlines, milestones, and resource 
              allocation. Keep your team aligned and productive.
            </p>
          </div>

          {/* Invoice Management */}
          <div className="bg-[#f6f5f4] rounded-xl p-8">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
              <FileText className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold text-black mb-4">Invoice Management</h3>
            <p className="text-gray-600 leading-relaxed">
              Create professional invoices, track payments, and manage your 
              financial workflow with automated reminders.
            </p>
          </div>

          {/* Business Analytics */}
          <div className="bg-[#f6f5f4] rounded-xl p-8">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
              <BarChart3 className="w-6 h-6 text-orange-600" />
            </div>
            <h3 className="text-xl font-bold text-black mb-4">Business Analytics</h3>
            <p className="text-gray-600 leading-relaxed">
              Get insights into your business performance with detailed reports 
              and analytics on sales, customers, and projects.
            </p>
          </div>

          {/* Communication Tools */}
          <div className="bg-[#f6f5f4] rounded-xl p-8">
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6">
              <Mail className="w-6 h-6 text-red-600" />
            </div>
            <h3 className="text-xl font-bold text-black mb-4">Communication Tools</h3>
            <p className="text-gray-600 leading-relaxed">
              Integrated email and SMS communication tools to stay in touch 
              with customers and team members.
            </p>
          </div>

          {/* Integration Ready */}
          <div className="bg-[#f6f5f4] rounded-xl p-8">
            <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
              <Phone className="w-6 h-6 text-indigo-600" />
            </div>
            <h3 className="text-xl font-bold text-black mb-4">Integration Ready</h3>
            <p className="text-gray-600 leading-relaxed">
              Connect with your existing tools and services through our API 
              and pre-built integrations.
            </p>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="bg-[#F6F5F4] py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-black text-center mb-12">
            Why Choose PulseCRM?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                €
              </div>
              <h3 className="text-xl font-semibold text-black mb-3">Affordable Pricing</h3>
              <p className="text-gray-600">
                Designed specifically for small businesses with transparent, 
                affordable pricing that scales with your growth.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                🇳🇱
              </div>
              <h3 className="text-xl font-semibold text-black mb-3">Dutch Data Storage</h3>
              <p className="text-gray-600">
                All your data is stored securely in Netherlands datacenters, 
                ensuring GDPR compliance and data protection.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                ⚡
              </div>
              <h3 className="text-xl font-semibold text-black mb-3">Easy Setup</h3>
              <p className="text-gray-600">
                Get up and running in minutes with our intuitive setup process 
                and migration tools from other CRM systems.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                📞
              </div>
              <h3 className="text-xl font-semibold text-black mb-3">Local Support</h3>
              <p className="text-gray-600">
                Get help when you need it with our Dutch-speaking support team 
                who understands local business needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Get Started CTA */}
      <section className="max-w-4xl mx-auto px-4 py-20 text-center">
        <h2 className="text-3xl font-bold text-black mb-6">Start managing your business better</h2>
        <p className="text-xl text-gray-600 mb-8">
          Join small businesses who use PulseCRM to manage customers, projects, 
          and business processes more efficiently.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <a href="https://crm.pulseguard.pro/sign-up" className="bg-black text-white px-8 py-3 rounded-md hover:bg-gray-800 transition-colors">
            Start Free Trial
          </a>
          <a href="https://crm.pulseguard.pro" className="text-black font-medium hover:text-gray-600 transition-colors">
            Visit PulseCRM →
          </a>
        </div>
        
        <div className="text-gray-500 text-sm">
          Questions? Contact us at{" "}
          <a href="mailto:info@pulseguard.pro" className="text-blue-600 hover:text-blue-800">
            info@pulseguard.pro
          </a>
        </div>
      </section>
    </div>
  );
}