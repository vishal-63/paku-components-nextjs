import { ContactSectionContainer, ContactSectionWrapper } from "./Elements";
import { Title } from "../../components/Titles";
import ContactForm from "../../components/Contact Form";
import MapComponent from "../../components/Map";

const ContactSection = () => {
  return (
    <ContactSectionContainer>
      <Title>Contact Us</Title>
      <ContactSectionWrapper data-aos="fade-up">
        <ContactForm />
        <MapComponent />
      </ContactSectionWrapper>
    </ContactSectionContainer>
  );
};

export default ContactSection;
