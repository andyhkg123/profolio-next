import React from "react";

const Past = () => {
  return (
    <div className="p-4">
      <div className="flex flex-col items-center">
        <div className="flex-col mb-4 lg:mb-0 lg:mr-10 text-center">
          <div
            grid
            place-content-center
            gap-2
            bg-green-300
            px-8
            py-24
            text-black
          ></div>

          <br />
          <div>
            <span className="text-2xl typewriter bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
              Education
            </span>
          </div>
          <br />
        </div>
        <div className="education-container">
          <div className="mb-6">
            <h3 className="text-xl font-semibold">
              IBM, IBM IT Scrum Master Certificate
            </h3>
            <ul className="list-disc list-inside ml-4">
              <li>
                Completed training in Agile methodologies, Scrum practices,
                DevOps, and software engineering, culminating in a capstone
                project and preparation for Certified Scrum Master (CSM)
                certification.
              </li>
            </ul>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.coursera.org/account/accomplishments/specialization/NZWG574XG3H8"
            >
              <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                <svg class="fill-current w-4 h-4 mr-2" viewBox="0 0 20 20">
                  <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
                </svg>
                <span>Online Certificate</span>
              </button>
            </a>

            <p className="text-gray-600">Sep 2024</p>
          </div>
          <div className="mb-6">
            <h3 className="text-xl font-semibold">
              Google, Google Project Management Certificate
            </h3>
            <ul className="list-disc list-inside ml-4">
              <li>
                Completed training in project management fundamentals, including
                project initiation, execution, planning, and Agile
                methodologies.
              </li>
            </ul>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.coursera.org/account/accomplishments/specialization/9RU3XT4KE0QB"
            >
              <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                <svg class="fill-current w-4 h-4 mr-2" viewBox="0 0 20 20">
                  <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
                </svg>
                <span>Online Certificate</span>
              </button>
            </a>

            <p className="text-gray-600">Sep 2024</p>
          </div>
          <div className="mb-6">
            <h3 className="text-xl font-semibold">
              Generation Bootcamp Junior Full Stack Developer
            </h3>
            <ul className="list-disc list-inside ml-4">
              <li>
                Learned knowledge in Agile, Scrum, different project management
                methodologies such as waterfall, agile, and utilized JIRA in
                group projects.
              </li>
              <li>
                Developed responsive web applications using HTML, CSS,
                JavaScript,TypeScript, React, and NodeJs, enhancing user
                experience and interface design.
              </li>
              <li>
                Built single-page applications with React, ensuring efficient
                and maintainable code.
              </li>
              <li>
                Collaborated with team members using Git for version control,
                demonstrating strong teamwork and project management skills.
              </li>
              <li>
                Created a Chrome Extension for weather and currency applications
                with API fetching.
              </li>
              <li>
                Created and deployed an MBTI Dating web application on Vercel
                with Stripe payment, User Login system with React as Front End,
                NodeJs, and MongoDB as Backend & Database.
              </li>
            </ul>
            <p className="text-gray-600">May 2024 – Aug 2024</p>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold">
              University Of Helsinki, Finland , JAVA PROGRAMMING I, JAVA
              PROGRAMMING II Courses
            </h3>
            <ul className="list-disc list-inside ml-4">
              <li>
                Learned Object-Oriented Programming (OOP) concepts such as
                classes, objects, inheritance, polymorphism, encapsulation, and
                abstraction.
              </li>
              <li>
                Developed a solid understanding of Java syntax and semantics,
                including data types, operators, control structures, and
                exception handling.
              </li>
              <li>
                Worked with Java Collections Framework, including lists, sets,
                maps, and queues.
              </li>
              <li>
                Implemented various algorithms and data structures, such as
                sorting algorithms, linked lists, stacks, and queues.
              </li>
            </ul>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://certificates.mooc.fi/validate/zsj1lh75zp"
            >
              <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                <svg class="fill-current w-4 h-4 mr-2" viewBox="0 0 20 20">
                  <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
                </svg>
                <span>Online Certificate</span>
              </button>
            </a>

            <p className="text-gray-600">2023-2024</p>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold">
              University of Huddersfield, UK , Bachelor of Construction Project
              Management (1st Class Honors)
            </h3>
            <p>University of Huddersfield, studied in UK</p>
            <p className="text-gray-600">Aug 2021</p>
            <p className="text-gray-600">(CIOB/RICS Recognized)</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Past;
