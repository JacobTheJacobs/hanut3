import Axios from "axios";
import React, { useState } from "react";
import "./style.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useHistory, Link } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [name, setName] = useState("");
  const history = useHistory();

  const onSubmit = async () => {
    if (password !== password2) {
      return toast.error("Passwords don't match");
    }
    const headers = {
      "Content-Type": "application/json",
    };

    const data = {
      name: name,
      email: email,
      password: password,
    };
    try {
      await axios
        .post("http://localhost:5000/users/register", data, headers)
        .then((response) => {
          redirectToLogin();
        })
        .catch((error) => {
          error.response.data.errors.map((err) => toast.error(err.msg));
        });
    } catch (error) {
      console.log(error);
    }
  };

  const redirectToLogin = () => {
    history.push("/signin");
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
              placeholder="שם"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <input
              type="text"
              id="login"
              className="fadeIn second"
              name="login"
              placeholder="מייל"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              id="login"
              className="fadeIn second"
              name="login"
              placeholder="סיסמא"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              type="password"
              id="password"
              className="fadeIn third"
              name="login"
              placeholder="אשר סיסמא"
              value={password2}
              onChange={(e) => setPassword2(e.target.value)}
            />

            <input
              type="button"
              onClick={() => onSubmit()}
              className="fadeIn fourth"
              value="הירשם"
            />
          </form>

          <div id="formFooter">
            <br></br>

            <Link className="underlineHover" to="/signin">
              יש לי כבר משתמש
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
