import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { createGlobalStyle } from "styled-components";
import Layout from "../components/Layout";
import AOS from "aos";
import "aos/dist/aos.css";
import BeatLoader from "react-spinners/BeatLoader";
import LoaderStyles from "../styles/Loader.module.css";

const GlobalStyle = createGlobalStyle`
:root {
  --blue-shade-1: #f7f7fc;
  --blue-shade-2: #cccaec;
  --blue-shade-3: #a09cdd;
  --blue-shade-4: #756fcd;
  --blue-shade-5: #4942bd;
  --blue-shade-6: #262262;
  --blue-shade-7: #141235;
  --blue-shade-8: #090716;
  --black: #030207;
  --cream: #dedede;
  --primary-blue: #262262;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family:  "Montserrat", sans-serif;
}

body,
html {
  overflow-x: hidden;
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
  box-shadow: none;
}


a {
  text-decoration: none;
  color: inherit;
  width: 100%;
}


.swiper-container {
  width: 100%;
  height: 100%;
  max-width: 1000px;
}

@media (max-width: 1024px) {
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

const loadingScreen = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100vw",
  height: "100vh",
  backgroundColor: "#fff",
  transition: "all 0.4s ease-out",
};

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      ease: "ease-in-sine",
    });

    const handleStart = () => setLoading(true);
    const handleComplete = () => setLoading(false);
    const handleError = () => console.log("error occurred");

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleError);

    return () => {
      router.events.on("routeChangeStart", handleStart);
      router.events.on("routeChangeComplete", handleComplete);
      router.events.on("routeChangeError", handleError);
    };
  }, [router]);

  if (router.pathname.endsWith("/")) {
    return (
      <>
        <GlobalStyle />
        {loading ? (
          <div className={LoaderStyles.loader}>
            <BeatLoader size={20} color={"#00194f"} css={loadingScreen} />
          </div>
        ) : (
          <Layout color="#efefef" border="rgba(255, 255, 255, 0.2)">
            <Component {...pageProps} />
          </Layout>
        )}
      </>
    );
  }

  return (
    <>
      <GlobalStyle />
      {loading ? (
        <div className={LoaderStyles.loader}>
          <BeatLoader size={20} color={"#00194f"} css={loadingScreen} />
        </div>
      ) : (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      )}
    </>
  );
}

export default MyApp;
