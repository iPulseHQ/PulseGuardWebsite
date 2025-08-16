import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Shield, Globe, Server, Zap, Bell, BarChart3 } from "lucide-react";

export default function Guard() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h1 className="text-[48px] font-bold text-black leading-[52px] tracking-[-1.5px] mb-6">
          PulseGuard
        </h1>
        <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
          Complete monitoring solution for websites, servers, SSL certificates, and services. 
          Keep your digital infrastructure running smoothly with instant alerts and detailed insights.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a href="https://app.pulseguard.pro/register" className="bg-black text-white px-8 py-3 rounded-md hover:bg-gray-800 transition-colors">
            Start Free Trial
          </a>
          <a href="https://app.pulseguard.pro/login" className="text-black font-medium hover:text-gray-600 transition-colors">
            Sign In →
          </a>
        </div>
      </section>

      {/* Features Grid */}
      <section className="max-w-7xl mx-auto px-4 mb-20">
        <h2 className="text-3xl font-bold text-black text-center mb-12">
          Everything you need to monitor your infrastructure
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Website Monitoring */}
          <div className="bg-[#f6f5f4] rounded-xl p-8">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
              <Globe className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-black mb-4">Website Monitoring</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Monitor HTTP/HTTPS endpoints, check response times, and get alerted 
              when your websites go down. Track performance metrics and uptime statistics.
            </p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• HTTP/HTTPS monitoring</li>
              <li>• Response time tracking</li>
              <li>• Page resource monitoring</li>
              <li>• Custom intervals (1min - 24h)</li>
            </ul>
          </div>

          {/* SSL Certificate Monitoring */}
          <div className="bg-[#f6f5f4] rounded-xl p-8">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
              <Shield className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-black mb-4">SSL Certificate Monitoring</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Track SSL certificate expiration dates and get warnings before they expire. 
              Monitor certificate validity and security configurations.
            </p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Certificate expiration alerts</li>
              <li>• Security configuration checks</li>
              <li>• Certificate chain validation</li>
              <li>• Automatic renewal reminders</li>
            </ul>
          </div>

          {/* Server Monitoring */}
          <div className="bg-[#f6f5f4] rounded-xl p-8">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
              <Server className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold text-black mb-4">Server Monitoring</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Monitor CPU usage, memory consumption, disk space, and network performance. 
              Track running processes and system health metrics.
            </p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• CPU & Memory monitoring</li>
              <li>• Disk space tracking</li>
              <li>• Network performance</li>
              <li>• Process monitoring</li>
            </ul>
          </div>

          {/* PulseAI Assistant */}
          <div className="bg-[#f6f5f4] rounded-xl p-8">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
              <Zap className="w-6 h-6 text-orange-600" />
            </div>
            <h3 className="text-xl font-bold text-black mb-4">PulseAI Assistant</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              AI-powered insights and natural language queries. Get proactive detection 
              of issues and intelligent performance analysis.
            </p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Natural language queries</li>
              <li>• Proactive issue detection</li>
              <li>• Performance analysis</li>
              <li>• Intelligent recommendations</li>
            </ul>
          </div>

          {/* Notifications & Alerts */}
          <div className="bg-[#f6f5f4] rounded-xl p-8">
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6">
              <Bell className="w-6 h-6 text-red-600" />
            </div>
            <h3 className="text-xl font-bold text-black mb-4">Smart Notifications</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Get instant alerts via email, Telegram, Discord, Slack, and webhooks. 
              Configure custom notification rules and escalation policies.
            </p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Email notifications</li>
              <li>• Telegram & Discord</li>
              <li>• Slack integration</li>
              <li>• Custom webhooks</li>
            </ul>
          </div>

          {/* Reports & Analytics */}
          <div className="bg-[#f6f5f4] rounded-xl p-8">
            <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
              <BarChart3 className="w-6 h-6 text-indigo-600" />
            </div>
            <h3 className="text-xl font-bold text-black mb-4">Reports & Analytics</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Detailed reports and analytics on your infrastructure performance. 
              Track trends, uptime statistics, and historical data.
            </p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Uptime statistics</li>
              <li>• Performance trends</li>
              <li>• Historical data</li>
              <li>• Custom dashboards</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-[#F6F5F4] rounded-xl p-8">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold text-black mb-4">
                See PulseGuard in action
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Our intuitive dashboard gives you complete visibility into your infrastructure 
                with real-time monitoring and detailed insights.
              </p>
            </div>

            <div className="flex justify-center">
              <div className="w-full max-w-[956px] aspect-[956/493] bg-white rounded-xl border border-black/10 shadow-sm overflow-hidden">
                <Image
                  src="/assets/pulsedashboard.png"
                  alt="PulseGuard Dashboard"
                  width={956}
                  height={493}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing CTA */}
      <section className="max-w-4xl mx-auto px-4 py-20 text-center">
        <h2 className="text-3xl font-bold text-black mb-6">Ready to start monitoring?</h2>
        <p className="text-xl text-gray-600 mb-8">
          Join thousands of users who trust PulseGuard to keep their infrastructure running smoothly.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="https://app.pulseguard.pro/register" className="bg-black text-white px-8 py-3 rounded-md hover:bg-gray-800 transition-colors">
            Start Free Trial
          </a>
          <a href="/pricing" className="text-black font-medium hover:text-gray-600 transition-colors">
            View Pricing →
          </a>
        </div>
      </section>
    </div>
  );
}