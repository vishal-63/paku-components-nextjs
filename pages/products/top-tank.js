import React from "react";
import Header from "../../components/Header";
import Meta from "../../components/Meta";
import bgImg from "../../assets/images/banner-1.jpg";
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
} from "../../components/ProductElements";
import {
  carTops,
  commercialTops,
  earthmoverTops,
  generatorTops,
  tractorTops,
} from "../../data/TopData";

const pages = [
  { page: "Home", link: "/" },
  { page: "Products", link: "/products" },
];

class TopTank extends React.Component {
  constructor(props) {
    super(props);
    this.state = { segment: "car" };
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
          title="Top Tanks"
          page="Top Tanks"
          pages={pages}
        />

        <IKContext urlEndpoint="https://ik.imagekit.io/pakucomponents/top">
          <CategoryContainer>
            <CategoryLink
              className={this.state.segment === "earthmover" && "active"}
              onClick={() => this.setState({ segment: "earthmover" })}
            >
              Earthmovers
            </CategoryLink>
            <CategoryLink
              onClick={() => this.setState({ segment: "car" })}
              className={this.state.segment === "car" && "active"}
            >
              Car
            </CategoryLink>
            <CategoryLink
              onClick={() => this.setState({ segment: "commercial" })}
              className={this.state.segment === "commercial" && "active"}
            >
              Commercial
            </CategoryLink>
            <CategoryLink
              onClick={() => this.setState({ segment: "tractor" })}
              className={this.state.segment === "tractor" && "active"}
            >
              Tractors
            </CategoryLink>
            <CategoryLink
              onClick={() => this.setState({ segment: "generator" })}
              className={this.state.segment === "generator" && "active"}
            >
              Generators
            </CategoryLink>
          </CategoryContainer>

          {/* Car Segment */}
          {this.state.segment === "car" ? (
            <ProductsContainer>
              {carTops.map((image, index) => {
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
                          overlayX: "330",
                          overlayY: "220",
                        },
                      ]}
                      loading="lazy"
                      lqip={{ active: true }}
                      alt={image.name}
                      onClick={this.openModal}
                    />
                    <Modal>
                      <CloseButton onClick={this.closeModal}>
                        &times;
                      </CloseButton>
                      <ModalImg />
                      <Caption></Caption>
                    </Modal>
                  </ProductImageWrapper>
                );
              })}
            </ProductsContainer>
          ) : (
            <></>
          )}

          {/* Commercial Segment */}
          {this.state.segment === "commercial" ? (
            <ProductsContainer>
              {commercialTops.map((image, index) => {
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
                          overlayX: "330",
                          overlayY: "220",
                        },
                      ]}
                      loading="lazy"
                      lqip={{ active: true }}
                      alt={image.name}
                      onClick={this.openModal}
                    />
                    <Modal>
                      <CloseButton onClick={this.closeModal}>
                        &times;
                      </CloseButton>
                      <ModalImg />
                      <Caption></Caption>
                    </Modal>
                  </ProductImageWrapper>
                );
              })}
            </ProductsContainer>
          ) : (
            <></>
          )}

          {/* Earthmover Segment */}
          {this.state.segment === "earthmover" ? (
            <ProductsContainer>
              {earthmoverTops.map((image, index) => {
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
                          overlayX: "330",
                          overlayY: "220",
                        },
                      ]}
                      loading="lazy"
                      lqip={{ active: true }}
                      alt={image.name}
                      onClick={this.openModal}
                    />
                    <Modal>
                      <CloseButton onClick={this.closeModal}>
                        &times;
                      </CloseButton>
                      <ModalImg />
                      <Caption></Caption>
                    </Modal>
                  </ProductImageWrapper>
                );
              })}
            </ProductsContainer>
          ) : (
            <></>
          )}

          {/* Generator Segment */}
          {this.state.segment === "generator" ? (
            <ProductsContainer>
              {generatorTops.map((image, index) => {
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
                          overlayX: "330",
                          overlayY: "220",
                        },
                      ]}
                      loading="lazy"
                      lqip={{ active: true }}
                      alt={image.name}
                      onClick={this.openModal}
                    />
                    <Modal>
                      <CloseButton onClick={this.closeModal}>
                        &times;
                      </CloseButton>
                      <ModalImg />
                      <Caption></Caption>
                    </Modal>
                  </ProductImageWrapper>
                );
              })}
            </ProductsContainer>
          ) : (
            <></>
          )}

          {/* Tractor Segment */}
          {this.state.segment === "tractor" ? (
            <ProductsContainer>
              {tractorTops.map((image, index) => {
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
                          overlayX: "330",
                          overlayY: "220",
                        },
                      ]}
                      loading="lazy"
                      lqip={{ active: true }}
                      alt={image.name}
                      onClick={this.openModal}
                    />
                    <Modal>
                      <CloseButton onClick={this.closeModal}>
                        &times;
                      </CloseButton>
                      <ModalImg />
                      <Caption></Caption>
                    </Modal>
                  </ProductImageWrapper>
                );
              })}
            </ProductsContainer>
          ) : (
            <></>
          )}
        </IKContext>
      </>
    );
  }
}

export default TopTank;
