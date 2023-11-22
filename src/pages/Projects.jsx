import ProjectsList from "../components/ProjectsList";

const projectData = [
  {
    projectId: 1,
    projectName: "Forkify App",
    techStack: "HTML, CSS, JS",
    image: "./projects/Forkify.png",
    link: "https://forkify-treats.netlify.app/",
    github: "https://github.com/Ganadhish7/forkify-app",
  },
  {
    projectId: 2,
    projectName: "Mapty App",
    techStack: "HTML, CSS, JS",
    image: "./projects/Mapty.png",
    link: "https://my-workout-map.netlify.app/",
    github: "https://github.com/Ganadhish7/mapty",
  },
  {
    projectId: 3,
    projectName: "Personal Portfolio",
    techStack: "ReactJS ,Tailwind CSS",
    image: "./projects/Portfolio.png",
    link: "https://ganadhish-m-portfolio.netlify.app/",
    github: "https://github.com/Ganadhish7/updated-portfolio",
  },
  {
    projectId: 4,
    projectName: "Fast React Pizza",
    techStack: "ReactJS, Redux, Tailwind CSS",
    image: "./projects/React pizza.png",
    link: "https://react-pizza-peach.vercel.app/",
    github: "https://github.com/Ganadhish7/React-Pizza",
  },
  {
    projectId: 5,
    projectName: "React Quiz",
    techStack: "ReactJS",
    image: "./projects/react-quiz.png",
    link: "https://react-quiz-pi-five.vercel.app/",
    github: "https://github.com/Ganadhish7/react-quiz",
  },
  {
    projectId: 6,
    projectName: "Worldwise",
    techStack: "ReactJS ,React Router",
    image: "./projects/Worldwise.png",
    link: "https://worldwise-app-beta.vercel.app/",
    github: "https://github.com/Ganadhish7/worldwise-app",
  },
];

function Projects() {
  return (
    <>
      <section
        name="section-1"
        className=" flex min-h-screen justify-center p-20 text-center"
      >
        <div className=" container mx-auto">
          <h1 className="mb-4 text-3xl font-thin uppercase text-slate-500">
            Projects
          </h1>
          <div className=" flex flex-wrap justify-center">
            {projectData.map((project, i) => (
              <ul>
                <ProjectsList project={project} key={i} index={i} />
              </ul>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;
