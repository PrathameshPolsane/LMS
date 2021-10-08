import React from "react";
import { withRouter } from "react-router-dom";

function AdminPage({ isAdmin, setIsAdmin }) {
  console.log(localStorage.getItem("token"));
  const handleSubmit = () => {
    setIsAdmin(false);
    localStorage.removeItem("token");
    localStorage.removeItem("expirationDate");
  };

  return (
    <div>
      <header>
        <nav
          className="
         flex flex-wrap
         items-center
         justify-end
         w-full
         py-4
         md:py-0
         px-4
         text-lg text-gray-700
         bg-white
       "
        >
          <div
            className="hidden w-full md:flex  md:items-center md:w-auto "
            id="menu"
          >
            <ul
              className="
             pt-4
             text-base text-gray-700
             md:flex
             md:justify-between 
             md:pt-0"
            >
              <li>
                <span
                  className="md:p-4 py-2 block hover:text-purple-400"
                  href="#"
                >
                  Features
                </span>
              </li>
              <li>
                <span
                  className="md:p-4 py-2 block hover:text-purple-400"
                  href="#"
                >
                  Pricing
                </span>
              </li>
              <li>
                <span
                  className="md:p-4 py-2 block hover:text-purple-400"
                  href="#"
                >
                  Customers
                </span>
              </li>
              <li>
                <span
                  className="md:p-4 py-2 block hover:text-purple-400"
                  href="#"
                >
                  Blog
                </span>
              </li>
              <li>
                <button
                  className="md:p-4 py-2  block bg-purple-500 text-white cursor-pointer"
                  href="#"
                  onClick={handleSubmit}
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <div
        className=" flex
          justify-center
          items-center
          bg-grey-100
          mx-auto
          max-w-2xl
          rounded-lg
          my-16
          p-16"
      >
        <h1>This is a ADMIN PAGE</h1>
      </div>
    </div>
  );
}

export default withRouter(AdminPage);
