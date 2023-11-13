import SkillsList from "../components/SkillsList";

const techSkills = [
  {
    skillName: "HTML5",
    logo: "./skills/html.png",
  },
  {
    skillName: "CSS3",
    logo: "./skills/css.png",
  },
  {
    skillName: "JavaScript",
    logo: "./skills/js.png",
  },
  {
    skillName: "ReactJS",
    logo: "./skills/react.png",
  },
  {
    skillName: "Tailwind CSS",
    logo: "./skills/Tailwind.png",
  },
  {
    skillName: "Figma",
    logo: "./skills/figma.png",
  },
];

function Skills() {
  return (
    <section
      name="section-2"
      className=" mt-5 flex min-h-screen justify-center"
    >
      <div>
        <div className="text-center ">
          <h3 className=" mb-4 text-3xl font-thin uppercase text-slate-500">
            My Skills
          </h3>
        </div>
        <div>
          <ul className=" ">
            {techSkills.map((skill) => (
              <SkillsList skill={skill} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Skills;
