// pages/post/[id].jsx
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Image from "next/image"; // Add this import

const Project = () => {
  const [project, setProject] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    async function fetchData() {
      //   const apiUrl = process.env.NEXT_PUBLIC_BACKEND_URL; // Assuming you have an environment variable
      try {
        const res = await axios.get(`/api/projects/${id}`);
        setProject(res.data);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    }
    if (id) fetchData(); // Ensure fetchData is called only when id is available
  }, [id]);

  if (isLoading) {
    return <div className="text-center">Loading...</div>;
  }

  return (
    <>
      <h1 className="text-center mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl ">
        {project.name}
      </h1>
      <p className="text-center mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 ">
        {project.desc}
      </p>
      <br />
      <div className="flex flex-wrap justify-center items-center">
        {project.display_one && (
          <div className="flex justify-center items-center h-screen">
            <Image // Change <img> to <Image>
              className="text-center m-0"
              src={project.display_one}
              alt="Project Display"
              layout="responsive" // Optional: Adjust layout as needed
              width={720} // Set width
              height={680} // Set height
            />
          </div>
        )}
        {project.display_two && (
          <div className="flex justify-center items-center h-screen">
            <Image // Change <img> to <Image>
              className="text-center m-0"
              src={project.display_two}
              alt="Project Display"
              layout="responsive" // Optional: Adjust layout as needed
              width={720} // Set width
              height={680} // Set height
            />
          </div>
        )}
        {project.display_three && (
          <div className="flex justify-center items-center h-screen">
            <Image // Change <img> to <Image>
              className="text-center m-0"
              src={project.display_three}
              alt="Project Display"
              layout="responsive" // Optional: Adjust layout as needed
              width={720} // Set width
              height={680} // Set height
            />
          </div>
        )}
        {project.display_four && (
          <div className="flex justify-center items-center h-screen">
            <Image // Change <img> to <Image>
              className="text-center m-0"
              src={project.display_four}
              alt="Project Display"
              layout="responsive" // Optional: Adjust layout as needed
              width={720} // Set width
              height={680} // Set height
            />
          </div>
        )}
        {project.video_link && (
          <div className="flex justify-center items-center h-screen">
            <video src={project.video_link} width="720" height="680" controls />
          </div>
        )}
      </div>
      {project.git_link && (
        <div className="flex justify-center">
          <a
            className="flex justify-center items-center bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 rounded-full"
            href={project.git_link}
          >
            Click this link to Github
          </a>
        </div>
      )}
      <br />
      {project.git_back_link && (
        <div className="flex justify-center">
          <a
            className="flex justify-center items-center bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 rounded-full"
            href={project.git_back_link}
          >
            Click this link to Github (backend)
          </a>
        </div>
      )}
      <br />
      {project.deployment && (
        <div className="flex justify-center">
          <a
            className="flex justify-center items-center bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 rounded-full"
            href={project.deployment}
          >
            Click this link to deployment
          </a>
        </div>
      )}
    </>
  );
};

export default Project;
