import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { useHistory } from "react-router-dom";
import { useState } from "react";
import ProtectedRoute from "./pages/ProtectedRoute";
import AdminPage from "./pages/adminPage";
import axios from "axios";

function App() {
  const history = useHistory();
  const [isAdmin, setIsAdmin] = useState(false);
  const [ph_number, setPhnumber] = useState("");
  const [password, setPassword] = useState("");
  const SESSION_DURATION = 1 * 3600 * 1000;

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios
      .post(`http://seriapp.pythonanywhere.com/api/signin/`, {
        phone_number: ph_number,
        password: password,
      })
      .then((res) => {
        const token = res.data.token;
        const expirationDate = new Date(
          new Date().getTime() + SESSION_DURATION
        );
        localStorage.setItem("token", token);
        localStorage.setItem("expirationDate", expirationDate);
        setIsAdmin(true);
        setph
        setPassword("")
        console.log(token);
        history.push("/Admin");
      })
      .catch((err) => {
        console.log(err);
      });
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
    <div className="center">
      <Switch>
        <Route exact path="/">
          <div className="container mx-auto p-8 flex">
            <div className="max-w-md w-full mx-auto">
              <h1 className="text-4xl text-center mb-12 font-thin">
                Admin Login
              </h1>

              <div className="bg-white rounded-lg overflow-hidden shadow-2xl">
                <div className="p-8">
                  <form className="">
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
                        type="password"
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
        </Route>
        <ProtectedRoute path="/Admin" Component={AdminPage} isAdmin={isAdmin} setIsAdmin={setIsAdmin} />;
      </Switch>
    </div>
  );
}

export default App;
