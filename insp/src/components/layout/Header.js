import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { GrCart } from 'react-icons/gr'


const Header = () => {
  return (
    <div className="flex bg-white border-b border-gray-200 fixed top-0 inset-x-0 z-50 h-16 items-center md:justify-center">
      <AniLink className="ml-4 md:ml-0 p-4" paintDrip to="/" color="white">
        <img className="h-6 md:h-10" src={require("../../images/logo.png")} alt="" />
      </AniLink>
      <div className="absolute right-0">
        <a href="https://neonail.pl/" target="_blank" rel="noopener noreferrer" className="shop-link">
          <div className="mr-4 md:mr-20 flex items-center border-link hover:bg-pink-200">
            <figure>
              <GrCart />
            </figure>
            <span className="ml-5 mt-1">E-sklep</span>
          </div>
        </a>
      </div>
    </div>
  )
}

export default Header
