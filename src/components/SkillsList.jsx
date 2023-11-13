function SkillsList({ skill }) {
  return (
    <div className=" px-3 py-3">
      <li className=" gap-5 text-center font-bold text-slate-500 drop-shadow-2xl ">
        <img src={skill.logo} alt={skill.skillName} />
        <h3 className=" uppercase">{skill.skillName}</h3>
      </li>
    </div>
  );
}

export default SkillsList;
