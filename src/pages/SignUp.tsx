import React,{useReducer} from "react";
import '../Style/signUp.css'
import {
  Flex,
  Box,
  Image,
  Button,
  Center,
  Text,
  FormControl,
  Heading,
  Input,
  Select,
  useTheme,
  Highlight,
} from "@chakra-ui/react";
import reducer from '../reducers/signupReducer';
import Logo from "../Asset/Logos/Onboarding/SENDRAILS.png";
import Mark from "../Asset/Logos/Onboarding/Vector.png";
import Ellipse from "../Asset/Logos/Onboarding/Ellipse.png";
import {useNavigate} from "react-router-dom";
const initialState = {
  bussName: "",
  select: "",
  bussAdd: "",
  stateVal: "",
  country: "",
  firstName: "",
  lastName: "",
  stateInfo: "",
  countryInfo: "",
  email: "",
  password: "",
};
const SignUp = () => {
  const theme = useTheme();
  const navigate=useNavigate();
  const [state,dispatch]=useReducer(reducer,initialState);
  // const passReg=/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const lowerCase = /[a-z]/;
const upper=/[A-Z]/;
const numb=/[0-9]/
 const {
  bussName,
  select,
  bussAdd,
  stateVal,
  country,
  firstName,
  lastName,
  stateInfo,
  countryInfo,
  email,
  password,
}=state;
  return (
    <Flex className="BackG" width="100%" height="100%" justifyContent="center">
      <Box
        width="600px"
        bg="#fff"
        height="1249px"
        mt="70px"
        border="1px solid #ABA7A7"
        borderRadius="10px"
      >
        <Box width="317px">
          <Box width="84px" mx="285px" mt="60px">
            <Center>
              <Image src={Logo} alt="Onboarding Logo" pr="10px" />
            </Center>
            <Box mt="13px" width="100%">
              <Text fontWeight="600" fontSize="24px" lineHeight="22px">
                Sign up
              </Text>
            </Box>
          </Box>
          <Box
            mx="149px"
            width="100%"
            fontWeight="400"
            fontSize="12px"
            lineHeight="22px"
            mt="24px"
            textAlign="center"
            color="#000000"
          >
            <Text>
              Experience a faster, easier and more reliable way to move
            </Text>
            <Text>items from one location to another on Sendrail .</Text>
          </Box>
        </Box>
        <FormControl>
          <Heading
            mt="62px"
            ml="60px"
            fontWeight="500"
            fontSize="20px"
            lineHeight="22px"
            color="#595956"
          >
            Business Information
          </Heading>
          <Input
            placeholder="Business name"
            mt="20px"
            ml="60px"
            value={bussName}
            onChange={(e) =>
              dispatch({ type: "business name", payload: e.target.value })
            }
            padding="10px 12px 10px 10px"
            width="480px"
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

          <Select
            placeholder="Select an option"
            mt="20px"
            ml="50px"
            value={select}
            onChange={(e) =>
              dispatch({ type: "select inp", payload: e.target.value })
            }
            width="500px"
            height="44px"
            background="#fff"
            border="1px solid #ABA7A7"
            borderRadius="4px"
            fontWeight="500"
            fontSize="16px"
            lineHeight="22px"
            bg="#fff"
            color="#1F1F1F"
            focusBorderColor={theme.colors.primary.main}
          >
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>
          <Input
            placeholder="Business address"
            value={bussAdd}
            onChange={(e) =>
              dispatch({ type: "Buss Address", payload: e.target.value })
            }
            mt="20px"
            ml="60px"
            padding="10px 12px 10px 10px"
            width="480px"
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
          <Flex>
            <Input
              placeholder="State"
              value={stateVal}
              mt="29px"
              ml="60px"
              onChange={(e) =>
                dispatch({ type: "state val", payload: e.target.value })
              }
              padding="9px 12px 9px 10px"
              width="210px"
              height="40px"
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
              placeholder="Country"
              mt="29px"
              ml="60px"
              padding="9px 12px 9px 10px"
              width="210px"
              height="40px"
              background="#fff"
              border="1px solid #ABA7A7"
              borderRadius="4px"
              fontWeight="500"
              fontSize="16px"
              lineHeight="22px"
              color="#1F1F1F"
              value={country}
              onChange={(e) =>
                dispatch({ type: "country", payload: e.target.value })
              }
              focusBorderColor={theme.colors.primary.main}
            />
          </Flex>
          <Heading
            mt="20px"
            ml="60px"
            fontWeight="500"
            fontSize="20px"
            lineHeight="22px"
            color="#595956"
          >
            Personal Information
          </Heading>
          <Flex flexWrap="wrap">
            <Input
              placeholder="First name"
              value={firstName}
              onChange={(e) =>
                dispatch({ type: "First Name", payload: e.target.value })
              }
              mt="20px"
              ml="60px"
              padding="9px 12px 9px 10px"
              width="210px"
              height="40px"
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
              placeholder="Last name"
              mt="20px"
              ml="60px"
              value={lastName}
              onChange={(e) =>
                dispatch({ type: "Last name", payload: e.target.value })
              }
              padding="9px 12px 9px 10px"
              width="210px"
              height="40px"
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
              placeholder="State"
              value={stateInfo}
              onChange={(e) =>
                dispatch({ type: "state info", payload: e.target.value })
              }
              mt="20px"
              ml="60px"
              padding="9px 12px 9px 10px"
              width="210px"
              height="40px"
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
              placeholder="Country"
              value={countryInfo}
              onChange={(e) =>
                dispatch({ type: "country info", payload: e.target.value })
              }
              mt="20px"
              ml="60px"
              padding="9px 12px 9px 10px"
              width="210px"
              height="40px"
              background="#fff"
              border="1px solid #ABA7A7"
              borderRadius="4px"
              fontWeight="500"
              fontSize="16px"
              lineHeight="22px"
              color="#1F1F1F"
              focusBorderColor={theme.colors.primary.main}
            />
          </Flex>
          <Input
            placeholder="Email"
            value={email}
            onChange={(e) =>
              dispatch({ type: "email", payload: e.target.value })
            }
            type="email"
            mt="20px"
            ml="60px"
            padding="10px 12px 10px 10px"
            width="480px"
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
            value={password}
            onChange={(e) =>
              dispatch({ type: "password", payload: e.target.value })
            }
            type="password"
            mt="20px"
            ml="60px"
            padding="10px 12px 10px 10px"
            width="480px"
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
          <Box>
            <Heading
              mt="40px"
              ml="60px"
              fontWeight="500"
              fontSize="14px"
              lineHeight="22px"
              color="#1F1F1F"
            >
              Password must
            </Heading>
            <Flex flexDir="column">
              <Flex ml="60px" mt="12px">
                <Image
                  src={password.length === 8 ? Mark : Ellipse}
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
              <Flex ml="60px" mt="12px">
                <Image
                  src={lowerCase.test(password) ? Mark : Ellipse}
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
              <Flex ml="60px" mt="12px">
                <Image
                  src={upper.test(password) ? Mark : Ellipse}
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
              <Flex ml="60px" mt="12px">
                <Image
                  src={numb.test(password) ? Mark : Ellipse}
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
                mt="40px"
                ml="60px"
                padding="16px 32px"
                width="468px"
                height="48px"
                background={theme.colors.primary.main}
                borderRadius="4px"
                fontWeight="500"
                fontSize="18px"
                onClick={() => navigate("/login")}
                lineHeight="22px"
                color="#F9C567"
                textAlign="center"
                isDisabled={
                  bussName &&
                  select &&
                  bussAdd &&
                  stateVal &&
                  country &&
                  firstName &&
                  lastName &&
                  stateInfo &&
                  countryInfo &&
                  email &&
                  password &&
                  numb.test(password) &&
                  upper.test(password) &&
                 lowerCase.test(password) &&
                  password.length >= 8
                    ? false
                    : true
                }
              >
                Create Account
              </Button>
              <Box width="410px" height="44px" ml="60px" mt="30px">
                <Text
                  fontWeight="500"
                  fontSize="14px"
                  lineHeight="22px"
                  color="#000000"
                >
                  <Highlight
                    query={["Terms of Service", "Privacy Policy"]}
                    styles={{ color: "#F9C567" }}
                  >
                    By clicking Continue, you acknowledge that you have read and
                    accepted the Terms of Service and Privacy Policy.
                  </Highlight>
                </Text>
              </Box>
            </Flex>
          </Box>
        </FormControl>
      </Box>
    </Flex>
  );
};

export default SignUp;
