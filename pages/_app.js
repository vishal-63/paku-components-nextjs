import { createGlobalStyle } from "styled-components";
import Layout from "../components/Layout";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family:  "Montserrat", sans-serif;
}

body {
  
  line-height: 1.71429;
}

button,
input,
select,
textarea {
  font-family: inherit;
  font-size: 100%;
  line-height: 1.15;
  margin: 0;
}


a {
  text-decoration: none;
  color: inherit;
}


.swiper-container {
  width: 100%;
  height: 100%;
  max-width: 1000px;
}

@media (max-width: 900px) {
  .swiper-container {
    max-width: 85vw;
  }
}

@media (max-width: 540px) {
  .swiper-slide {
    width: 100%;
  }

  .swiper-button-next,
  .swiper-button-next::after,
  .swiper-button-prev,
  .swiper-button-prev::after {
    font-size: 2.5rem;
    position: absolute;
  }

  .swiper-button-prev,
  .swiper-button-prev::after {
    left: 0px;
  }

  .swiper-button-next,
  .swiper-button-next::after {
    right: 0px;
  }
}
`;

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      ease: "ease-in-sine",
    });
  }, []);

  return (
    <>
      <GlobalStyle />

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
