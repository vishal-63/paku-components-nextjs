import Header from "../../components/Header";
import Meta from "../../components/Meta";
import bgImg from "../../assets/images/banner-1.jpg";

const Products = () => {
  const pages = [{ page: "Home", link: "/" }];

  return (
    <>
      <Meta title="Products - Paku Components" />
      <Header bgImg={bgImg} title="Products" page="Products" pages={pages} />
    </>
  );
};

export default Products;
