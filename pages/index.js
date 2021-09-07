import Meta from "../components/Meta";
import Herosection from "../sections/Hero";
import { SliderData } from "../sections/Hero/SliderData";
import Infosection from "../sections/Info";
import ContactSection from "../sections/Contact";

export default function Home() {
  return (
    <>
      <Meta />

      <Herosection slides={SliderData} />
      <Infosection />
      <ContactSection />
    </>
  );
}
