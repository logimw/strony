import React from "react";
import Layout from "../components/Layout";
import StyledHero from "../components/StyledHero";
import Banner from "../components/Banner";
import Presentation from "../components/Brands/Presentation";
import SEO from "../components/SEO";

const Brands = ({ data }) => {
  return (
    <Layout>
      <SEO
        title="Brands of Cosmo-group"
        description="Description of cosmogroup"
      />
      <StyledHero img={data.defaultBcg.childImageSharp.fluid}>
        <Banner title="Brands" />
      </StyledHero>
      <Presentation
        logo="neonail_logo_bez_r"
        miniature1="brands_img1"
        miniature2="brands_img2"
        miniature3="brands_img3"
        text="NeoNail is an international cosmetic brand and a leader in UV gel polishes. We offer more than 2,500 products, including more than 300 colours of UV gel polish, and the necessary accessories for perfect nail design and care. NeoNail is a pioneer of UV gel polishes – it was the first brand to start B2C sales in shopping centres.
        Our products are innovative, safe and high quality. We are constantly expanding our portfolio to include products for each age group. NeoNail products are certified and attested and have been dermatologically tested.
        "
        link="www.neonail.com"
      />
      <Presentation
        logo="logo2"
        miniature1="brands_img4"
        miniature2="brands_img5"
        miniature3="brands_img6"
        text="NEO MAKE UP is a partner of female beauty, which creates products with women in mind. It is also the first brand of colour cosmetics on the Polish market, which brings the world of professional makeup to everyday life. Due to intuitive navigation, the selection and performance of perfect makeup is easier than ever, and the special care for the highest quality defines the brand in its category. Discovering female beauty is a great responsibility. Therefore, the products that aid in this process are manufactured in a special way. The result of our efforts are cosmetics with unique features, which assure you that your decision was the right one. "
        link="www.neomakeup.com"
      />
      <Presentation
        logo="logo3"
        miniature1="brands_mylaq_1-min"
        miniature2="brands_mylaq_2-min"
        miniature3="brands_mylaq_3-min"
        text="MylaQ is a brand created with young women in mind; it emphasises their femininity and brings lots of different colours to their world. This brand knows a lot about women’s wants, expectations and changeability. It knows that every young woman stands for different shades of beauty and therefore it offers a whole range of colour cosmetics to choose from. MylaQ offers an opportunity for quick and easy manicure games. It is a play on colours. MylaQ is a brand providing high quality products at reasonable prices. It is a response to the needs of women who appreciate good value for money.
        "
        link="www.mylaq.com"
      />
      <Presentation
        logo="logo4"
        miniature1="NOEMI I MARINA-min"
        miniature2="brands_ne_2-min"
        miniature3="brands_ne_3-min"
        text="NeoNail Expert is a programme that has been designed to face the needs and expectations of nail stylists around the world. Manicure and Nail Art business requires new qualifications almost every month. To master new methods and to learn about new products and their properties is a must while being a successful Nail Artist. Professionals invest in trainings, they test recently launched cosmetics and master different methods to earn the effects their customers expect. NeoNail Expert Programme offers:
        "
        list
        link="www.neonailexpert.pl"
      />
    </Layout>
  );
};

export default Brands;

export const query = graphql`
  query {
    defaultBcg: file(relativePath: { eq: "MW4A6964.jpg" }) {
      childImageSharp {
        fluid(quality: 45, maxWidth: 4160) {
          src
        }
      }
    }
  }
`;
