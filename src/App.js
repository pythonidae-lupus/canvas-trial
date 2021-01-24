// import logo from './logo.svg';
import React from "react";
import './App.css';
import { SliderData } from './pages/sliderData';
// import Nav from './pages/navigation.js'
import Header from "./pages/Header";
import MenuBar from "./pages/menu"
import ImageSlider from './pages/ImageSlider';
import Results from './pages/results';
import About from './pages/about';
import Steps from './pages/howToApply';
import Faq from './pages/faq';
import Opportunity from './pages/opportunity';
import FaceOfTheWeek from './pages/components/face';
import Contact from './pages/contact';
import { ChakraProvider, CSSReset, extendTheme, theme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";


const breakpoints = createBreakpoints({sm:"320px", md:"768px", lg:"1200px",xl:"1440px"});

const newTheme = {
  ...theme,
  breakpoints,
};

function App() {
  return (
    
      
      <ChakraProvider theme={newTheme}>
        <CSSReset />

        <Header className="header"/>
        <ImageSlider slides={SliderData} />
        <Results />
        <About/>
        <Steps/>
        <Faq/>
        <Opportunity/>
        <FaceOfTheWeek/>
        <Contact/>  
      </ChakraProvider>
      
    
  );
}
 

export default App;

