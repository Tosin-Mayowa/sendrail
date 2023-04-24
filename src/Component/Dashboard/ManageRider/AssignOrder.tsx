import {
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Image,
  Flex,Box
} from '@chakra-ui/react'
import React from 'react';
import Transit from '../../../Asset/Rider/transit.png'
export const AssignOrder=({item})=>{
      const { isOpen, onOpen, onClose } = useDisclosure();
return (
  <>
    <Button
      variant="link"
      height="3.0625rem"
     
      borderRadius="10px 10px 0px 0px"
      fontSize="14px"
      color="text.300"
      lineHeight="17px"
      _hover={{
        textDecoration: 'none'
      }}
      onClick={onOpen}>
      Assign to order
    </Button>

    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader></ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Flex>
            {/* main box */}
            <Flex flexDir="column" width="41.625rem">
              {/* header wrapper*/}
              <Flex width="41.625rem" height="13.625rem">
                {/* left flex */}
                <Flex flexDir="column">
                  <Flex width="18.875rem" height="5.5rem" justifyContent="space-between">
                    <Flex width="5.0625rem" height="5.5rem" borderRadius="20px" border="1px solid #AAA">
                      <Image
                        src=""
                        alt="jpg"
                        objectFit="cover"
                        width="5.0625rem"
                        height="5.5rem"
                        borderRadius="20px"
                      />
                    </Flex>
                    <Flex flexDir="column" width="12.9375rem" height="3.125rem">
                      <Text
                        // alignSelf="center"
                        flexShrink="0"
                        color="#000"
                        fontWeight="500"
                        fontSize="28px"
                        lineHeight="17px">
                        {item?.name}
                      </Text>
                      <Flex justifyContent="space-between" width="7.125rem" height="1.0625rem">
                        <Box width="0.9375rem" height="0.9375rem" borderRadius="50%" background="#079638"></Box>
                        <Text
                          // alignSelf="center"
                          flexShrink="0"
                          color="text.50"
                          fontWeight="450"
                          fontSize="20px"
                          lineHeight="17px">
                          {item?.status}
                        </Text>
                      </Flex>
                    </Flex>
                  </Flex>
                  {/* start line bx */}
                  <Flex justifyContent="space-between" width="17.75rem" height="2.8125rem">
                    <Flex flexDir="column" width="5.0625rem" height="2.8125rem">
                      <Image src={Transit} alt="" width="1rem" height="1rem" />
                      <Box width="5.0625rem" border="5px solid #000"></Box>
                      <Text
                        // alignSelf="center"
                        flexShrink="0"
                        color="#000"
                        fontWeight="450"
                        fontSize="12px"
                        lineHeight="17px"
                        textTransform="capitalize">
                        In transit
                      </Text>
                    </Flex>
                    <Flex flexDir="column" width="5.0625rem" height="2.8125rem">
                      <Box width="5.0625rem" border="5px solid #AAAAAA"></Box>
                      <Text
                        // alignSelf="center"
                        flexShrink="0"
                        color="#000"
                        fontWeight="450"
                        fontSize="12px"
                        lineHeight="17px"
                        textTransform="capitalize">
                        Picked-up
                      </Text>
                    </Flex>
                    <Flex flexDir="column" width="5.0625rem" height="2.8125rem">
                      <Box width="5.0625rem" border="5px solid #AAAAAA"></Box>
                      <Text
                        // alignSelf="center"
                        flexShrink="0"
                        color="#000"
                        fontWeight="450"
                        fontSize="12px"
                        lineHeight="17px"
                        textTransform="capitalize">
                        Delivered
                      </Text>
                    </Flex>
                  </Flex>
                  {/* end line bx */}
                </Flex>
                {/*end left flex */}
                {/* right flex */}
                <Flex></Flex>
                {/*end right flex */}
              </Flex>
              {/*end header */}

              {/* content wrapper */}
              <Flex></Flex>
              {/*end content wrapper */}
            </Flex>
            {/* end main box */}
          </Flex>
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