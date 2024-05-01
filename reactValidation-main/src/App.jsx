import React from "react";
// import SignUp from "./SignUp";
import { Route, Routes } from "react-router-dom";
import Registration from "./Registration";

const App = () => {
  // return <SignUp />;
  return (
    <Routes>
      <Route exact path="/" element={<Registration />}></Route>
      {/* <Route exact path="/user-table" element={<R />}></Route> */}
    </Routes>
  );
};

export default App;
