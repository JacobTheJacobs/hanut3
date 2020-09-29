import React, { useState, useContext } from "react";
import "./style.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useHistory, Link } from "react-router-dom";
import Cookies from "universal-cookie";
import { UserContext } from "../routes";

const SignIn = () => {
  const { state, dispatch } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const cookies = new Cookies();

  const onSubmit = () => {
    const headers = {
      "Content-Type": "application/json",
    };

    const data = {
      email: email,
      password: password,
    };

    axios
      .post("http://localhost:5000/users/login", data, headers)
      .then((response) => {
        console.log(response.data);
        cookies.set("-t", response.data.token, { path: "/" });
        cookies.set("-u", JSON.stringify(response.data.user), { path: "/" });
        dispatch({ type: "USER", payload: data.user });
        redirectToHome();
      })
      .catch((error) => {
        console.log(error.data);
      });
  };

  const redirectToHome = () => {
    history.push("/");
  };

  return (
    <div>
      <div className="wrapper fadeInDown">
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
        <div id="formContent">
          <div className="fadeIn first">
            <img
              src="https://library.kissclipart.com/20181001/wbw/kissclipart-gsmnet-ro-clipart-computer-icons-user-avatar-4898c5072537d6e2.png"
              id="icon"
              alt="User Icon"
              onClick={() => {
                setEmail("ggg@ggg.com");
                setPassword("gggggg");
              }}
            />
          </div>

          <form>
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
              type="text"
              id="password"
              className="fadeIn third"
              name="login"
              placeholder="סיסמא"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <input
              type="button"
              className="fadeIn fourth"
              value="היכנס"
              onClick={() => onSubmit()}
            />
          </form>

          <div id="formFooter">
            <a className="underlineHover" href="#">
              שכחתי את הסיסמא
            </a>
            <br></br>
            <br></br>
            <Link className="underlineHover" to="/signup">
              משתמש חדש
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
