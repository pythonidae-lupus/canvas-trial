import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Box, Flex, Text, Divider, Heading, List, ListItem, ListIcon, Image, Grid, GridItem } from '@chakra-ui/react';


function Opportunity() {
	return (
			<Box bg='#e61755' pb={20}>
				<Heading color='white' ml={[2,2,2,40]} pt={10} fontSize={[30,30,40]}>
					Why you shouldn't miss this opportunity?	
				</Heading>
			<Divider orientation='horizontal' w="50%" ml={[2,2,40,40]}/>
			<List spacing={3} color='white' ml={[4,4,4,60]} mt={20} fontSize={[10,15,20,20,20]}>
			  <ListItem>
				  <Flex>
				  	<Box pt={[1,1,2]}>
				    	<FaStar/>
				    </Box>
				    <Text pl={[5,5,10]}>
				    	Lorem ipsum dolor sit amet, consectetur adipisicing elit
				  	</Text>
				  </Flex>
			  </ListItem>
			  <ListItem pt={5}>
			    <Flex>
			    	<Box pt={[1,1,2]}>
			    		<FaStar/>
			    	</Box>
			    	<Text pl={[5,5,10]}>
			    		Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur.
			  		</Text>
			  	</Flex>
			  </ListItem>

			  <ListItem pt={5}>
			    <Flex>
				    <Box pt={[1,1,2]}>
				    	<FaStar/>
				    </Box>
				    <Text pl={[5,5,10]}>
				    	Lorem ipsum dolor sit amet, consectetur adipisicing elit
				  	</Text>
			  	</Flex>
			  </ListItem>
			  {/* You can also use custom icons from react-icons */}
			  
			  <ListItem pt={5}>
			    <Flex>
			    	<Box pt={[1,1,2]}>
			    		<FaStar/>
			    	</Box>
			    	<Text pl={[5,5,10]}>
			    		Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit
			  		</Text>
			  	</Flex>
			  </ListItem>
			  
			  <ListItem pt={5}>  
			    <Flex>
				    <Box pt={[1,1,2]}>
				    	<FaStar/>
				    </Box>
				    <Text pl={[5,5,10]}>
				    	Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet.
				  	</Text>
			  	</Flex>
			  </ListItem>
			  
			  <ListItem pt={5}>  	
			    <Flex>
				    <Box pt={[1,1,2]}>
				    	<FaStar/>
				    </Box>
				    <Text pl={[5,5,10]}>
				    	Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit
				  	</Text>
			  	</Flex>
			  </ListItem>

		</List>
			</Box>
		)
}

export default Opportunity;