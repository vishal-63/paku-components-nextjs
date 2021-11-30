import React from "react";
import Header from "../../../components/Header";
import Meta from "../../../components/Meta";
import bgImg from "../../../assets/images/banner-1.jpg";
import { IKImage, IKContext } from "imagekitio-react";
import {
  ProductsContainer,
  ProductImageWrapper,
  Modal,
  CloseButton,
  ModalImg,
  Caption,
  CategoryContainer,
  CategoryLink,
} from "../../../components/ProductElements";
import { carRadiators } from "../../../data/RadiatorsData";

const pages = [
  { page: "Home", link: "/" },
  { page: "Products", link: "/products" },
  { page: "Radiators", link: "/products/radiators" },
];

class BottomTank extends React.Component {
  constructor(props) {
    super(props);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal(el) {
    const img = el.target;
    const modal = el.target.parentNode.childNodes[1];
    const modalImg = modal.childNodes[1];
    const caption = modal.childNodes[2];
    modal.style.display = "flex";
    modalImg.src = img.src;
    caption.innerHTML = img.alt;
  }

  closeModal(el) {
    el.target.parentNode.style.display = "none";
  }

  render() {
    return (
      <>
        <Meta title="Products - Paku Components" />
        <Header
          bgImg={bgImg}
          title="Car Radiators"
          page="Car Radiators"
          pages={pages}
        />

        <IKContext urlEndpoint="https://ik.imagekit.io/pakucomponents/radiator">
          <ProductsContainer>
            {carRadiators.map((image, index) => {
              return (
                <ProductImageWrapper key={index}>
                  <IKImage
                    path={image.path}
                    transformation={[
                      {
                        width: "700",
                        radius: "10",
                      },
                      {
                        overlayImage: "logo_1__0LliqXWQB_.png",
                        overlayWidth: "100",
                        overlayX: "320",
                        overlayY: "350",
                      },
                    ]}
                    loading="lazy"
                    lqip={{ active: true }}
                    alt={image.name}
                    onClick={this.openModal}
                  />
                  <Modal>
                    <CloseButton onClick={this.closeModal}>&times;</CloseButton>
                    <ModalImg />
                    <Caption></Caption>
                  </Modal>
                </ProductImageWrapper>
              );
            })}
          </ProductsContainer>
        </IKContext>
      </>
    );
  }
}

export default BottomTank;
