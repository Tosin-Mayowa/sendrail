import React, { useReducer } from "react";
import {
  Flex,
  Box,
  Image,
  Center,

  Text,
  FormControl,
  Input,
  useTheme,
  FormLabel,
  Heading,
  Button
} from "@chakra-ui/react";
import Logo from "../Asset/Logos/Onboarding/SENDRAILS.png";
import Mark from "../Asset/Logos/Onboarding/Vector.png";
import Ellipse from "../Asset/Logos/Onboarding/Ellipse.png";
import { resetReducer } from '../reducers/resetReducer';
const initialState = {
  newPassword: '', confirmPass: ''
}
const ResetPassword = () => {
  const theme = useTheme();
  const [state, dispatch] = useReducer(resetReducer, initialState);
 
  const lowerCase = /[a-z]/;
  const upper = /[A-Z]/;
  const numb = /[0-9]/;
  const { confirmPass, newPassword } = state;
  return (
    <Flex
      flexDir="column"
      width="100%"
      height="1393px"
      background={theme.colors.primary["100"]}
    >
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
          color={theme.colors.primary.main}
        >
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
          borderRadius="12px"
        >
          <Box>
            <Box width="400px">
              <Center>
                <Box width="100%" mb="30px">
                  <Center>
                    <Image src={Logo} alt="Onboarding Logo" pr="10px" />
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
                color="#ABA7A7"
              >
                <Text>Create New Password</Text>
              </Box>
            </Box>
            <FormControl>
              <FormLabel
                mt="20px"
                fontWeight="500"
                fontSize="16px"
                lineHeight="22px"
                ml="15px"
              >
                Enter New Password
              </FormLabel>
              <Input
                value={newPassword}
                placeholder="password"
                type="password"
                ml="15px"
                onChange={(e) =>
                  dispatch({ type: "new password", payload: e.target.value })
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
            <FormControl>
              <FormLabel
                mt="20px"
                fontWeight="500"
                fontSize="16px"
                lineHeight="22px"
                ml="15px"
              >
                Confirm Password
              </FormLabel>
              <Input
                placeholder="Confirm password"
                type="password"
                value={confirmPass}
                ml="15px"
                onChange={(e) =>
                  dispatch({
                    type: "confirm password",
                    payload: e.target.value,
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
                ml="15px"
                fontWeight="500"
                fontSize="14px"
                lineHeight="22px"
                color="#1F1F1F"
              >
                Password must
              </Heading>
              <Flex flexDir="column">
                <Flex ml="15px" mt="12px">
                  <Image
                    src={newPassword.length === 8 ? Mark : Ellipse}
                    width="10px"
                    height="10px"
                    mt="8px"
                    objectFit="cover"
                    alt="Ellipse"
                  />
                  <Text
                    fontWeight="400"
                    fontSize="12px"
                    lineHeight="22px"
                    color="#1F1F1F"
                    ml="9px"
                  >
                    be at least 8 character long
                  </Text>
                </Flex>
                <Flex ml="15px" mt="12px">
                  <Image
                    src={lowerCase.test(newPassword) ? Mark : Ellipse}
                    width="10px"
                    height="10px"
                    mt="8px"
                    objectFit="cover"
                    alt="Ellipse"
                  />
                  <Text
                    fontWeight="400"
                    fontSize="12px"
                    lineHeight="22px"
                    color="#1F1F1F"
                    ml="9px"
                  >
                    contain a lowercase letter (a-z)
                  </Text>
                </Flex>
                <Flex ml="15px" mt="12px">
                  <Image
                    src={upper.test(newPassword) ? Mark : Ellipse}
                    width="10px"
                    height="10px"
                    mt="8px"
                    objectFit="cover"
                    alt="Ellipse"
                  />
                  <Text
                    fontWeight="400"
                    fontSize="12px"
                    lineHeight="22px"
                    color="#1F1F1F"
                    ml="9px"
                  >
                    contain a uppercase letter (A-Z)
                  </Text>
                </Flex>
                <Flex ml="15px" mt="12px">
                  <Image
                    src={numb.test(newPassword) ? Mark : Ellipse}
                    width="10px"
                    height="10px"
                    mt="8px"
                    objectFit="cover"
                    alt="Ellipse"
                  />
                  <Text
                    fontWeight="400"
                    fontSize="12px"
                    lineHeight="22px"
                    color="#1F1F1F"
                    ml="9px"
                  >
                    contain a Number (0-9)
                  </Text>
                </Flex>
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
                  isDisabled={confirmPass && newPassword ? false : true}
                >
                  Next
                </Button>
              </Flex>
            </Box>
          </Box>
        </Box>
      </Center>
    </Flex>
  );
};

export default ResetPassword;
