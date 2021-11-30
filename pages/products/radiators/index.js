import styled from "styled-components";
import { IKImage, IKContext } from "imagekitio-react";
import Link from "next/link";

import Header from "../../../components/Header";
import Meta from "../../../components/Meta";
import { Btn } from "../../../components/Button";
import bgImg from "../../../assets/images/banner-1.jpg";

const Container = styled.main`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h3`
  font-size: 1.5rem;
  font-family: Helvetica, sans-serif;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  margin: 4rem 0 1.5rem;

  @media (min-width: 768px) {
    font-size: 1.75rem;
  }
`;

const ImageWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;

  & img {
    max-width: 175px;

    @media (min-width: 540px) {
      max-width: 200px;
    }

    @media (min-width: 900px) {
      max-width: 300px;
    }
  }

  @media (min-width: 540px) {
    gap: 2rem;
  }

  @media (min-width: 900px) {
    gap: 3.5rem;
  }
`;

const Radiators = () => {
  const pages = [
    { page: "Home", link: "/" },
    { page: "Products", link: "/products" },
  ];

  return (
    <>
      <Meta title="Products - Paku Components" />
      <Header bgImg={bgImg} title="Radiators" page="Radiators" pages={pages} />

      <Container>
        <IKContext urlEndpoint="https://ik.imagekit.io/pakucomponents/radiator">
          {/* Car */}
          <Title>Car Radiators</Title>
          <ImageWrapper>
            <IKImage
              path="/Car/TOYOTA_QUALIS.png"
              transformation={[{ width: "500" }]}
              loading="lazy"
              lqip={{ active: true }}
              alt="Toyota Qualis Radiator"
            />
            <IKImage
              path="/Car/VOLKSWAGEN_POLO_RAPID_FABIA_TYPE_VENTO.png"
              transformation={[{ width: "500" }]}
              loading="lazy"
              lqip={{ active: true }}
              alt="Volkswagen Polo / Rapid / Fabia Type / Vento Radiator"
            />
            <IKImage
              path="/Car/TOYOTA_INNOVA_PTL.png"
              transformation={[{ width: "500" }]}
              loading="lazy"
              lqip={{ active: true }}
              alt="Toyota Innova Radiator"
            />
          </ImageWrapper>
          <Btn className="products">
            <Link href="/products/radiators/car">Show All</Link>
          </Btn>

          <Title>Commercial Radiators</Title>
          <ImageWrapper>
            <IKImage
              path="/CommerIcal/TATA_SUPER_ACE.png?updatedAt=1637402266848"
              transformation={[{ width: "500" }]}
              loading="lazy"
              lqip={{ active: true }}
              alt="Tata Super Ace Radiator"
            />
            <IKImage
              path="/CommerIcal/TATA_ACE.png?updatedAt=1637402266098"
              transformation={[{ width: "500" }]}
              loading="lazy"
              lqip={{ active: true }}
              alt="Tata Ace Radiator"
            />
            <IKImage
              path="/CommerIcal/TATA_SUPER_ACE_WITHOUT_NECK.png?updatedAt=1637402266716"
              transformation={[{ width: "500" }]}
              loading="lazy"
              lqip={{ active: true }}
              alt="Tata Super Without Neck Radiator"
            />
          </ImageWrapper>
          <Btn className="products">
            <Link href="/products/radiators/commercial">Show All</Link>
          </Btn>

          <Title>Industrial Radiators</Title>
          <ImageWrapper>
            <IKImage
              path="/Industrial/ZAXIS_670.png?updatedAt=1637402258454"
              transformation={[{ width: "500" }]}
              loading="lazy"
              lqip={{ active: true }}
              alt="ZAxis 670 Radiator"
            />
            <IKImage
              path="/Industrial/ZAXIS_75.png?updatedAt=1637402258644"
              transformation={[{ width: "500" }]}
              loading="lazy"
              lqip={{ active: true }}
              alt="ZAxis 75 Radiator"
            />
            <IKImage
              path="/Industrial/ZAXIS_220.png?updatedAt=1637402257558"
              transformation={[{ width: "500" }]}
              loading="lazy"
              lqip={{ active: true }}
              alt="ZAxis 220 Radiator"
            />
          </ImageWrapper>
          <Btn className="products">
            <Link href="/products/radiators/industrial">Show All</Link>
          </Btn>

          <Title>Tractor Radiators</Title>
          <ImageWrapper>
            <IKImage
              path="/Tractor/SWARAJ_STONE_GAURD.png?updatedAt=1637402251649"
              transformation={[{ width: "500" }]}
              loading="lazy"
              lqip={{ active: true }}
              alt="Swaraj Stone Guard Radiator"
            />
            <IKImage
              path="/Tractor/SWARAJ_SMALL.png?updatedAt=1637402251493"
              transformation={[{ width: "500" }]}
              loading="lazy"
              lqip={{ active: true }}
              alt="Swaraj Small Radiator"
            />
            <IKImage
              path="/Tractor/SONALIKA.png?updatedAt=1637402249865"
              transformation={[{ width: "500" }]}
              loading="lazy"
              lqip={{ active: true }}
              alt="Sonalika Radiator"
            />
          </ImageWrapper>
          <Btn className="products">
            <Link href="/products/radiators/tractor">Show All</Link>
          </Btn>

          <Title>Earthmover Radiators</Title>
          <ImageWrapper>
            <IKImage
              path="/Earthmovers/JCB_3DX_RADIATOR.png?updatedAt=1637402260649"
              transformation={[{ width: "500" }]}
              loading="lazy"
              lqip={{ active: true }}
              alt="JCB 3DX Radiator"
            />
            <IKImage
              path="/Earthmovers/HITACHI_60.png?updatedAt=1637402260283"
              transformation={[{ width: "500" }]}
              loading="lazy"
              lqip={{ active: true }}
              alt="Hitachi 60 Radiator"
            />
            <IKImage
              path="/Earthmovers/JCB_4DX.png?updatedAt=1637402260956"
              transformation={[{ width: "500" }]}
              loading="lazy"
              lqip={{ active: true }}
              alt="JCB 4DX Radiator"
            />
          </ImageWrapper>

          <Title>Generator Radiators</Title>
          <ImageWrapper>
            <IKImage
              path="/Generator/7.5_KVA_WFCSG.png?updatedAt=1637402259492"
              transformation={[{ width: "500" }]}
              loading="lazy"
              lqip={{ active: true }}
              alt="7.5 KVA WFCSG Radiator"
            />
            <IKImage
              path="/Generator/5_KVA_WFCSG.png?updatedAt=1637402259332"
              transformation={[{ width: "500" }]}
              loading="lazy"
              lqip={{ active: true }}
              alt="5 KVA WFCSG Radiator"
            />
          </ImageWrapper>
        </IKContext>
      </Container>
    </>
  );
};

export default Radiators;
