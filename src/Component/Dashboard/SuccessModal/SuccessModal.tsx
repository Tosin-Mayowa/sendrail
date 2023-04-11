import React from 'react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Flex,
  Text,
  Image,Box
} from '@chakra-ui/react'
import Success from '../../../Asset/Settings/success.png'

const SuccessModal = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Button
        lineHeight="22px"
        fontWeight="500"
        fontSize="14px"
        color="#595956"
        padding="8px 24px"
        flexShrink="0"
        width="10.2rem"
        height="2.375rem"
        background="rgba(6, 0, 137, 0.15)"
        onClick={onOpen}
        borderRadius="8px "
        _hover={{
          background: 'rgba(6, 0, 137, 0.15)'
        }}>
        Done
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader></ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box
              width="32.5rem"
              height="18.4rem"
              padding="0px"
              margin="0px"
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              flexDir="column">
              <Flex width="32.5rem" height="13rem" justifyContent="space-between" flexDir="column">
                <Flex
                  width="6.25rem"
                  height="7rem"
                  alignSelf="center"
                  flexDir="column"
                  justifyContent="space-between">
                  <Image
                    alignSelf="center"
                    src={Success}
                    alt=""
                    width="54.81px"
                    height="54.75px"
                    objectFit="cover"
                  />
                  <Text
                    fontWeight="700"
                    fontSize="22.7158px"
                    lineHeight="27px"
                    textAlign="center"
                    color="#27AE60"
                    flexShrink="0">
                    Success
                  </Text>
                </Flex>
                <Flex flexDir="column" width="32.5rem" height="4.4375rem">
                  <Text
                    fontWeight="500"
                    fontSize="18px"
                    lineHeight="22px"
                    textAlign="center"
                    color="#4A4A4A"
                    flexShrink="0">
                    Thank you for your request.
                  </Text>
                  <Text
                    fontWeight="500"
                    fontSize="18px"
                    lineHeight="22px"
                    textAlign="center"
                    color="#4A4A4A"
                    flexShrink="0">
                    We are working hard to find the best services for you.
                  </Text>
                  <Text
                    justifySelf="flex-end"
                    flexShrink="0"
                    fontWeight="500"
                    fontSize="18px"
                    lineHeight="22px"
                    textAlign="center"
                    color="#626262">
                    Changes applied.
                  </Text>
                </Flex>
              </Flex>
              <Flex>
                <Button
                  lineHeight="22px"
                  fontWeight="500"
                  fontSize="14px"
                  color="#fff"
                  padding="8px 59px"
                  flexShrink="0"
                  width="11.25rem"
                  height="2.375rem"
                  background=" #070529"
                  onClick={onOpen}
                  borderRadius="8px "
                  _hover={{
                    background: ' #070529'
                  }}>
                  Continue
                </Button>
              </Flex>
            </Box>
          </ModalBody>

          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default SuccessModal
