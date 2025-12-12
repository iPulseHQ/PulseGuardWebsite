"use client";
import Image from "next/image";
import { Mail, Linkedin, Github, Instagram } from "lucide-react";
import { teamMembers } from "@/data/team";
import { useTranslation } from "@/hooks/useTranslation";

export default function Team() {
  const { t } = useTranslation();
  
  return (
    <div className="min-h-screen text-gray-900 dark:text-white">
      {/* Hero Section */}
      <section className="relative max-w-7xl mx-auto px-4 py-20 text-center">
        <div className="inline-block mb-6 px-4 py-2 bg-gray-100 dark:bg-white/10 backdrop-blur-sm rounded-full border border-gray-200 dark:border-white/20">
          <span className="text-sm font-medium text-gray-900 dark:text-white">Meet the Team</span>
        </div>
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight mb-6">
          {t('teamHeroTitle')}
        </h1>
      </section>

      {/* Team Grid */}
      <section className="relative max-w-7xl mx-auto px-4 mb-14 sm:mb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member) => (
            <div
              key={member.email ?? member.name}
              className="group relative bg-gray-50 dark:bg-white/5 backdrop-blur-md rounded-3xl overflow-hidden hover:bg-gray-100 dark:hover:bg-white/10 transition-all duration-500 border border-gray-200 dark:border-white/10"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gray-100/50 dark:from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative h-64 bg-black/20 overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              </div>

              <div className="relative z-10 p-6">
                <div className="text-lg font-bold text-gray-900 dark:text-white">
                  {member.name}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                  {member.role}
                </div>

                <div className="mt-5 flex items-center gap-2">
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                      className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gray-100 hover:bg-gray-200 dark:bg-white/5 dark:hover:bg-white/10 border border-gray-200 dark:border-white/10 transition-colors"
                    >
                      <Linkedin className="h-4 w-4 text-gray-900 dark:text-white" />
                    </a>
                  )}
                  {member.github && (
                    <a
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub"
                      className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gray-100 hover:bg-gray-200 dark:bg-white/5 dark:hover:bg-white/10 border border-gray-200 dark:border-white/10 transition-colors"
                    >
                      <Github className="h-4 w-4 text-gray-900 dark:text-white" />
                    </a>
                  )}
                  {member.instagram && (
                    <a
                      href={member.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Instagram"
                      className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gray-100 hover:bg-gray-200 dark:bg-white/5 dark:hover:bg-white/10 border border-gray-200 dark:border-white/10 transition-colors"
                    >
                      <Instagram className="h-4 w-4 text-gray-900 dark:text-white" />
                    </a>
                  )}
                  {member.email && (
                    <a
                      href={`mailto:${member.email}`}
                      aria-label="Email"
                      className="ml-auto inline-flex items-center gap-2 rounded-xl bg-gray-900 text-white dark:bg-white dark:text-black px-3 py-2 text-sm font-semibold hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
                    >
                      <Mail className="h-4 w-4" />
                      Email
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Hiring CTA */}
      <section className="relative max-w-4xl mx-auto px-4 pt-10 pb-12 sm:pt-12 sm:pb-14 text-center">
        <div className="bg-gray-50 dark:bg-white/5 backdrop-blur-md rounded-3xl p-12 border border-gray-200 dark:border-white/10 hover:bg-gray-100 dark:hover:bg-white/10 transition-all duration-300">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">{t('joinOurTeamTitle')}</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">{t('joinOurTeamDesc')}</p>
          <a 
            href="mailto:info@pulseguard.nl"
            className="inline-flex items-center bg-gray-900 dark:bg-white text-white dark:text-black px-8 py-4 rounded-xl font-semibold hover:bg-gray-800 dark:hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <Mail className="w-5 h-5 mr-2" />
            {t('getInTouch')}
          </a>
        </div>
      </section>
    </div>
  );
}