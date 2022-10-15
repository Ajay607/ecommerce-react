import React from 'react'
import styled from 'styled-components';
import FeatureProduct from './Components/FeatureProduct';
import HeroSection from './Components/HeroSection';
import Services from './Components/Services';
import Trusted from './Components/Trusted';
import Contact from './Contact';

const Home = () => {
  const data = {
    name: "Ajay store"
  }
  return (
    <>
      <HeroSection myData={data}  />
      <FeatureProduct />
      <Services />
      <Trusted />
      <Contact />
    </>
  )
}

export default Home;