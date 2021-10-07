import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import AdminPage from "./adminPage";


function Base({ setIsAdmin, isAdmin }) {
  const [ph_number, setPhnumber] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const handleSubmit = () => {
    setIsAdmin(true);
  };
  const handleChange = (event) => {
    switch (event.target.id) {
      case "ph_number":
        setPhnumber(event.target.value);
        break;
      case "password":
        setPassword(event.target.value);
        break;
      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto p-8 flex">
      <div className="max-w-md w-full mx-auto">
        <h1 className="text-4xl text-center mb-12 font-thin">Admin Login</h1>

        <div className="bg-white rounded-lg overflow-hidden shadow-2xl">
          <div className="p-8">
            <form className="" method="" action="">
              <div className="mb-5">
                <label
                  htmlFor="ph_number"
                  className="block mb-2 text-sm font-medium text-gray-600"
                >
                  Phone no.
                </label>

                <input
                  type="text"
                  id="ph_number"
                  name="ph_number"
                  value={ph_number}
                  onChange={handleChange}
                  className="block w-full p-3 rounded bg-gray-200 border border-transparent focus:outline-none"
                />
              </div>

              <div className="mb-5">
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-600"
                >
                  Password
                </label>

                <input
                  type="text"
                  id="password"
                  name="password"
                  value={password}
                  onChange={handleChange}
                  className="block w-full p-3 rounded bg-gray-200 border border-transparent focus:outline-none"
                />
              </div>

              <button
                className="w-full p-3 mt-4 bg-indigo-600 text-white rounded shadow"
                onClick={handleSubmit}
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default Base;
