import {
  Image,
  Text,
  Box,
  Input,
  Flex,
  Button,
  PinInputField,
  PinInput,
  HStack,
  InputRightElement,
  InputGroup
} from '@chakra-ui/react'
import React, { useState } from 'react'
import Back from '../../../Asset/Settings/back.png'
import eyeImg from '../../../Asset/Settings/eye.png'

const ResetPinModal = ({ setPassword, setSecurity, setShowPass }) => {
  const [emailSuccessP, setEmailSuccessP] = useState<boolean>(false)
  const [pinSuccess, setPinSuccess] = useState<boolean>(false)
  const [showPin, setShowPin] = useState<boolean>(false)
  const [showConfirmPin, setShowConfirmPin] = useState<boolean>(false)
  const [emailPin, setEmailPin] = useState<string>('')
  return (
    <Flex
      flexDir="column"
      height="32.4375rem"
      justifyContent="space-between"
      alignItems="flex-start">
      <Flex
        flexDir="column"
        alignItems="flex-start"
        justifySelf="flex-start"
        justifyContent="space-between"
        width="14.0625rem"
        height="6.3125rem">
        <Image
          cursor="pointer"
          onClick={() => {
            setSecurity(true);
          setShowPass(false)
          }}
          src={Back}
          alt=""
          width="40px"
          height="40px"
          objectFit="cover"
        />
        <Text color="#000" fontWeight="600" fontSize="24px" lineHeight="29px">
          Security Information
        </Text>
      </Flex>
      {!emailSuccessP ? (
        <Box
          width="35.3125rem"
          height="20.3125rem"
          padding="48px 120px"
          background="rgba(7, 5, 41, 0.07)"
          border-radius="20px"
          display="flex"
          flexDir="column"
          alignSelf="center"
          justifySelf="center"
          justifyContent="space-between">
          <Flex
            flexDir="column"
            justifyContent="space-between"
            width="20.3125rem"
            height="9.125rem">
            <Flex
              flexDir="column"
              justifyContent="space-between"
              width="15.625rem"
              height="2.75rem">
              <Text color="#1F1F1F" fontWeight="500" fontSize="18px" lineHeight="22px">
                Reset Pin
              </Text>
              <Text color="#656566" fontWeight="450" fontSize="12px" lineHeight="14px">
                A verification code will be sent to your email
              </Text>
            </Flex>
            <Flex flexDir="column">
              <Text color="#ABA7A7" fontWeight="500" fontSize="18px" lineHeight="22px">
                Enter your Email
              </Text>
              <Input
                width="20.3125rem"
                mt="0.25rem"
                placeholder="example@gmail.com"
                value={emailPin}
                onChange={(e) => setEmailPin(e.target.value)}
                padding="15px 12px 15px 10px"
                height="3.25rem"
                background="#FFFFFF"
                borderRadius="4px"
              />
            </Flex>
          </Flex>
          <Button
            alignSelf="flex-end"
            lineHeight="22px"
            fontWeight="500"
            fontSize="14px"
            color="#595956"
            padding="8px 24px"
            flexShrink="0"
            width="4.9375rem"
            height="2.375rem"
            background="rgba(6, 0, 137, 0.15)"
            borderRadius="8px"
            onClick={() => setEmailSuccessP(true)}
            isDisabled={emailPin.includes('@') && emailPin.includes('.com') ? false : true}>
            Next
          </Button>
        </Box>
      ) : !pinSuccess ? (
        <Box
          mt="20px"
          width="39.0625rem"
          height="26.5625rem"
          padding="48px 120px"
          background="rgba(7, 5, 41, 0.07)"
          border-radius="20px"
          display="flex"
          flexDir="column"
          alignSelf="center"
          justifySelf="center"
          justifyContent="space-between">
          <Flex
            flexDir="column"
            justifyContent="space-between"
            alignItems="center"
            padding="32px"
            width="24.0625rem"
            height="16.6875rem">
            <Flex
              flexDir="column"
              justifyContent="space-between"
              padding="0px"
              width="20.0625rem"
              height="7.5rem">
              <Flex
                flexDir="column"
                justifyContent="space-between"
                width="15.8125rem"
                height="2.75rem">
                <Text color="#1F1F1F" fontWeight="500" fontSize="18px" lineHeight="22px">
                  Reset Pin
                </Text>
                <Text color="#656566" fontWeight="450" fontSize="12px" lineHeight="14px">
                  enter the verification code sent to your email
                </Text>
              </Flex>
              <Flex width="20.0625rem">
                <HStack spacing="28px">
                  <PinInput focusBorderColor="black" placeholder="" size="md">
                    <PinInputField borderColor="black" />
                    <PinInputField borderColor="black" />
                    <PinInputField borderColor="black" />
                    <PinInputField borderColor="black" />
                    <PinInputField borderColor="black" />
                  </PinInput>
                </HStack>
              </Flex>
            </Flex>
            <Button
              alignSelf="flex-end"
              lineHeight="22px"
              fontWeight="500"
              fontSize="14px"
              color="#595956"
              padding="8px 24px"
              flexShrink="0"
              width="4.9375rem"
              height="2.375rem"
              background="rgba(6, 0, 137, 0.15)"
              borderRadius="8px"
              onClick={() => setPinSuccess(true)}>
              Next
            </Button>
          </Flex>

          <Flex width="13.6875rem" height="1.375rem" alignSelf="center">
            <Text color="#000" fontWeight="500" fontSize="16px" lineHeight="22px">
              Did not receive OTP?
            </Text>
            <Button
              ml="10px"
              variant="link"
              color="#F9C567"
              fontWeight="500"
              fontSize="16px"
              lineHeight="22px"
              _hover={{
                textDecoration: 'none'
              }}>
              Resend
            </Button>
          </Flex>
        </Box>
      ) : (
        <Box
          width="36.375rem"
          height="25.3125rem"
          padding="calc(1.25rem + 2.734vh) calc(3.75rem + 4.166vw)"
          background="rgba(7, 5, 41, 0.07)"
          border-radius="20px"
          display="flex"
          flexDir="column"
          alignSelf="center"
          justifySelf="center">
          <Flex
            width="21.375rem"
            flexDir="column"
            justifyContent="space-between"
            alignItems="flex-start"
            height="19.3125rem">
            <Flex
              width="21.375rem"
              height="14.125rem"
              flexDir="column"
              justifyContent="space-between">
              <Text
                alignSelf="center"
                color="#afafaf"
                fontWeight="500"
                fontSize="18px"
                lineHeight="22px">
                Reset Pin
              </Text>
              <Flex flexDir="column" width="100%">
                <Text color="#ABA7A7" fontWeight="500" fontSize="18px" lineHeight="22px">
                  Enter new pin
                </Text>
                <InputGroup>
                  <Input
                    mt="4px"
                    type={showPin ? 'text' : 'password'}
                    alignItems="center"
                    width="100%"
                    height="5.27vh"
                    background="#FFFFFF"
                    borderRadius="4px"
                    padding="15px 12px 15px 10px"
                    focusBorderColor="primary.main"
                  />
                  <InputRightElement
                    mt="4px"
                    children={
                      <Image
                        src={eyeImg}
                        width="14px"
                        height="10px"
                        objectFit="cover"
                        onClick={() => setShowPin(!showPin)}
                      />
                    }
                  />
                </InputGroup>
              </Flex>
              <Flex flexDir="column" width="100%">
                <Text color="#ABA7A7" fontWeight="500" fontSize="18px" lineHeight="22px">
                  Enter new pin
                </Text>
                <InputGroup>
                  <Input
                    flexShrink="0"
                    mt="4px"
                    type={showConfirmPin ? 'text' : 'password'}
                    alignItems="center"
                    width="100%"
                    height="5.27vh"
                    background="#FFFFFF"
                    borderRadius="4px"
                    padding="15px 12px 15px 10px"
                    focusBorderColor="primary.main"
                  />
                  <InputRightElement
                    mt="4px"
                    children={
                      <Image
                        flexShrink="0"
                        src={eyeImg}
                        width="14px"
                        height="10px"
                        objectFit="cover"
                        onClick={() => setShowConfirmPin(!showConfirmPin)}
                      />
                    }
                  />
                </InputGroup>
              </Flex>
            </Flex>
            <Button
              alignSelf="flex-end"
              lineHeight="22px"
              fontWeight="500"
              fontSize="14px"
              color="#595956"
              padding="8px 24px"
              flexShrink="0"
              width="4.9375rem"
              height="2.375rem"
              background="rgba(6, 0, 137, 0.15)"
              borderRadius="8px">
              Next
            </Button>
          </Flex>
        </Box>
      )}
    </Flex>
  )
}

export default ResetPinModal
