import React from 'react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,Box,
  ModalBody,
  ModalCloseButton,
  Button,Heading,
  useDisclosure
} from '@chakra-ui/react';
import RecievedImg from '../../../Asset/Transactions/received.png'
import SentImg from '../../../Asset/Transactions/sent.png'
export default function TransModal({transaction}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
 

  return (
    <>
      <Button
        onClick={onOpen}
        variant="link"
        color="#F9C567"
        mt="0px"
        ml="10px"
        fontWeight="600"
        fontSize="16px"
        lineHeight="29px"
        _hover={{
          textDecoration: 'none'
        }}>
        View
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} size='3xl'>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader mt='40px'>
            <Heading as="h2" size="md" noOfLines={1} color='#1F1F1F'>
              Transaction Details
            </Heading>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box>

            </Box>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
