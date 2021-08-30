import React from "react";
import Navbar from "../../components/Navbar";
import Topbar from "../../components/Topbar";

const Nav = ({ color, border }) => {
  return (
    <>
      <Topbar color={color} border={border} />
      <Navbar />
    </>
  );
};

export default Nav;
