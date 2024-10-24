import React, { useState, useContext } from "react";
import { useRouter } from "next/router";
import { AuthContext } from "../context/AuthContext.jsx"; // Adjust the path as needed

const Login = () => {
  const router = useRouter();
  const { login } = useContext(AuthContext);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false); // Add loading state
  const [errMsg, setErrMsg] = useState(""); // Add error message state

  const handleChange = (e) => {
    setUser((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    console.log(user);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true); // Start loading
    try {
      await login(user);
      router.push("/"); // Use `router.push` instead of `navigate`
      setErrMsg(""); // Clear error message on success
    } catch (error) {
      setErrMsg("Login failed. Please check your email and password."); // Set error message
      console.log(error);
    } finally {
      setIsLoading(false); // End loading
    }
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-7 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Log in to your account
          </h2>
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          {isLoading && (
            <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-75">
              <div className="text-center">Loading...</div>
            </div>
          )}
          <form action="#" method="POST" className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={user.email}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  autoComplete="current-password"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={user.password}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                onClick={handleSubmit}
                disabled={isLoading} // Disable button while loading
              >
                {isLoading ? "Logging in..." : "Log in"}
              </button>
            </div>
            {errMsg && (
              <div className="text-red-600 mt-4 text-center">{errMsg}</div>
            )}{" "}
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
