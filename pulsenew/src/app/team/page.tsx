"use client";
import Image from "next/image";
import { Linkedin, Github, Mail, Instagram, Users, Award, TrendingUp } from "lucide-react";
import { teamMembers } from "@/data/team";
import { useTranslation } from "@/hooks/useTranslation";
import RollingGallery from "@/components/RollingGallery";

export default function Team() {
  const { t } = useTranslation();
  
  return (
    <div className="min-h-screen text-white">
      {/* Hero Section */}
      <section className="relative max-w-7xl mx-auto px-4 py-20 text-center">
        <div className="inline-block mb-6 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
          <span className="text-sm font-medium">Meet the Team</span>
        </div>
        <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
          {t('teamHeroTitle')}
        </h1>
        <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          {t('teamHeroSubtitle')}
        </p>
      </section>

      {/* Rolling Gallery */}
      <section className="relative max-w-7xl mx-auto px-4 mb-20">
        <RollingGallery autoplay={true} pauseOnHover={true} teamMembers={teamMembers} />
      </section>

      {/* Company Info */}
      <section className="relative max-w-7xl mx-auto px-4 py-20">
        <div className="bg-white/5 backdrop-blur-md rounded-3xl p-12 border border-white/10">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-6">About iPulse</h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              iPulse is your all-in-one digital business platform. We combine monitoring, file management, and business tools to help modern teams work smarter and faster.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-2xl mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-white mb-2">5+</div>
              <div className="text-gray-300">{t('teamMembersLabel')}</div>
            </div>
            <div className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-2xl mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-white mb-2">1000+</div>
              <div className="text-gray-300">{t('monitoredServicesLabel')}</div>
            </div>
            <div className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-2xl mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-white mb-2">99.9%</div>
              <div className="text-gray-300">{t('platformUptimeLabel')}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Hiring CTA */}
      <section className="relative max-w-4xl mx-auto px-4 py-20 text-center">
        <div className="bg-white/5 backdrop-blur-md rounded-3xl p-12 border border-white/10 hover:bg-white/10 transition-all duration-300">
          <h2 className="text-4xl font-bold text-white mb-6">{t('joinOurTeamTitle')}</h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">{t('joinOurTeamDesc')}</p>
          <a 
            href="mailto:info@pulseguard.nl"
            className="inline-flex items-center bg-white text-black px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <Mail className="w-5 h-5 mr-2" />
            {t('getInTouch')}
          </a>
        </div>
      </section>
    </div>
  );
}