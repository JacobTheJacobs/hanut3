import React, { useEffect, createContext, useReducer, useContext } from "react";
import { BrowserRouter, Switch, Route, useHistory } from "react-router-dom";
import SignUp from "./user/signup";
import SingIn from "./user/signin";
import Home from "./user/home";
import { reducer, intialState } from "./redux/reducers/userReducer";
import Cookies from "universal-cookie";
import AdminPage from "./admin/homeAdmin";
import AddProduct from "./admin/addProduct";

export const UserContext = createContext();

const Routing = () => {
  const { state, dispatch } = useContext(UserContext);
  const history = useHistory();
  const cookies = new Cookies();
  useEffect(() => {
    const user = cookies.get("-u");
    console.log(user);
    if (user) {
      dispatch({ type: "USER", payload: user });
      history.push("/admin");
    } else {
      history.push("/signin");
    }
  }, []);
  return (
    <div>
      <Switch>
        <Route path="/signin" exact component={SingIn} />
        <Route path="/signup" exact component={SignUp} />
        <Route path="/admin" exact component={AdminPage} />
        <Route path="/admin/add" exact component={AddProduct} />
        <Route path="/" exact component={Home} />
      </Switch>
    </div>
  );
};

const Routes = () => {
  const [state, dispatch] = useReducer(reducer, intialState);
  return (
    <UserContext.Provider value={{ state, dispatch }}>
      <BrowserRouter>
        <Routing />
      </BrowserRouter>
    </UserContext.Provider>
  );
};

export default Routes;
