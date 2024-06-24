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
    customDish,
    youtubeClone,
    todoList,
    gymApp,
    golang,
    redux,
    postman,
    pandas,
    matplotlib,
    seaborn,
    opencv,
    vastraAgaya
    
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
      name: "Custom Dish",
      description:
        "Created a food delivery application in MERN Stack where the user can customize their ordered dish by adding extra ingredients like salt,pepper,onion, etc.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "MongoDb",
          color: "green-text-gradient",
        },
        {
          name: "Express",
          color: "pink-text-gradient",
        },
        {
          name: "Node",
          color: "blue-text-gradient",
        },
      ],
      image: customDish,
      source_code_link: "https://github.com/WhiteSnek/CustomDish",
      url_link: "https://custom-dish-5o64.vercel.app/"
    },
    {
      name: "Youtube Clone",
      description:
        "CONSTRUCTED A YOUTUBE CLONE USING MERN STACK AND REDUX FOR STATE MANAGEMENT. THE CLONE CONTAINS FEATURES LIKE VIDEO AND IMAGE HANDLING, USER LOGIN, PLAYLIST CREATION, LIKED VIDEOS AND MANY MORE",
        tags: [
          {
            name: "React",
            color: "blue-text-gradient",
          },
          {
            name: "MongoDb",
            color: "green-text-gradient",
          },
          {
            name: "Express",
            color: "pink-text-gradient",
          },
          {
            name: "Node",
            color: "blue-text-gradient",
          },
        ],
      image: youtubeClone,
      source_code_link: "https://github.com/WhiteSnek/YoutubeClone",
      url_link: "https://youtube-clone-blond-rho.vercel.app/"
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
      url_link: "https://todo-list-five-lake-26.vercel.app/"
    },
    {
      name: "Vastra Agaya",
      description:
        "DESIGNED AND BUILT A LANDING PAGE FOR A FASHION STORE WITH INTERACTIVE USER INTERFACE AND ANIMATIONS",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "GSAP",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: vastraAgaya,
      source_code_link: "hhttps://github.com/WhiteSnek/CodeCubicles",
      url_link: "https://vastra-agaya.vercel.app/"
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
      url_link: "https://gym-app-five-vert.vercel.app/"
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
  