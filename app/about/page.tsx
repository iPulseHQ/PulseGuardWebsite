"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { motion } from "framer-motion";
import { Linkedin, Github, Instagram, Mail, Users, Send } from "lucide-react";
import { useEffect, useState } from "react";
import Image from "next/image";
import StructuredData from "@/components/StructuredData";

const teamMembers = [
  {
    name: "Michan van der Hoek",
    role: "CEO & Developer",
    image: "/team/michan.jpeg",
    linkedin: "https://www.linkedin.com/in/michan-van-der-hoek-267308215/",
    github: "https://github.com/IAMichan",
    email: "michan@ipulse.one"
  },
  {
    name: "Arjan den Hartog",
    role: "CTO & Developer",
    image: "/team/arjan.jpeg",
    linkedin: "https://www.linkedin.com/in/arjan-den-hartog-142741220/",
    github: "https://github.com/ArjanDenHartog",
    email: "arjan@ipulse.one"
  },
  {
    name: "Noah van den Broek",
    role: "CMO & Marketing",
    image: "/team/noah.jpeg",
    linkedin: "https://www.linkedin.com/in/noah-van-den-broek-5a445034a/",
    instagram: "https://www.instagram.com/noahvandenbroek_/",
    email: "noah@ipulse.one"
  },
  {
    name: "Juda Zwemer",
    role: "Marketing & Content Manager",
    image: "/team/juda.jpg",
    linkedin: "https://www.linkedin.com/in/juda-zwemer-9aa759367/",
    instagram: "https://www.instagram.com/judazwemer/",
    email: "juda@ipulse.one"
  }
];

export default function AboutPage() {
  const { t } = useLanguage();
  const [mounted, setMounted] = useState(false);
  const [currentTeamPhoto, setCurrentTeamPhoto] = useState(0);

  const teamPhotos = ["team1.jpeg", "team2.jpeg", "team3.jpeg", "team4.jpeg", "team5.jpeg"];

  useEffect(() => {
    setMounted(true);

    // Rotate team photos every 3 seconds
    const interval = setInterval(() => {
      setCurrentTeamPhoto((prev) => (prev + 1) % teamPhotos.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      {/* Structured Data for SEO */}
      <StructuredData
        type="Organization"
        data={{
          name: "iPulse",
          url: "https://ipulse.one",
          logo: "https://ipulse.one/logofinal.png",
          description: "iPulse is a modern monitoring platform built by a passionate team of developers and entrepreneurs. We provide innovative solutions for website monitoring, file sharing, and QR code management.",
          socialLinks: [
            "https://www.linkedin.com/in/michan-van-der-hoek-267308215/",
            "https://www.linkedin.com/in/arjan-den-hartog-142741220/",
            "https://github.com/IAMichan"
          ],
          email: "support@ipulse.one"
        }}
      />

      <div className="min-h-screen relative overflow-hidden">

        {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            animate={mounted ? "visible" : "hidden"}
            variants={fadeInUp}
            transition={{ duration: 0.5 }}
            className="text-center space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-primary/10 border border-primary/20 text-sm font-medium shadow-sm">
              <Users className="h-4 w-4 text-primary" />
              {t("about")}
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              {t("aboutTitle")}
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              {t("aboutDescription")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1 rounded-md bg-card border border-border/50 text-sm font-medium mb-4">
              {t("ourTeam")}
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
              {t("teamTitle")}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("teamDescription")}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="glassmorphism rounded-xl p-6 border border-border/50 hover:shadow-lg transition-all group"
              >
                <div className="mb-4 relative">
                  <div className="w-32 h-32 mx-auto rounded-full overflow-hidden bg-gradient-to-br from-primary/20 to-primary/5 ring-2 ring-primary/20 group-hover:ring-primary/40 transition-all">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={128}
                      height={128}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="text-center mb-4">
                  <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </div>

                {/* Social Links */}
                <div className="flex items-center justify-center gap-2">
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-8 w-8 rounded-md bg-muted hover:bg-primary/10 flex items-center justify-center transition-colors"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="h-4 w-4 text-muted-foreground hover:text-primary transition-colors" />
                    </a>
                  )}
                  {member.github && (
                    <a
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-8 w-8 rounded-md bg-muted hover:bg-primary/10 flex items-center justify-center transition-colors"
                      aria-label="GitHub"
                    >
                      <Github className="h-4 w-4 text-muted-foreground hover:text-primary transition-colors" />
                    </a>
                  )}
                  {member.instagram && (
                    <a
                      href={member.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-8 w-8 rounded-md bg-muted hover:bg-primary/10 flex items-center justify-center transition-colors"
                      aria-label="Instagram"
                    >
                      <Instagram className="h-4 w-4 text-muted-foreground hover:text-primary transition-colors" />
                    </a>
                  )}
                  {member.email && (
                    <a
                      href={`mailto:${member.email}`}
                      className="h-8 w-8 rounded-md bg-muted hover:bg-primary/10 flex items-center justify-center transition-colors"
                      aria-label="Email"
                    >
                      <Mail className="h-4 w-4 text-muted-foreground hover:text-primary transition-colors" />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Photos Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1 rounded-md bg-muted border border-border/50 text-sm font-medium mb-4">
              {t("ourTeam")}
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
              {t("teamDescription")}
            </h2>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative w-full max-w-4xl mx-auto aspect-video rounded-2xl overflow-hidden glassmorphism border border-border/50"
          >
            {teamPhotos.map((photo, index) => (
              <motion.div
                key={photo}
                initial={{ opacity: 0 }}
                animate={{
                  opacity: currentTeamPhoto === index ? 1 : 0,
                  scale: currentTeamPhoto === index ? 1 : 1.1,
                }}
                transition={{ duration: 1 }}
                className="absolute inset-0"
              >
                <Image
                  src={`/teamfotos/${photo}`}
                  alt={`Team photo ${index + 1}`}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
              </motion.div>
            ))}

            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />

            {/* Indicators */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
              {teamPhotos.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTeamPhoto(index)}
                  className={`h-2 rounded-full transition-all ${
                    currentTeamPhoto === index ? "w-8 bg-primary" : "w-2 bg-primary/30"
                  }`}
                  aria-label={`View team photo ${index + 1}`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Join Team Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="glassmorphism rounded-2xl p-8 sm:p-12 border border-border/50 text-center"
          >
            <div className="inline-block px-4 py-1 rounded-md bg-primary/10 border border-primary/20 text-sm font-medium mb-6">
              {t("joinTeamBadge")}
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              {t("joinTeamTitle")}
            </h2>

            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              {t("joinTeamDescription")}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="mailto:contact@ipulse.one"
                className="h-12 px-8 bg-white text-black text-sm font-semibold rounded-lg hover:bg-white/90 transition-all duration-200 shadow-lg shadow-white/10 hover:shadow-xl hover:shadow-white/20 inline-flex items-center justify-center gap-2 group"
              >
                <Mail className="h-4 w-4" />
                {t("joinTeamEmailButton")}
                <Send className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            <p className="text-sm text-muted-foreground mt-6">
              {t("joinTeamEmailLabel")}: contact@ipulse.one
            </p>
          </motion.div>
        </div>
      </section>

      </div>
    </>
  );
}

