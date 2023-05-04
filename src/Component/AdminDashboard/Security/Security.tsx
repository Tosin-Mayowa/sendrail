import React,{useState} from 'react';
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
  Switch,
  Button,
  Center,
  useTheme
} from '@chakra-ui/react'
import eyeImg from '../../../Asset/Settings/eye.png';
import ResetPasswordModal from './ResetPasswrdModal';
import ResetPinModal from './ResetPinModal';
const Security = () => {
  const [isSecurity,setSecurity]=useState(true);
  const [password, setPassword] = useState(true);
  const [showPass, setShowPass] = useState<boolean>(false)

    
      return (
        <>
          {isSecurity ? (
            <>
              <Text mt="10px" color="#000000" fontWeight="500" fontSize="24px" lineHeight="29px">
                Security
              </Text>
              <Center>
                <Box
                  mt="48px"
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  padding="32px 48px"
                  width="57rem"
                  height={!showPass ? '40.0625rem' : '52.8125rem'}
                  background="rgba(7, 5, 41, 0.07)"
                  borderRadius="20px">
                  <Flex width="51rem" flexDir="column">
                    <Text color="#656566" fontWeight="500" fontSize="24px" lineHeight="29px">
                      Security Information
                    </Text>
                    <Flex width="100%" flexDir="column">
                      <Flex
                        width="39rem"
                        mt="48px"
                        alignItems="flex-start"
                        height="68px"
                        justifyContent="space-between">
                        <Flex width="25rem" flexDir="column">
                          <Text color="#AAAAAA" fontWeight="500" fontSize="18px" lineHeight="22px">
                            Reset password
                          </Text>
                          <Text
                            mt="24px"
                            color="#656566"
                            fontWeight="500"
                            fontSize="16px"
                            flexShrink="0"
                            lineHeight="22px">
                            Can't remember your password? Tap to reset password
                          </Text>
                        </Flex>
                        <Button
                          variant="link"
                          alignSelf="flex-end"
                          color="#F9AB21"
                          fontWeight="500"
                          fontSize="18px"
                          lineHeight="22px"
                          onClick={() => setSecurity(false)}
                          _hover={{
                            color: '#F9AB21',
                            textDecoration: 'none'
                          }}>
                          Reset Password
                        </Button>
                      </Flex>
                      <Flex mt="48px" width="51rem">
                        <Flex justifyContent="space-between" width="95%">
                          <FormControl>
                            <FormLabel
                              color=" #ABA7A7"
                              fontWeight="500"
                              fontSize="18px"
                              lineHeight="22px">
                              Enter Current Password
                            </FormLabel>
                            <InputGroup>
                              <Input
                                alignItems="center"
                                width="100%"
                                height="54px"
                                background="#FFFFFF"
                                borderRadius="4px"
                                padding="15px 12px 15px 10px"
                              />
                              <InputRightElement
                                mt="8px"
                                children={
                                  <Image
                                    src={eyeImg}
                                    width="16px"
                                    height="16px"
                                    objectFit="contain"
                                  />
                                }
                              />
                            </InputGroup>
                          </FormControl>

                          <FormControl ml="60px">
                            <FormLabel
                              color=" #ABA7A7"
                              fontWeight="500"
                              fontSize="18px"
                              lineHeight="22px">
                              Enter New Password
                            </FormLabel>
                            <InputGroup>
                              <Input
                                alignItems="center"
                                width="100%"
                                height="54px"
                                background="#FFFFFF"
                                borderRadius="4px"
                                padding="15px 12px 15px 10px"
                              />
                              <InputRightElement
                                mt="8px"
                                children={
                                  <Image
                                    src={eyeImg}
                                    width="16px"
                                    height="16px"
                                    objectFit="contain"
                                  />
                                }
                              />
                            </InputGroup>
                          </FormControl>
                        </Flex>
                        <Button
                          width="14"
                          height="54px"
                          mt="30px"
                          ml="42px"
                          background="#E5E4EF"
                          borderRadius="4px"
                          color="#FFFFFF"
                          fontWeight="500"
                          fontSize="16px"
                          lineHeight="22px"
                          padding="16px 32px">
                          Save
                        </Button>
                      </Flex>
                      <Flex
                        width="38rem"
                        mt="56px"
                        justifyContent="space-between"
                        alignItems="flex-start">
                        <Flex flexDir="column">
                          <Text color="#AAAAAA" fontWeight="500" fontSize="18px" lineHeight="22px">
                            2FA
                          </Text>
                          <Text
                            mt="24px"
                            color="#656566"
                            fontWeight="500"
                            fontSize="16px"
                            flexShrink="0"
                            lineHeight="22px">
                            Activate 2 factor authentication for extra security
                          </Text>
                        </Flex>
                        <Switch alignSelf="flex-end" size="lg" />
                      </Flex>
                      <Flex
                        width="38rem"
                        mt="56px"
                        justifyContent="space-between"
                        alignItems="flex-start">
                        <Flex flexDir="column">
                          <Text color="#AAAAAA" fontWeight="500" fontSize="18px" lineHeight="22px">
                            Transaction pin
                          </Text>
                          <Text
                            mt="24px"
                            color="#656566"
                            fontWeight="500"
                            fontSize="16px"
                            flexShrink="0"
                            lineHeight="22px">
                            Create a secure pin for your transactions
                          </Text>
                        </Flex>
                        <Switch
                          alignSelf="flex-end"
                          size="lg"
                          onChange={() => setShowPass(!showPass)}
                        />
                      </Flex>

                      {showPass ? (
                        <Flex mt="48px" width="51rem">
                          <Flex justifyContent="space-between" width="95%">
                            <FormControl>
                              <FormLabel
                                color=" #ABA7A7"
                                fontWeight="500"
                                fontSize="18px"
                                lineHeight="22px">
                                Enter Current Pin
                              </FormLabel>
                              <InputGroup>
                                <Input
                                  alignItems="center"
                                  width="100%"
                                  height="54px"
                                  background="#FFFFFF"
                                  borderRadius="4px"
                                  padding="15px 12px 15px 10px"
                                />
                                <InputRightElement
                                  mt="8px"
                                  children={
                                    <Image
                                      src={eyeImg}
                                      width="16px"
                                      height="16px"
                                      objectFit="contain"
                                    />
                                  }
                                />
                              </InputGroup>
                            </FormControl>

                            <FormControl ml="60px">
                              <FormLabel
                                color=" #ABA7A7"
                                fontWeight="500"
                                fontSize="18px"
                                lineHeight="22px">
                                Enter New Pin
                              </FormLabel>
                              <InputGroup>
                                <Input
                                  alignItems="center"
                                  width="100%"
                                  height="54px"
                                  background="#FFFFFF"
                                  borderRadius="4px"
                                  padding="15px 12px 15px 10px"
                                />
                                <InputRightElement
                                  mt="8px"
                                  children={
                                    <Image
                                      src={eyeImg}
                                      width="16px"
                                      height="16px"
                                      objectFit="contain"
                                    />
                                  }
                                />
                              </InputGroup>
                            </FormControl>
                          </Flex>
                          <Button
                            width="14"
                            height="54px"
                            mt="30px"
                            ml="42px"
                            background="#E5E4EF"
                            borderRadius="4px"
                            color="#FFFFFF"
                            fontWeight="500"
                            fontSize="16px"
                            lineHeight="22px"
                            padding="16px 32px">
                            Save
                          </Button>
                        </Flex>
                      ) : (
                        ''
                      )}

                      {showPass ? (
                        <Flex
                          width="39rem"
                          mt="56px"
                          alignItems="flex-start"
                          height="68px"
                          justifyContent="space-between">
                          <Flex width="25rem" flexDir="column">
                            <Text
                              color="#AAAAAA"
                              fontWeight="500"
                              fontSize="18px"
                              lineHeight="22px">
                              Reset pin
                            </Text>
                            <Text
                              mt="24px"
                              color="#656566"
                              fontWeight="500"
                              fontSize="16px"
                              flexShrink="0"
                              lineHeight="22px">
                              Can't remember your transaction pin? Tap to reset pin
                            </Text>
                          </Flex>
                          <Button
                            variant="link"
                            alignSelf="flex-end"
                            color="#F9AB21"
                            fontWeight="500"
                            fontSize="18px"
                            lineHeight="22px"
                            onClick={() => {
                              setSecurity(false)
                              setPassword(false)
                            }}
                            _hover={{
                              color: '#F9AB21',
                              textDecoration: 'none'
                            }}>
                            Reset Pin
                          </Button>
                        </Flex>
                      ) : (
                        ''
                      )}
                    </Flex>
                  </Flex>
                </Box>
              </Center>
            </>
          ) : password ? (
            <ResetPasswordModal setSecurity={setSecurity} setShowPass={setShowPass} />
          ) : (
            <ResetPinModal
              setPassword={setPassword}
              setSecurity={setSecurity}
              setShowPass={setShowPass}
            />
          )}
        </>
      )
    
    
    

    
    
  
}

export default Security;