function Footer() {
  return (
    <footer className=" flex justify-center  bg-blue-400 leading-loose text-slate-600">
      <div className="">
        <div className=" p-10 text-center">
          <strong className="uppercase">About</strong>
          <div className="">
            <p>
              Welcome to my portfolio! I'm a Frontend web developer with a passion for
              crafting immersive and user-friendly web experiences. Through a
              blend of design and technical expertise, I transform concepts into
              visually stunning and seamlessly functional websites. Explore my
              projects of Web development in action.
            </p>
          </div>
        </div>
        <div className="text-center leading-[4rem]  ">
          <strong className=" uppercase">Get in touch</strong>
          <div className=" p-5">
            <ul className="flex justify-center space-x-1 md:space-x-10">
              <li className=" rounded-full border-4 bg-blue-500">
                <a
                  href="https://www.instagram.com/ganadhish.mardikar/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className=" h-20 w-20 "
                    src="./Socials/instagram.png"
                    alt="gmail"
                  />
                </a>
              </li>
              <li className="rounded-full border-4 bg-blue-500">
                <a
                  href="https://twitter.com/ganadhish_m"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="h-20 w-20"
                    src="./Socials/twitter.png"
                    alt="twitter"
                  />
                </a>
              </li>
              <li className="rounded-full border-4 bg-blue-500">
                <a
                  href="https://in.pinterest.com/ganadhishmardikar7160/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="h-20 w-20"
                    src="./Socials/pinterest.png"
                    alt="pinterest"
                  />
                </a>
              </li>
              <li className="rounded-full border-4 bg-blue-500">
                <a
                  href="https://github.com/Ganadhish7"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="h-20 w-20"
                    src="./Socials/github.png"
                    alt="pinterest"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className=" p-4">
          <p className=" text-center text-xs text-slate-600">
            Copyright ©️{new Date().getFullYear()} Developed by Ganadhish
            Mardikar
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
