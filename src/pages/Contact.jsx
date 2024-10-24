import React from "react";
import Github from "../assets/github.png";
import Linkedin from "../assets/linkedin.png";
import Image from "next/image";

const Contact = () => {
  return (
    <div>
      <br />
      <div className="flex justify-center items-center">
        <a
          className="flex justify-center items-center"
          href="https://github.com/andyhkg123"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            className="text-center w-1/4 h-1/4"
            src={Github}
            alt="Github"
          />
        </a>
      </div>
      <br />
      <div className="text-center">Github</div>
      <br />
      <br />
      <br />
      <div className="flex justify-center items-center">
        <a
          className="flex justify-center items-center"
          href="https://www.linkedin.com/in/andy-w-339368145/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            className="text-center w-1/4 h-1/4"
            href="https://www.linkedin.com/in/andy-w-339368145/"
            src={Linkedin}
            alt="Linkedin"
          />
        </a>
      </div>
      <div className="text-center">Linkedin</div>
      <br></br>
      <div className="text-center">Email: andy.wongtszkiu@gmail.com</div>
    </div>
  );
};

export default Contact;
