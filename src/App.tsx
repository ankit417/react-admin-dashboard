import React from "react";
import { HomePage } from "./pages/homepage/homePage.page";
import { Button } from "./components/button/Button.component";
import logo from "./logo.svg";
import "./App.css";
import "./style/main.scss";

function App() {
  return (
    <div className="App">
      <Button
        title={"hello"}
        onClick={() => {
          alert("hello world");
        }}
      />
    </div>
  );
}

export default App;
