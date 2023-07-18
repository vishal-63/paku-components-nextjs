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
      <TeamTitle data-aos="fade-up">What Our Clients Has To Say</TeamTitle>
      <ClientWrapper data-aos="fade-up">
        <ClientCard>
          <ClientHeader>
            {/* <Image src={client1} alt="Client Image" layout="intrinsic" /> */}
            <ClientInfo>
              <ClientName>Paras Shah</ClientName>
              <ClientSubtitle>Arihant Auto Agency</ClientSubtitle>
            </ClientInfo>
          </ClientHeader>
          <ClientContent>
            <ClientIcon>
              <IoMdQuote />
            </ClientIcon>
            <ClientText>
              I have been working with PAKU Components since their inception.
              And I am so glad to say that I was one of their initial clients.
              Since I working with them, I haven’t got the need to find anyone
              else. Thorough professionals who know what to deliver.
            </ClientText>
          </ClientContent>
        </ClientCard>

        <ClientCard>
          <ClientHeader>
            {/* <Image src={client2} alt="Client Image" layout="intrinsic" /> */}
            <ClientInfo>
              <ClientName>Mahaveer Jain</ClientName>
              <ClientSubtitle>Reliance Radiators</ClientSubtitle>
            </ClientInfo>
          </ClientHeader>
          <ClientContent>
            <ClientIcon>
              <IoMdQuote />
            </ClientIcon>
            <ClientText>
              I have placed PAKU Components many orders this year and I can say
              that there wasn’t even one order in which I had to return,
              exchange or even complain about the delivery and the products.
              Amazing work.
            </ClientText>
          </ClientContent>
        </ClientCard>
      </ClientWrapper>
    </Container>
  );
};

export default Clients;
