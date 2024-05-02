import React from "react";
// import SignUp from "./SignUp";
import { Route, Routes } from "react-router-dom";
import Registration from "./Registration";
import Userdetails from "./Userdetails";

const App = () => {
  // return <SignUp />;
  return (
    <Routes>
      <Route exact path="/" element={<Registration />}></Route>
      <Route path="/user-details" element={<Userdetails />}></Route>
    </Routes>
  );
};

export default App;
