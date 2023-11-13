import Contact from "./Contact";
import Projects from "./Projects";
import Resume from "./Resume";
import Skills from "./Skills";

//bg-gradient-to-l from-violet-500 to-pink-500

function Homepage() {
  return (
    <>
      <section className=" flex min-h-screen flex-col items-center text-center">
        <div className="">
          <div
            className=" mt-16
          text-center text-5xl tracking-widest text-slate-600 transition-all delay-200 md:text-8xl"
          >
            <p className=" text-center ">Hello</p>
            <h3 className=" uppercase">I'm Ganadhish </h3>
            <h3 className=" font-thin uppercase italic ">A Frontend</h3>
            <p className="">Developer</p>
          </div>
          {/* <div className=" px-10 py-10">
            <img
              className=" h-40 w-40 rounded-md sm:h-96"
              src="IMG_1493 1.jpg"
              alt=""
            />
          </div> */}
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
