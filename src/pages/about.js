import React from 'react';
import { Box, Text, Heading, Image, VStack, Flex, Grid, GridItem, Divider } from'@chakra-ui/react';
import canvas from './components/paintings/canvas.jpg';

function About(){
	return(
		<Flex mt={10}>	
		<Grid 	templateRows="repeat(1, 1fr)"
  				templateColumns="repeat(3, 1fr)"
  				gap={4}
  				h='auto'
  				pl={[0,0, 4,10, 40]}
  				>
		<GridItem colSpan={1} display={{base: "none",xl:'block'}}>
			<Box >
				<Image src={canvas} alt='about-us'/>
			</Box>
			</GridItem>
			<GridItem colSpan={[3,3,3,3,2]}>
			
			<VStack align='left' ml={[2,2,2,2,10]} mr={[1,1,4,10,20]} border='1px' borderColor='#e61755' borderRadius='5px'  pl={[2,2,4,10,10]}>
			<Heading color='#e61755'>
				About
			</Heading>
			<Divider orientation='horizontal' w='20%'/>
			<Box >
			<Text align='justify' mr={[1,1,4,4,10]} color='black' fontSize={[10,15,15,20]}>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
				Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
				Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
				Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
				Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
				Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
				Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
				<br/>
				<br/>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
				Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
				Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
				Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
				Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
				Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
				Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna  

			</Text>
			</Box>
			</VStack>
			</GridItem>
			</Grid>
		</Flex>
		)
}

export default About;