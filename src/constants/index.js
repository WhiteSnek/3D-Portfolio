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
    ricoz,
    typescript,
    docker,
    postgres,
    aws,
    achievementManagement,
    nest
    
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
      title: "Frontend Developer",
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
    {
      title: "DevOps Engineer",
      icon: web,
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
      name: "Typescript",
      icon: typescript
    },

    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "redux",
      icon: redux
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "express",
      icon: express
    },
    
    {
      name: "node",
      icon: node
    },
    {
      name: "Nest js",
      icon: nest,
    },
    {
      name: "mongodb",
      icon: mongodb
    },
    {
      name: "postgres",
      icon: postgres
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "C++",
      icon: cpp,
    },
    {
      name: "golang",
      icon: golang
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
      name: "postman",
      icon: postman
    },
    {
      name: "docker",
      icon: docker
    },
    {
      name: "aws",
      icon: aws
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
      title: "Full stack Developer trainee",
      company_name: "Bhagwan Parshuram Institute of Technology",
      icon: 'https://bpitindia.com/wp-content/uploads/2023/07/BPIT-logo.jpg',
      iconBg: "#383E56",
      date: "June 2024 - July 2024",
      points: [
        "Developed an Achievement Management Website using the MERN stack",
        "Implemented key features like user authentication, dynamic achievement tracking, and an admin panel for managing user achievements.",
        "Collaborated with faculty and students to gather requirements and ensure the platform met their needs.",
        "Enhanced website performance and user experience through efficient coding practices and responsive design",
      ],
    },
    {
      title: "Nodejs Developer Intern",
      company_name: "Ricoz",
      icon: ricoz,
      iconBg: "#383E56",
      date: "October 2024 - Present",
      points: [
        "Developing the backend in nodejs for the company project",
        "Used third party authentication for signin and signup",
        "Integrated payment gateway"
      ],
    }
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
        "I developed a food delivery application using the MERN Stack that offers a highly customizable user experience. Users can tailor their orders by adjusting ingredients such as salt, pepper, onion, and other condiments to suit their preferences. The app features a user-friendly interface, making it easy to modify dishes in real time and review the selected ingredients before placing an order. Additionally, the system tracks ingredient preferences to enhance future orders, providing a personalized dining experience each time. The application aims to deliver flexibility and convenience, ensuring users get exactly what they want with every meal.",
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
      name: "GameTube",
      description:
        "GameTube is a dynamic video-sharing platform designed specifically for gamers, allowing them to share gameplay experiences, tutorials, and esports highlights. Built with modern technologies like React and Go, it offers an intuitive interface for seamless navigation and content discovery. Users can upload and manage videos, join guilds to foster community collaboration, and engage with others through comments and likes. With personalized profiles and mobile compatibility, GameTube provides a vibrant space for gamers to connect, showcase their skills, and build lasting relationships in the gaming community. Join GameTube today and elevate your gaming experience!",
        tags: [
          {
            name: "React",
            color: "blue-text-gradient",
          },
          {
            name: "PostgreSQL",
            color: "green-text-gradient",
          },
          {
            name: "TypeScript",
            color: "pink-text-gradient",
          },
          {
            name: "Go",
            color: "blue-text-gradient",
          },
          {
            name: "Docker",
            color: "blue-text-gradient",
          },
        ],
      image: youtubeClone,
      source_code_link: "https://github.com/WhiteSnek/Gametube",
      url_link: "https://gamingtube.onrender.com/"
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
      name: "Achievement Management",
      description:
        "I built an achievement management website using the MERN Stack, designed to help students, faculty, and institutions manage and showcase their achievements. The platform allows users to upload, categorize, and track milestones such as awards, certifications, publications, and projects. It features a role-based access system where admins can verify and approve achievements, while users can maintain personalized profiles showcasing their accomplishments. The website offers an intuitive dashboard, making it easy for users to filter achievements by type or date, and institutions can generate reports for performance evaluations.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "express",
          color: "green-text-gradient",
        },
        {
          name: "mongodb",
          color: "pink-text-gradient",
        },
      ],
      image: achievementManagement,
      source_code_link: "https://github.com/WhiteSnek/Achievement-Management",
      url_link: "https://achievement-management.vercel.app"
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
  