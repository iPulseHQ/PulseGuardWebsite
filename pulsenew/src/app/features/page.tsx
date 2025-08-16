import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Features() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h1 className="text-[48px] font-bold text-black leading-[52px] tracking-[-1.5px] mb-6">
          Complete monitoring solution
        </h1>
        <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
          Monitor your websites, servers, and services with our comprehensive platform. 
          Get instant alerts and detailed insights into your digital infrastructure.
        </p>
      </section>

      {/* Features Grid */}
      <section className="max-w-7xl mx-auto px-4 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Website Monitoring */}
          <div className="bg-[#f6f5f4] rounded-xl p-8">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
              <Image
                src="/assets/uptime-icon.svg"
                alt="Website monitoring"
                width={24}
                height={24}
              />
            </div>
            <h3 className="text-xl font-bold text-black mb-4">Website Monitoring</h3>
            <p className="text-gray-600 leading-relaxed">
              Monitor HTTP/HTTPS endpoints, check response times, and get alerted 
              when your websites go down. Track performance metrics and uptime statistics.
            </p>
          </div>

          {/* SSL Monitoring */}
          <div className="bg-[#f6f5f4] rounded-xl p-8">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
              <Image
                src="/assets/shield.png"
                alt="SSL monitoring"
                width={24}
                height={24}
              />
            </div>
            <h3 className="text-xl font-bold text-black mb-4">SSL Monitoring</h3>
            <p className="text-gray-600 leading-relaxed">
              Track SSL certificate expiration dates and get warnings before they expire. 
              Monitor certificate validity and security configurations.
            </p>
          </div>

          {/* Server Monitoring */}
          <div className="bg-[#f6f5f4] rounded-xl p-8">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
              <Image
                src="/assets/services.png"
                alt="Server monitoring"
                width={24}
                height={24}
              />
            </div>
            <h3 className="text-xl font-bold text-black mb-4">Server Monitoring</h3>
            <p className="text-gray-600 leading-relaxed">
              Monitor CPU usage, memory consumption, disk space, and network performance. 
              Track running processes and system health metrics.
            </p>
          </div>

          {/* PulseAI Assistant */}
          <div className="bg-[#f6f5f4] rounded-xl p-8">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
              <Image
                src="/assets/pulseai.png"
                alt="AI assistant"
                width={24}
                height={24}
              />
            </div>
            <h3 className="text-xl font-bold text-black mb-4">PulseAI Assistant</h3>
            <p className="text-gray-600 leading-relaxed">
              AI-powered insights and natural language queries. Get proactive detection 
              of issues and intelligent performance analysis.
            </p>
          </div>

          {/* API & Integrations */}
          <div className="bg-[#f6f5f4] rounded-xl p-8">
            <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
              <Image
                src="/assets/api.png"
                alt="API integration"
                width={24}
                height={24}
              />
            </div>
            <h3 className="text-xl font-bold text-black mb-4">API & Integrations</h3>
            <p className="text-gray-600 leading-relaxed">
              Connect with Discord, Slack, Telegram, email notifications, and webhooks. 
              Use our REST API for custom integrations.
            </p>
          </div>

          {/* Status Pages */}
          <div className="bg-[#f6f5f4] rounded-xl p-8">
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6">
              <Image
                src="/assets/dashboard.png"
                alt="Status pages"
                width={24}
                height={24}
              />
            </div>
            <h3 className="text-xl font-bold text-black mb-4">Status Pages</h3>
            <p className="text-gray-600 leading-relaxed">
              Create beautiful public status pages for your services. Manage incidents 
              and keep your users informed about system status.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#F6F5F4] py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-black mb-6">Ready to get started?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Start monitoring your infrastructure today with our comprehensive platform.
          </p>
          <Button className="bg-black text-white px-8 py-3 text-lg rounded-md">
            Start Free Trial
          </Button>
        </div>
      </section>
    </div>
  );
}