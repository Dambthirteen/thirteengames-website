import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Thirteen Games - Indie Game Studio by Dani Lipke",
  author: "Thirteen Games - Dani Lipke",
  description: "Thirteen Games is an independent game studio founded by Dani Lipke in Cologne, Germany. Game Development, Sound Design, and Unity Assets.",
  lang: "de",
  navLinks: [
  {
    text: "Projects",
    href: "/#projects",
    children: [
      { text: "You Should Choose", href: "/projects/you-should-choose" },
      { text: "Simple Light Flicker", href: "/projects/simple-light-flicker" },
      { text: "Staged", href: "/projects/staged" },
      { text: "Game Jams", href: "/projects/gamejams" },
    ],
  },
  { text: "You Should Choose", href: "/projects/you-should-choose" },
  { text: "Discord", href: "https://discord.gg/6MUx8wUF" },
  { text: "About", href: "/me" },
  ],
  socialLinks: [
    { text: "LinkedIn", href: "https://www.linkedin.com/in/dani-lipke-066a81372/" },
    { text: "Github", href: "https://github.com/Dambthirteen" },
    { text: "Youtube", href: "https://www.youtube.com/@Thirteen-games" },
    { text: "Discord", href: "https://discord.gg/6MUx8wUF" },
    { text: "Steam", href: "https://www.thirteengames.de" },
  ],
  socialImage: "/socialImage.png",
  canonicalURL: "https://www.thirteengames.de",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Thirteen Games",
    specialty: "INDIE GAME STUDIO",
    summary: "Cologne Germany",
    email: "Danijasonlipke@gmail.com",
  },
  experience: [
    {
      company: "Thirteen Games",
      position: "Founder",
      startDate: "January 2026",
      endDate: "To this Day",
      summary: [
        "Founded Thirteen Games with the start of my first project",
      ],
    },
    {
      company: "",
      position: "",
      startDate: "",
      endDate: "",
      summary: [
        "",
        "",
      ],
    },
    {
      company: "",
      position: "",
      startDate: "",
      endDate: "",
      summary:
        "",
    },
  ],
  projects: [
    {
      name: "You should choose",
      slug: "you-should-choose",
      category: "Game Development",
      summary: "WORK IN PROGRESS",
      info: "You should choose - upcoming title currently in early development. More details coming soon.",
      description: `
        <p>You should choose is an upcoming game currently in early development at Thirteen Games. More details will be revealed soon.</p>
        <p>This project represents our vision for what indie games can be — innovative, meaningful, and memorable.</p>
        <p>Stay tuned for updates as development progresses.</p>
      `,
      image: "/Comingsoon-banner.png",
      gallery: ["/Comingsoon-banner.png"],
      techStack: ["Unity", "C#",],
      linkPreview: "/",
      linkSource: "https://assetstore.unity.com/packages/slug/361974",
    },
    {
    name: "Simple Light Flicker",
    slug: "simple-light-flicker",
    category: "Unity Asset",
    summary: "A simple solution for Ambience and Atmosphere inside the Unity Game Engine",
    info: "A lightweight Unity tool that adds dynamic flickering effects to any light source.",
    description: `
      <p>Simple Light Flicker is a lightweight, easy-to-use Unity asset...</p>
    `,
    image: "/simple-light-flicker.png",
    gallery: ["/simple-light-flicker.png"],
    techStack: ["Unity", "C#"],
    youtubeId: "kek60hHZMSc",
    linkPreview: "/",
    linkSource: "https://assetstore.unity.com/packages/slug/361974",
    },
    {
    name: "Staged",
    slug: "staged",
    category: "Sounddesign",
    summary: "Sounddesign for the indie title Staged by ProjectSunset UG",
    info: "Sounddesign for the Indie Title 'Staged' developed by ProjectSunset UG",
    description: `
      <p>Staged is an indie game developed by ProjectSunset UG. Thirteen Games contributed to the sound design.</p>
      <p>The project involved creating atmospheric sound effects, ambient soundscapes, and interactive audio elements that enhance the player experience.</p>
      <p>Working closely with the development team, I designed audio that responds dynamically to gameplay, creating an immersive sound environment.</p>
    `,
    image: "/staged-keyart.png",
    gallery: ["/staged-keyart.png"],
    techStack: ["Ableton", "Unreal Engine"],
    linkPreview: "https://store.steampowered.com/app/3534100/Staged/",
    linkSource: "https://projectsunset.de",
  },
  ],
  about: {
    description: `
      Hi! My name is Dani, I'm a <span class="text-primary font-bold">Game Developer</span> and <span class="text-primary font-bold">Game Designer</span> as well as the founder of <span class="text-primary font-bold">Thirteen Games</span>, an independent game studio based in Cologne, Germany. I've been developing games for a while now — even while working in other industries, I consistently built projects in my free time.

      Before founding Thirteen Games, I worked in project management and led a fitness studio as its manager. That experience gave me a solid foundation in <span class="text-primary font-bold">leadership, organization, and communication</span> — skills that directly translate into running a studio and shipping games.

      I see the indie space as one of the most important drivers of the gaming industry. <span class="text-primary font-bold">Smaller teams can take risks that larger studios can't</span>, and that's where some of the most interesting work happens. My focus is on designing systems that translate into engaging, well-crafted gameplay — the kind of experiences that stick with players.

      With Thirteen Games, I want to <span class="text-primary font-bold">contribute to that landscape</span> — building games that are thoughtfully designed, well-executed, and worth playing.
    `,
    image: "/BildDani.png",
  },
};