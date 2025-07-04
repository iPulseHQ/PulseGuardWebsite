import React, { useEffect } from 'react';
import Layout from '../components/layout/Layout';
import SEOHead from '../components/layout/SEOHead';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useDarkMode } from '../context/DarkModeContext';
import { useTranslation } from '../hooks/useTranslation';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio?: string;
  image: string;
  linkedin?: string;
  github?: string;
  instagram?: string;
  email?: string;
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Michan van der Hoek",
    role: "Developer & CEO",
    bio: "",
    image: "/images/team/michan.jpeg",
    linkedin: "https://www.linkedin.com/in/michan-van-der-hoek-267308215/",
    github: "https://github.com/IAMichan",
    email: "michan@pulseguard.nl"
  },
  {
    id: 2,
    name: "Arjan den Hartog",
    role: "Developer & CTO",
    bio: "",
    image: "/images/team/arjan.jpeg",
    linkedin: "https://www.linkedin.com/in/arjan-den-hartog-142741220/",
    github: "https://github.com/ArjanDenHartog",
    email: "arjan@pulseguard.nl"
  },
  {
    id: 3,
    name: "Noah van den Broek",
    role: "Marketing & CMO",
    bio: "",
    image: "/images/team/noah.jpeg",
    linkedin: "https://www.linkedin.com/in/noah-van-den-broek-5a445034a/",
    instagram: "https://www.instagram.com/noahvandenbroek_/",
    email: "noah@pulseguard.nl"
  },
  {
    id: 4,
    name: "Juda Zwemer",
    role: "Marketing & Content Manager",
    bio: "",
    image: "/images/team/juda.jpg",
    linkedin: "https://www.linkedin.com/in/juda-zwemer-9aa759367/",
    instagram: "https://www.instagram.com/judazwemer/",
    email: "juda@pulseguard.nl"
  },
];

const Team: React.FC = () => {
  const { isDarkMode } = useDarkMode();
  const { t } = useTranslation();
  
  // Animatie voor teammember cards
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fadeIn');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    const teamCards = document.querySelectorAll('.team-member-card');
    teamCards.forEach(card => {
      observer.observe(card);
    });
    
    return () => {
      teamCards.forEach(card => {
        observer.unobserve(card);
      });
    };
  }, []);
  
  const teamStructuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage", 
    "name": "PulseGuard Team - Meet Our Monitoring Experts",
    "description": "Meet the talented team behind PulseGuard. Experienced developers and designers dedicated to building the best monitoring solution for your infrastructure.",
    "url": "https://pulseguard.nl/team",
    "mainEntity": {
      "@type": "Organization",
      "name": "PulseGuard",
      "url": "https://pulseguard.nl",
      "employee": teamMembers.map(member => ({
        "@type": "Person",
        "name": member.name,
        "jobTitle": member.role,
        "image": `https://pulseguard.nl${member.image}`,
        "sameAs": [member.linkedin, member.github].filter(Boolean)
      }))
    }
  };

  return (
    <>
      <SEOHead
        title={t('teamSeoTitle')}
        description={t('teamSeoDescription')}
        keywords={t('teamSeoKeywords')}
        canonicalUrl="https://pulseguard.nl/team"
        structuredData={teamStructuredData}
      />
      <Layout>
        <section className="pt-32 pb-24 bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-800">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto mb-16 gap-8">
              <div className="text-center md:text-left md:w-1/2">
                <div className="inline-block bg-blue-100 dark:bg-blue-900/30 rounded-full px-4 py-2 text-blue-600 dark:text-blue-400 font-medium text-sm mb-4">
                  {t('ourTeam')}
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">{t('meetTheTeam')}</h1>
                <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                  {t('teamDescription')}
                </p>
              </div>
              <div className="md:w-1/2">
                <div className="rounded-lg overflow-hidden shadow-xl">
                  <img 
                    src="/images/pulseguardbrain.jpg" 
                    alt="PulseGuard team meeting" 
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 opacity-0 animate-fadeIn">
              {teamMembers.map((member, index) => (
                <div 
                  key={member.id} 
                  className="team-member-card group opacity-0" 
                  style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
                >
                  <div className="h-64 overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                    <img 
                      src={member.image} 
                      alt={`${member.name} - ${member.role} at PulseGuard`} 
                      className="w-full h-full object-cover object-center transform group-hover:scale-110 transition-transform duration-500"
                      onError={(e) => {
                        // Fallback to placeholder if image fails to load
                        (e.target as HTMLImageElement).src = 'https://via.placeholder.com/300x300?text=Team+Member';
                      }}
                    />
                    <div className="absolute bottom-0 left-0 w-full p-4 z-20">
                      <div className="flex space-x-3 transform translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                        {member.linkedin && (
                          <a 
                            href={member.linkedin} 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white/90 hover:bg-blue-600 text-gray-800 hover:text-white p-2 rounded-full transition-colors"
                            aria-label={`${member.name}'s LinkedIn`}
                          >
                            <FontAwesomeIcon icon={faLinkedin} className="w-5 h-5" />
                          </a>
                        )}
                        
                        {member.github && (
                          <a 
                            href={member.github} 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white/90 hover:bg-gray-800 text-gray-800 hover:text-white p-2 rounded-full transition-colors"
                            aria-label={`${member.name}'s GitHub`}
                          >
                            <FontAwesomeIcon icon={faGithub} className="w-5 h-5" />
                          </a>
                        )}
                        
                        {member.instagram && (
                          <a 
                            href={member.instagram}
                            target="_blank"
                            rel="noopener noreferrer" 
                            className="bg-white/90 hover:bg-gradient-to-br from-purple-500 to-pink-500 text-gray-800 hover:text-white p-2 rounded-full transition-colors"
                            aria-label={`${member.name}'s Instagram`}
                          >
                            <FontAwesomeIcon icon={faInstagram} className="w-5 h-5" />
                          </a>
                        )}
                        
                        {member.email && (
                          <a 
                            href={`mailto:${member.email}`}
                            className="bg-white/90 hover:bg-green-600 text-gray-800 hover:text-white p-2 rounded-full transition-colors"
                            aria-label={`Email ${member.name}`}
                          >
                            <FontAwesomeIcon icon={faEnvelope} className="w-5 h-5" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className={`p-6 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{member.name}</h3>
                    <p className="text-blue-600 dark:text-blue-400 font-medium mb-3">{member.role}</p>
                    {member.bio && (
                      <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-4 group-hover:line-clamp-none transition-all duration-300">{member.bio}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-24 bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg dark:shadow-gray-900/10 max-w-4xl mx-auto transform hover:-translate-y-1 transition-transform duration-300">
              <div className="inline-block bg-purple-100 dark:bg-purple-900/30 rounded-full px-4 py-2 text-purple-600 dark:text-purple-400 font-medium text-sm mb-4">
                {t('joinUs')}
              </div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">{t('growingTeam')}</h2>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8 text-lg">
                {t('joinUsDescription')}
              </p>
              <a 
                href="mailto:info@pulseguard.nl" 
                className="btn-primary inline-flex items-center group"
              >
                <span>{t('getInTouch')}</span>
                <FontAwesomeIcon icon={faArrowRight} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Team; 