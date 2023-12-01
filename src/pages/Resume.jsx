import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleDown } from "@fortawesome/free-solid-svg-icons";

function Resume() {
  const handleDownloadPdf = () => {
    const pdfPath = process.env.PUBLIC_URL + "./Ganadhish-Mardikar.pdf";
    window.open(pdfPath, "_blank");
  };

  return (
    <section
      name="section-3"
      className=" flex min-h-screen justify-center p-10 "
    >
      <div className=" md:w-[40rem]">
        <h3 className=" mb-4 text-center text-3xl font-thin uppercase text-slate-400">
          Resume
        </h3>
        <div className=" mb-8">
          <ul className=" ">
            <li
              className=" rounded-3xl bg-blue-100 
             p-5 text-center text-slate-600 drop-shadow-2xl  "
            >
              <strong className=" uppercase tracking-widest">
                Under Graduation
              </strong>
              <p className=" text-sky-500">
                <strong>2016-2019</strong>
              </p>
              <p className=" font-bold uppercase text-gray-600">
                Diploma in Electronics and Telecommunication Engineering.
              </p>
              <p className="  font-normal text-slate-700">
                Shriram Institute of Engineering and Technology, Paniv, Akluj.
              </p>
              <p>
                I completed a three-year diploma program in Electronics and
                Telecommunications. This comprehensive program equipped me with
                a solid foundation in electronics engineering principles,
                telecommunications systems, and practical hands-on experience.
                Throughout this diploma, I gained proficiency in designing and
                troubleshooting electronic circuits, understanding
                telecommunications networks, and applying key concepts in
                real-world projects
              </p>
            </li>
            <br />
            <li
              className="  rounded-3xl bg-blue-100  p-5
             text-center text-slate-600 drop-shadow-2xl "
            >
              <strong className="uppercase tracking-widest">Graduation</strong>
              <p>
                <strong className=" text-sky-500">2019-2022</strong>
              </p>
              <p className=" font-bold uppercase text-gray-600">
                Electronics and Telecommunication Engineering.
              </p>
              <p className="  font-normal text-slate-700">
                NBN Sinhgad School of Engineering,Pune
              </p>
              <p>
                In addition to my diploma, I pursued further academic excellence
                by completing a three-year Bachelor's degree program in
                Electronics and Telecommunications. This program expanded upon
                my foundational knowledge and provided me with an in-depth
                understanding of advanced topics in electronics engineering,
                telecommunication technologies and Programming.
              </p>
            </li>
            <br />
            <li
              className="  rounded-3xl bg-blue-100 p-4
             text-center text-slate-600 drop-shadow-2xl "
            >
              <strong className="uppercase tracking-widest">
                Post Graduation
              </strong>
              <p>
                <strong className=" text-sky-500">2022-Pursuing</strong>
              </p>
              <p className=" font-semibold uppercase text-gray-600">
                MBA in Blockchain Management
              </p>
              <p className="  font-normal text-slate-700">
                D.Y Patil University, Pune.
              </p>
              <p>
                I am currently in the final year of pursuing an MBA in
                Blockchain Management, with an expected completion date in 2024.
                This specialized program has provided me with a comprehensive
                understanding of blockchain technology and its strategic
                applications in the business world. Throughout the course, I
                have gained valuable insights into blockchain fundamentals,
                cryptocurrency ecosystems, smart contract development, and the
                strategic integration of blockchain solutions. I look forward to
                leveraging this knowledge to drive innovation and efficiency in
                the evolving blockchain landscape
              </p>
            </li>
          </ul>
        </div>
        <div className="">
          <p
            className="  mb-5 text-center text-3xl 
          font-thin uppercase text-slate-400  "
          >
            Work Experience
          </p>
          <div className=" mb-8 ">
            <ul className="">
              <li
                className="  rounded-3xl bg-blue-100 
              p-5 text-center text-slate-600 drop-shadow-2xl"
              >
                <p className="  font-bold uppercase tracking-widest">
                  Internship
                </p>
                <p className=" font-semibold uppercase text-gray-600">
                  Cognizant Technology Solutions
                </p>
                <p className=" text-sky-500">
                  <strong>January 2022 - May 2022</strong>
                </p>
                <p>Acquired knowledge of web design Principles.</p>
                <p>
                  Gained practical experience with relevant Software and
                  Technology.
                </p>
              </li>
              <br />
              <li
                className="  rounded-3xl bg-blue-100 p-5
               text-center text-slate-600 drop-shadow-2xl"
              >
                <p className=" font-bold uppercase tracking-widest">
                  Programmer Analyst
                </p>
                <p className=" font-semibold uppercase text-gray-600">
                  Cognizant Technology Solutions
                </p>
                <p className=" text-sky-500">
                  <strong>July 2022 - March 2023</strong>
                </p>
                <p>
                  Developed and maintained user-facing websites using HTML, CSS,
                  JavaScript and React JS.
                </p>
                <p>
                  Created UI components with reusable codes for a better user
                  experience.
                </p>
                <p>
                  Integrated third-party APIs into existing applications for
                  improved functionality.
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="  flex justify-center">
          <button
            className="  rounded-full bg-blue-200 p-3 font-semibold
            uppercase tracking-wide text-slate-400  hover:bg-blue-300
           "
            onClick={handleDownloadPdf}
          >
            download{" "}
            <FontAwesomeIcon icon={faCircleDown} style={{ color: "#4781e6" }} />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Resume;
