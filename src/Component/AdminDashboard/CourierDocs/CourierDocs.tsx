
import { Flex, Box, Text, Input, Image, Select, Button,InputRightElement,InputGroup } from '@chakra-ui/react'
import React from 'react';
import On from '../../../Asset/Rider/on.png';

 type Props = {
   setIsGuarantorP?: React.Dispatch<React.SetStateAction<boolean>>,
   setIsDocsProfile?: React.Dispatch<React.SetStateAction<boolean>>,
   setIsDocs?: React.Dispatch<React.SetStateAction<boolean>>,
   setIsGuarantor?:React.Dispatch<React.SetStateAction<boolean>>,
   profile?:boolean,
 }
const CourierDocs = ({
  setIsGuarantor,
  setIsGuarantorP,
  profile,
  setIsDocs,
  setIsDocsProfile
}: Props) => {
  return (
    <>
      <Box
        mt="48px"
        width="60.5625rem"
        height="35.625rem"
        display="flex"
        alignSelf="center"
        flexDirection="column"
        justifyContent="space-between"
        alignItems="flex-start"
        padding="3rem 5.5rem"
        boxSizing="border-box"
        background="rgba(7, 5, 41, 0.07)"
        borderRadius="20px">
        <Flex width="49.5625rem" height="23.875rem" flexDir="column" justifyContent="space-between">
          <Text color="#000000" fontWeight="500" fontSize="24px" lineHeight="29px">
            Courier’s Document
          </Text>
          {/* input flex */}
          <Flex
            flexDir="column"
            width="49.5625rem"
            height="20.0625rem"
            justifyContent="space-between">
            <Flex width="100%" justifyContent="space-between">
              <InputGroup width="21.4375rem">
                <Input
                  mt="4px"
                  padding="0px 12px"
                  placeholder="Background check"
                  width="100%"
                  height="4.6875rem"
                  background="#fff"
                  borderRadius="4px"
                  fontWeight="500"
                  fontSize="18px"
                  lineHeight="22px"
                  focusBorderColor="primary.main"
                  _placeholder={{
                    color: 'text.50'
                  }}
                />
                {profile ? (
                  <InputRightElement
                    mt="20px"
                    children={
                      <Image src={On} alt="checked" width="24px" height="24px" objectFit="cover" />
                    }
                  />
                ) : (
                  ''
                )}
              </InputGroup>

              <InputGroup width="21.4375rem">
                <Input
                  mt="4px"
                  placeholder="Profile photo"
                  padding="0px 12px "
                  width="100%"
                  height="4.6875rem"
                  background="#fff"
                  borderRadius="4px"
                  fontWeight="500"
                  fontSize="18px"
                  lineHeight="22px"
                  focusBorderColor="primary.main"
                  _placeholder={{
                    color: 'text.50'
                  }}
                />
                {profile ? (
                  <InputRightElement
                    mt="20px"
                    children={
                      <Image src={On} alt="checked" width="24px" height="24px" objectFit="cover" />
                    }
                  />
                ) : (
                  ''
                )}
              </InputGroup>
            </Flex>
            {/* end 1st */}
            <Flex width="100%" justifyContent="space-between">
              <InputGroup width="21.4375rem">
                <Input
                  mt="4px"
                  padding="0px 12px"
                  placeholder="Driver’s registration number"
                  width="100%"
                  height="4.6875rem"
                  background="#fff"
                  borderRadius="4px"
                  fontWeight="500"
                  fontSize="18px"
                  lineHeight="22px"
                  focusBorderColor="primary.main"
                  _placeholder={{
                    color: 'text.50'
                  }}
                />
                {profile ? (
                  <InputRightElement
                    mt="20px"
                    children={
                      <Image src={On} alt="checked" width="24px" height="24px" objectFit="cover" />
                    }
                  />
                ) : (
                  ''
                )}
              </InputGroup>
              <InputGroup width="21.4375rem">
                <Input
                  mt="4px"
                  placeholder="Driver’s license"
                  padding="0px 12px "
                  width="100%"
                  height="4.6875rem"
                  background="#fff"
                  borderRadius="4px"
                  fontWeight="500"
                  fontSize="18px"
                  lineHeight="22px"
                  focusBorderColor="primary.main"
                  _placeholder={{
                    color: 'text.50'
                  }}
                />
                {profile ? (
                  <InputRightElement
                    mt="20px"
                    children={
                      <Image src={On} alt="checked" width="24px" height="24px" objectFit="cover" />
                    }
                  />
                ) : (
                  ''
                )}
              </InputGroup>
            </Flex>
            {/* end secnd */}
            <Flex width="21.4375rem" justifyContent="flex-start">
              <InputGroup width="21.4375rem">
                <Input
                  mt="4px"
                  padding="0px 12px"
                  placeholder="Vehicle type"
                  width="21.4375rem"
                  height="4.6875rem"
                  background="#fff"
                  borderRadius="4px"
                  fontWeight="500"
                  fontSize="18px"
                  lineHeight="22px"
                  focusBorderColor="primary.main"
                  _placeholder={{
                    color: 'text.50'
                  }}
                />
                {profile ? (
                  <InputRightElement
                    mt="20px"
                    children={
                      <Image src={On} alt="checked" width="24px" height="24px" objectFit="cover" />
                    }
                  />
                ) : (
                  ''
                )}
              </InputGroup>
            </Flex>
          </Flex>
        </Flex>
        {profile?
        <Flex alignSelf="flex-end" justifyContent="space-between" width="10.5rem" height="2.75rem">
          <Button
            width="2.75rem"
            height="2.75rem"
            color="#fff"
            background="primary.main"
            borderRadius="4px"
            padding="0.625rem"
            onClick={() =>setIsDocsProfile(false)}
            _hover={{
              background: 'primary.main'
            }}>
            {'<'}
          </Button>
          <Button
            width="2.75rem"
            height="2.75rem"
            color="#fff"
            background="primary.main"
            borderRadius="4px"
            padding="0.625rem"
            onClick={() => setIsGuarantorP(true)}
            _hover={{
              background: 'primary.main'
            }}>
            {'>'}
          </Button>
        </Flex>:<Flex alignSelf="flex-end" justifyContent="space-between" width="10.5rem" height="2.75rem">
          <Button
            width="2.75rem"
            height="2.75rem"
            color="#fff"
            background="primary.main"
            borderRadius="4px"
            padding="0.625rem"
            onClick={() => setIsDocs(false)}
            _hover={{
              background: 'primary.main'
            }}>
            {'<'}
          </Button>
          <Button
            width="2.75rem"
            height="2.75rem"
            color="#fff"
            background="primary.main"
            borderRadius="4px"
            padding="0.625rem"
            onClick={() => setIsGuarantor(true)}
            _hover={{
              background: 'primary.main'
            }}>
            {'>'}
          </Button>
        </Flex>}
      </Box>
    </>
  )
}

export default CourierDocs;