import { useState } from "react";
import Nav from "../sections/Nav/Nav.js";
import Footer from "../sections/Footer";

const Layout = ({ children, color, border }) => {
  return (
    <>
      <Nav color={color} border={border} />
      <> {children}</>

      <Footer />
    </>
  );
};

export default Layout;
