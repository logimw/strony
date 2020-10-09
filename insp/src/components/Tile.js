import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import style from "./tile.module.scss"
import { BsSearch, BsPlus, BsCamera } from "react-icons/bs"

const Tile = ({ text, to }) => {
  if (text === "Zobacz") {
    return (
      <div className={`${style.tile} mt-5 lg:mt-0`}>
        <div className={style.tile__box}>
          <AniLink cover to={`/${to}`} bg="white">
            <div className={`${style.tile__content} bg-pink-300`}>
              <div className={style.tile__contentBox}>
                <figure className={style.tile__ico}>
                  <BsSearch />
                </figure>
                <h3 className={style.tile__heading}>
                  <span className={style.tile__title}>{text}</span>
                  <span className={style.tile__subtitle}>Inspiracje</span>
                </h3>
              </div>
            </div>
          </AniLink>
        </div>
      </div>
    )
  } else if (text === "Dodaj") {
    return (
      <div className={style.tile}>
        <div className={style.tile__box}>
          <AniLink cover to={`/${to}`} bg="#ffaab7">
            <div className={`${style.tile__content} bg-pink-300`}>
              <div className={style.tile__contentBox}>
                <figure className={style.tile__ico}>
                  <BsPlus />
                </figure>
                <h3 className={style.tile__heading}>
                  <span className={style.tile__title}>{text}</span>
                  <span className={style.tile__subtitle}>Inspiracje</span>
                </h3>
              </div>
            </div>
          </AniLink>
        </div>
      </div>
    )
  } else {
    return (
      <div className={`${style.tile} mb-8`}>
        <div className={style.tile__box}>
          <AniLink cover to={`/${to}`} bg="#ffaab7">
            <div className={`${style.tile__content} bg-pink-300`}>
              <div className={style.tile__contentBox}>
                <figure className={style.tile__ico}>
                  <BsCamera />
                </figure>
                <h3 className={style.tile__heading}>
                  <span className={style.tile__title}>{text}</span>
                  <span className={style.tile__subtitle}>Inspiracji</span>
                </h3>
              </div>
            </div>
          </AniLink>
        </div>
      </div>
    )
  }
}

export default Tile
