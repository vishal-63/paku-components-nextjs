import styled from "styled-components";
import Meta from "../components/Meta";
import Header from "../components/Header";
import contactBg from "../assets/images/contact-background.jpg";
import ContactForm from "../components/Contact Form";
import MapComponent from "../components/Map";
import { Title } from "../components/Titles";
import { ContactFormTitle } from "../components/Contact Form/ContactFormElements";

const ContactPageContainer = styled.main`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: space-around;
  justify-content: flex-start;
  padding: 3rem 1.5rem;

  @media (min-width: 768px) {
    padding: 4rem 2rem;
  }

  @media (min-width: 900px) {
    padding: 4rem 0;
    flex-direction: row;
    justify-content: space-around;
    align-items: flex-start;
    max-width: 80vw;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  @media (min-width: 900px) {
    max-width: 450px;
  }
`;

const ContactInfoTitle = styled.h5`
  color: #00030a;
  font-family: Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
  font-size: 1.3rem;
  padding: 0;
  margin-top: 1.5rem;
  line-height: 1.35;
  font-weight: 700;

  @media (min-width: 540px) {
    padding: 0 1rem;
  }
`;

const ContactText = styled.p`
  color: #00030a;
  font-size: 14px;
  font-family: "Montserrat", sans-serif;
  margin-top: 1rem;
  padding: 0;

  @media (min-width: 540px) {
    padding: 0 1rem;
  }
`;

const contact = () => {
  const pages = [{ page: "Home", link: "/" }];
  return (
    <>
      <Meta title="Contact - Paku Components" />

      <Header title="Contact" page="Contact" pages={pages} bgImg={contactBg} />

      <ContactPageContainer>
        <ContactInfo>
          <ContactFormTitle
            style={{ paddingLeft: "1rem" }}
            className="contact-page"
          >
            How to find us
          </ContactFormTitle>
          <ContactText style={{ marginTop: "1.5rem" }}>
            If you have any questions, just fill in the contact form, and we
            will answer you shortly. If you are living nearby, come visit
            Starbis in one of our comfortable offices.
          </ContactText>
          <ContactInfoTitle>Office</ContactInfoTitle>
          <ContactText>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, ex
            vero incidunt corporis cum aut!
            <br />
            Telephone: <span style={{ color: "#307bd5" }}>+91-8197302228</span>
            <br /> Email:{" "}
            <span style={{ color: "#307bd5" }}>pakucomponents@gmail.com</span>
          </ContactText>
        </ContactInfo>

        <ContactForm page="contact" />
      </ContactPageContainer>
      <MapComponent page="contact" />
    </>
  );
};

export default contact;
