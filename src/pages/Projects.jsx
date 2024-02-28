import ProjectsList from "../components/ProjectsList";

const projectData = [
  {
    projectId: 1,
    projectName: "Forkify App",
    techStack: "HTML, CSS, JS",
    image:
      "https://ahzzrpxdlfrryjxgbpaf.supabase.co/storage/v1/object/sign/proj-images/Forkify.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwcm9qLWltYWdlcy9Gb3JraWZ5LnBuZyIsImlhdCI6MTcwMTI0NTc3OCwiZXhwIjoxNzMyNzgxNzc4fQ.Lu9WXPPNi2Jk7K7xMOT2FUt6OA4RLx7b7wziXqWIo6w&t=2023-11-29T08%3A16%3A17.898Z",
    link: "https://forkify-treats.netlify.app/",
    github: "https://github.com/Ganadhish7/forkify-app",
  },
  {
    projectId: 2,
    projectName: "Mapty App",
    techStack: "HTML, CSS, JS",
    image:
      "https://ahzzrpxdlfrryjxgbpaf.supabase.co/storage/v1/object/sign/proj-images/Mapty.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwcm9qLWltYWdlcy9NYXB0eS5wbmciLCJpYXQiOjE3MDEyNDU4NzAsImV4cCI6MTczMjc4MTg3MH0.FoGF1EaLEHPoKaqhJCtJriLB7vdTT7lMhUrfE61tHcY&t=2023-11-29T08%3A17%3A50.679Z",
    link: "https://my-workout-map.netlify.app/",
    github: "https://github.com/Ganadhish7/mapty",
  },
  {
    projectId: 3,
    projectName: "Portfolio",
    techStack: "ReactJS ,Tailwind CSS",
    image:
      "https://ahzzrpxdlfrryjxgbpaf.supabase.co/storage/v1/object/sign/proj-images/Portfolio.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwcm9qLWltYWdlcy9Qb3J0Zm9saW8ucG5nIiwiaWF0IjoxNzAxMjQ1ODk0LCJleHAiOjE3MzI3ODE4OTR9.yF2WOHUVZbs3xsJ8ZSrg8loHv1EEfCEcLjtKrP2Ton0&t=2023-11-29T08%3A18%3A14.015Z",
    link: "https://ganadhish-m-portfolio.netlify.app/",
    github: "https://github.com/Ganadhish7/updated-portfolio",
  },
  {
    projectId: 4,
    projectName: "Fast Pizza",
    techStack: "ReactJS, Redux, Tailwind CSS",
    image:
      "https://ahzzrpxdlfrryjxgbpaf.supabase.co/storage/v1/object/sign/proj-images/React%20pizza.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwcm9qLWltYWdlcy9SZWFjdCBwaXp6YS5wbmciLCJpYXQiOjE3MDEyNDU5MTIsImV4cCI6MTczMjc4MTkxMn0.iDzIN5WzWjH2olVxZdP1KF84tF72NEYyuixPwhe_NHo&t=2023-11-29T08%3A18%3A32.576Z",
    link: "https://react-pizza-peach.vercel.app/",
    github: "https://github.com/Ganadhish7/React-Pizza",
  },
  {
    projectId: 5,
    projectName: "React Quiz",
    techStack: "ReactJS",
    image:
      "https://ahzzrpxdlfrryjxgbpaf.supabase.co/storage/v1/object/sign/proj-images/react-quiz.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwcm9qLWltYWdlcy9yZWFjdC1xdWl6LnBuZyIsImlhdCI6MTcwMTI0NTkzMCwiZXhwIjoxNzMyNzgxOTMwfQ.KWOznoJFB9xUHInq6OIrhBaZdfwmmed6SqrWG7fQEGs&t=2023-11-29T08%3A18%3A49.878Z",
    link: "https://react-quiz-pi-five.vercel.app/",
    github: "https://github.com/Ganadhish7/react-quiz",
  },
  {
    projectId: 6,
    projectName: "Worldwise",
    techStack: "ReactJS ,React Router",
    image:
      "https://ahzzrpxdlfrryjxgbpaf.supabase.co/storage/v1/object/sign/proj-images/Worldwise.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwcm9qLWltYWdlcy9Xb3JsZHdpc2UucG5nIiwiaWF0IjoxNzAxMjQ1OTQ2LCJleHAiOjE3MzI3ODE5NDZ9.MqqUMI32DYuZauLSEvFhCHNoO3GhWddP6jBZ37tx4IM&t=2023-11-29T08%3A19%3A06.303Z",
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
            Web Projects
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
