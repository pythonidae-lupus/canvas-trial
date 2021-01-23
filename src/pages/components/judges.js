import React from 'react';
import { Box, Text, Heading, VStack, Divider, Stack } from '@chakra-ui/react';
import {FaPaintBrush} from 'react-icons/fa';

function Judges(){
	return(
		<div>
			<Text fontSize="20px">
						JUDGES
					</Text>
					<Text fontSizw="15px">
						National Art Competition Season 1
					</Text>
					<Stack direction='row' h="86%" p={4}>
					<Divider orientation='vertical'/>
					<VStack float='left' pl={3}>
					<br/>
					<Stack direction='row'>
					<Box pt={2}>
					<FaPaintBrush/>
					</Box>
						<Text>

							Lorem Ipsum
							<br/>
							<Text as='i'>
								dolor sit amet consectetur
								<br/>
								adipiscing elit
							</Text>
						</Text>
						</Stack>
						<Divider orientation='horizontal' colorScheme='white'/>
						<Stack direction='row'>
					<Box pt={2}>
					<FaPaintBrush/>
					</Box>
						<Text>

							Lorem Ipsum
							<br/>
							<Text as='i'>
								dolor sit amet consectetur
								<br/>
								adipiscing elit
							</Text>
						</Text>
						</Stack>
						<Divider orientation='horizontal' colorScheme='white'/>
						<Stack direction='row'>
					<Box pt={2}>
					<FaPaintBrush/>
					</Box>
						<Text>

							Lorem Ipsum
							<br/>
							<Text as='i'>
								dolor sit amet consectetur
								<br/>
								adipiscing elit
							</Text>
						</Text>
						</Stack>
						<Divider orientation='horizontal' colorScheme='white'/>
						<Stack direction='row'>
					<Box pt={2}>
					<FaPaintBrush/>
					</Box>
						<Text>

							Lorem Ipsum
							<br/>
							<Text as='i'>
								dolor sit amet consectetur
								<br/>
								adipiscing elit
							</Text>
						</Text>
						</Stack>
					</VStack>
					</Stack>
					</div>
		)
}

export default Judges;