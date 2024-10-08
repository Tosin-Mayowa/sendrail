import React, { useCallback, useReducer } from 'react'
import '../Style/signUp.css'
import {
  Flex,
  Box,
  Image,
  Button,

  Text,
  FormControl,
  Heading,
  Input,
  Select,
  
  Highlight
} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import reducer from '../reducers/signupReducer'
import {FormHead} from '../Component/FormHead/FormHead'
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
      name: bussName,
      type: select,
      business_address: {
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
      password: password,
      role: 'business'
    }

    console.log('busname', config)
    const resp = await signUpApi(config)
    console.log({ resp, password })
    if (resp?.success) {
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
    
    navigate,
    stateInfo,
    countryInfo,
    email,
    password
  ])

  return (
    <Flex
      className="BackG"
      flexDir="column"
      width="100%"
      height="87rem"
      justifyContent="center"
      alignItems="center">
      <Box
      mt="106px"
        display="flex"
        flexDir="column"
        alignItems="flex-start"
        width="600px"
        height="78rem"
        padding="60px"
        background="#FFFFFF"
        borderRadius="10px">
        <FormHead />
        <FormControl>
          <Heading
            mt={{ base: '30px', md: '42px', lg: '62px' }}
            fontWeight="500"
            fontSize={{ base: '10px', md: '14px', lg: '20px' }}
            lineHeight={{ base: '10px', md: '14px', lg: '22px' }}
            color="#595956">
            Business Information
          </Heading>
          <Input
            placeholder="Business name"
            mt="20px"
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
            focusBorderColor="primary.main"
          />

          <Select
            placeholder="Select an option"
            mt="20px"
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
            focusBorderColor="primary.main">
            <option value="individual">Individual</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>
          <Input
            placeholder="Business address"
            value={bussAdd}
            onChange={(e) => dispatch({ type: 'Buss Address', payload: e.target.value })}
            mt="20px"
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
            focusBorderColor="primary.main"
          />
          <Flex
            flexDir={{ base: 'column', md: 'row', lg: 'row' }}
            width="30rem"
            justifyContent="space-between">
            <Input
              placeholder="State"
              value={stateVal}
              mt="29px"
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
              focusBorderColor="primary.main"
            />
            <Input
              placeholder="Country"
              mt="29px"
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
              focusBorderColor="primary.main"
            />
          </Flex>
          <Heading
            mt="20px"
            fontWeight="500"
            fontSize={{ base: '10px', md: '15px', lg: '20px' }}
            lineHeight={{ base: '10px', md: '15px', lg: '22px' }}
            color="#595956">
            Personal Information
          </Heading>
          <Flex
            flexWrap={{ base: 'wrap', md: 'wrap', lg: 'wrap' }}
            width="30rem"
            justifyContent="space-between">
            <Input
              placeholder="First name"
              value={firstName}
              onChange={(e) => dispatch({ type: 'First Name', payload: e.target.value })}
              mt="20px"
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
              focusBorderColor="primary.main"
            />
            <Input
              placeholder="Last name"
              mt="20px"
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
              focusBorderColor="primary.main"
            />
            <Input
              placeholder="State"
              value={stateInfo}
              onChange={(e) => dispatch({ type: 'state info', payload: e.target.value })}
              mt="20px"
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
              focusBorderColor="primary.main"
            />
            <Input
              placeholder="Country"
              value={countryInfo}
              onChange={(e) => dispatch({ type: 'country info', payload: e.target.value })}
              mt="20px"
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
              focusBorderColor="primary.main"
            />
          </Flex>
          <Input
            placeholder="Email"
            value={email}
            onChange={(e) => dispatch({ type: 'email', payload: e.target.value })}
            type="email"
            mt="20px"
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
            focusBorderColor="primary.main"
          />
          <Input
            placeholder="Set password"
            value={password}
            onChange={(e) => dispatch({ type: 'password', payload: e.target.value })}
            type="password"
            mt="20px"
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
            focusBorderColor="primary.main"
          />
          <Box>
            <Heading
              mt="40px"
              fontWeight="500"
              fontSize="14px"
              lineHeight={{ base: '10px', md: '15px', lg: '22px' }}
              color="#1F1F1F">
              Password must
            </Heading>

            <Flex flexDir="column">
              <Flex mt="12px">
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
              <Flex mt="12px">
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
              <Flex mt="12px">
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
              <Flex mt="12px">
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
                padding="16px 32px"
                width={{ base: '120px', md: '300px', lg: '468px' }}
                height="48px"
                background="primary.main"
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
