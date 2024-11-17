import React from "react";
import ReactIcon from "../assets/ReactIcon.svg";
import TailwindIcon from "../assets/TailwindIcon.svg";
import nodeJSIcon from "../assets/nodeJSIcon.svg";
import MySQLIcon from "../assets/MySQLIcon.svg";
import MongoDBIcon from "../assets/MongoDBIcon.svg";
import JavascriptIcon from "../assets/JavascriptIcon.svg";
import JavaIcon from "../assets/JavaIcon.svg";
import htmlIcon from "../assets/htmlIcon.svg";
import cssIcon from "../assets/cssIcon.svg";
import bootstrapIcon from "../assets/bootstrapIcon.svg";
import Image from "next/image";
import spring from "../assets/spring.svg";
import typescript from "../assets/typescript.svg";

const Skills = () => {
  return (
    <div>
      <div className="text-center item-center justify-center ">
        <span className="text-2xl typewriter bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
          Skills
        </span>
      </div>

      <div className="flex flex-wrap justify-center ">
        <div className="m-3">
          <Image className="zoom m-3" src={ReactIcon}></Image>
          <div className="text-center">React</div>
        </div>
        <div className="m-3">
          <Image className="zoom m-3" src={TailwindIcon}></Image>
          <div className="text-center">Tailwind</div>
        </div>
        <div className="m-3">
          <Image className="zoom m-3" src={JavascriptIcon}></Image>
          <div className="text-center">Javascript</div>
        </div>
        <div className="m-3">
          <Image className="zoom m-3" src={typescript}></Image>
          <div className="text-center">Typescript</div>
        </div>
        <div className="m-3">
          <Image className="zoom m-3" src={JavaIcon}></Image>
          <div className="text-center">Java</div>
        </div>
        <div className="m-3">
          <Image className="zoom m-3 mx-auto" src={spring}></Image>
          <div className="text-center">Springboot(Web API)</div>
        </div>
        <div className="m-3">
          <Image className="zoom m-3" src={nodeJSIcon}></Image>
          <div className="text-center">NodeJS</div>
        </div>
        <div className="m-3">
          <Image className="zoom m-3" src={MySQLIcon}></Image>
          <div className="text-center">MySQL</div>
        </div>
        <div className="m-3">
          <Image className="zoom m-3" src={MongoDBIcon}></Image>
          <div className="text-center">MongoDB</div>
        </div>
        <div className="m-3">
          <Image className="zoom m-3" src={htmlIcon}></Image>
          <div className="text-center">HTML5</div>
        </div>
        <div className="m-3">
          <Image className="zoom m-3" src={cssIcon}></Image>
          <div className="text-center">CSS</div>
        </div>
        <div className="m-3">
          <Image className="zoom m-3" src={bootstrapIcon}></Image>
          <div className="text-center">Bootstrap</div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
