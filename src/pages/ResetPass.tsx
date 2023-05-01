import React, { useReducer } from 'react';
import {
  Flex,
  Box,
  Image,
 
  Text,
 
  Input,
 
 
  Button,
} from '@chakra-ui/react';
import '../Style/signUp.css'
import Logo from '../Asset/Onbarding/SENDRAILS.png';
import Mark from '../Asset/Logos/Onboarding/Vector.png';
import Ellipse from '../Asset/Logos/Onboarding/Ellipse.png';
import { resetReducer } from '../reducers/resetReducer';

const initialState = {
  newPassword: '',
  confirmPass: '',
};
function ResetPassword() {
  
  const [state, dispatch] = useReducer(resetReducer, initialState);

  const lowerCase = /[a-z]/;
  const upper = /[A-Z]/;
  const numb = /[0-9]/;
  const { confirmPass, newPassword } = state;
  return (
    <Flex
      width="100%"
      alignItems="center"
      justifyContent="center"
      height="1024px"
      flexDir="column"
      className="BackG">
      <Box
        display="flex"
        flexDir="column"
        justifyContent="space-between"
        alignItems="flex-start"
        width="39.5rem"
        height="45.3125rem"
        padding="64px"
        bg="#fff">
        <Flex
          flexDir="column"
          alignSelf="center"
          width="30rem"
          height="18.9375rem"
          justifyContent="space-between">
          <Flex
            flexDir="column"
            width="10.75rem"
            height="6.4375rem"
            alignSelf="center"
            alignItems="flex-start"
            justifyContent="space-between">
            <Flex
              width="10.75rem"
              height="3.5625rem"
              flexDir="column"
              justifyContent="space-between"
              alignItems="center">
              <Image src={Logo} alt="Sendrail" width="30px" height="22px" objectFit="cover" />
              <Text
                fontWeight="600"
                fontSize="24px"
                lineHeight="22px"
                color="#000000"
                flexShrink="0">
                Reset Password
              </Text>
            </Flex>
            <Flex width="10.75rem" flexDir="column" alignSelf="center" flexShrink="0">
              <Text fontWeight="600" fontSize="16px" textAlign="center" lineHeight="22px" color="primary.400">
                Create New Password
              </Text>
            </Flex>
          </Flex>

          {/* input flex */}

          <Flex flexDir="column" width="30rem">
            <Text color="primary.400" fontWeight="500" fontSize="16px" lineHeight="22px">
              Enter new password
            </Text>

            <Input
              mt="4px"
              value={newPassword}
              placeholder="password"
              type="password"
              onChange={(e) => dispatch({ type: 'new password', payload: e.target.value })}
              padding="10px 12px 10px 10px"
              width="30rem"
              height="2.75rem"
              background="#fff"
              border="1px solid #ABA7A7"
              borderRadius="4px"
              fontWeight="500"
              fontSize="16px"
              lineHeight="22px"
              color="#1F1F1F"
              focusBorderColor="primary.main"
            />
          </Flex>
          <Flex flexDir="column" width="30rem">
            <Text
              color="primary.400"
              fontWeight="500"
              fontSize="16px"
              lineHeight="22px"
              flexShrink="0">
              Confirm Password
            </Text>

            <Input
              mt="4px"
              value={newPassword}
              placeholder="Confirm Password"
              type="password"
              onChange={(e) => dispatch({ type: 'new password', payload: e.target.value })}
              padding="10px 12px 10px 10px"
              width="30rem"
              height="2.75rem"
              background="#fff"
              border="1px solid #ABA7A7"
              borderRadius="4px"
              fontWeight="500"
              fontSize="16px"
              lineHeight="22px"
              color="#1F1F1F"
              focusBorderColor="primary.main"
            />
          </Flex>
          {/* end input flex */}
        </Flex>

        {/* password */}
        <Flex
          flexDir="column"
          width="31.5rem"
          height="16.375rem"
          alignItems="flex-start"
          justifyContent="space-between">
          <Flex
            flexDir="column"
            width="12.25rem"
            height="8.875rem"
            alignItems="flex-start"
            justifyContent="space-between">
            <Text fontWeight="500" fontSize="14px" lineHeight="22px" color="#1F1F1F">
              Password must
            </Text>

            <Flex mt="12px">
              <Image
                src={newPassword.length === 8 ? Mark : Ellipse}
                width="10px"
                height="10px"
                mt="8px"
                objectFit="cover"
                alt="Ellipse"
              />
              <Text fontWeight="400" fontSize="12px" lineHeight="22px" color="#1F1F1F" ml="9px">
                be at least 8 character long
              </Text>
            </Flex>
            <Flex mt="12px">
              <Image
                src={lowerCase.test(newPassword) ? Mark : Ellipse}
                width="10px"
                height="10px"
                mt="8px"
                objectFit="cover"
                alt="Ellipse"
              />
              <Text fontWeight="400" fontSize="12px" lineHeight="22px" color="#1F1F1F" ml="9px">
                contain a lowercase letter (a-z)
              </Text>
            </Flex>
            <Flex mt="12px">
              <Image
                src={upper.test(newPassword) ? Mark : Ellipse}
                width="10px"
                height="10px"
                mt="8px"
                objectFit="cover"
                alt="Ellipse"
              />
              <Text fontWeight="400" fontSize="12px" lineHeight="22px" color="#1F1F1F" ml="9px">
                contain a uppercase letter (A-Z)
              </Text>
            </Flex>
            <Flex mt="12px">
              <Image
                src={numb.test(newPassword) ? Mark : Ellipse}
                width="10px"
                height="10px"
                mt="8px"
                objectFit="cover"
                alt="Ellipse"
              />
              <Text fontWeight="400" fontSize="12px" lineHeight="22px" color="#1F1F1F" ml="9px">
                contain a Number (0-9)
              </Text>
            </Flex>
          </Flex>
          <Button
            padding="16px 32px"
            width="31.5rem"
            height="3rem"
            background="primary.main"
            borderRadius="4px"
            fontWeight="500"
            fontSize="18px"
            lineHeight="22px"
            color="#fff"
            textAlign="center"
            isDisabled={!(confirmPass && newPassword)}
            _hover={{
              background: 'primary.200'
            }}>
            Next
          </Button>
        </Flex>
        {/* end pass */}
      </Box>

      {/* <Flex mt="60px" ml="60px">
        <Image src={Logo} alt="Logo" />
        <Text
          ml="4px"
          fontWeight="500"
          fontSize="24px"
          lineHeight="29px"
          display="flex"
          alignItems="center"
          textAlign="right"
          color={theme.colors.primary.main}>
          Sendrail
        </Text>
      </Flex>
      <Center>
        <Box
          mt="40px"
          display="flex"
          flexDirection="column"
          padding="38px 40px"
          width="500px"
          height="700px"
          bg="#FFFFFF"
          borderRadius="12px">
          <Box>
            <Box width="400px">
              <Center>
                <Box width="100%" mb="30px">
                  <Center>
                    <Image
                      src={Logo}
                      alt="Onboarding Logo"
                      pr="10px"
                      width="30px"
                      height="22px"
                      objectFit="cover"
                    />
                  </Center>
                  <Box mt="13px" width="100%" textAlign="center">
                    <Text fontWeight="600" fontSize="24px" lineHeight="22px">
                      Reset Password
                    </Text>
                  </Box>
                </Box>
              </Center>
              <Box
                width="100%"
                fontWeight="500"
                fontSize="14px"
                lineHeight="22px"
                mt="15px"
                textAlign="center"
                color="#ABA7A7">
                <Text>Create New Password</Text>
              </Box>
            </Box>
            <FormControl>
              <FormLabel mt="20px" fontWeight="500" fontSize="16px" lineHeight="22px" >
                Enter New Password
              </FormLabel>
              <Input
                value={newPassword}
                placeholder="password"
                type="password"
                
                onChange={(e) => dispatch({ type: 'new password', payload: e.target.value })}
                padding="10px 12px 10px 10px"
                width="400px"
                height="44px"
                background="#fff"
                border="1px solid #ABA7A7"
                borderRadius="4px"
                fontWeight="500"
                fontSize="16px"
                lineHeight="22px"
                color="#1F1F1F"
                focusBorderColor={theme.colors.primary.main}
              />
            </FormControl>
            <FormControl>
              <FormLabel mt="20px" fontWeight="500" fontSize="16px" lineHeight="22px" >
                Confirm Password
              </FormLabel>
              <Input
                placeholder="Confirm password"
                type="password"
                value={confirmPass}
                
                onChange={(e) =>
                  dispatch({
                    type: 'confirm password',
                    payload: e.target.value
                  })
                }
                padding="10px 12px 10px 10px"
                width="400px"
                height="44px"
                background="#fff"
                border="1px solid #ABA7A7"
                borderRadius="4px"
                fontWeight="500"
                fontSize="16px"
                lineHeight="22px"
                color="#1F1F1F"
                focusBorderColor={theme.colors.primary.main}
              />
            </FormControl>

            <Box>
              <Heading
                mt="40px"
                
                fontWeight="500"
                fontSize="14px"
                lineHeight="22px"
                color="#1F1F1F">
                Password must
              </Heading>
              <Flex flexDir="column">
                <Flex  mt="12px">
                  <Image
                    src={newPassword.length === 8 ? Mark : Ellipse}
                    width="10px"
                    height="10px"
                    mt="8px"
                    objectFit="cover"
                    alt="Ellipse"
                  />
                  <Text fontWeight="400" fontSize="12px" lineHeight="22px" color="#1F1F1F" ml="9px">
                    be at least 8 character long
                  </Text>
                </Flex>
                <Flex  mt="12px">
                  <Image
                    src={lowerCase.test(newPassword) ? Mark : Ellipse}
                    width="10px"
                    height="10px"
                    mt="8px"
                    objectFit="cover"
                    alt="Ellipse"
                  />
                  <Text fontWeight="400" fontSize="12px" lineHeight="22px" color="#1F1F1F" ml="9px">
                    contain a lowercase letter (a-z)
                  </Text>
                </Flex>
                <Flex  mt="12px">
                  <Image
                    src={upper.test(newPassword) ? Mark : Ellipse}
                    width="10px"
                    height="10px"
                    mt="8px"
                    objectFit="cover"
                    alt="Ellipse"
                  />
                  <Text fontWeight="400" fontSize="12px" lineHeight="22px" color="#1F1F1F" ml="9px">
                    contain a uppercase letter (A-Z)
                  </Text>
                </Flex>
                <Flex  mt="12px">
                  <Image
                    src={numb.test(newPassword) ? Mark : Ellipse}
                    width="10px"
                    height="10px"
                    mt="8px"
                    objectFit="cover"
                    alt="Ellipse"
                  />
                  <Text fontWeight="400" fontSize="12px" lineHeight="22px" color="#1F1F1F" ml="9px">
                    contain a Number (0-9)
                  </Text>
                </Flex>
                
              </Flex>
            </Box>
          </Box>
        </Box>
      </Center> */}
    </Flex>
  )
}

export default ResetPassword;
