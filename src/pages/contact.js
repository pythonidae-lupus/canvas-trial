import React from 'react';
import { Box, Stack, Flex, Heading, Text, List, ListItem, ListIcon } from '@chakra-ui/react';
import { FaMailBulk, FaPhoneAlt, FaInstagramSquare, FaFacebook, FaWhatsapp } from 'react-icons/fa'
function Contact() {
	return (
			<Box pt={20} pl={[2,2,20,40]} pb={20} pr={[2,2,20,40]}>
				<Heading color='#e61755'>
					Contact
				</Heading>

				<Text mt={[2,2,5,10]} fontSize={[10,10,15,20]}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
					Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
					Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
				</Text>
				<List mt={[2,2,5,10]} fontSize={[10,10,15,20]} color='#e61755'>
					<ListItem>
						<ListIcon as={FaMailBulk} color='#e61755'/>
							abc@xyzmail.com
					</ListItem>
					<ListItem>
						<ListIcon as={FaInstagramSquare} color='#e61755'/>
							username_nameuser
					</ListItem>
					<ListItem>
						<ListIcon as={FaFacebook} color='#e61755'/>
							fb_username
					</ListItem>
					<ListItem>
						<ListIcon as={FaWhatsapp} color='#e61755'/>
							abc_123
					</ListItem>
				</List>

			</Box>
		)
}

export default Contact;