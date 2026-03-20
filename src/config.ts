export const siteConfig = {
  name: "Wojciech Dudziński",
  title: "3rd year AI student",
  description: "Portfolio website of Wojciech Dudziński",
  accentColor: "#1d4ed8",
  social: {
    linkedin: "https://www.linkedin.com/in/wojciech-dudzinski-9999423b1/",
    github: "https://github.com/Belegestel",
  },
  aboutMe:
    "I am a multi-disciplinary Software Engineer with a deep focus on Deep Learning and Data Science. My work spans the entire stack—from training U-Net architectures for image segmentation to engineering high-performance systems in Rust and C++. I thrive on technical variety, whether I'm designing custom Domain-Specific Languages, optimizing real-time telemetry via UDP, or compiling complex logic to WebAssembly. I don’t just build models; I build the robust, scalable environments they live in.",
  skills: ["Python", "C#", "C++", "C", "Java", "Rust", "SQL", "Javascript", "CSS", "HTML",
          "numpy", "pandas", "scikit-learn", "matplotlib", "seaborn", "tensorflow", "torch", 
           "git", "docker", "jupyter notebook", "linux", "blender", "GIMP", "vim"],
  projects: [
    {
      name: "pyXPUDP",
      description:
        "High-performance, multithreaded UDP networking library for flight simulator X-Plane 12, currently published on PyPi. The library facilitates real-time telemetry exchange via UDP, providing a robust and efficient interface to remotely execute commands, read and set simulation parameters.",
      link: "https://github.com/Belegestel/pyXPUDP",
      pypi: "https://pypi.org/project/pyXPUDP/",
      skills: ["Python", "UDP", "PyPi"],
    },
    {
      name: "4D Minesweeper",
      description:
        "Visualized 4-dimensional hyper-geometry by abstracting classic Minesweeper logic. Optimized for the web using Rust and WebAssembly, ensuring near-native performance directly in the browser.",
      link: "https://github.com/Belegestel/4d-minesweeper",
      game: "https://belegestel.github.io/4d-minesweeper/",
      skills: ["Rust", "WASM", "egui", "Web"],
    },
    {
      name: "People - Image Segmentation",
      description:
        "End-to-end computer vision pipeline using a U-Net CNN architecture. The project covers the full ML lifecycle: from data augmentation and training in PyTorch to deploying a functional interface via Streamlit for real-time human segmentation.",
      link: "https://github.com/Belegestel/PeopleSegmentation",
      skills: ["Python", "Deep learning", "torch", "streamlit", "Jupyter Notebook", "Computer Vision"],
    },
    {
      name: "Game Tracking",
      description:
        "automated spatial analysis engine using OpenCV to track board game states in real-time. By mapping visual coordinates from a camera feed into logical game data, the system dynamically evaluates player positions and automates scoring for complex physical board layouts.",
      link: "https://github.com/Belegestel/GameTracking",
      skills: ["Python", "OpenCV", "Jupyter Notebook"],
    },
    {
      name: "Checklist App",
      description:
        "A Rust program for managing, displaying and completing dynamnic checklists. Utilizes a specifically designed custom Domain-Specific Language (DSL) to handle complex, nested conditional logic.",
      link: "https://github.com/Belegestel/checklist-app",
      skills: ["Rust", "egui"],
    },
  ],
 /* experience: [
    {
      company: "Tech Company",
      title: "Senior Software Engineer",
      dateRange: "Jan 2022 - Present",
      bullets: [
        "Led development of microservices architecture serving 1M+ users",
        "Reduced API response times by 40% through optimization",
        "Mentored team of 5 junior developers",
      ],
    },
    {
      company: "Startup Inc",
      title: "Full Stack Developer",
      dateRange: "Jun 2020 - Dec 2021",
      bullets: [
        "Built and launched MVP product from scratch using React and Node.js",
        "Implemented CI/CD pipeline reducing deployment time by 60%",
        "Collaborated with product team to define technical requirements",
      ],
    },
    {
      company: "Digital Agency",
      title: "Frontend Developer",
      dateRange: "Aug 2018 - May 2020",
      bullets: [
        "Developed responsive web applications for 20+ clients",
        "Improved site performance scores by 35% on average",
        "Introduced modern JavaScript frameworks to legacy codebases",
      ],
    },
  ],*/
  education: [
    {
      school: "VIII High School in Poznań",
      // degree: "Bachelor of Science in Computer Science",
      dateRange: "2019 - 2023",
      achievements: [
      ],
    },
    {
      school: "Poznań University of Technology",
      // degree: "Full Stack Development Certificate",
      dateRange: "2023",
      achievements: [
      ],
    },
  ],
};
