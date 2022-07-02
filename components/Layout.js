import Footer from "../sections/Footer";
import Navbar from "./Navbar/index.jsx";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <> {children}</>

      <Footer />
    </>
  );
};

export default Layout;
