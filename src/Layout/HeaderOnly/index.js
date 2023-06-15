import React from "react";
import Header from "./Header";

function index({ children }) {
  return (
    <>
      <Header />
      <div className="container">
        <div>{children}</div>
      </div>
    </>
  );
}

export default index;
