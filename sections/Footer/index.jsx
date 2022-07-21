import Image from "next/image";
import logo from "../../assets/images/logo.png";
import { FiPhone, FiMail } from "react-icons/fi";
import { IoLocationOutline, IoMailOutline } from "react-icons/io5";
import {
  FooterContainer,
  FooterWrapper,
  // FooterLogo,
  FooterSectionWrapper,
  FooterIcon,
  FooterText,
  CopyRightWrapper,
  CopyRightText,
  FooterAddress,
} from "./FooterElements";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        {/* <FooterLogo> */}
        <Image src={logo} alt="Paku Components Logo" width={120} height={70} />
        {/* </FooterLogo> */}
        <FooterSectionWrapper>
          <FooterIcon>
            <IoLocationOutline />
          </FooterIcon>
          <FooterAddress>
            <div className="footer-text">
              #96, 1st Floor, 1st Main, 4th Cross, New Timber Yard Layout 560020
            </div>
            <div className="footer-text">
              #96, 1st Floor, 1st Main, 4th Cross, New Timber Yard Layout 560020
            </div>
          </FooterAddress>
        </FooterSectionWrapper>
        <FooterSectionWrapper>
          <FooterIcon>
            <FiPhone />
          </FooterIcon>
          <FooterText href="tel:+91-8197302228">+91-8197302228</FooterText>
          <FooterText href="tel:+91-9023548954">+91-9023548954</FooterText>
        </FooterSectionWrapper>
        <FooterSectionWrapper>
          <FooterIcon>
            <IoMailOutline />
          </FooterIcon>
          <FooterText href="mailto:pakucomponents@gmail.com">
            pakucomponents@gmail.com
          </FooterText>
        </FooterSectionWrapper>
      </FooterWrapper>
      <CopyRightWrapper>
        <CopyRightText>
          Paku Components &copy; {new Date().getFullYear()} All Rights Reserved.
        </CopyRightText>
      </CopyRightWrapper>
    </FooterContainer>
  );
};

export default Footer;
