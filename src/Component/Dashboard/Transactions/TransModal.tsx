import React from 'react'
import {
  Modal,Center,
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

      <Modal isOpen={isOpen} onClose={onClose} size="2xl"  >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader mt="70px">
            <Heading as="h2" ml='60px' size="md" noOfLines={1} color="#1F1F1F">
              Transaction Details
            </Heading>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Center>
            <Box mt='40px' width="80%" height='653px' background=" rgba(7, 5, 41, 0.07)"></Box>
          </Center>
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
