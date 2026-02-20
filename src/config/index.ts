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
      { text: "You should choose", href: "/projects/you-should-choose" },
      { text: "Simple Light Flicker", href: "/projects/simple-light-flicker" },
      { text: "Staged", href: "/projects/staged" },
      { text: "Game Jams", href: "/projects/gamejams" },
    ],
  },
  { text: "About Me", href: "/me" },
  ],
  socialLinks: [
    { text: "LinkedIn", href: "https://www.linkedin.com/in/dani-lipke-066a81372/" },
    { text: "Github", href: "https://github.com/Dambthirteen" },
    { text: "Youtube", href: "https://www.youtube.com/@Thirteen-games" },
    { text: "Steam", href: "https://github.com/immois/astro-zen" },
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
      summary: "A social network that replicates the features of Instagram",
      info: "Sounddesign for the Indie Title 'Staged' developed by ProjectSunset UG",
      description: `
        <p>Staged is an indie game developed by ProjectSunset UG for which Thirteen Games provided the complete sounddesign.</p>
        <p>The project involved creating atmospheric sound effects, ambient soundscapes, and interactive audio elements that enhance the player experience.</p>
        <p>Working closely with the development team, I designed audio that responds dynamically to gameplay, creating an immersive sound environment.</p>
      `,
      image: "/staged-keyart.png",
      gallery: ["/staged-keyart.png"],
      techStack: ["Ableton", "Unreal Engine"],
      linkPreview: "https://store.steampowered.com/app/3534100/Staged/",
      linkSource: "https://store.steampowered.com/app/3534100/Staged/",
    },
  ],
  about: {
    description: `
      Hi! My name is Dani, I'm a <span class="text-primary font-bold">Game Developer</span>and <span class="text-primary font-bold">Game Designer</span> as well as the founder of <span class="text-primary font-bold">Thirteen Games</span>, an independent game studio established in 2026. Game development has been my passion for years, and even while working in other fields, I always spent my free time creating and developing games.

      Before founding Thirteen Games, I gained valuable experience in project management and worked as a manager of a fitness studio. This background helped me build strong leadership, organization, and communication skills, which I now bring into my work as a developer and designer.

      I strongly believe that <span class="text-primary font-bold">indie games represent the future of the gaming industry</span>. My goal is to be part of that future by bringing my vision, creativity, and management experience into every project I work on. I am especially passionate about designing systems and transforming them into creative and engaging gameplay experiences that feel meaningful and memorable for players.

      With Thirteen Games, I aim to create unique and innovative games that stand out, inspire players, and contribute to the growing indie game community.
    `,
    image: "/BildDani.png",
  },
};