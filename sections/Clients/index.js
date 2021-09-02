import Image from "next/image";
import {
  Container,
  ClientCard,
  ClientContent,
  ClientHeader,
  ClientIcon,
  ClientImg,
  ClientInfo,
  ClientName,
  ClientSubtitle,
  ClientText,
  ClientWrapper,
} from "./ClientElements";
import { TeamTitle } from "../Team/TeamElements";
import client1 from "../../assets/images/client1.jpg";
import client2 from "../../assets/images/client2.jpg";
import { IoMdQuote } from "react-icons/io";

const Clients = () => {
  return (
    <Container>
      <TeamTitle data-aos="fade-up">Our Clients</TeamTitle>
      <ClientWrapper data-aos="fade-up">
        <ClientCard>
          <ClientHeader>
            <Image src={client1} alt="Client Image" layout="intrinsic" />
            <ClientInfo>
              <ClientName>Sam Wilson</ClientName>
              <ClientSubtitle>CEO "Manstep"</ClientSubtitle>
            </ClientInfo>
          </ClientHeader>
          <ClientContent>
            <ClientIcon>
              <IoMdQuote />
            </ClientIcon>
            <ClientText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip
            </ClientText>
          </ClientContent>
        </ClientCard>

        <ClientCard>
          <ClientHeader>
            <Image src={client2} alt="Client Image" layout="intrinsic" />
            <ClientInfo>
              <ClientName>Michelle Johnson</ClientName>
              <ClientSubtitle>CEO "WorkForce"</ClientSubtitle>
            </ClientInfo>
          </ClientHeader>
          <ClientContent>
            <ClientIcon>
              <IoMdQuote />
            </ClientIcon>
            <ClientText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip
            </ClientText>
          </ClientContent>
        </ClientCard>
      </ClientWrapper>
    </Container>
  );
};

export default Clients;
