import { useState } from "react";
import ProjectModal from "./ProjectModal";

function ProjectsList({ project, index }) {
  const [modal, setModal] = useState(false);

  function handleModal() {
    setModal(true);
  }

  function closeModal() {
    setModal(false);
  }

  return (
    <>
      <div className=" m-4 w-full p-4 ">
        <li
          key={index}
          onClick={handleModal}
          className=" h-52 w-56 cursor-pointer rounded-md 
        bg-blue-100 px-7 py-8 text-center text-slate-500 drop-shadow-2xl 
        transition duration-200 ease-in-out hover:scale-105 md:w-96 "
        >
          <strong>{project.projectName}</strong>
          <p>{project.techStack}</p>
          <img
            className=" drop-shadow-2xl"
            src={project.image}
            alt={project.projectName}
          />
        </li>
      </div>

      <ProjectModal modal={modal} closeModal={closeModal}>
        <div className=" relative h-60 w-52 sm:h-96 sm:w-96">
          <button
            className=" absolute right-0 top-0 rounded font-bold text-white"
            onClick={closeModal}
          >
            ❌
          </button>
          <h1 className=" mb-4 text-2xl font-semibold">
            {project.projectName}
          </h1>
          <p>{project.techStack}</p>
          <img
            className=" drop-shadow-2xl"
            src={project.image}
            alt={project.projectName}
          />
          <br />
          <a
            className=" cursor-pointer"
            href={project.link}
            target="_blank"
            rel="noreferrer"
          >
            &rarr; Demo here
          </a>

          <br />
          <a href={project.github} target="_blank" rel="noreferrer">
            &rarr; GitHub Link
          </a>
        </div>
      </ProjectModal>
    </>
  );
}

export default ProjectsList;
