import React from 'react';
// import { Box, Text, Heading, Grid, GridItem, VStack, Divider, Stack } from '@chakra-ui/react';
import Winners from './winners';
import pic1 from './paintings/pic1.jpg';
import pic2 from './paintings/pic2.jpg';
import pic3 from './paintings/pic3.jpg';
import pic4 from './paintings/pic4.jpg';
import pic5 from './paintings/pic5.jpg';
import pic6 from './paintings/pic6.jpg';



function ArtList () {
	return (
			<div>
				<Winners imgSrc={pic1} title='1st prize'/>
				<Winners imgSrc={pic2} title='2nd prize'/>
				<Winners imgSrc={pic3} title='3rd prize'/>
				<Winners imgSrc={pic4} title='4th prize'/>
				<Winners imgSrc={pic5} title='5th prize'/>
				<Winners imgSrc={pic6} title='6th prize'/>
			</div>
		)
}

export default ArtList;