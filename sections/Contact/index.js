import { ContactSectionContainer, ContactSectionWrapper } from "./Elements";
import { Title } from "../../components/Titles";
import ContactForm from "../../components/Contact Form";
import styled from "styled-components";

const MapWrapper = styled.div`
  border: 0;
  width: 100%;
  min-height: 250px;

  @media (min-width: 768px) {
    width: 50%;
  }
`;

const ContactSection = () => {
  return (
    <ContactSectionContainer>
      <Title>Contact Us</Title>
      <ContactSectionWrapper data-aos="fade-up">
        <ContactForm />
        <MapWrapper>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.3135791299896!2d77.54401871479263!3d12.951775190868927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3e137a60208f%3A0x544fa15f3ad99d46!2s1st%20Main%20Rd%2C%20New%20Timberyard%20Layout%2C%20Srinagar%2C%20Banashankari%2C%20Bengaluru%2C%20Karnataka%20560026!5e0!3m2!1sen!2sin!4v1630992612377!5m2!1sen!2sin"
            allowFullScreen=""
            style={{
              border: 0,
              width: "100%",
              height: "100%",
              minHeight: "inherit",
            }}
            loading="lazy"
          ></iframe>
        </MapWrapper>
      </ContactSectionWrapper>
    </ContactSectionContainer>
  );
};

export default ContactSection;
