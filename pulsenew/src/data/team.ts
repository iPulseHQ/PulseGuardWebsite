export interface TeamMember {
  name: string;
  role: string;
  image: string;
  linkedin?: string;
  github?: string;
  instagram?: string;
  email?: string;
}

export const teamMembers: TeamMember[] = [
  {
    name: "Michan van der Hoek",
    role: "CEO & Developer",
    image: "/assets/team/michan.jpeg",
    linkedin: "https://www.linkedin.com/in/michan-van-der-hoek-267308215/",
    github: "https://github.com/IAMichan",
    email: "michan@pulseguard.pro"
  },
  {
    name: "Arjan den Hartog",
    role: "CTO & Developer",
    image: "/assets/team/arjan.jpg",
    linkedin: "https://www.linkedin.com/in/arjan-den-hartog-142741220/",
    github: "https://github.com/ArjanDenHartog",
    email: "arjan@pulseguard.pro"
  },
  {
    name: "Noah van den Broek",
    role: "CMO & Marketing",
    image: "/assets/team/noah.jpeg",
    linkedin: "https://www.linkedin.com/in/noah-van-den-broek-5a445034a/",
    instagram: "https://www.instagram.com/noahvandenbroek_/",
    email: "noah@pulseguard.pro"
  },
  {
    name: "Juda Zwemer",
    role: "Marketing & Content Manager",
    image: "/assets/team/juda.jpg",
    linkedin: "https://www.linkedin.com/in/juda-zwemer-9aa759367/",
    instagram: "https://www.instagram.com/judazwemer/",
    email: "juda@pulseguard.pro"
  }
];

export function getTeamMemberByName(name: string): TeamMember | undefined {
  return teamMembers.find(member => 
    member.name.toLowerCase() === name.toLowerCase() ||
    member.name.toLowerCase() === name.toLowerCase().replace("van de ", "van den ")
  );
}