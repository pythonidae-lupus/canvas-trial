import React from 'react';
import {
  useDisclosure,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react"

function Winners() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div>
      <Button onClick={onOpen} bg='#e61755' borderRadius='1px' color='white' mt={8}>Open Modal</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            nfnforgfenoonrg
            foerignn
            noiesngpojg
            neirngperjgepjgjeg
            neirngoegoijegrgpoekgpojrgne
            ngoirnegongieg
          </ModalBody>
          <ModalFooter>
            <Button bg="#e61755" color='white' mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  )
}

export default Winners;