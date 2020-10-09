import React, { useRef, useEffect } from "react"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Thumbnail from "../components/Thumbnail"
import SEO from "../components/SEO"
import gsap from "gsap"
import FixedLink from "../components/FixedLink"

const SprawdzPage = () => {
  let wrapper = useRef(null)

  useEffect(() => {
    let section = wrapper.children
    gsap.fromTo(
      section,
      { y: "+=100", opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.1,
        lazy: true,
      }
    )
  }, [])
  return (
    <Layout>
      <SEO
        title="Sprawdź inspiracje"
        description="Zobacz istniejące inpiracje"
      />
      <Hero title="Sprawdź" bolded="inspiracje" />
      <div className="container mx-auto flex justify-center mb-16">
        <a className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow text-center -mt-10 z-40" href="https://www.neonail.pl/inspiracje/" target="_blank" rel="noreferrer">Zobacz wszystkie</a>
      </div>
      <div className="container mx-auto">
        <div
          ref={el => {
            wrapper = el
          }}
          className="grid grid-cols-1 gap-4 md:grid-cols-2"
        >
          <Thumbnail category="jesień" img="atumn" url="https://www.neonail.pl/inspiracje/?plum_sym=jesien&author="/>
          <Thumbnail category="zima" img="winter" url="https://www.neonail.pl/inspiracje/?plum_sym=zima&author="/>
          <Thumbnail category="wiosna" img="spring" url="https://www.neonail.pl/inspiracje/?plum_sym=wiosna&author="/>
          <Thumbnail category="lato" img="summer" url="https://www.neonail.pl/inspiracje/?plum_sym=lato&author=" />
        </div>
      </div>
      <FixedLink />
    </Layout>
  )
}

export default SprawdzPage
