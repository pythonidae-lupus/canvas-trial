// import logo from './logo.svg';
import React from "react";
import './App.css';
import { SliderData } from './pages/sliderData';
// import Nav from './pages/navigation.js'
import { theme } from "@chakra-ui/react";
import Header from "./pages/Header";
import MenuBar from "./pages/menu"
import ImageSlider from './pages/ImageSlider';
import Results from './pages/results';
import { ChakraProvider, CSSReset } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react"
import { createBreakpoints } from "@chakra-ui/theme-tools"

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
      </ChakraProvider>
      
    
  );
}
 

export default App;

