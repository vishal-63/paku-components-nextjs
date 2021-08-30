import Header from "../components/Header";
import Meta from "../components/Meta";
import bgImg from "../assets/images/about-background.png";
import AboutInfo from "../sections/About - Info";
import ParallaxContainer from "../sections/Parallax";
import Team from "../sections/Team";
import Clients from "../sections/Clients";

const About = () => {
  const pages = [{ page: "Home", link: "/" }];
  return (
    <div>
      <Meta title="About - Paku Components" />
      <Header title="About" pages={pages} page="About" bgImg={bgImg} />
      <main>
        <AboutInfo />
        <Team />
        <ParallaxContainer />
        <Clients />
      </main>
    </div>
  );
};

export default About;
