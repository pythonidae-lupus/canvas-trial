import React from 'react';
import { Box, Flex, Text, Divider, Heading, List, ListItem, ListIcon, Image, Grid, GridItem } from '@chakra-ui/react';
import steps from './components/paintings/steps.jpg';
import { FaCheckCircle } from 'react-icons/fa';

function Steps() {
	return (
		<Box bg='#e61755' mt={20}>
			<Grid templateRows="repeat(1, 1fr)"
  				templateColumns="repeat(2, 1fr)"
  				gap={4}
  				h='auto'
  				>
			<GridItem colSpan={[2,2,2,2,1]} pb={20}>
			<Heading color='white' ml={[2,2,2,40]} pt={10} fontSize={[30,30,40]}>
				Steps to participate
			</Heading>
			<Divider orientation='horizontal' w="30%" ml={[2,2,40,40]}/>
			<List spacing={3} color='white' ml={[4,4,4,60]} mt={20} fontSize={[10,15,20,20,20]}>
			  <ListItem>
				  <Flex>
				  	<Box pt={[1,1,3]}>
				    	<FaCheckCircle/>
				    </Box>
				    <Text pl={[5,5,10]}>
				    	Lorem ipsum dolor sit amet, consectetur adipisicing elit
				  	</Text>
				  </Flex>
			  </ListItem>
			  <ListItem pt={5}>
			    <Flex>
			    	<Box pt={[1,1,3]}>
			    		<FaCheckCircle/>
			    	</Box>
			    	<Text pl={[5,5,10]}>
			    		Lorem ipsum dolor sit amet, consectetur adipisicing elit
			  		</Text>
			  	</Flex>
			  </ListItem>

			  <ListItem pt={5}>
			    <Flex>
				    <Box pt={[1,1,3]}>
				    	<FaCheckCircle/>
				    </Box>
				    <Text pl={[5,5,10]}>
				    	Lorem ipsum dolor sit amet, consectetur adipisicing elit
				  	</Text>
			  	</Flex>
			  </ListItem>
			  {/* You can also use custom icons from react-icons */}
			  
			  <ListItem pt={5}>
			    <Flex>
			    	<Box pt={[1,1,3]}>
			    		<FaCheckCircle/>
			    	</Box>
			    	<Text pl={[5,5,10]}>
			    		Lorem ipsum dolor sit amet, consectetur adipisicing elit
			  		</Text>
			  	</Flex>
			  </ListItem>
			  
			  <ListItem pt={5}>  
			    <Flex>
				    <Box pt={[1,1,3]}>
				    	<FaCheckCircle/>
				    </Box>
				    <Text pl={[5,5,10]}>
				    	Lorem ipsum dolor sit amet, consectetur adipisicing elit
				  	</Text>
			  	</Flex>
			  </ListItem>
			  
			  <ListItem pt={5}>  	
			    <Flex>
				    <Box pt={[1,1,3]}>
				    	<FaCheckCircle/>
				    </Box>
				    <Text pl={[5,5,10]}>
				    	Lorem ipsum dolor sit amet, consectetur adipisicing elit
				  	</Text>
			  	</Flex>
			  </ListItem>

		</List>
		</GridItem>
		<GridItem colSpan={1} display={{base: "none",xl:"block",lg:'none'}} h='100%'>
			<Box >
				<Image src={steps} alt='steps'/>
			</Box>
			</GridItem>
		</Grid>
		</Box>
		)
}

export default Steps;