import React from "react";
import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";

const Write = () => {
  const { currentUser } = useContext(AuthContext);
  const [comment, setComment] = useState({
    email_blog: currentUser ? currentUser.email : "",
    uid: currentUser ? currentUser.userid : "",
    fullname_blog: currentUser ? currentUser.fullname : "",
    title: "",
    content: "",
  });
  const [isLoading, setIsLoading] = useState(false); // Added loading state

  const handleChange = (e) => {
    setComment((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    console.log(comment);
    console.log(currentUser);
  };

  const handleClick = async (event) => {
    event.preventDefault();
    setIsLoading(true); // Set loading to true when request starts
    try {
      const res = await axios.post("/api/posts/addpost", comment, {
        withCredentials: true,
      });
      console.log(res.data);
      window.location.reload();
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false); // Set loading to false when request ends
    }
  };

  return (
    <div className="relative">
      <form className="bg-white p-4 rounded-lg shadow-md">
        <h3 className="text-lg font-bold mb-2">Add a comment</h3>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="title">
            Title
          </label>
          <input
            name="title"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="title"
            type="text"
            placeholder="Enter title"
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="content"
          >
            Comment
          </label>
          <textarea
            name="content"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="content"
            rows="3"
            placeholder="Enter your comment"
            onChange={handleChange}
          ></textarea>
        </div>
        <button
          className="bg-cyan-500 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
          onClick={handleClick}
          disabled={isLoading} // Disable button while loading
        >
          {isLoading ? "Submitting..." : "Submit"}
        </button>
      </form>
      {isLoading && (
        <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-75">
          <div className="text-center">Loading...</div>
        </div>
      )}
    </div>
  );
};

export default Write;
