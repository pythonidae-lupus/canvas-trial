import React from 'react';
import { Box, Text, Image } from '@chakra-ui/react';
import facePic from './paintings/facepic.jpg';

function FaceOfTheWeek () {
	return (
			<Image src={facePic} alt='face of the week'/>
		)
}

export default FaceOfTheWeek;