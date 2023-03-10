import {
  Flex,
  Box,
  Text,
  Input,
  InputRightElement,
  InputGroup,
  FormControl,
  FormLabel,
  Image,
  Center
} from '@chakra-ui/react'
import React,{useState} from 'react'

import Nodata from '../../../Asset/Settings/nodata.png'
const BankInfo = () => {
    const [bankData,setBankData]=useState('');
  return (
    <>
      <Text mt="10px" color="#000000" fontWeight="500" fontSize="24px" lineHeight="29px">
        Bank Information
      </Text>
      {bankData ? (
        <Center>
          <Box
            mt="56px"
            width="60%"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            padding="32px 48px"
            boxSizing="border-box"
            background="rgba(7, 5, 41, 0.07)"
            borderRadius="20px">
            <Center>
              <Text color="#656566" fontWeight="500" fontSize="24px" lineHeight="29px">
                Account details
              </Text>
            </Center>
            <Flex flexDir="column" width="100%">
              <Flex justifyContent="space-between" mt="70px">
                <FormControl>
                  <FormLabel color=" #ABA7A7" fontWeight="500" fontSize="18px" lineHeight="22px">
                    Name
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
                  <FormLabel color=" #ABA7A7" fontWeight="500" fontSize="18px" lineHeight="22px">
                    Current Balance
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
                  <FormLabel color=" #ABA7A7" fontWeight="500" fontSize="18px" lineHeight="22px">
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
              <Flex justifyContent="space-between" mt="70px">
                <FormControl>
                  <FormLabel color=" #ABA7A7" fontWeight="500" fontSize="18px" lineHeight="22px">
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
                  <FormLabel color=" #ABA7A7" fontWeight="500" fontSize="18px" lineHeight="22px">
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
              <Flex justifyContent="space-between" mt="70px">
                <FormControl>
                  <FormLabel color=" #ABA7A7" fontWeight="500" fontSize="18px" lineHeight="22px">
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
                  <FormLabel color=" #ABA7A7" fontWeight="500" fontSize="18px" lineHeight="22px">
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
            </Flex>
          </Box>
        </Center>
      ) : (
        <Flex justifyContent="center" alignItems="start" height="100vh">
          <Box mt="60px">
            <Image src={Nodata} alt="" width="80%" height="80%" />
            <Text color="#656566"  fontWeight="500" fontSize="20px" mt="20px" lineHeight="55px" textAlign="center">No data to show</Text>
          </Box>
          <Button>
              
          </Button>
        </Flex>
      )}
    </>
  )
}

export default BankInfo;
