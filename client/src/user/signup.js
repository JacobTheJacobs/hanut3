import Axios from "axios";
import React, { useState } from "react";
import "./style.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [name, setName] = useState("");

  const onSubmit = () => {
    const headers = {
      "Content-Type": "application/json",
    };

    const data = {
      name: "",
      email: "",
      password: "",
    };

    axios
      .post("http://localhost:5000/users/register", data)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error.response.data.errors);

        const errorArray = [];
        error.response.data.errors.map((err) => toast(err.msg));
        return errorArray;
      });
  };

  return (
    <div>
      <div className="wrapper fadeInDown">
        <div id="formContent">
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />

          <div className="fadeIn first">
            <img
              src="https://library.kissclipart.com/20181001/wbw/kissclipart-gsmnet-ro-clipart-computer-icons-user-avatar-4898c5072537d6e2.png"
              id="icon"
              alt="User Icon"
            />
          </div>

          <form>
            <input
              type="text"
              id="login"
              className="fadeIn second"
              name="login"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <input
              type="text"
              id="login"
              className="fadeIn second"
              name="login"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="text"
              id="login"
              className="fadeIn second"
              name="login"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              type="text"
              id="password"
              className="fadeIn third"
              name="login"
              placeholder="Confirm Password"
              value={password2}
              onChange={(e) => setPassword2(e.target.value)}
            />

            <input
              type="button"
              onClick={() => onSubmit()}
              className="fadeIn fourth"
              value="Log In"
            />
          </form>

          <div id="formFooter">
            <a className="underlineHover" href="#">
              Forgot Password?
            </a>
            <br></br>
            <br></br>
            <a className="underlineHover" href="#">
              Already have an account?
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
