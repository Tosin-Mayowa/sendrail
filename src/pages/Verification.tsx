import React, { useCallback, useState } from 'react'
import '../Style/signUp.css'
import { useLocation, useNavigate } from 'react-router-dom'
import {
  PinInputField,PinInput,HStack,
  
  Flex,
  Box,
  Image,

  Text,
  
  useTheme,
  Button
} from '@chakra-ui/react'
import Logo from '../Asset/Onbarding/SENDRAILS.png';
import { verify } from '../api/verify'

function Verification() {
  const theme = useTheme()
  const navigate = useNavigate()
  const location = useLocation()
  const [code, setCode] = useState<string>('')
  const [errState, setErrState] = useState<boolean>(true)
console.log({code});

  const sendVerification = useCallback(async () => {
    const email = location.state.email

    const resp = await verify({
      email,
      confirm_email_token: code
    })

    if (resp?.data?.success) {
      navigate('/login')
    }
    setErrState(resp?.data?.success)
  }, [code, location, navigate])
  return (
    <Flex
      width="100%"
      height="100vh"
      className="BackG"
      flexDir="column"
      justifyContent="center"
      alignItems="center">
      <Box
        display="flex"
        flexDir="column"
        bg="#fff"
        width="43.5rem"
        padding="64px"
        alignItems="flex-start">
        <Flex alignSelf="center">
          <Image src={Logo} alt="Sendrail" width="30px" height="22px" objectFit="cover" />
        </Flex>
        <Flex flexDir="column" width="35.5rem" padding="
13px 32px 32px 32px">
          <Flex
            alignSelf="center"
            flexDir="column"
            width="23.375rem"
            height="8.5rem"
            justifyContent="space-between"
            alignItems="flex-start">
            <Flex
              flexDir="column"
              width="23.375rem"
              height="3.75rem"
              justifyContent="space-between"
              alignItems="center">
              <Text
                flexShrink="0"
                fontWeight="600"
                color="#1F1F1F"
                fontSize="24px"
                lineHeight="22px">
                Verification
              </Text>
              <Text
                flexShrink="0"
                fontWeight="600"
                color="#ABA7A7"
                fontSize="16px"
                lineHeight="14px">
                enter the verification code sent to your email
              </Text>
            </Flex>
            <HStack alignSelf="center">
              <PinInput
                placeholder=""
                value=""
                focusBorderColor="primary.main"
                onChange={(e) => {
                  console.log({ evet: e })
                }}>
                <PinInputField />
                <PinInputField />
                <PinInputField />
                <PinInputField />
                <PinInputField />
              </PinInput>
            </HStack>
          </Flex>

          <Button
            mt="45px"
            padding="16px 32px"
            width="31.5rem"
            height="3.5rem"
            background="primary.main"
            borderRadius="4px"
            fontWeight="500"
            fontSize="18px"
            lineHeight="22px"
            color="#fff"
            textAlign="center"
            onClick={sendVerification}
            _hover={{
              background: 'primary.200'
            }}
            isDisabled={!code}>
            Next
          </Button>

          <Flex alignSelf="center" mt="45px">
            <Text flexShrink="0" fontWeight="500" color="#000000" fontSize="16px" lineHeight="22px">
              Did not receive OTP?
            </Text>
            <Button
              variant="link"
              ml="10px"
              fontWeight="600"
              color="#F9C567"
              fontSize="16px"
              lineHeight="22px"
              _hover={{
                background: 'primary.300',
                textDecration: 'none'
              }}>
              Resend
            </Button>
          </Flex>
        </Flex>
      </Box>
    </Flex>

    // <Flex flexDir="column" width="100%" height="100vh" background={theme.colors.primary['100']}>
    //   <Flex mt="60px" ml="60px">
    //     <Image src={Logo} alt="Logo" />
    //     <Text
    //       ml="4px"
    //       fontWeight="500"
    //       fontSize="24px"
    //       lineHeight="29px"
    //       display="flex"
    //       alignItems="center"
    //       textAlign="right"
    //       color={theme.colors.primary.main}>
    //       Sendrail
    //     </Text>
    //   </Flex>
    //   <Center>
    //     <Box
    //       mt="40px"
    //       display="flex"
    //       flexDirection="column"
    //       padding="38px 40px"
    //       width="500px"
    //       height="400px"
    //       bg="#FFFFFF"
    //       borderRadius="12px">
    //       <Box>
    //         <Box width="400px">
    //           <Center>
    //             <Box width="100%" mb="30px">
    //               <Center>
    //                 <Image src={Logo} alt="Onboarding Logo" pr="10px" />
    //               </Center>
    //               <Box mt="13px" width="100%" textAlign="center">
    //                 <Text fontWeight="600" fontSize="24px" lineHeight="22px">
    //                   Verification
    //                 </Text>
    //               </Box>
    //             </Box>
    //           </Center>
    //           <Box
    //             width="100%"
    //             fontWeight="500"
    //             fontSize="14px"
    //             lineHeight="22px"
    //             mt="24px"
    //             textAlign="center"
    //             color="#ABA7A7">
    //             <Text>Enter The Verification Code Sent To Your Email</Text>
    //           </Box>
    //         </Box>
    //         <FormControl>
    //           <Input
    //             placeholder="Enter verification code"
    //             mt="30px"
    //             ml="15px"
    //             value={code}
    //             onChange={(e) => setCode(e.target.value)}
    //             padding="10px 12px 10px 10px"
    //             width="400px"
    //             height="44px"
    //             background="#fff"
    //             border="1px solid #ABA7A7"
    //             borderRadius="4px"
    //             fontWeight="500"
    //             fontSize="16px"
    //             lineHeight="22px"
    //             color="#1F1F1F"
    //             focusBorderColor={theme.colors.primary.main}
    //           />
    //           <FormHelperText
    //             fontWeight="500"
    //             fontSize="14px"
    //             lineHeight="22px"
    //             ml="15px"
    //             color='#FF0000'>
    //             {!errState ? 'invalid or expired code' : ''}
    //           </FormHelperText>

    //           <Button
    //             mt="70px"
    //             ml="15px"
    //             padding="16px 32px"
    //             width="400px"
    //             height="48px"
    //             background={theme.colors.primary.main}
    //             borderRadius="4px"
    //             fontWeight="500"
    //             fontSize="18px"
    //             lineHeight="22px"
    //             color="#fff"
    //             textAlign="center"
    //             onClick={sendVerification}
    //             _hover={{
    //               background: '#16134f'
    //             }}
    //             isDisabled={!code}>
    //             Next
    //           </Button>
    //         </FormControl>
    //       </Box>
    //     </Box>
    //   </Center>
    // </Flex>
  )
}

export default Verification
