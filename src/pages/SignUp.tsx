import React, { useCallback, useReducer } from 'react'
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
  Highlight
} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import reducer from '../reducers/signupReducer'
import Logo from '../Asset/Logos/Onboarding/SENDRAILS.png'
import Mark from '../Asset/Logos/Onboarding/Vector.png'
import Ellipse from '../Asset/Logos/Onboarding/Ellipse.png'
import { signUpApi } from '../api/sign_up'

const initialState = {
  bussName: '',
  select: '',
  bussAdd: '',
  stateVal: '',
  country: '',
  firstName: '',
  lastName: '',
  stateInfo: '',
  countryInfo: '',
  email: '',
  password: ''
}
function SignUp() {
  const theme = useTheme()
  const navigate = useNavigate()
  const [state, dispatch] = useReducer(reducer, initialState)
  // const passReg=/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

  const lowerCase = /[a-z]/
  const upper = /[A-Z]/
  const numb = /[0-9]/
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
    password
  } = state
  const sendSignUp = useCallback(async () => {
    const config = {
      business: {
        name: bussName,
        type: select,
        address: bussAdd,
        state: stateVal,
        country: country
      },
      first_name: firstName,
      last_name: lastName,
      address: bussAdd,
      state: stateInfo,
      country: countryInfo,
      email: email,
      password: password
    };

    console.log('busname', config)
    const resp = await signUpApi(config)
    console.log(resp);
    if (resp) {

      navigate('/verify', { state: { email } })
    }
  }, [
    bussName,
    select,
    bussAdd,
    stateVal,
    country,
    firstName,
    lastName,
    bussAdd,
    stateInfo,
    countryInfo,
    email,
    password
  ])

  return (
    <Flex className="BackG" width="100%" height="100%" justifyContent="center">
      <Box
        width={{ base: '200px', md: '400px', lg: '600px' }}
        bg="#fff"
        height={{ base: '1360px', md: '1270px', lg: '1249px' }}
        mt={{ base: '130px', md: '100px', lg: '70px' }}
        border="1px solid #ABA7A7"
        borderRadius="10px">
        <Box width={{ base: '100px', md: '217px', lg: '317px' }}>
          <Box
            width={{ base: '50px', md: '64px', lg: '84px' }}
            mx={{ base: '85px', md: '185px', lg: '285px' }}
            mt={{ base: '100px', md: '80px', lg: '60px' }}>
            <Center>
              <Image src={Logo} alt="Onboarding Logo" pr={{ base: '2px', md: '5px', lg: '10px' }} />
            </Center>
            <Box mt="13px" width="100%">
              <Text
                fontWeight="600"
                fontSize={{ base: '12px', md: '15px', lg: '24px' }}
                lineHeight={{ base: '10px', md: '14px', lg: '22px' }}>
                Sign up
              </Text>
            </Box>
          </Box>
          <Box
            mx={{ base: '60px', md: '80px', lg: '149px' }}
            width="100%"
            fontWeight="400"
            fontSize={{ base: '8px', md: '10px', lg: '12px' }}
            lineHeight={{ base: '10px', md: '14px', lg: '22px' }}
            mt={{ base: '10px', md: '14px', lg: '24px' }}
            textAlign="center"
            color="#000000">
            <Text>Experience a faster, easier and more reliable way to move</Text>
            <Text>items from one location to another on Sendrail .</Text>
          </Box>
        </Box>
        <FormControl>
          <Heading
            mt={{ base: '30px', md: '42px', lg: '62px' }}
            ml={{ base: '20px', md: '40px', lg: '60px' }}
            fontWeight="500"
            fontSize={{ base: '10px', md: '14px', lg: '20px' }}
            lineHeight={{ base: '10px', md: '14px', lg: '22px' }}
            color="#595956">
            Business Information
          </Heading>
          <Input
            placeholder="Business name"
            mt="20px"
            ml={{ base: '25px', md: '40px', lg: '60px' }}
            value={bussName}
            onChange={(e) => dispatch({ type: 'business name', payload: e.target.value })}
            padding="10px 12px 10px 10px"
            width={{ base: '140px', md: '300px', lg: '480px' }}
            height="44px"
            background="#fff"
            border="1px solid #ABA7A7"
            borderRadius="4px"
            fontWeight="500"
            fontSize={{ base: '10px', md: '12px', lg: '16px' }}
            lineHeight={{ base: '10px', md: '15px', lg: '22px' }}
            color="#1F1F1F"
            focusBorderColor={theme.colors.primary.main}
          />

          <Select
            placeholder="Select an option"
            mt="20px"
            ml={{ base: '25px', md: '40px', lg: '60px' }}
            value={select}
            onChange={(e) => dispatch({ type: 'select inp', payload: e.target.value })}
            width={{ base: '140px', md: '300px', lg: '480px' }}
            height="44px"
            background="#fff"
            border="1px solid #ABA7A7"
            borderRadius="4px"
            fontWeight="500"
            fontSize={{ base: '10px', md: '12px', lg: '16px' }}
            lineHeight={{ base: '10px', md: '15px', lg: '22px' }}
            bg="#fff"
            color="#1F1F1F"
            focusBorderColor={theme.colors.primary.main}>
            <option value="individual">Individual</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>
          <Input
            placeholder="Business address"
            value={bussAdd}
            onChange={(e) => dispatch({ type: 'Buss Address', payload: e.target.value })}
            mt="20px"
            ml={{ base: '25px', md: '40px', lg: '60px' }}
            padding="10px 12px 10px 10px"
            width={{ base: '140px', md: '300px', lg: '480px' }}
            height="44px"
            background="#fff"
            border="1px solid #ABA7A7"
            borderRadius="4px"
            fontWeight="500"
            fontSize={{ base: '10px', md: '12px', lg: '16px' }}
            lineHeight={{ base: '10px', md: '15px', lg: '22px' }}
            color="#1F1F1F"
            focusBorderColor={theme.colors.primary.main}
          />
          <Flex flexDir={{ base: 'column', md: 'row', lg: 'row' }}>
            <Input
              placeholder="State"
              value={stateVal}
              mt="29px"
              ml={{ base: '25px', md: '40px', lg: '60px' }}
              onChange={(e) => dispatch({ type: 'state val', payload: e.target.value })}
              padding="9px 12px 9px 10px"
              width={{ base: '140px', md: '150px', lg: '210px' }}
              height="40px"
              background="#fff"
              border="1px solid #ABA7A7"
              borderRadius="4px"
              fontWeight="500"
              fontSize={{ base: '10px', md: '12px', lg: '16px' }}
              lineHeight={{ base: '10px', md: '15px', lg: '22px' }}
              color="#1F1F1F"
              focusBorderColor={theme.colors.primary.main}
            />
            <Input
              placeholder="Country"
              mt="29px"
              ml={{ base: '25px', md: '40px', lg: '60px' }}
              padding="9px 12px 9px 10px"
              width={{ base: '140px', md: '150px', lg: '210px' }}
              height="40px"
              background="#fff"
              border="1px solid #ABA7A7"
              borderRadius="4px"
              fontWeight="500"
              fontSize={{ base: '10px', md: '12px', lg: '16px' }}
              lineHeight={{ base: '10px', md: '15px', lg: '22px' }}
              color="#1F1F1F"
              value={country}
              onChange={(e) => dispatch({ type: 'country', payload: e.target.value })}
              focusBorderColor={theme.colors.primary.main}
            />
          </Flex>
          <Heading
            mt="20px"
            ml={{ base: '25px', md: '40px', lg: '60px' }}
            fontWeight="500"
            fontSize={{ base: '10px', md: '15px', lg: '20px' }}
            lineHeight={{ base: '10px', md: '15px', lg: '22px' }}
            color="#595956">
            Personal Information
          </Heading>
          <Flex flexWrap={{ base: 'wrap', md: 'wrap', lg: 'wrap' }}>
            <Input
              placeholder="First name"
              value={firstName}
              onChange={(e) => dispatch({ type: 'First Name', payload: e.target.value })}
              mt="20px"
              ml={{ base: '25px', md: '40px', lg: '60px' }}
              padding="9px 12px 9px 10px"
              width={{ base: '140px', md: '150px', lg: '210px' }}
              height="40px"
              background="#fff"
              border="1px solid #ABA7A7"
              borderRadius="4px"
              fontWeight="500"
              fontSize={{ base: '10px', md: '12px', lg: '16px' }}
              lineHeight={{ base: '10px', md: '15px', lg: '22px' }}
              color="#1F1F1F"
              focusBorderColor={theme.colors.primary.main}
            />
            <Input
              placeholder="Last name"
              mt="20px"
              ml={{ base: '25px', md: '40px', lg: '60px' }}
              value={lastName}
              onChange={(e) => dispatch({ type: 'Last name', payload: e.target.value })}
              padding="9px 12px 9px 10px"
              width={{ base: '140px', md: '150px', lg: '210px' }}
              height="40px"
              background="#fff"
              border="1px solid #ABA7A7"
              borderRadius="4px"
              fontWeight="500"
              fontSize={{ base: '10px', md: '12px', lg: '16px' }}
              lineHeight={{ base: '10px', md: '15px', lg: '22px' }}
              color="#1F1F1F"
              focusBorderColor={theme.colors.primary.main}
            />
            <Input
              placeholder="State"
              value={stateInfo}
              onChange={(e) => dispatch({ type: 'state info', payload: e.target.value })}
              mt="20px"
              ml={{ base: '25px', md: '40px', lg: '60px' }}
              padding="9px 12px 9px 10px"
              width={{ base: '140px', md: '150px', lg: '210px' }}
              height="40px"
              background="#fff"
              border="1px solid #ABA7A7"
              borderRadius="4px"
              fontWeight="500"
              fontSize={{ base: '10px', md: '12px', lg: '16px' }}
              lineHeight={{ base: '10px', md: '15px', lg: '22px' }}
              color="#1F1F1F"
              focusBorderColor={theme.colors.primary.main}
            />
            <Input
              placeholder="Country"
              value={countryInfo}
              onChange={(e) => dispatch({ type: 'country info', payload: e.target.value })}
              mt="20px"
              ml={{ base: '25px', md: '40px', lg: '60px' }}
              padding="9px 12px 9px 10px"
              width={{ base: '140px', md: '150px', lg: '210px' }}
              height="40px"
              background="#fff"
              border="1px solid #ABA7A7"
              borderRadius="4px"
              fontWeight="500"
              fontSize={{ base: '10px', md: '12px', lg: '16px' }}
              lineHeight={{ base: '10px', md: '15px', lg: '22px' }}
              color="#1F1F1F"
              focusBorderColor={theme.colors.primary.main}
            />
          </Flex>
          <Input
            placeholder="Email"
            value={email}
            onChange={(e) => dispatch({ type: 'email', payload: e.target.value })}
            type="email"
            mt="20px"
            ml={{ base: '25px', md: '40px', lg: '60px' }}
            padding="10px 12px 10px 10px"
            width={{ base: '140px', md: '300px', lg: '480px' }}
            height="44px"
            background="#fff"
            border="1px solid #ABA7A7"
            borderRadius="4px"
            fontWeight="500"
            fontSize={{ base: '10px', md: '12px', lg: '16px' }}
            lineHeight={{ base: '10px', md: '15px', lg: '22px' }}
            color="#1F1F1F"
            focusBorderColor={theme.colors.primary.main}
          />
          <Input
            placeholder="Set password"
            value={password}
            onChange={(e) => dispatch({ type: 'password', payload: e.target.value })}
            type="password"
            mt="20px"
            ml={{ base: '25px', md: '40px', lg: '60px' }}
            padding="10px 12px 10px 10px"
            width={{ base: '140px', md: '300px', lg: '480px' }}
            height="44px"
            background="#fff"
            border="1px solid #ABA7A7"
            borderRadius="4px"
            fontWeight="500"
            fontSize={{ base: '10px', md: '12px', lg: '16px' }}
            lineHeight={{ base: '10px', md: '15px', lg: '22px' }}
            color="#1F1F1F"
            focusBorderColor={theme.colors.primary.main}
          />
          <Box>
            <Heading
              mt="40px"
              ml={{ base: '25px', md: '40px', lg: '60px' }}
              fontWeight="500"
              fontSize="14px"
              lineHeight={{ base: '10px', md: '15px', lg: '22px' }}
              color="#1F1F1F">
              Password must
            </Heading>

            <Flex flexDir="column">
              <Flex ml={{ base: '25px', md: '40px', lg: '60px' }} mt="12px">
                <Image
                  src={password.length >= 8 ? Mark : Ellipse}
                  width="10px"
                  height="10px"
                  mt="8px"
                  objectFit="cover"
                  alt="Ellipse"
                />
                <Text
                  fontWeight="400"
                  fontSize={{ base: '9px', md: '12px', lg: '12px' }}
                  lineHeight={{ base: '10px', md: '15px', lg: '22px' }}
                  color="#1F1F1F"
                  ml="9px"
                  mt={{ base: '7px', md: '0px', lg: '0px' }}>
                  be at least 8 character long
                </Text>
              </Flex>
              <Flex ml={{ base: '25px', md: '40px', lg: '60px' }} mt="12px">
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
                  fontSize={{ base: '9px', md: '12px', lg: '12px' }}
                  lineHeight={{ base: '10px', md: '15px', lg: '22px' }}
                  color="#1F1F1F"
                  ml="9px"
                  mt={{ base: '7px', md: '0px', lg: '0px' }}>
                  contain a lowercase letter (a-z)
                </Text>
              </Flex>
              <Flex ml={{ base: '25px', md: '40px', lg: '60px' }} mt="12px">
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
                  fontSize={{ base: '9px', md: '12px', lg: '12px' }}
                  lineHeight={{ base: '10px', md: '15px', lg: '22px' }}
                  color="#1F1F1F"
                  ml="9px"
                  mt={{ base: '7px', md: '0px', lg: '0px' }}>
                  contain a uppercase letter (A-Z)
                </Text>
              </Flex>
              <Flex ml={{ base: '25px', md: '40px', lg: '60px' }} mt="12px">
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
                  fontSize={{ base: '9px', md: '12px', lg: '12px' }}
                  lineHeight={{ base: '10px', md: '15px', lg: '22px' }}
                  color="#1F1F1F"
                  ml="9px"
                  mt={{ base: '7px', md: '0px', lg: '0px' }}>
                  contain a Number (0-9)
                </Text>
              </Flex>
              <Button
                mt="40px"
                ml={{ base: '25px', md: '40px', lg: '60px' }}
                padding="16px 32px"
                width={{ base: '120px', md: '300px', lg: '468px' }}
                height="48px"
                background={theme.colors.primary.main}
                borderRadius="4px"
                fontWeight="500"
                fontSize={{ base: '13px', md: '15px', lg: '18px' }}
                onClick={sendSignUp}
                lineHeight={{ base: '10px', md: '15px', lg: '22px' }}
                color="#F9C567"
                textAlign="center"
                _hover={{
                  background: '#16134f'
                }}
                isDisabled={
                  !(
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
                  )
                }>
                Create Account
              </Button>
              <Box
                width={{ base: '120px', md: '300px', lg: '410px' }}
                height="44px"
                ml={{ base: '25px', md: '40px', lg: '60px' }}
                mt={['20px', '30px']}>
                <Text
                  fontWeight="500"
                  fontSize={{ base: '9px', md: '12px', lg: '14px' }}
                  lineHeight={{ base: '10px', md: '15px', lg: '22px' }}
                  color="#000000">
                  <Highlight
                    query={['Terms of Service', 'Privacy Policy']}
                    styles={{ color: '#F9C567' }}>
                    By clicking Continue, you acknowledge that you have read and accepted the Terms
                    of Service and Privacy Policy.
                  </Highlight>
                </Text>
              </Box>
            </Flex>
          </Box>
        </FormControl>
      </Box>
    </Flex>
  )
}

export default SignUp
