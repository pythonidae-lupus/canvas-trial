import React from 'react';
import { Text, Heading, VStack, Divider, Stack } from '@chakra-ui/react';

function Judges(){
	return(
		<div>
			<Text fontSize="20px">
						JUDGES
					</Text>
					<Text>
						National Art Competition Season 1
					</Text>
					<Stack direction='row' h="86%" p={4}>
					<Divider orientation='vertical'/>
					<VStack float='left' pl={3}>
					<br/>
						<Text>
							Lorem Ipsum
							<br/>
							<Text as='i'>
								dolor sit amet consectetur
								<br/>
								adipiscing elit
							</Text>
						</Text>
						<Divider orientation='horizontal' colorScheme='white'/>
						<Text>
						Ipsum Lorem
						<br/>
							<Text as='i'>
								dolor sit amet consectetur
								<br/>
								adipiscing elit
							</Text>
						</Text>
						<Divider orientation='horizontal' colorScheme='white'/>
						<Text>
						Lopsum Irem
						<br/>
							<Text as='i'>
								dolor sit amet consectetur
								<br/>
								adipiscing elit
							</Text>
						</Text>
						<Divider orientation='horizontal' colorScheme='white'/>
						<Text>
						Irem Lopsum
						<br/>
							<Text as='i'>
								dolor sit amet consectetur
								<br/>
								adipiscing elit
							</Text>
						</Text>
					</VStack>
					</Stack>
					</div>
		)
}

export default Judges;