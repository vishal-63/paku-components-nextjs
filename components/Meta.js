import Head from "next/head";

const Meta = ({ title, keyword, description }) => {
  return (
    <Head>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="keyword" content={keyword} />
      <meta name="description" content={description} />
      <meta property="og:type" content="business.business" />
      <meta property="og:title" content="PAKU Components PVT. LTD." />
      <meta property="og:url" content="https://pakucomp.com/" />
      <meta property="og:image" content="https://imgur.com/a/RmCNYW4" />
      <meta
        property="og:description"
        content="PAKU Components PVT. LTD. is a trading Company which focuses on all kinds of Aluminium Radiators and its related parts."
      />
      <meta property="business:contact_data:street_address" content="" />
      <meta property="business:contact_data:locality" content="" />
      <meta property="business:contact_data:region" content="" />
      <meta
        property="business:contact_data:country_name"
        content="India"
      ></meta>
      <link rel="icon" href="/logo.ico" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="true"
      />
      <link
        rel="preload"
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;500;600;700&display=swap"
        as="style"
        onLoad="this.onload=null;this.rel='stylesheet'"
      />
      <title>{title}</title>
    </Head>
  );
};

Meta.defaultProps = {
  title: "Paku Components",
  keyword: "Radiators, Cores, Auto Spare Parts, Cars",
  description:
    "Paku Components is the largest wholesaler of radiators and cores in all of South India",
};

export default Meta;
