import React from 'react';
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
} from '@chakra-ui/react';
import Logo from '../Asset/Logos/Onboarding/SENDRAILS.png';

function Verification() {
  const theme = useTheme();
  return (
    <Flex flexDir="column" width="100%" height="100vh" background={theme.colors.primary['100']}>
      <Flex mt="60px" ml="60px">
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
          height="400px"
          bg="#FFFFFF"
          borderRadius="12px">
          <Box>
            <Box width="400px">
              <Center>
                <Box width="100%" mb="30px">
                  <Center>
                    <Image src={Logo} alt="Onboarding Logo" pr="10px" />
                  </Center>
                  <Box mt="13px" width="100%" textAlign="center">
                    <Text fontWeight="600" fontSize="24px" lineHeight="22px">
                      Verification
                    </Text>
                  </Box>
                </Box>
              </Center>
              <Box
                width="100%"
                fontWeight="500"
                fontSize="14px"
                lineHeight="22px"
                mt="24px"
                textAlign="center"
                color="#ABA7A7">
                <Text>Enter The Verification Code Sent To Your Email</Text>
              </Box>
            </Box>
            <FormControl>
              <Input
                placeholder="Enter verification code"
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
                textAlign="center">
                Next
              </Button>
            </FormControl>
          </Box>
        </Box>
      </Center>
    </Flex>
  );
}

export default Verification;
