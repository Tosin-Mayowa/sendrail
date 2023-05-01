import React, { useState,useCallback } from "react";
import '../Style/signUp.css'
import {
  Flex,
  Box,
  Image,
 
  Text,
  
  Input,
 
  Button,
} from "@chakra-ui/react";
import { useNavigate } from 'react-router-dom'
import Logo from "../Asset/Onbarding/SENDRAILS.png";
import {forgotPass} from "../api/forgot_password";
function ForgotPassword() {
  const [email, setEmail] = useState("");
  
const navigate = useNavigate()
 const newPassword = useCallback(async () => {
   try {
     const resp = await forgotPass(email)
     console.log(resp);
     if(resp?.data?.success){
       navigate('/reset-Password', { state: { email: resp.data.data?.email } })
     }
   } catch (e) {
     console.log(e)
   }
 },[email,navigate])
  return (
    <Flex
      width="100%"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      flexDir="column"
      className="BackG">
      <Box display="flex" flexDir="column" width="40rem" height="32rem" padding="64px" bg="#fff">
        <Flex flexDir="column" width="31rem" height="21rem" alignItems="flex-start" justifyContent="space-between">
          <Flex
            width="100%"
            height="11rem"
            flexDir="column"
            alignItems="flex-start"
            justifyContent="space-between">
            <Flex
              flexDir="column"
              height="103px"
              alignSelf="center"
              alignItems="center"
              justifyContent="space-between">
              <Flex
                width="11.5rem"
                height="3.56rem"
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
                  Forgot Password
                </Text>
              </Flex>
              <Flex mt="20px" width="25rem" height="1.375rem" flexDir="column" alignItems="center">
                <Text
                  fontWeight="400"
                  fontSize="16px"
                  lineHeight="22px"
                  color="#000000"
                  flexShrink="0">
                  Enter Your Email A Verification Code Will Be Sent To You
                </Text>
              </Flex>
            </Flex>
            <Flex alignSelf="center" mt="20px">
              <Input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                type="email"
                mt="31px"
                width="30rem"
                height="42px"
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
            <Button
              mt="70px"
              padding="16px 32px"
              width="31rem"
              height="48px"
              background="primary.main"
              borderRadius="4px"
              fontWeight="500"
              fontSize="18px"
              lineHeight="22px"
              color="#fff"
              textAlign="center"
              isDisabled={!email}
              onClick={newPassword}
              _hover={{
                background: '#16134f'
              }}>
              Next
            </Button>
            
          </Flex>
        </Flex>
      </Box>
    </Flex>

    
  )
}

export default ForgotPassword;
