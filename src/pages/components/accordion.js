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
  <Accordion pt=  {2} allowMultiple >
  <AccordionItem>
    <AccordionButton _focus={{ outline: 0}}>
      <Box flex="1" textAlign="left">
        {props.Title}
      </Box>
      <AccordionIcon />
    </AccordionButton>
    <AccordionPanel pb={4}>
      {props.Content}
    </AccordionPanel>
  </AccordionItem>

  
</Accordion>
)}

export default AccordionComp;

// <AccordionItem>
//     <AccordionButton _focus={{ outline: 0}}>
//       <Box flex="1" textAlign="left">
//         {props.secondTitle}
//       </Box>
//       <AccordionIcon />
//     </AccordionButton>
//     <AccordionPanel pb={4}>
//       {props.secondContent}
//     </AccordionPanel>
//   </AccordionItem>