import React from 'react';
import { Box, Text, Stack, Divider, Flex, Accordion, Heading, Grid, GridItem } from '@chakra-ui/react';
import AccordionComp from './components/accordion';

const questionContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

function Faq(){
	return (
			<Box pt={20} pl={[2,2,20,40]} pb={20} pr={[4,4,20,40]}>
				
			
				<Heading bg='white' color='#e61755'>
					FAQs
				</Heading>
				<Grid 	templateRows="repeat(1, 1fr)"
		  				templateColumns="repeat(2, 1fr)"
		  				gap={[2,2,10,10]}
		  				h='auto'
		  				color='#e61755'>
					<GridItem colSpan={[2,2,1,1]}>
						<Stack direction='column' mt={20}>
							<AccordionComp Title='Question 1'
											Content={questionContent}
											/>
							<AccordionComp Title='Question 2'
											Content={questionContent}
											/>
							<AccordionComp Title='Question 3'
											Content={questionContent}
											/>
							<AccordionComp Title='Question 4'
											Content={questionContent}
											/>
							<AccordionComp Title='Question 5'
											Content={questionContent}
											/>
						</Stack>
					</GridItem>
					<GridItem colSpan={[2,2,1,1]}>
						<Stack direction='column' mt={[2,2,20,20]}>
								<AccordionComp Title='Question 6'
												Content={questionContent}
												/>
								<AccordionComp Title='Question 7'
												Content={questionContent}
												/>
								<AccordionComp Title='Question 8'
												Content={questionContent}
												/>
								<AccordionComp Title='Question 9'
												Content={questionContent}
												/>
								<AccordionComp Title='Question 10'
												Content={questionContent}
												/>
							</Stack>
					</GridItem>
				</Grid>	
			</Box>
		)
}

export default Faq;