import React, { useRef, useEffect } from "react"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Photos1 from "../components/Photos/Photos1"
import Photos1a from "../components/Photos/Photos1a"
import Photos1b from "../components/Photos/Photos1b"
import Photos2 from "../components/Photos/Photos2"
import Photos2a from "../components/Photos/Photos2a"
import Photos3 from "../components/Photos/Photos3"
import Photos4 from "../components/Photos/Photos4"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import SEO from "../components/SEO"
import FixedLink from "../components/FixedLink"
const content = require("../constants/content.json")

const AbcInspiracji = () => {
  gsap.registerPlugin(ScrollTrigger)
  let wrapper = useRef(null)

  useEffect(() => {
    let sections = wrapper.children
    for (const element of sections) {
      gsap.fromTo(
        element.children,
        { y: "+=100", opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          scrollTrigger: {
            trigger: element,
            start: "-10% 50%",
            markers: false,
          },
          lazy: true,
        }
      )
    }
  }, [])
  return (
    <Layout>
      <SEO
        title="Zapoznaj się z poradnikiem dodawania inspiracji"
        description="Zobacz jak dodawać inpiracje stylizacji malowania paznokci."
      />
      <Hero title="ABC" bolded="Inspiracji"/>
      <div className="md:container mx-auto">
        <div className="title-inspire">
          <h2 className="title-inspire__title">Jak zrobić zdjęcia manicure?</h2>
          <span className="title-inspire__subtitle">
            PORADNIK DO NATURALNYCH ZDJĘĆ Z UŻYCIEM TELEFONU
          </span>
        </div>
        <div
          ref={el => {
            wrapper = el
          }}
        >
          <div className="photos">
            <div className="photos__text">
              <h3 className="photos__title"><span>{content[0].title}</span></h3>
              <p className="photos__description">{content[0].description}</p>
            </div>
            <Photos1 />
            <div className="photos__text">
              <p className="photos__description">
                {content[0].secondDescription}
              </p>
            </div>
            <Photos1a />
            <div className="photos__text">
              <p className="photos__description">
                {content[0].thirdDescription}
              </p>
            </div>
            <Photos1b />
          </div>
          <div className="photos">
            <div className="photos__text">
              <h3 className="photos__title"><span>{content[1].title}</span></h3>
              <p className="photos__description">{content[1].description}</p>
            </div>
            <Photos2 />
            <div className="photos__text">
              <p className="photos__description">
                {content[1].secondDescription}
              </p>
            </div>
            <Photos2a />
          </div>
          <div className="photos">
            <div className="photos__text">
              <h3 className="photos__title"><span>{content[2].title}</span></h3>
              <p className="photos__description">{content[2].description}</p>
            </div>
            <Photos3 />
          </div>
          <div className="photos">
            <div className="photos__text">
              <h3 className="photos__title"><span>{content[3].title}</span></h3>
              <p className="photos__description">{content[3].description}</p>
            </div>
            <Photos4 />
          </div>
        </div>
      </div>

      <FixedLink />
    </Layout>
  )
}

export default AbcInspiracji
