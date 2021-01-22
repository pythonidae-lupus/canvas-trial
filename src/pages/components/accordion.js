import React from 'react';
import {
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";

function AccordionComp(props){
return (
  <Accordion allowMultiple >
  <AccordionItem>
    <AccordionButton _focus={{ outline: 0}}>
      <Box flex="1" textAlign="left">
        {props.firstTitle}
      </Box>
      <AccordionIcon />
    </AccordionButton>
    <AccordionPanel pb={4}>
      {props.firstContent}
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <AccordionButton _focus={{ outline: 0}}>
      <Box flex="1" textAlign="left">
        {props.secondTitle}
      </Box>
      <AccordionIcon />
    </AccordionButton>
    <AccordionPanel pb={4}>
      {props.secondContent}
    </AccordionPanel>
  </AccordionItem>
</Accordion>
)}

export default AccordionComp;