import React from 'react';
import ReactDOM from 'react-dom';
import { theme } from "@chakra-ui/react";
import { Box, Text, HStack, Stack, Flex, Spacer, Button } from '@chakra-ui/react';

function Nav (props) {
	const [show, setShow] = React.useState(false);
  	const handleToggle = () => setShow(!show);
	const navLink =()=> {
		const links = ['Home', 'Results', 'About', 'Steps', 'Rules', 'Enter', 'Contact', 'Login']
		return links.map((link)=>{
			return (
				<Box h="30px" key={link} 
					color="#e61755" 
					fontSize="20px" 
					textAlign="center" 
					pt="4px" 
					borderRadius="3px"
					_hover = {{
						background : "#e61755",
						color:"white"
					}}
					display={{ base: show ? "block" : "none", md: "flex" }}
			        width={{ base: "full", md: "auto" }}
			        alignItems="center"
			        flexGrow={1}>
					{link}
				</Box>
			)
		})
	};
		return (
			<Box bg="black" h="60px" 
				width="100%"
	    		// color="white"
	    		>
				<HStack>
					<Box bg="white" w="320px" h="50px" p={4} color="#e61755" fontSize="40px">
							Canvas Creations
					</Box>
					<Box display={{ base: "block", md: "none" }} onClick={handleToggle} _hover = {{
			            background : "white",
			            color:"#e61755"
			          }}>
			        <svg
			          fill="white"
			          width="12px"
			          viewBox="0 0 20 20"
			          xmlns="http://www.w3.org/2000/svg"
			        >
			          <title>Menu</title>
			          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
			        </svg>
			      </Box>
					<Spacer />
						<HStack spacing="30px">
							{navLink()}
						</HStack>
				</HStack>
			</Box>

)};

export default Nav;
