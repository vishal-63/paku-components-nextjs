import styled from "styled-components";
import Meta from "../components/Meta";
import Header from "../components/Header";
import contactBg from "../assets/images/contact-background.jpg";
import ContactForm from "../components/Contact Form";
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
    flex-direction: row;
    justify-content: space-around;
    align-items: flex-start;
  }

  @media (min-width: 1100px) {
    padding: 4rem 0;
    max-width: 80vw;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 2rem;

  @media (min-width: 900px) {
    width: 50%;
    margin-bottom: 0;
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
  color: var(--primary-blue);
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
            If you have any enquiry or issue, feel free to contact us. You can
            either fill this form, call us or email us.
          </ContactText>
          <ContactInfoTitle>Reach Us Via</ContactInfoTitle>
          <ContactText>
            Address: No. 96, 1st Floor, 1st Main, 4th Cross, New Timber Yard
            Layout, Mysore Road, Bengaluru, 560026
            <br />
            Telephone:{" "}
            <a href="tel:+91-8197302228">
              <span style={{ color: "#307bd5" }}>+91-8197302228</span>
            </a>
            <br /> Email: &nbsp;
            <span style={{ color: "#307bd5" }}>pakucomponents@gmail.com</span>
          </ContactText>
        </ContactInfo>

        <ContactForm page="contact" />
      </ContactPageContainer>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.3135791299896!2d77.54401871479263!3d12.951775190868927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3e137a60208f%3A0x544fa15f3ad99d46!2s1st%20Main%20Rd%2C%20New%20Timberyard%20Layout%2C%20Srinagar%2C%20Banashankari%2C%20Bengaluru%2C%20Karnataka%20560026!5e0!3m2!1sen!2sin!4v1630992612377!5m2!1sen!2sin"
        style={{ border: 0, width: "100%", minHeight: "400px" }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </>
  );
};

export default contact;
