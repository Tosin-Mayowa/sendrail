import React, { useState, useCallback } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import '../Style/signUp.css';
import {
  Flex,
  Box,
  Button,
  Image,
 
  Text,
  
  Input,
  useTheme
} from '@chakra-ui/react'
import { useAuth } from '../lib/hooks/useAuth'
import { signInApi } from '../api/login'
import Logo from '../Asset/Onbarding/SENDRAILS.png'

function SignIn() {
  const { setAuth } = useAuth()
  const theme = useTheme()
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const login = useCallback(async () => {
    const resp = await signInApi({
      email,
      password
    })
    console.log(resp);
    if (resp?.data?.success) {
      const accessToken = resp?.data?.data?.token
      const user = resp?.data?.data?.user;
     
      setAuth({password, user, accessToken});
      navigate('/dashboard');
    }
  }, [email, password, navigate, setAuth])

  return (
    <Flex
      width="100%"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      flexDir="column"
      className="BackG">
      <Box
        display="flex"
        justifyContent="center"
        width="40rem"
        height="32rem"
        padding="64px"
        bg="#fff">
        <Flex
          width="32rem"
          height="24rem"
          flexDir="column"
          alignItems="center"
          justifyContent="space-between">
          <Flex
            width="5.25rem"
            height="3.5rem"
            flexDir="column"
            justifyContent="space-between"
            alignItems="center">
            <Image src={Logo} alt="Sendrail" width="30px" height="22px" objectFit="cover" />
            <Text fontWeight="600" fontSize="24px" lineHeight="22px" color="#000000" flexShrink="0">
              Sign in
            </Text>
          </Flex>
          <Box display="flex" flexDirection="column">
            <Input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              type="email"
              mt="20px"
              width="30rem"
              height="2.6rem"
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
              placeholder="Password"
              autoComplete=""
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              mt="20px"
              width="30rem"
              height="2.6rem"
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
              mt="60px"
              padding="16px 32px"
              width="30rem"
              height="2.6rem"
              background={theme.colors.primary.main}
              borderRadius="4px"
              fontWeight="500"
              onClick={login}
              fontSize="18px"
              lineHeight="22px"
              color="#fff"
              textAlign="center"
              isDisabled={!(email && password && email.includes('@'))}
              _hover={{
                background: '#16134f'
              }}>
              Sign in
            </Button>
          </Box>
          <Flex width="30rem" justifyContent="space-between">
            <Text cursor="pointer" fontSize="12px" color={theme.colors.primary['100']}>
              <Link to="/forgot-password">Forgot Password ?</Link>
            </Text>
            <Flex>
              <Text fontSize="12px">Don’t have an account?</Text>

              <Text cursor="pointer" fontSize="12px" ml="3px" color={theme.colors.primary['100']}>
                {' '}
                <Link to="/sign-up">Sign up</Link>
              </Text>
            </Flex>
          </Flex>
          
        </Flex>
        
      </Box>
    </Flex>
  )
}

export default SignIn
