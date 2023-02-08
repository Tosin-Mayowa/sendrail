import React, { useState,useCallback } from "react";
import {
  Flex,
  Box,
  Button,
  Image,
  Center,
  Text,
  FormControl,
  Input,
  useTheme,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { signInApi} from "../api/login"
import Logo from "../Asset/Logos/Onboarding/SENDRAILS.png";

function SignIn() {
  const theme = useTheme();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

 const login = useCallback(async () => {
   const resp = await signInApi({
     email,
     password
   })
   console.log(resp)
 }, [email,password])



  return (
    <Flex width="100%" height="100vh" flexDir="column" background={theme.colors.primary["100"]}>
      <Box mt="60px" ml="60px" display="flex">
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
      </Box>
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
            <Center>
              <Box width="84px" mb="30px">
                <Center>
                  <Image src={Logo} alt="Onboarding Logo" pr="10px" />
                </Center>
                <Box mt="13px" width="100%">
                  <Text fontWeight="600" fontSize="24px" lineHeight="22px">
                    Sign in
                  </Text>
                </Box>
              </Box>
            </Center>
            <FormControl>
              <Input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                type="email"
                mt="20px"
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
              <Input
                placeholder="Set password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                mt="20px"
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
                mt="40px"
                ml="15px"
                padding="16px 32px"
                width="400px"
                height="48px"
                background={theme.colors.primary.main}
                borderRadius="4px"
                fontWeight="500"
                onClick={() =>{
                  login();
                  navigate("/")
                }}
                fontSize="18px"
                lineHeight="22px"
                color="#fff"
                textAlign="center"
                isDisabled={!(email && password && email.includes('@'))}>
                Sign in
              </Button>
              <Flex width="400px" ml="14px" mt="12px" justifyContent="space-between">
                <Text cursor="pointer" fontSize="12px" color={theme.colors.primary["100"]}>
                  <Link to="/forgot-password">Forgot Password ?</Link>
                </Text>
                <Flex>
                  <Text fontSize="12px">Don’t have an account?</Text>

                  <Text
                    cursor="pointer"
                    fontSize="12px"
                    ml="3px"
                    color={theme.colors.primary["100"]}>
                    {" "}
                    <Link to="/sign-up">Sign up</Link>
                  </Text>
                </Flex>
              </Flex>
            </FormControl>
          </Box>
        </Box>
      </Center>
    </Flex>
  );
}

export default SignIn;
