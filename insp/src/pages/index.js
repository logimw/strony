import React from "react"
import "../scss/global.scss"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Tile from "../components/Tile"
import SEO from "../components/SEO"

const index = () => {
  return (
    <Layout>
      <SEO title="Strona główna inspiracji" description="Inpiracje" />
      <Hero bolded="nas" title="Zainspiruj" />
      <div className="flex items-center">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-around">
            <div>
              <Tile text="Dodaj" to="dodaj-inspiracje" />
            </div>
            <div>
              <Tile text="Zobacz" to="sprawdz" />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default index
