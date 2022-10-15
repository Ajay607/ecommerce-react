import React, { useContext } from 'react'
import HeroSection from './Components/HeroSection';
import {AppContext} from "./context/productContext"

const About = () => {
  const {myName} = useContext(AppContext);
  console.log("my_name", myName)
  const data = {
    name: "Ajay Ecommerce"
  }
  return (
    <>
      {myName}
      <HeroSection myData={data} />
    </>
  )
}

export default About;
