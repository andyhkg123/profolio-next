import React from "react";

const Footer = () => {
  return (
    <div>
      <footer class="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
        <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2024 <a class="hover:underline">Andy Wong Tsz Kiu™</a>. All Rights
            Reserved.
          </span>

          <a href="mailto:andy.wongtszkiu@gmail.com">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full text-center">
              Email: andy.wongtszkiu@gmail.com
            </button>
          </a>

          <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
            <li>
              <div href="#" class="hover:underline me-4 md:me-6">
                This profolio is created by NextJS & MongoDB
              </div>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
