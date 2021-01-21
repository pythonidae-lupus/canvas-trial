import React from 'react';
import { Box, Heading, Flex, Text } from "@chakra-ui/react";
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
  Button
} from "@chakra-ui/react"
// import { FaAngleDown } from 'react-icons/fa';

function MenuBar(props) {
  const [show, setShow] = React.useState(false);
  return (
    <div>
<Menu>
  <MenuButton as={Button}>
    <Box display={{ base: "block", lg: "none" }} _hover = {{
            background : "#white",
            color:"#e61755"
          }}>
        <svg
          fill="white"
          width="20px"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </Box>
  </MenuButton>
  <MenuList>
    <MenuItem >Home</MenuItem>
        <MenuItem>Results</MenuItem>
        <MenuItem>About</MenuItem>
        <MenuItem >Steps</MenuItem>
        <MenuItem >Rules</MenuItem>
        <MenuItem>Enter</MenuItem>
        <MenuItem>Contact</MenuItem>
  </MenuList>
</Menu>
<Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      pr="1.5rem"
      pl="1.5rem"
      pd="1.5rem"
      bg="#e61755"
      color="white"
      w="100%"
      {...props}
      >
      <Flex align="center" mr={5}>
        <Heading as="h1" size="lg" letterSpacing={"-.1rem"}>
          CanvasCreations
        </Heading>
      </Flex>

      

      <Box
        display={{ base: show ? "block" : "none", lg: "flex" }}
        width={{ base: "full", lg: "auto" }}
        alignItems="center"
        flexGrow={1}
      >
        
      </Box>

      <Box
        display={{ base: show ? "block" : "none", lg: "block" }}
        mt={{ base: 4, lg: 0 }}
      >
        <Button bg="transparent" border="1px" _hover={{bg:"white",color:"#e61755"}} >
          Login
        </Button>
      </Box>
    </Flex>
    </div>
)}



// const MenuItems = ({ children }) => (
//   <Text textAlign="center" _hover = {{
//             background : " white",
//             color:"#e61755",
//           }}
          
//           height="90px"
//           pt={8}
//           mt={{ base: 4, lg: 0 }} 
//           mr={6} 
//           display="block"
          
//           fontSize="xl"
//           w="80px"
//           >
    
//       {children}
    
//   </Text>
// );

// Note: This code could be better, so I'd recommend you to understand how I solved and you could write yours better :)
const Header = (props) => {
  const [show, setShow] = React.useState(false);
  // const handleToggle = () => setShow(!show);

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      pr="1.5rem"
      pl="1.5rem"
      pd="1.5rem"
      bg="#e61755"
      color="white"
      w="100%"
      {...props}
      >
      <Flex align="center" mr={5}>
        <Heading as="h1" size="lg" letterSpacing={"-.1rem"}>
          CanvasCreations
        </Heading>
      </Flex>

      

      <Box
        display={{ base: show ? "block" : "none", lg: "flex" }}
        width={{ base: "full", lg: "auto" }}
        alignItems="center"
        flexGrow={1}
      >
        
      </Box>

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


export default MenuBar;