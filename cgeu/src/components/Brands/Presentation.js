import React from "react";
import styles from "../../css/brands.module.css";
import styled from "styled-components";
import CarouselProvider from "./ImgSlider";
import NeoNailExpertList from "./NeoNailExpertList";

const Presentation = ({
  logo,
  text,
  link,
  miniature1,
  miniature2,
  miniature3,
  list,
}) => {
  return (
    <section className={styles.brands}>
      <LogoWrapper>
        <img
          src={require(`../../images/${logo}.png`)}
          alt={`Logo of ${logo}`}
        />
      </LogoWrapper>
      <div className={styles.brandsCenter}>
        <div className={styles.brandsContainer}>
          <div className={styles.brandsElement}>
            <div className={styles.brandsText}>
              <div>{text}</div>
              {list ? <NeoNailExpertList /> : null}
              <div className={styles.brandsLink}>
                <a
                  href={`https://${link}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link}
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.brandsContainer}>
          <div className={styles.brandsImgsContainer}>
            <img
              className={styles.brandsImg}
              src={require(`../../images/${miniature1}.png`)}
              alt={`Brands ${miniature1}`}
            />
            <img
              className={styles.brandsImg}
              src={require(`../../images/${miniature2}.png`)}
              alt={`Brands ${miniature2}`}
            />
            <img
              className={styles.brandsImg}
              src={require(`../../images/${miniature3}.png`)}
              alt={`Brands ${miniature3}`}
            />
          </div>
        </div>
        <CarouselProvider
          className="slider_container"
          btnL="back"
          btnR="next"
          title="You can trust us"
        />
      </div>
    </section>
  );
};

const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  img {
    max-height: 12rem;
  }
  @media (max-width: 1400px) {
    img {
      max-height: 8rem;
    }
  }
  @media (max-width: 768px) {
    width: 55%;
    margin: 0 auto;
  }
`;

export default Presentation;
