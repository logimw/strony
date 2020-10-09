import React from "react"
import Hero from "../components/Hero"
import Layout from "../components/Layout"
import Tile from "../components/Tile"
import SEO from "../components/SEO"

const dodajInspiracje = () => {
  return (
    <Layout>
      <SEO
        title="Dodaj swoją inspirację"
        description="Wypełnij formularz i dodają swoją propozycję stylizacji lub zobacz poradnik dodawania inspiracji."
      />
      <Hero title="Dodaj" bolded="inspirację"/>
      <div className="container mx-auto flex justify-around items-center flex-wrap-reverse">
        {/* <Form /> */}
        <iframe className="nnForm" id="nnForm" width="600" height="600" src="https://www.neonail.pl/_formularz-inspiracje.html"/>
        <Tile text="ABC" to="abc-inspiracji" />
      </div>
    </Layout>
  )
}

export default dodajInspiracje
