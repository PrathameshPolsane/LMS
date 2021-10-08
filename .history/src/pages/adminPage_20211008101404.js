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
        classN="
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
          classN="hidden w-full md:flex  md:items-center md:w-auto "
          id="menu"
        >
          <ul
            classN="
             pt-4
             text-base text-gray-700
             md:flex
             md:justify-between 
             md:pt-0"
          >
            <li>
              <a classN="md:p-4 py-2 block hover:text-purple-400" href="#">
                Features
              </a>
            </li>
            <li>
              <a classN="md:p-4 py-2 block hover:text-purple-400" href="#">
                Pricing
              </a>
            </li>
            <li>
              <a classN="md:p-4 py-2 block hover:text-purple-400" href="#">
                Customers
              </a>
            </li>
            <li>
              <a classN="md:p-4 py-2 block hover:text-purple-400" href="#">
                Blog
              </a>
            </li>
            <li>
              <a
                classN="md:p-4 py-2 block hover:text-purple-400 text-purple-500"
                href="#"
              >
                Sign Up
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default withRouter(AdminPage);
