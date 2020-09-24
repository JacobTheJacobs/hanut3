import React from "react";

import "./App.css";
import Routes from "./routes";

const Header = () => {
  return (
    <div>
      <nav class="navbar navbar-light " style={{ backgroundColor: " #016292" }}>
        <span class="navbar-brand mb-0 h1">Menu</span>
        <span class="navbar-brand mb-0 h1">Logo</span>
        <span class="navbar-brand mb-0 h1">login/singup</span>
      </nav>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <Header />
      <Routes />
    </div>
  );
}

export default App;
