import Nav from "../sections/Nav/Nav.js";
import Footer from "../sections/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      {children}

      <Footer />
    </>
  );
};

export default Layout;
