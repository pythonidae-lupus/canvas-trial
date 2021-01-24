import React from 'react';
import { Box, Text, Heading, Grid, GridItem, Divider } from '@chakra-ui/react';
import Winners from './components/winners';
import AccordionComp from './components/accordion';
import Judges from './components/judges';
import ArtList from './components/artList';

function Results() {

 return(
 		<Box mt="100px" h='auto'>
	 		<Grid	
	  				templateRows="repeat(2, 1fr)"
	  				templateColumns="repeat(8, 1fr)"
	  				gap={4}
	  				pl='10%'
	  				textAlign='justify'
	  				bg='#e61755'
	  				h='auto'
	  				pb={35}>
				<GridItem colSpan={7} rowSpan={2}
				 pt={10}
				 pb={20}>
			 		<Heading color="white">
			 			Results
					</Heading>
					<Divider orientation='horizontal'/>
					<Text color='white' fontSize={[10,15,20]}>
						<br/>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
						Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
						Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
						Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
						<br/>
						<br/>
						<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
						Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
						olore eu fugiat nulla pariatur. 
						Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
						</p>
					</Text>
				</GridItem>

				<GridItem colSpan={3} color='white' display={{base: "none",lg:"block"}} >
					{Judges()}
				</GridItem>
				
				<GridItem colSpan={4} border='2px' borderColor='white' align='center' display={{base: "none",lg:"block"}}>
					{ArtList()}
				</GridItem>
				
				<GridItem colSpan={3} w='80vw' color='white' display={{ base: "block",lg:"none" }}>
					<AccordionComp 	Title='Judges' 
									Content={Judges()}
								/> 
					<AccordionComp	Title='Winners' 
									Content={ArtList()}
									/>
				</GridItem>
			</Grid>
 		</Box>
 	)
}

export default Results;