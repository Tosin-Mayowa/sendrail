import {
  Flex,
  Box,
  Text,
  Input,
  InputRightElement,
  InputGroup,
  FormControl,
  FormLabel,
  Button,
  Center
} from '@chakra-ui/react'
import React from 'react'
import './BussInfo.css'
import { FiEdit2 } from 'react-icons/fi'
const BusinessInfo = () => {
  return (
    <>
      <Text mt="10px" color="#000000" fontWeight="500" fontSize="24px" lineHeight="29px">
        Business Information
      </Text>
      <Center>
        <Box
          mt="56px"
          width="70%"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="flex-start"
          padding="32px 48px"
          boxSizing="border-box"
          background="rgba(7, 5, 41, 0.07)"
          borderRadius="20px">
          <Flex flexDir="column">
            <Text color="#656566" fontWeight="500" fontSize="24px" lineHeight="29px">
              Business Information
            </Text>
            <Box className="Wrapper">
              <Input type="file" className="my_upload" />
            </Box>
          </Flex>
          <Flex flexDir="column" width="100%">
            <Flex justifyContent="space-between" mt="70px">
              <FormControl>
                <FormLabel color=" #ABA7A7" fontWeight="500" fontSize="18px" lineHeight="22px">
                  Business name
                </FormLabel>
                <InputGroup>
                  <Input
                    alignItems="center"
                    width="100%"
                    height="54px"
                    background="#FFFFFF"
                    borderRadius="4px"
                  />
                  <InputRightElement mt="4px" children={<FiEdit2 width="16px" height="16px" />} />
                </InputGroup>
              </FormControl>

              <FormControl ml="60px">
                <FormLabel color=" #ABA7A7" fontWeight="500" fontSize="18px" lineHeight="22px">
                  Business address
                </FormLabel>
                <InputGroup>
                  <Input
                    alignItems="center"
                    width="100%"
                    height="54px"
                    background="#FFFFFF"
                    borderRadius="4px"
                  />
                  <InputRightElement mt="4px" children={<FiEdit2 width="16px" height="16px" />} />
                </InputGroup>
              </FormControl>
            </Flex>
            <Flex justifyContent="space-between" mt="70px">
              <FormControl>
                <FormLabel color=" #ABA7A7" fontWeight="500" fontSize="18px" lineHeight="22px">
                  Phone number
                </FormLabel>
                <InputGroup>
                  <Input
                    alignItems="center"
                    width="100%"
                    height="54px"
                    background="#FFFFFF"
                    borderRadius="4px"
                  />
                  <InputRightElement mt="4px" children={<FiEdit2 width="16px" height="16px" />} />
                </InputGroup>
              </FormControl>

              <FormControl ml="60px">
                <FormLabel color=" #ABA7A7" fontWeight="500" fontSize="18px" lineHeight="22px">
                  Type
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
            <Flex justifyContent="space-between" mt="70px">
              <FormControl>
                <FormLabel color=" #ABA7A7" fontWeight="500" fontSize="18px" lineHeight="22px">
                  Email
                </FormLabel>
                <InputGroup>
                  <Input
                    alignItems="center"
                    width="100%"
                    height="54px"
                    background="#FFFFFF"
                    borderRadius="4px"
                  />
                  <InputRightElement mt="4px" children={<FiEdit2 width="16px" height="16px" />} />
                </InputGroup>
              </FormControl>

              <FormControl ml="60px">
                <FormLabel color=" #ABA7A7" fontWeight="500" fontSize="18px" lineHeight="22px">
                  city
                </FormLabel>
                <InputGroup>
                  <Input
                    alignItems="center"
                    width="100%"
                    height="54px"
                    background="#FFFFFF"
                    borderRadius="4px"
                  />
                  <InputRightElement mt="4px" children={<FiEdit2 width="16px" height="16px" />} />
                </InputGroup>
              </FormControl>
            </Flex>
            <Flex justifyContent="space-between" mt="70px">
              <FormControl>
                <FormLabel color=" #ABA7A7" fontWeight="500" fontSize="18px" lineHeight="22px">
                  State
                </FormLabel>
                <InputGroup>
                  <Input
                    alignItems="center"
                    width="100%"
                    height="54px"
                    background="#FFFFFF"
                    borderRadius="4px"
                  />
                  <InputRightElement mt="4px" children={<FiEdit2 width="16px" height="16px" />} />
                </InputGroup>
              </FormControl>

              <FormControl ml="60px">
                <FormLabel color=" #ABA7A7" fontWeight="500" fontSize="18px" lineHeight="22px">
                  Country
                </FormLabel>
                <InputGroup>
                  <Input
                    alignItems="center"
                    width="100%"
                    height="54px"
                    background="#FFFFFF"
                    borderRadius="4px"
                  />
                  <InputRightElement mt="4px" children={<FiEdit2 width="16px" height="16px" />} />
                </InputGroup>
              </FormControl>
            </Flex>
            <Button
              padding="16px 32px"
              width="168px"
              height="54px"
              background="rgba(7, 5, 41, 0.9)"
              borderRadius="8px"
              fontWeight="500"
              fontSize="16px"
              lineHeight="22px"
              color="#FFFFFF"
              mt="48px"
              _hover={{
                background: 'rgba(7, 5, 41, 0.9)'
              }}>
              Save Changes
            </Button>
          </Flex>
        </Box>
      </Center>
    </>
  )
}

export default BusinessInfo;
