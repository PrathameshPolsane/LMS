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
              <span
                className="md:p-4 py-2 block hover:text-purple-400 text-purple-500"
                href="#"
                onClick={handleSubmit}
              >
                Logout
              </span>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default withRouter(AdminPage);
