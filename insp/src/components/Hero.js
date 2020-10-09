import React from "react"

const Hero = ({ title, bolded }) => {
  return (
    <div className="w-full">
      <div className="heading">
        <h1 className="heading__title">{title} <span className="font-medium">{bolded}</span></h1>
      </div>
    </div>
  )
}

export default Hero
