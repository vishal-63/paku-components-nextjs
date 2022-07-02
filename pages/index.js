import Meta from "../components/Meta";
import Herosection from "../sections/Hero";
import Infosection from "../sections/Info";
import ContactSection from "../sections/Contact";

export default function Home() {
  return (
    <>
      <Meta />
      <main>
        <Herosection />
        <Infosection />
        <ContactSection />
      </main>
    </>
  );
}
