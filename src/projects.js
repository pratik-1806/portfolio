const projects = [
    {
      id:1,
      image: "e Library.png", // Replace with actual project image URL
      title: "E Library Application",
      description: `The E Library Application is a comprehensive digital library management system built with Angular 17 and Tailwind CSS. It features user authentication (register and login), a dynamic navbar that displays user-specific information once logged in, and a complete book management module. Users can add new books (including cover image and PDF file uploads), view a list of available books, see detailed information for each book, update book details, and delete books with confirmation prompts. The project leverages nested routing for a clean organization of book-related pages, and includes a global loading indicator to improve the user experience during data fetches. The backend is implemented using Node.js and Express. For file uploading used Multer and Cloudinary, while MongoDB is used for data storage.`,
      frontend: "Angular 17, Tailwind CSS, Standalone ",
      backend: "Node.js, Express, Multer, Cloudinary",
      database: "MongoDB",
      github: "https://github.com/pratik-1806/eBook-Library",
      liveDemo: "https://ebook-library-git-main-pratiks-projects-df6b6dce.vercel.app/login"
    },
    {
        id:2,
      image: "blog-application.png", // Replace with actual project image URL
      title: "Project Two",
      description: "A brief description of Project Two.",
      frontend: "Vue.js, Bootstrap",
      backend: "Django, Python",
      database: "PostgreSQL",
      github: "https://github.com/yourusername/project-two",
      liveDemo: "https://projecttwo-demo.com"
    }
  ];

  export default projects;


  
