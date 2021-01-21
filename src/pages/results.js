import React from 'react';
import { Box, Text, Heading, Grid, GridItem, VStack } from '@chakra-ui/react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react"
import Winners from './components/winners';

function Results() {

 return(
 		<Box mt="100px">
	 		<Grid	h="200px"
	  				templateRows="repeat(2, 1fr)"
	  				templateColumns="repeat(5, 1fr)"
	  				gap={4}
	  				pl='280px'
	  				bg='#e61755'
	  				h='auto'>
				<GridItem colSpan={4}
				 pt={10}>
			 		<Heading color="white">
			 			Results
					</Heading>
					<Text color='white' fontSize='20px'>
						<br/>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
						Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
						Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
						Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
					</Text>
				</GridItem>
				<GridItem colSpan={2} color='white'>
					<Text fontSize="20px">
						JUDGES
					</Text>
					<Text>
						National Art Competition Season 1
					</Text>
					<VStack float='left' pl={3}>
						<Text>
							Lorem Ipsum
							<br/>
							<Text as='i'>
								dolor sit amet consectetur
							</Text>
						</Text>
						<Text>
						Ipsum Lorem
						<br/>
							<Text as='i'>
								dolor sit amet consectetur
							</Text>
						</Text>
						<Text>
						Lopsum Irem
						<br/>
							<Text as='i'>
								dolor sit amet consectetur
							</Text>
						</Text>
						<Text>
						Irem Lopsum
						<br/>
							<Text as='i'>
								dolor sit amet consectetur
							</Text>
						</Text>
					</VStack>
				</GridItem>
				<GridItem colSpan={2} border='2px' borderColor='white' align='center'>
					<Winners/>
					<Winners/>
					<Winners/>
					<Winners/>
					<Winners/>
					<Winners/>
				</GridItem>
			</Grid>
 		</Box>
 	)
}

export default Results;