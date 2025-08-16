"use client";
import Image from "next/image";
import { Linkedin, Github, Mail, Instagram } from "lucide-react";
import { teamMembers } from "@/data/team";
import { useTranslation } from "@/hooks/useTranslation";

export default function Team() {
  const { t } = useTranslation();
  return (
    <div className="bg-white dark:bg-background min-h-screen">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h1 className="text-[48px] font-bold text-black dark:text-foreground leading-[52px] tracking-[-1.5px] mb-6">
          {t('teamHeroTitle')}
        </h1>
        <p className="text-xl text-gray-600 dark:text-muted-foreground mb-12 max-w-3xl mx-auto">
          {t('teamHeroSubtitle')}
        </p>
      </section>

      {/* Team Grid */}
      <section className="max-w-7xl mx-auto px-4 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-[#f6f5f4] dark:bg-secondary rounded-xl p-8 text-center group hover:shadow-lg transition-all duration-300">
              <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              
              <h3 className="text-xl font-bold text-black dark:text-foreground mb-2">{member.name}</h3>
              <p className="text-gray-600 dark:text-muted-foreground mb-6">{member.role}</p>
              
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
      <section className="bg-[#F6F5F4] dark:bg-secondary py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-black dark:text-foreground mb-6">{t('aboutPulseGuardTitle')}</h2>
          <p className="text-xl text-gray-600 dark:text-muted-foreground mb-8 leading-relaxed">{t('aboutPulseGuardDesc')}</p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-black dark:text-foreground">5+</div>
              <div className="text-gray-600 dark:text-muted-foreground">{t('teamMembersLabel')}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-black dark:text-foreground">1000+</div>
              <div className="text-gray-600 dark:text-muted-foreground">{t('monitoredServicesLabel')}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-black dark:text-foreground">99.9%</div>
              <div className="text-gray-600 dark:text-muted-foreground">{t('platformUptimeLabel')}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Hiring CTA */}
      <section className="max-w-4xl mx-auto px-4 py-20 text-center">
        <h2 className="text-3xl font-bold text-black dark:text-foreground mb-6">{t('joinOurTeamTitle')}</h2>
        <p className="text-xl text-gray-600 dark:text-muted-foreground mb-8">{t('joinOurTeamDesc')}</p>
        <a 
          href="mailto:info@pulseguard.pro"
          className="inline-flex items-center bg-black text-white px-8 py-3 rounded-md hover:bg-gray-800 transition-colors"
        >
          <Mail className="w-5 h-5 mr-2" />
          {t('getInTouch')}
        </a>
      </section>
    </div>
  );
}