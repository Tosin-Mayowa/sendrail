import React,{useState} from 'react'
import {
  Image,
  Modal,
  Center,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  Text,
  Flex,
  ModalFooter,
  Box,
  ModalBody,
  ModalCloseButton,
  Input,
  Button,
  InputGroup,
  FormControl,
  FormLabel,
  useDisclosure
} from '@chakra-ui/react'
import eyeImg from "../../../Asset/Settings/eye.png"
export default function AccountModal() {
  const { isOpen, onOpen, onClose } = useDisclosure()
const [noResponse,] =useState<boolean>(true)
  return (
    <>
      <Button
        onClick={onOpen}
        padding="8px 24px"
        width="154px"
        height="38px"
        background="rgba(7, 5, 41, 0.9)"
        borderRadius="8px"
        fontWeight="500"
        fontSize="14px"
        lineHeight="22px"
        color="#FFFFFF"
        mt="32px"
        _hover={{
          background: 'rgba(7, 5, 41, 0.9)'
        }}>
        Add An Account
      </Button>
      <Modal isOpen={isOpen} onClose={onClose} size="2xl" isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader></ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Center>
              {!noResponse ? (
                <Box
                  width="80%"
                  display="flex"
                  flexDirection="column"
                  justifyContent="center"
                  alignItems="center"
                  padding="32px 48px"
                  boxSizing="border-box"
                  background="rgba(7, 5, 41, 0.07)"
                  borderRadius="20px">
                  <Flex flexDir="column" alignItems="center">
                    <Center>
                      <Text color="#1F1F1F" fontWeight="500" fontSize="18px" lineHeight="22px">
                        Add Account
                      </Text>
                    </Center>

                    <Flex justifyContent="space-between" mt="20px">
                      <FormControl>
                        <FormLabel
                          color=" #ABA7A7"
                          fontWeight="500"
                          fontSize="18px"
                          lineHeight="22px">
                          Bank Account
                        </FormLabel>
                        <InputGroup>
                          <Input
                            alignItems="center"
                            width="100%"
                            height="54px"
                            background="#FFFFFF"
                            borderRadius="4px"
                          />
                        </InputGroup>
                      </FormControl>

                      <FormControl ml="60px">
                        <FormLabel
                          color=" #ABA7A7"
                          fontWeight="500"
                          fontSize="18px"
                          lineHeight="22px">
                          Account Number
                        </FormLabel>
                        <InputGroup>
                          <Input
                            alignItems="center"
                            width="100%"
                            height="54px"
                            background="#FFFFFF"
                            borderRadius="4px"
                          />
                        </InputGroup>
                      </FormControl>
                    </Flex>
                    <Flex justifyContent="space-between" mt="20px">
                      <FormControl>
                        <FormLabel
                          color=" #ABA7A7"
                          fontWeight="500"
                          fontSize="18px"
                          lineHeight="22px">
                          BVN
                        </FormLabel>
                        <InputGroup>
                          <Input
                            alignItems="center"
                            width="100%"
                            height="54px"
                            background="#FFFFFF"
                            borderRadius="4px"
                          />
                        </InputGroup>
                      </FormControl>

                      <FormControl ml="60px">
                        <FormLabel
                          color=" #ABA7A7"
                          fontWeight="500"
                          fontSize="18px"
                          lineHeight="22px">
                          Expiry date
                        </FormLabel>
                        <InputGroup>
                          <Input
                            alignItems="center"
                            width="100%"
                            height="54px"
                            background="#FFFFFF"
                            borderRadius="4px"
                          />
                        </InputGroup>
                      </FormControl>
                    </Flex>
                    <Flex justifyContent="space-between" mt="20px">
                      <FormControl>
                        <FormLabel
                          color=" #ABA7A7"
                          fontWeight="500"
                          fontSize="18px"
                          lineHeight="22px">
                          CCV
                        </FormLabel>
                        <InputGroup>
                          <Input
                            alignItems="center"
                            width="100%"
                            height="54px"
                            background="#FFFFFF"
                            borderRadius="4px"
                          />
                        </InputGroup>
                      </FormControl>

                      <FormControl ml="60px">
                        <FormLabel
                          color=" #ABA7A7"
                          fontWeight="500"
                          fontSize="18px"
                          lineHeight="22px">
                          Transaction Pin
                        </FormLabel>
                        <InputGroup>
                          <Input
                            alignItems="center"
                            width="100%"
                            height="54px"
                            background="#FFFFFF"
                            borderRadius="4px"
                          />
                        </InputGroup>
                      </FormControl>
                    </Flex>
                    <Button
                      padding="8px 24px"
                      width="82px"
                      height="38px"
                      background="#E5E4EF"
                      borderRadius="8px"
                      fontWeight="500"
                      fontSize="14px"
                      lineHeight="22px"
                      color="#595956"
                      mt="48px"
                      _hover={{
                        background: '#E5E4EF'
                      }}>
                      Done
                    </Button>
                  </Flex>
                </Box>
              ) : (
                <Box
                  width="611px"
                  height="432px"
                  display="flex"
                  flexDirection="column"
                  justifyContent="center"
                  alignItems="center"
                  padding="8px 24px"
                  boxSizing="border-box"
                  background="#E5E4EF"
                  borderRadius="8px">
                  <Flex
                    flexDir="column"
                    width="380px"
                    alignItems="center"
                    justifyContent="space-between"
                    height="232px">
                    <Flex flexDir="column" alignItems="center" width="166px">
                      <Flex>
                        <Text>Total Balance</Text>
                        <Image src={eyeImg} alt="" width="22px" height="15px" objectFit="cover" />
                      </Flex>
                      <Text mt="27px">20.000</Text>
                    </Flex>

                    <Box
                      width="380px"
                      height="106px"
                      display="flex"
                      flexDirection="column"
                      justifyContent="space-evenly"
                      alignItems="center"
                      padding="0px 8px 40px"
                      background="#FFFFFF"
                      box-shadow="0px 8px 40px rgba(122, 118, 197, 0.1)"></Box>
                  </Flex>
                </Box>
              )}
            </Center>
          </ModalBody>

          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
