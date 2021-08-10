import React, { useState } from "react";
import * as emailjs from "emailjs-com";
import { LazyLoadComponent } from "react-lazy-load-image-component";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";
import {
  ContactSectionContainer,
  ContactSectionWrapper,
  ContactFormWrapper,
  ContactFormTitle,
  ContactForm,
  NameEmailWrapper,
  ContactFormInput,
  ContactFormButton,
  MapWrapper,
  ContactFormMessage,
} from "./Elements";
import { Title } from "../../components/Titles";

const ContactSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const onNameChange = (e) => {
    setName(e.target.value);
  };

  const onEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const onSubjectChange = (e) => {
    setSubject(e.target.value);
  };

  const onMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = () => {
    const serviceId = "service_desju56";
    const templateId = "template_07369pi";
    const userId = "user_9rjQx235gQczk1WLpSuSj";

    let error = [];

    if (name === "") {
      error += "name";
      document.getElementsByName("name")[0].placeholder =
        "Please fill this field";
    }
    if (email === "") {
      error += "email";
      document.getElementsByName("email")[0].placeholder =
        "Please fill this field";
    }
    if (subject === "") {
      error += "subject";
      document.getElementsByName("subject")[0].placeholder =
        "Please fill this field";
    }
    if (message === "") {
      error += "message";
      document.getElementsByName("message")[0].placeholder =
        "Please fill this field";
    }

    if (error == "") {
      sendEmail(
        serviceId,
        templateId,
        {
          from_name: name,
          reply_to: email,
          subject: subject,
          message: message,
        },
        userId
      );
    } else {
      console.log(name, email, subject, message, error);
    }
  };

  const resetForm = () => {
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  };

  const sendEmail = (serviceId, templateId, variables, userId) => {
    emailjs
      .send(serviceId, templateId, variables, userId)
      .then((res) => {
        console.log(res, "Email sent successfully!");
        resetForm();
      })
      .catch((err) => {
        console.error("Couldn't send email: ", err);
      });
  };

  return (
    <ContactSectionContainer>
      <Title>Contact Us</Title>
      <ContactSectionWrapper data-aos="zoom-in">
        <ContactFormWrapper>
          <ContactFormTitle>Get in touch</ContactFormTitle>
          <ContactForm>
            <NameEmailWrapper>
              <ContactFormInput
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                onChange={onNameChange}
                value={name}
                required
              />
              <ContactFormInput
                type="email"
                id="email"
                name="email"
                placeholder="Email Address"
                onChange={onEmailChange}
                value={email}
                required
              />
            </NameEmailWrapper>
            <ContactFormInput
              type="text"
              id="subject"
              name="subject"
              placeholder="Subject"
              onChange={onSubjectChange}
              value={subject}
              required
            />
            <ContactFormMessage
              id="message"
              name="message"
              placeholder="Message"
              rows="5"
              onChange={onMessageChange}
              value={message}
              required
            />
            <ContactFormButton
              type="button"
              value="Submit"
              onClick={handleSubmit}
            />
          </ContactForm>
        </ContactFormWrapper>
        <LazyLoadComponent>
          <MapWrapper>
            <Map
              className="map"
              google={window.google}
              zoom={15}
              initialCenter={{ lat: 12.9396425, lng: 77.5572237 }}
            >
              <Marker />
            </Map>
          </MapWrapper>
        </LazyLoadComponent>
      </ContactSectionWrapper>
    </ContactSectionContainer>
  );
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyBSEq_IJNSy4HV6g552uOmNf5g5B0F43lM",
})(ContactSection);
