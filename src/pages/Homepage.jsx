import Contact from "./Contact";
import Projects from "./Projects";
import Resume from "./Resume";
import Skills from "./Skills";

function Homepage() {
  return (
    <>
      <section className=" flex min-h-screen flex-col items-center text-center">
        <div>
          <div
            className=" mt-32
          text-center text-5xl tracking-widest text-slate-600 transition-all delay-200 md:text-8xl"
          >
            <p className=" text-center ">Hello</p>
            <h3 className=" uppercase">I'm Ganadhish </h3>
            <h3 className=" font-thin uppercase italic  ">A Frontend</h3>
            <p>Developer</p>
          </div>
        </div>
      </section>
      <Projects />
      <Skills />
      <Resume />
      <Contact />
    </>
  );
}

export default Homepage;
