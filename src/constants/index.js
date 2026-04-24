const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Testimonials",
    link: "#testimonials",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 2, suffix: "+", label: "Years of Experience" },
  { value: 5, suffix: "+", label: "Satisfied Clients" },
  { value: 10, suffix: "+", label: "Completed Projects" },
  { value: 90, suffix: "%", label: "Client Retention Rate" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "/images/graph-icon.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/mess-icon.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/alarm.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const techStackImgs = [
  {
    name: "Frontend Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "UI/UX Designer", //replace icon to Figma
    imgPath: "/models/figma.png",
  },
  {
    name: "Web Designer", //replace icon to Framer/Webflow
    imgPath: "/models/webflow.png",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "Frontend Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "UI/UX Designer",
    modelPath: "/models/figma.png",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Web Designer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review: "Grace is an amazing and focused individual. While working with us, she brings clarity and precision. She delivers on time and is reliable and direct.",
    imgPath: "/images/exp1.png",
    logoPath: "/images/logo1.png",
    title: "Frontend Developer",
    date: "September 2025 - Present",
    responsibilities: [
      "Developed and maintained user-facing features for Bonds Media Concept.",
      "Collaborated closely with UI/UX designers to ensure seamless user experiences.",
      "Optimized web applications for maximum speed and scalability.",
    ],
  },
  {
    review: "Grace's teaching skills are superb. How she managed to get my 9-year-old daughter to start developing websites in a span of four months still amazes me. She is punctual, humble and reliable.",
    imgPath: "/images/exp2.png",
    logoPath: "/images/logo2.png",
    title: "Information Technology Tutor",
    date: "September 2025 - March 2026",
    responsibilities: [
      "Instructed and guided students on the use of web and app development tools like Python, HTML, CSS and JavaScript.",
      "Conducted research on child psychology to understand the best teaching method for students.",
      "Built students' morale in their use of software development tools by conducting quizzes and fun projects that kept them engaged.",
    ],
  },
  {
    review: "The time Grace spent working on the start up with us was a good one. She delivered quality designs, delivered on time, and also helped coordinate some other areas in the project.",
    imgPath: "/images/exp3.png",
    logoPath: "/images/logo3.png",
    title: "UI/UX Designer",
    date: "October 2025 - December 2025",
    responsibilities: [
      "Built functional and interactive prototypes of the Sairus website and application.",
      "Conducted research based on popular demand and user-friendly features and implemented them into the design.",
      "Collaborated closely with the development team to implement features based on feedback.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "Nweke Justin",
    mentions: "@Nweke Justin",
    review:
      "Grace is a UI/UX designer who turns complexideas into intuitive, user friendly designs. Detail-oriented, calm under pressure, and highly collaborative, she consistently delivers high-quality work and is a strong asset to any team.",
    // imgPath: "/images/client5.png",
  },
  {
    name: "Favour Edeh",
    mentions: "@Favour Edeh",
    review:
      "In school, Grace has proved to be competent and ambitious. A high performing student, highly determined, and works excellently well alone or in a team. She has good communication skills, and high emotional intelligence. She is punctual, neat and orderly and sticks to deadlines.",
    // imgPath: "/images/client3.png",
  },
  {
    name: "Obodo Ivy",
    mentions: "@Ivy Obodo",
    review:
      "I had the pleasure of working with Grace on our GitHub and Collaboration project, and she proved to be efficient, reliable and easy to work with. She met deadlines, communicated clearly, and kept the team aligned. Her problem-solving skills and calm approach under pressure stood out, and she consistently delivered high-quality results. I highly recommend Grace to anyone seeking a competent and professional team member.",
    // imgPath: "/images/client2.png",
  },
  {
    name: "Victoria Obe",
    mentions: "@Victoria Obiageli Obe",
    review:
      "I can’t say enough good things about Grace. She was able to take our complex project requirements and turn them into a seamless, functional website. Her problem-solving abilities are outstanding.",
    // imgPath: "/images/client1.png",
  },
  {
    name: "Jason O'Byron",
    mentions: "@jaosonobyron",
    review:
      "Grace bridges vision and execution with ease. On a complex medical project, she stood out for her detail, problem-solving, and strong focus on user experience. She challenges briefs to find the best solutions - making her a highly valuable, techincally skilled designer.",
    // imgPath: "/images/client4.png",
  },
  {
    name: "Jimoh Abdulhameed",
    mentions: "@abdulhameed",
    review:
      "I'm pleased to recommend Grace. I've worked with her on a project from school, and she showed strong integrity, honesty, and a high level of trustworthiness. She is reliable, communicates clearly, and follows through her commitments. Her work ethic and attention to detail makes her someone to depend on without hesitation.",
    // imgPath: "/images/client6.png",
  },
];

const socialImgs = [
  {
    name: "insta",
    imgPath: "/images/insta.png",
    url: "https://www.instagram.com/that_one_tech_guru?igsh=MWZidzQ2ZDAzZGQ0OA==",
  },
  {
    name: "fb",
    imgPath: "/images/fb.png",
    url: "https://www.facebook.com/profile.php?id=61553634173962&mibextid=ZbWKwL",
  },
  {
    name: "x",
    imgPath: "/images/x.png",
    url: "https://x.com/EkonduO4887",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
    url: "https://www.linkedin.com/in/ekondu-obe-58939a325",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
