import Image from "next/image";
import { Linkedin, Github, Mail, Instagram } from "lucide-react";
import { teamMembers } from "@/data/team";

export default function Team() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h1 className="text-[48px] font-bold text-black leading-[52px] tracking-[-1.5px] mb-6">
          Meet our team
        </h1>
        <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
          We&apos;re a passionate team of developers and marketers dedicated to building 
          the best monitoring platform for businesses of all sizes.
        </p>
      </section>

      {/* Team Grid */}
      <section className="max-w-7xl mx-auto px-4 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-[#f6f5f4] rounded-xl p-8 text-center group hover:shadow-lg transition-all duration-300">
              <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              
              <h3 className="text-xl font-bold text-black mb-2">{member.name}</h3>
              <p className="text-gray-600 mb-6">{member.role}</p>
              
              <div className="flex justify-center space-x-4">
                {member.linkedin && (
                  <a 
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center hover:bg-blue-200 transition-colors"
                  >
                    <Linkedin className="w-5 h-5 text-blue-600" />
                  </a>
                )}
                {member.github && (
                  <a 
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                  >
                    <Github className="w-5 h-5 text-gray-600" />
                  </a>
                )}
                {member.instagram && (
                  <a 
                    href={member.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center hover:bg-pink-200 transition-colors"
                  >
                    <Instagram className="w-5 h-5 text-pink-600" />
                  </a>
                )}
                {member.email && (
                  <a 
                    href={`mailto:${member.email}`}
                    className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center hover:bg-green-200 transition-colors"
                  >
                    <Mail className="w-5 h-5 text-green-600" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Company Info */}
      <section className="bg-[#F6F5F4] py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-black mb-6">About PulseGuard</h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            PulseGuard is part of IM Digital, a Netherlands-based technology company focused on 
            creating innovative monitoring and management solutions. We&apos;re committed to helping 
            businesses maintain reliable digital infrastructure with cutting-edge technology 
            and exceptional support.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-black">5+</div>
              <div className="text-gray-600">Team Members</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-black">1000+</div>
              <div className="text-gray-600">Monitored Services</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-black">99.9%</div>
              <div className="text-gray-600">Platform Uptime</div>
            </div>
          </div>
        </div>
      </section>

      {/* Hiring CTA */}
      <section className="max-w-4xl mx-auto px-4 py-20 text-center">
        <h2 className="text-3xl font-bold text-black mb-6">Join our team</h2>
        <p className="text-xl text-gray-600 mb-8">
          We&apos;re always looking for talented individuals to join our growing team. 
          If you&apos;re passionate about technology and want to make an impact, we&apos;d love to hear from you.
        </p>
        <a 
          href="mailto:info@pulseguard.pro"
          className="inline-flex items-center bg-black text-white px-8 py-3 rounded-md hover:bg-gray-800 transition-colors"
        >
          <Mail className="w-5 h-5 mr-2" />
          Get in touch
        </a>
      </section>
    </div>
  );
}