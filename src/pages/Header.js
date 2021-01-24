import React from "react";
import { Box, Heading, Flex, Text, Button, HStack } from "@chakra-ui/react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuIcon,
  MenuCommand,
  MenuDivider,
} from "@chakra-ui/react"
import ScrollIntoView from 'react-scroll-into-view';

const MenuItems = ({ children }) => (
  <Text 
          textAlign="center" 
          _hover = {{ background : " white",color:"#e61755" }}
          height="90px"
          pt={8}
          mt={{ base: 4, lg: 0 }} 
          mr={6} 
          display="block"
          fontSize="xl"
          w="80px">
      {children}
  </Text>
);



// Note: This code could be better, so I'd recommend you to understand how I solved and you could write yours better :)
const Header = (props) => {
  const [show, setShow] = React.useState(false);
  const handleToggle = () => setShow(!show);
  const links = ['Home', 'Results', 'About', 'Steps', 'Rules', 'Enter', 'Contact', 'Login']

  //creating menuitem for the dropdown
  const navLink =()=> {
    
    return links.map((link)=>{
      return (
        <MenuItem key={link} _hover={{background:"white", color:"#e61755"}} _focus={{outline:0}}>
          <ScrollIntoView selector={'#'+  link}>
            {link}
          </ScrollIntoView>
        </MenuItem> 
      )
    })
  };

  const navLinkLg =()=> {
    return links.map((link)=>{
      return (
        <MenuItems key={link+'1'} _hover={{background:"white", color:"#e61755"}} _focus={{outline:0}}>
          <ScrollIntoView selector={'#'+link}>
            {link}
          </ScrollIntoView>
        </MenuItems> 
      )
    })

    
  };
  return (
    <Flex
      w="100%"
      as="nav"
      pr="1.5rem"
      pl="1.5rem"
      pd="1.5rem"
      wrap="wrap"
      bg="#e61755"
      color="white"
      align="center"
      position="relative"
      justify="space-between"
      {...props}
      >
      <Flex align="center" mr={5}>
        <Heading as="h1" size="lg" letterSpacing={"-.1rem"}>
          CanvasCreations
        </Heading>
      </Flex>
      <Box
        display={{ base: "none",lg:"block" }}
        width={{ base: "full", lg: "auto" }}
        alignItems="center"
        flexGrow={1}
      >
        <HStack>
          {navLinkLg()}
        </HStack>
      </Box>
      

      <Menu 
        display = {{ 
          base: show ? "block" : "none", 
          lg: "flex" 
        }}
        width = {{ 
          base: "full", 
          lg: "auto" 
        }}
        alignItems="center"
        flexGrow={1}
      >
      
        <MenuButton 
          background="#e61755" 
          borderRadius="1px"
          as={Button} 
          display = {{ base: "block", lg : "none"}} 
          _hover = {{ bg : "white", color:"#e61755" }}
          _expanded={{ bg: "white", color:"#e61755" }}
          _focus={{ outline: 0}}
        >
          Menu
        </MenuButton>
        
        <MenuList 
          borderRadius="1px" 
          background="#e61755" 
          color="white"
          display = {{lg:"none"}}
          _focus={{ outline: 0}}
        >
          {navLink()}
        </MenuList>
      
      </Menu>

      <Box
        display={{ base: show ? "block" : "none", lg: "block" }}
        mt={{ base: 4, lg: 0 }}
      >
        <Button bg="transparent" border="1px" _hover={{bg:"white",color:"#e61755"}} >
          Login
        </Button>
      </Box>
    </Flex>
  )
};

export default Header;

//line 64
// <Box display={{ base: "block", lg: "none" }} onClick={handleToggle} _hover = {{
            // background : "#white",
            // color:"#e61755"
          // }}>
        // <svg
          // fill="white"
          // width="20px"
          // viewBox="0 0 20 20"
          // xmlns="http://www.w3.org/2000/svg"
        // >
          // <title>Menu</title>
          // <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        // </svg>
      // </Box>

//replace line 66
  // <Box
  //       display={{ base: show ? "block" : "none", lg: "flex" }}
  //       width={{ base: "full", lg: "auto" }}
  //       alignItems="center"
  //       flexGrow={1}
        
  //     >
  //       <MenuItems  >Home</MenuItems>
  //       <MenuItems>Results</MenuItems>
  //       <MenuItems>About</MenuItems>
  //       <MenuItems >Steps</MenuItems>
  //       <MenuItems >Rules</MenuItems>
  //       <MenuItems>Enter</MenuItems>
  //       <MenuItems>Contact</MenuItems>
  //     </Box>