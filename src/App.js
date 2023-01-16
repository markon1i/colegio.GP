import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Calendario from "./components/Calendario";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path={"/"} element={<Home />} />
        <Route exact path={"/Calendario"} element={<Calendario />} />
      </Routes>
    </div>
  );
}

export default App;
