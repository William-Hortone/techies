import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import { Home } from "./pages";

const App = () => {

  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home  setShowMenu={setShowMenu} showMenu={showMenu} />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
