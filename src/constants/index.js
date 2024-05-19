import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    python,
    tailwind,
    cpp,
    git,
    figma,
    express,
    mongodb,
    node,
    meta,
    starbucks,
    tesla,
    shopify,
    face_detection,
    spotify,
    recipeApp,
    todoList,
    gymApp,
    golang,
    redux,
    postman,
    pandas,
    matplotlib,
    seaborn,
    opencv
    
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Full Stack Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "C++",
      icon: cpp,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "express",
      icon: express
    },
    {
      name: "mongodb",
      icon: mongodb
    },
    {
      name: "node",
      icon: node
    },
    {
      name: "redux",
      icon: redux
    },
    {
      name: "golang",
      icon: golang
    },
    {
      name: "postman",
      icon: postman
    },
    {
      name: "pandas",
      icon: pandas
    },
    {
      name: "matplotlib",
      icon: matplotlib
    },
    {
      name: "seaborn",
      icon: seaborn
    },
    {
      name: "opencv",
      icon: opencv
    },
  ];
  
  const experiences = [
    {
      title: "React.js Developer",
      company_name: "Starbucks",
      icon: starbucks,
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "React Native Developer",
      company_name: "Tesla",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Shopify",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Meta",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Face Detection",
      description:
        "Embark on a visual journey with our cutting-edge face detection project. Leveraging state-of-the-art computer vision algorithms, our system meticulously identifies and analyzes facial features in images or video streams. This technology opens doors to a myriad of applications, from enhancing security systems and automating photo organization to powering augmented reality experiences. Join us in revolutionizing how we interact with visual data, as we celebrate the first year of innovation and progress in the realm of face detection",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
      ],
      image: face_detection,
      source_code_link: "https://github.com/WhiteSnek/face_detection",
    },
    {
      name: "Spotify Clone",
      description:
        "Experience seamless music streaming with personalized playlists and a vast library of tracks across genres. Our platform blends cutting-edge audio technology with an intuitive interface for effortless music discovery and sharing. Celebrate our one-year milestone with a Spotify clone that replicates the original's magic while adding innovative, user-centric features for an enhanced music streaming experience.",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "javascript",
          color: "pink-text-gradient",
        },
      ],
      image: spotify,
      source_code_link: "https://github.com/WhiteSnek/Spotify-Clone",
    },
    
    {
      name: "TodoList",
      description:
        "TodoList is a MERN stack web app for efficient task management. Users can create, edit, and delete lists and tasks, stored securely in MongoDB. The app features a user-friendly profile section for updating details and profile photo. It demonstrates skills in frontend-backend integration, dynamic UI, and user tracking via ContextAPI, marking the start of a journey in web development mastery.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "express",
          color: "pink-text-gradient",
        },
      ],
      image: todoList,
      source_code_link: "https://github.com/WhiteSnek/TodoList",
    },
    {
      name: "Recipe App",
      description:
        "Introducing our Recipe Web App: Explore a vast collection of global recipes categorized by cuisine, powered by three APIs. Easily find recipes, access detailed instructions, and enhance your cooking with curated YouTube videos. Whether you're a seasoned chef or a culinary novice, it's your ultimate companion for culinary exploration.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "api",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: recipeApp,
      source_code_link: "https://github.com/WhiteSnek/Recipe-App",
    },
    {
      name: "Gym App",
      description:
        "Built from the ground up, our gym website offers a comprehensive collection of exercises meticulously categorized based on target muscles. Powered by JavaScript and Material UI, with seamless API integration for real-time data updates, our platform provides users with a dynamic and user-friendly fitness experience. Whether you're a seasoned gym-goer or just starting your fitness journey, our website offers something for everyone, making it easier than ever to achieve your fitness goals",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "api",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: gymApp,
      source_code_link: "https://github.com/WhiteSnek/GYM_APP",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
  