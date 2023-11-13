import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faMobile,
  faEnvelope,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";
import ContactForm from "../components/ContactForm";

function Contact() {
  return (
    <>
      <section
        name="section-4"
        className=" mb-5 flex min-h-screen justify-center "
      >
        <div className=" container space-y-10 uppercase text-slate-500 md:w-[32rem]">
          <h3
            className="text-center text-3xl font-thin uppercase text-slate-500
               "
          >
            Contact me
          </h3>
          <div className=" flex flex-col justify-center md:flex-row  ">
            <div className="flex flex-col items-center p-4">
              {/* <img className=" h-10 w-10 " src="location.png" alt="address" /> */}
              <FontAwesomeIcon
                icon={faLocationDot}
                style={{ color: "#4284f5" }}
                size="2xl"
              />
              <h2 className=" font-bold">Address</h2>
              <p>Pune,Maharashtra</p>
            </div>
            <div className="flex flex-col items-center p-4">
              <FontAwesomeIcon
                icon={faMobile}
                style={{ color: "#5392fd" }}
                size="2xl"
              />
              <h4 className=" font-bold">Contact</h4>
              <p>+918956716111</p>
            </div>
            <div className="flex flex-col items-center p-4">
              <FontAwesomeIcon
                icon={faEnvelope}
                style={{ color: "#5f97f7" }}
                size="2xl"
              />
              <h4 className=" font-bold">Email Address</h4>
              <p className=" lowercase">ganadhishmardikar7160@gmail.com</p>
            </div>
            <div className="flex flex-col items-center p-4">
              <FontAwesomeIcon
                icon={faGlobe}
                style={{ color: "#6b9ef5" }}
                size="2xl"
              />
              <h4 className=" font-bold">Website</h4>
              <p>site.com</p>
            </div>
          </div>
          <div className=" flex justify-center rounded-md bg-blue-100 text-center ">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
