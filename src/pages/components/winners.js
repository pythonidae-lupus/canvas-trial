import React from 'react';
import {
  useDisclosure,
  Button,
  Modal,
  Image,
  Box,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react"

function Winners(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div>
    {console.log(props.imgSrc)}
      <Button   onClick={onOpen} 
                bg='#e61755' borderRadius='1px' 
                color='white' w='100%' mt={8} 
                _hover={{background:'white', color:'#e61755'}} 
                _focus={{ outline: 0}}
                >
                {props.title}
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{props.title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          <Box>
            <Image src={props.imgSrc} alt={props.title} />
          </Box>
          </ModalBody>
          <ModalFooter>
            <Button bg="#e61755" color='white' mr={3} onClick={onClose} _focus={{ outline: 0}} _hover={{background:'#e61755', color:'white'}}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  )
}

export default Winners;