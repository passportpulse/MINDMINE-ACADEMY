import ai from "../assets/data-ai.jpg";
import multimedia from "../assets/multimedia.avif";
import sde from "../assets/sde.avif";
import gnm from "../assets/gnm-nursing.avif";

const courses = [
  {
    title: "Data Science with Artificial Intelligence",
    slug: "data-science-ai",
    type: "B.Voc",
    duration: "3 Years",
    shortDescription:
      "Includes Data Mining, NLP, ML, HTML & CSS, Algorithms, Programming & Industry AI tools.",
    fullDescription:
      "Learn Machine Learning, NLP, Python, Statistics, AI development and industry AI tools.",
    modules: [
      "Data Science Foundation",
      "Programming with Python",
      "Machine Learning Fundamentals",
      "Deep Learning + NLP",
      "Industry Internship",
    ],
    eligibility:
      "10+2 passed in any stream (Science preferred), mathematics recommended.",
    image: ai,
    category: "bvoc",
  },
  {
    title: "Multimedia & Animation & Visual Effects",
    slug: "multimedia-animation-vfx",
    type: "B.Voc",
    duration: "3 Years",
    shortDescription:
      "3D modelling, Animation, Storytelling, VR/AR, Graphics & Multimedia design pipeline.",
    fullDescription:
      "Learn Animation pipeline, VFX, Film production, 3D modeling & Storyboarding development.",
    modules: [
      "3D Modeling",
      "Animation",
      "Video Editing",
      "VR + AR",
      "Graphics Design",
    ],
    eligibility: "10+2 passed in any stream.",
    image: multimedia,
    category: "bvoc",
  },
  {
    title: "Software Development & Web Design Technology",
    slug: "software-development-web-design",
    type: "B.Voc",
    duration: "3 Years",
    shortDescription:
      "Frontend & backend development, UI/UX, Databases, Software Engineering & Projects.",
    fullDescription:
      "Frontend + backend development training including database, UI/UX and project development.",
    modules: [
      "React + JavaScript",
      "Backend with Node",
      "Database SQL",
      "Git + Deployment",
      "Capstone Project",
    ],
    eligibility: "10+2 passed (with mathematics recommended).",
    image: sde,
    category: "bvoc",
  },
  {
    title: "GNM Nursing",
    slug: "gnm-nursing",
    type: "Diploma",
    duration: "3 Years",
    shortDescription:
      "Three year General Nursing & Midwifery course under WBNC & INC with hospital internship.",
    fullDescription:
      "Comprehensive General Nursing & Midwifery training with hands-on hospital internship and patient care experience.",
    modules: [
      "Anatomy & Physiology",
      "Fundamentals of Nursing",
      "Community Health Nursing",
      "Medical-Surgical Nursing",
      "Clinical Hospital Internship",
    ],
    eligibility: "10+2 passed in any stream (Science preferred), biology recommended.",
    image: gnm,
    category: "nursing",
  },
];

export default courses;
