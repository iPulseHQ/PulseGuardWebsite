import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

export default function Home() {
  return (
    <div className="bg-white min-h-screen">

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h1 className="text-[61px] font-bold text-black leading-[65px] tracking-[-1.921px] mb-6">
          Your digital peacemaker
        </h1>
        <p className="text-2xl font-medium text-black tracking-[-0.42px] mb-8">
          Digital solution to monitor your services
        </p>
        
        {/* Action buttons */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <a href="mailto:info@pulseguard.nl" className="text-[#0a85d1] text-base hover:underline">Request a demo</a>
          <span className="text-[#0a85d1] text-base">→</span>
        </div>

        {/* Heartbeat graphic */}
        <div className="flex justify-center mb-20">
          <Image
            src="/assets/heartbeat.svg"
            alt="Heartbeat monitor"
            width={1000}
            height={120}
            className="max-w-full h-auto"
          />
        </div>
      </section>

      {/* Trusted by section */}
      <section className="max-w-7xl mx-auto px-4 mb-20">
        <p className="text-center text-black font-medium mb-8">Trusted by</p>
        <div className="flex justify-center items-center gap-12 flex-wrap">
          <div className="flex items-center justify-center h-16">
            <Image 
              src="https://imdigital.info/logo(gray-google).png" 
              alt="IM Digital" 
              width={120}
              height={48}
              className="h-12 opacity-60 hover:opacity-100 transition-opacity"
              unoptimized
            />
          </div>
          <div className="flex items-center justify-center h-16">
            <Image 
              src="https://www.che.nl/themes/custom/che/images/logos/logo.svg" 
              alt="CHE" 
              width={120}
              height={48}
              className="h-12 opacity-60 hover:opacity-100 transition-opacity"
              unoptimized
            />
          </div>
          <div className="flex items-center justify-center h-16">
            <Image 
              src="https://arjandenhartog.com/favicon.ico" 
              alt="Arjan den Hartog" 
              width={48}
              height={48}
              className="h-12 opacity-60 hover:opacity-100 transition-opacity"
              unoptimized
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="max-w-7xl mx-auto px-4 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* PulseGuard */}
          <Link href="/guard" className="bg-[#f6f5f4] rounded-xl p-6 h-[181px] hover:shadow-lg transition-all duration-300 group">
            <div className="mb-6">
              <div className="w-8 h-8 bg-[#fff6d6] rounded-md flex items-center justify-center mb-4">
                <Image
                  src="/assets/pulseguard-logo.svg"
                  alt="PulseGuard"
                  width={20}
                  height={20}
                />
              </div>
              <h3 className="text-[19.688px] font-bold text-black tracking-[-0.236px] group-hover:text-blue-600 transition-colors">
                PulseGuard
              </h3>
            </div>
            <p className="text-[13.5px] text-black leading-[19px] tracking-[0.101px]">
              Monitor your domains, uptime and security
            </p>
          </Link>

          {/* PulseFiles */}
          <Link href="/files" className="bg-[#f6f5f4] rounded-xl p-6 h-[181px] hover:shadow-lg transition-all duration-300 group">
            <div className="mb-6">
              <div className="w-8 h-8 bg-[#fce9e8] rounded-md flex items-center justify-center mb-4">
                <Image
                  src="/assets/files-icon.svg"
                  alt="PulseFiles"
                  width={20}
                  height={20}
                />
              </div>
              <h3 className="text-[19.375px] font-bold text-black tracking-[-0.236px] group-hover:text-blue-600 transition-colors">
                PulseFiles
              </h3>
            </div>
            <p className="text-[13.5px] text-black leading-[19px] tracking-[0.101px]">
              Share files safe and temporarily with encryption, Europe data saving
            </p>
          </Link>

          {/* PulseCRM */}
          <Link href="/crm" className="bg-[#f6f5f4] rounded-xl p-6 h-[181px] hover:shadow-lg transition-all duration-300 group">
            <div className="mb-6">
              <div className="w-8 h-8 bg-[#e2ecf3] rounded-md flex items-center justify-center mb-4">
                <Image
                  src="/assets/crm-icon.svg"
                  alt="PulseCRM"
                  width={20}
                  height={20}
                />
              </div>
              <h3 className="text-[19.688px] font-bold text-black tracking-[-0.236px] group-hover:text-blue-600 transition-colors">
                PulseCRM
              </h3>
            </div>
            <p className="text-[13.5px] text-black leading-[19px] tracking-[0.101px]">
              ERP and CRM for small companies
            </p>
          </Link>
        </div>
      </section>

      {/* Dashboard Preview Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
        <div className="bg-[#F6F5F4] rounded-xl p-8">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/assets/security-icon.svg"
                alt="Monitor icon"
                width={26}
                height={26}
              />
            </div>
            <h2 className="text-[18px] font-bold text-black tracking-[-0.13px] mb-4">
              Monitor, visualize your domains
            </h2>
            <p className="text-base text-[#121212] tracking-[0.008px] leading-[23px] max-w-[508px]">
              See how PulseGuard helps you gain insight into the status of your digital infrastructure.
            </p>
          </div>

          {/* Dashboard mockup */}
          <div className="flex justify-center">
            <div className="w-full max-w-[956px] aspect-[956/493] bg-white rounded-xl border border-black/10 shadow-sm overflow-hidden">
              <Image
                src="/assets/pulsedashboard.png"
                alt="Dashboard Preview"
                width={3801}
                height={1914}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* Domain Information Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
        <div className="bg-[#F6F5F4] rounded-xl p-8">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/assets/security-icon.svg"
                alt="Domain info icon"
                width={26}
                height={26}
              />
            </div>
            <h2 className="text-[18px] font-bold text-black tracking-[-0.13px] mb-4">
              All domain information in one place
            </h2>
            <p className="text-base text-[#121212] tracking-[0.008px] leading-[23px] max-w-[508px]">
              View DNS, SSL, registrar details, name servers and historical changes for each domain.
            </p>
          </div>

          <div className="flex justify-center">
            <div className="w-full max-w-[956px] aspect-[956/493] bg-white rounded-xl border border-black/10 shadow-sm overflow-hidden">
              <Image
                src="/assets/website-monitoring.png"
                alt="Website monitoring preview"
                width={956}
                height={493}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* PulseAI Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
        <div className="bg-[#F6F5F4] rounded-xl p-8">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/assets/security-icon.svg"
                alt="AI icon"
                width={26}
                height={26}
              />
            </div>
            <h2 className="text-[18px] font-bold text-black tracking-[-0.13px] mb-4">
              PulseAI assistant
            </h2>
            <p className="text-base text-[#121212] tracking-[0.008px] leading-[23px] max-w-[508px]">
              Ask AI to analyse domains, suggest actions and generate insights from your monitoring data.
            </p>
          </div>

          <div className="flex justify-center">
            <div className="w-full max-w-[956px] aspect-[956/493] bg-white rounded-xl border border-black/10 shadow-sm overflow-hidden">
              <Image
                src="/assets/pulseai.png"
                alt="PulseAI preview"
                width={956}
                height={493}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        </div>
      </section>

    </div>
  );
}
