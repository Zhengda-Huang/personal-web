export const skills = [
  {
    icon: 'fas fa-code',
    title: 'Backend Development',
    description: 'Proficiency in building server-side applications, handling databases, and designing APIs. This involves using languages like Node.js, Java, and frameworks like Spring Boot to create robust and scalable backend systems.',
    proficiency: [
      { skill: 'Node.js', proficiency: 'Advanced' },
      { skill: 'Java', proficiency: 'Advanced' },
      { skill: 'TypeScript', proficiency: 'Advanced' },
      { skill: 'Spring Boot', proficiency: 'Intermediate' }
    ]
  },
  {
    icon: 'fas fa-database',
    title: 'Database Management',
    description: 'Ability to design, implement, and maintain databases efficiently. Skills include working with SQL databases like PostgreSQL, Firebase, and MongoDB, performing CRUD operations, optimizing queries, and ensuring data integrity.',
    proficiency: [
      { skill: 'SQL', proficiency: 'Advanced' },
      { skill: 'PostgreSQL', proficiency: 'Advanced' },
      { skill: 'Firebase', proficiency: 'Intermediate' },
      { skill: 'MongoDB', proficiency: 'Intermediate' }
    ]
  },
  {
    icon: 'fas fa-laptop-code',
    title: 'Web Development',
    description: 'Expertise in creating dynamic and responsive web applications. This encompasses knowledge of frontend technologies such as React, Next.js, HTML, CSS, and JavaScript to build user-friendly interfaces and ensure seamless user experiences across devices.',
    proficiency: [
      { skill: 'JavaScript', proficiency: 'Advanced' },
      { skill: 'Node.js', proficiency: 'Advanced' },
      { skill: 'React.js', proficiency: 'Advanced' },
      { skill: 'Next.js', proficiency: 'Advanced' }

    ]
  },
  {
    icon: 'fas fa-cloud',
    title: 'Cloud Computing',
    description: 'Proficiency in deploying and managing applications on cloud platforms like Google Cloud Platform (GCP). Skills include using services like Kubernetes and Docker for containerization, ensuring scalability, reliability, and security of applications.',
    proficiency: [
      { skill: 'Google Cloud Platform (GCP)', proficiency: 'Intermediate' },
      { skill: 'Kubernetes', proficiency: 'Intermediate' },
      { skill: 'Docker', proficiency: 'Intermediate' }
    ]
  },
  {
    icon: 'fas fa-code-branch',
    title: 'API Development',
    description: 'Experience in designing and implementing RESTful APIs to facilitate communication between different software systems. This involves defining endpoints, handling authentication, and ensuring data exchange in a standardized and efficient manner.',
    proficiency: [
      { skill: 'RESTful APIs', proficiency: 'Advanced' },
      { skill: 'Endpoint Definition', proficiency: 'Intermediate' },
      { skill: 'Authentication', proficiency: 'Intermediate' }
    ]
  },
  {
    icon: 'fas fa-project-diagram',
    title: 'Software Architecture',
    description: 'Understanding of software design principles and patterns to create scalable, maintainable, and modular systems. This includes knowledge of microservices architecture, SOLID principles, and design patterns like MVC (Model-View-Controller).',
    proficiency: [
      { skill: 'Microservices Architecture', proficiency: 'Intermediate' },
      { skill: 'SOLID Principles', proficiency: 'Intermediate' },
      { skill: 'MVC (Model-View-Controller)', proficiency: 'Intermediate' }
    ]
  },
  {
    icon: 'fas fa-code-branch',
    title: 'Version Control',
    description: 'Proficiency in using version control systems like Git for managing codebase changes collaboratively. Skills include branching, merging, resolving conflicts, and maintaining a clean and organized code repository.',
    proficiency: [
      { skill: 'Git', proficiency: 'Advanced' },
      { skill: 'Branching and Merging', proficiency: 'Intermediate' },
      { skill: 'Conflict Resolution', proficiency: 'Intermediate' }
    ]
  },
  {
    icon: 'fas fa-tasks',
    title: 'Agile Methodologies',
    description: 'Familiar with agile methodologies like Scrum and Kanban. Participates in iterative development cycles, including sprint planning, daily stand-ups, and retrospective meetings. Delivers high-quality software efficiently and adapts to changing requirements.',
    proficiency: [
      { skill: 'Scrum', proficiency: 'Intermediate' },
      { skill: 'Kanban', proficiency: 'Intermediate' }
    ]
  }  
];



  export const projects = [
    {
      title: 'Unique Nail Spa Website',
      description: 'Discover the essence of luxury nail care with our project, meticulously crafted using Next.js, React, and Tailwind CSS. Seamlessly blending style and functionality, our platform caters to over 200 monthly visitors seeking premium nail services. Dive into a world of elegance and convenience as you explore our curated selection of manicures and nail art designs. Elevate your nail salon experience today with Unique Nail Salon.',
      imageUrl: '/unique.jpeg',
      projectLink: 'https://www.uniquenailspas.com/',
      github: 'https://github.com/Zhengda-Huang/unique-nail-spa'
    },
    {
      title: 'Casino Game Project',
      description: 'Experience the thrill of a fully immersive casino experience with the latest addition to the Coveny Town project: an exhilarating casino feature developed by the Spring 2024 CS4530 Team 312. Dive into the excitement with classic favorites like blackjack and roulette, all seamlessly integrated into the platform. With a consistent currency system, indulge in endless entertainment as you try your luck and test your skills against others. Join us now and elevate your gaming experience to new heights!',
      imageUrl: '/casino.png',
      projectLink: 'https://spring24-project-team-312-frontend.onrender.com/',
      github: 'https://github.com/neu-cs4530/spring24-project-team-312'
    },
    {
      title: 'Popcorn Review',
      description: "Unveil the movie magic with our CS4530 project: a sleek movie review platform. Built with Node.js, React, Bootstrap, and MongoDB, it's a movie buff's dream. Sign up, follow movies, and share reviews effortlessly. Elevate your movie experience today!",
      imageUrl: '/movie.jpeg',
      projectLink: 'https://main--whimsical-brioche-e48fea.netlify.app/?#/home',
      github: 'https://github.com/eoinFlynn-NU/WebdevProject'
    },
    {
      title: 'Our Receipes App',
      description: "Delve into culinary delights with our Android recipe app crafted in Kotlin. Seamlessly fetching data from external sources via API requests, it enables users to sign up, log in, and explore recipes from across the globe. Embark on a culinary journey like never before!",
      imageUrl: '/food_app.jpeg',
      projectLink: 'https://github.com/Zhengda-Huang/Mobile-Dev-MyRecipes',
      github: 'https://github.com/Zhengda-Huang/Mobile-Dev-MyRecipes'
    },  ];

    export const contacts = [
      {
        type: 'Location',
        data: "Boston, MA"
      },
      {
        type: 'Email',
        data: "huangzhengda1314@gmail.com"
      },
      {
        type: 'Phone',
        data: "646-920-9986"
      },
    ]

    export const gallery = [
      { img: '/gallery/pic1.jpg' },
      { img: '/gallery/pic2.jpg' },
      { img: '/gallery/pic3.jpg' },
      { img: '/gallery/pic4.jpg' },
      { img: '/gallery/pic5.jpg' },
      { img: '/gallery/pic6.jpg' },
      { img: '/gallery/pic7.jpg' },
      { img: '/gallery/pic8.jpg' },
      { img: '/gallery/pic9.jpg' },
      { img: '/gallery/pic10.jpg' },
      { img: '/gallery/pic11.jpg' },
      { img: '/gallery/pic12.jpg' },
      { img: '/gallery/pic13.jpg' },
      { img: '/gallery/pic14.jpg' },
      { img: '/gallery/pic15.jpg' },
      { img: '/gallery/pic16.jpg' },
      { img: '/gallery/pic17.jpg' },
      { img: '/gallery/pic18.jpg' },
      { img: '/gallery/pic19.jpg' },
      { img: '/gallery/pic20.jpg' },
      { img: '/gallery/pic21.jpg' },
      { img: '/gallery/pic22.jpg' },
      { img: '/gallery/pic23.jpg' },
      { img: '/gallery/pic24.jpg' },
      { img: '/gallery/pic25.jpg' },
      { img: '/gallery/pic26.jpg' },
      { img: '/gallery/pic27.jpg' },
      { img: '/gallery/pic28.jpg' },
      { img: '/gallery/pic29.jpg' },
      { img: '/gallery/pic30.jpg' },
      { img: '/gallery/pic31.jpg' },
      { img: '/gallery/pic32.jpg' },
      { img: '/gallery/pic33.jpg' },
      { img: '/gallery/pic34.jpg' },
      { img: '/gallery/pic35.jpg' },
      { img: '/gallery/pic36.jpg' },
      { img: '/gallery/pic37.JPG' },
      { img: '/gallery/pic38.JPG' },
      { img: '/gallery/pic39.JPG' },
      { img: '/gallery/pic40.JPG' },
      { img: '/gallery/pic41.JPG' },
      { img: '/gallery/pic42.JPG' },
      { img: '/gallery/pic43.JPG' },
      { img: '/gallery/pic44.JPG' },
      { img: '/gallery/pic45.JPG' },
      { img: '/gallery/pic46.JPG' },
      { img: '/gallery/pic47.JPG' },
      { img: '/gallery/pic48.JPG' },
      { img: '/gallery/pic49.JPG' },
      { img: '/gallery/pic50.JPG' },
      { img: '/gallery/pic51.JPG' },
      { img: '/gallery/pic52.JPG' },
      { img: '/gallery/pic53.JPG' }
    ];
    
    
    
    
  