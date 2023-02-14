import React, { useState,useCallback } from "react";
import {
  Flex,
  Box,
  Image,
  Center,
  Text,
  FormControl,
  Input,
  useTheme,
  Button,
} from "@chakra-ui/react";

import Logo from "../Asset/Logos/Onboarding/SENDRAILS.png";
import {forgotPass} from "../api/forgot_password";
function ForgotPassword() {
  const [email, setEmail] = useState("");
  const theme = useTheme();

 const newPassword = useCallback(async () => {
   try {
     const resp = await forgotPass(email)
     console.log(resp)
   } catch (e) {
     console.log(e)
   }
 },[email])
  return (
    <Box
      position="absolute"
      width="100vw"
      height="100vh"
      top="0px"
      left="0px"
      background={theme.colors.primary['100']}>
      <Flex mt="60px" ml="60px">
        <Image src={Logo} alt="Logo" />
        <Text
          ml="10px"
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
          height="400px"
          bg="#FFFFFF"
          borderRadius="12px">
          <Box>
            <Box width="400px">
              <Box width="100%" mr="285px" mb="30px">
                <Center>
                  <Image src={Logo} alt="Onboarding Logo" pr="10px" />
                </Center>
                <Box mt="13px" width="100%" textAlign="center">
                  <Text fontWeight="600" fontSize="24px" lineHeight="22px">
                    Forgot Password
                  </Text>
                </Box>
              </Box>
              <Box
                width="100%"
                fontWeight="500"
                fontSize="14px"
                lineHeight="22px"
                mt="24px"
                textAlign="center"
                color="#ABA7A7">
                <Text>Enter Your Email A Verification Code Will Be Sent To You</Text>
              </Box>
            </Box>
            <FormControl>
              <Input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                type="email"
                mt="30px"
                ml="15px"
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

              <Button
                mt="70px"
                ml="15px"
                padding="16px 32px"
                width="400px"
                height="48px"
                background={theme.colors.primary.main}
                borderRadius="4px"
                fontWeight="500"
                fontSize="18px"
                lineHeight="22px"
                color="#fff"
                textAlign="center"
                isDisabled={!email}
                onClick={() => newPassword()}
                _hover={{
                  background: '#16134f'
                }}>
                Next
              </Button>
            </FormControl>
          </Box>
        </Box>
      </Center>
    </Box>
  )
}

export default ForgotPassword;
