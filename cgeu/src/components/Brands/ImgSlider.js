import React from "react";
import styled from "styled-components";
import Title from "../Title";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import {
  ButtonBack,
  ButtonNext,
  CarouselProvider,
  Image,
  Slide,
  Slider,
} from "pure-react-carousel";

import styles from "pure-react-carousel/dist/react-carousel.es.css";
// import styles from "../layout.css";
// import CustomSpinner from "./CustomSpinner";

const ImgSlider = ({ className, btnL, btnR, title }) => {
  return (
    <ImgSliderWrapper>
      <CarouselProvider
        visibleSlides={5}
        totalSlides={8}
        step={1}
        naturalSlideWidth={50}
        naturalSlideHeight={50}
        hasMasterSpinner
      >
        <Title title={title} />
        <div className={styles.container}>
          <Slider className={(styles.slider, className)}>
            <Slide index={0} className={className}>
              <Image src={require("../../images/slider_1_1.png")} />
            </Slide>
            <Slide index={1} className={className}>
              <Image src={require("../../images/slider_1_2.png")} />
            </Slide>
            <Slide index={2} className={className}>
              <Image src={require("../../images/slider_1_3.png")} />
            </Slide>
            <Slide index={3} className={className}>
              <Image src={require("../../images/slider_1_4.png")} />
            </Slide>
            <Slide index={4} className={className}>
              <Image src={require("../../images/slider_1_5.png")} />
            </Slide>
            <Slide index={4} className={className}>
              <Image src={require("../../images/slider_new1.png")} />
            </Slide>
            <Slide index={5} className={className}>
              <Image src={require("../../images/slider_new2.jpg")} />
            </Slide>
            <Slide index={6} className={className}>
              <Image src={require("../../images/slider_new3.jpg")} />
            </Slide>
          </Slider>
          <ButtonBack className={btnL}>
            <IoIosArrowRoundBack />{" "}
          </ButtonBack>
          <ButtonNext className={btnR}>
            <IoIosArrowRoundForward />{" "}
          </ButtonNext>
        </div>
      </CarouselProvider>
    </ImgSliderWrapper>
  );
};
const ImgSliderWrapper = styled.div`
  position: relative;
  button {
    font-size: 5rem;
    position: absolute;
    top: 0;
    background: none;
    border: none;
    transform: scaleX(1.1);
    transition: all 0.2s ease;
    color: var(--primaryColor);
    :hover {
      transform: scaleX(1.4);
    }
    :disabled {
      color: var(--darkGrey);
    }
  }
  .back {
    right: 100px;
  }
  .next {
    right: 20px;
  }
  .carousel__inner-slide {
    max-height: 15rem;
  }
  .slider_container {
    max-height: 18rem;
    margin-top: 2.5rem;
  }
  img {
    max-width: 100%;
    width: auto;
    height: auto;
    margin: 0 auto;
    filter: grayscale(100%);
    transition: all 300ms ease;
    max-height: 11rem;
  }
  img:hover {
    filter: none;
  }

  @media screen and (max-width: 1400px) {
    /* ul {
      max-width: 90%;
      margin: 0 auto;
    } */
  }
  @media screen and (max-width: 640px) {
    button {
      top: 50px;
    }
    .slider_container {
      margin-top: 3.5rem;
    }
  }
`;

export default ImgSlider;
