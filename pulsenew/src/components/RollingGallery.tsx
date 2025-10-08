"use client";
import { useEffect, useState } from 'react';
import { motion, useMotionValue, useAnimation, useTransform } from 'framer-motion';
import Image from 'next/image';
import { Linkedin, Github, Mail, Instagram } from 'lucide-react';

interface TeamMember {
  name: string;
  role: string;
  image: string;
  linkedin?: string;
  github?: string;
  instagram?: string;
  email?: string;
}

interface RollingGalleryProps {
  autoplay?: boolean;
  pauseOnHover?: boolean;
  teamMembers?: TeamMember[];
}

const RollingGallery = ({ autoplay = false, pauseOnHover = false, teamMembers = [] }: RollingGalleryProps) => {
  const [isScreenSizeSm, setIsScreenSizeSm] = useState(false);
  
  useEffect(() => {
    setIsScreenSizeSm(window.innerWidth <= 640);
    const handleResize = () => setIsScreenSizeSm(window.innerWidth <= 640);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const cylinderWidth = isScreenSizeSm ? 1400 : 2200;
  const faceCount = teamMembers.length;
  const faceWidth = (cylinderWidth / faceCount) * 1.5;
  const radius = cylinderWidth / (2 * Math.PI);

  const dragFactor = 0.05;
  const rotation = useMotionValue(0);
  const controls = useAnimation();

  const transform = useTransform(rotation, val => `rotate3d(0,1,0,${val}deg)`);

  const startInfiniteSpin = (startAngle: number) => {
    controls.start({
      rotateY: [startAngle, startAngle - 360],
      transition: {
        duration: 25,
        ease: 'linear',
        repeat: Infinity
      }
    });
  };

  useEffect(() => {
    if (autoplay) {
      const currentAngle = rotation.get();
      startInfiniteSpin(currentAngle);
    } else {
      controls.stop();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoplay]);

  const handleUpdate = (latest: { rotateY?: number }) => {
    if (typeof latest.rotateY === 'number') {
      rotation.set(latest.rotateY);
    }
  };

  const handleDrag = (_: MouseEvent | TouchEvent | PointerEvent, info: { offset: { x: number } }) => {
    controls.stop();
    rotation.set(rotation.get() + info.offset.x * dragFactor);
  };

  const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: { velocity: { x: number } }) => {
    const finalAngle = rotation.get() + info.velocity.x * dragFactor;
    rotation.set(finalAngle);

    if (autoplay) {
      startInfiniteSpin(finalAngle);
    }
  };

  const handleMouseEnter = () => {
    if (autoplay && pauseOnHover) {
      controls.stop();
    }
  };
  
  const handleMouseLeave = () => {
    if (autoplay && pauseOnHover) {
      const currentAngle = rotation.get();
      startInfiniteSpin(currentAngle);
    }
  };

  return (
    <div className="relative h-[600px] w-full overflow-hidden">
      <div className="flex h-full items-center justify-center [perspective:1200px] [transform-style:preserve-3d]">
        <motion.div
          drag="x"
          dragElastic={0}
          onDrag={handleDrag}
          onDragEnd={handleDragEnd}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          animate={controls}
          onUpdate={handleUpdate}
          style={{
            transform: transform,
            rotateY: rotation,
            width: cylinderWidth,
            transformStyle: 'preserve-3d'
          }}
          className="flex min-h-[400px] cursor-grab items-center justify-center [transform-style:preserve-3d] active:cursor-grabbing"
        >
          {teamMembers.map((member, i) => (
            <div
              key={i}
              className="group absolute flex h-fit items-center justify-center p-[4%] [backface-visibility:hidden] md:p-[3%]"
              style={{
                width: `${faceWidth}px`,
                transform: `rotateY(${(360 / faceCount) * i}deg) translateZ(${radius}px)`
              }}
            >
              {/* Card */}
              <div className="relative w-[380px] sm:w-[320px] bg-white/5 backdrop-blur-md rounded-3xl overflow-hidden border border-white/10 hover:bg-white/10 transition-all duration-500">
                {/* Hover gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10 p-8">
                  {/* Profile image */}
                  <div className="relative w-40 h-40 mx-auto mb-6">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-full blur-xl group-hover:blur-2xl transition-all duration-500" />
                    <div className="relative w-full h-full rounded-full overflow-hidden ring-4 ring-white/20 group-hover:ring-white/40 group-hover:scale-105 transition-all duration-500">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500 pointer-events-none"
                      />
                    </div>
                  </div>
                  
                  {/* Info */}
                  <h3 className="text-2xl font-bold text-white mb-2 text-center group-hover:scale-105 transition-transform duration-300">{member.name}</h3>
                  <p className="text-gray-300 mb-6 text-sm text-center">{member.role}</p>
                  
                  {/* Social icons */}
                  <div className="flex justify-center gap-3">
                    {member.linkedin && (
                      <a 
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-white/20 hover:scale-110 transition-all duration-300 group/icon pointer-events-auto"
                        aria-label="LinkedIn"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Linkedin className="w-5 h-5 text-gray-300 group-hover/icon:text-white transition-colors" />
                      </a>
                    )}
                    {member.github && (
                      <a 
                        href={member.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-white/20 hover:scale-110 transition-all duration-300 group/icon pointer-events-auto"
                        aria-label="GitHub"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Github className="w-5 h-5 text-gray-300 group-hover/icon:text-white transition-colors" />
                      </a>
                    )}
                    {member.instagram && (
                      <a 
                        href={member.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-white/20 hover:scale-110 transition-all duration-300 group/icon pointer-events-auto"
                        aria-label="Instagram"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Instagram className="w-5 h-5 text-gray-300 group-hover/icon:text-white transition-colors" />
                      </a>
                    )}
                    {member.email && (
                      <a 
                        href={`mailto:${member.email}`}
                        className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-white/20 hover:scale-110 transition-all duration-300 group/icon pointer-events-auto"
                        aria-label="Email"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Mail className="w-5 h-5 text-gray-300 group-hover/icon:text-white transition-colors" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default RollingGallery;
