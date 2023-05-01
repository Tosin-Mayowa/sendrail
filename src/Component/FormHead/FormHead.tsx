import {
  Flex,
  Box,
  Image,
  
  Text,
  
} from '@chakra-ui/react';
import React from 'react';
import Logo from '../../Asset/Onbarding/SENDRAILS.png'
export const FormHead=()=>{

    return (
      <>
        <Flex flexDir="column" height="125px" alignSelf="center" alignItems="center" justifyContent="space-between" >
          <Flex
         
            width="5.25rem"
            height="3.5rem"
            flexDir="column"
            justifyContent="space-between"
            alignItems="center">
            <Image src={Logo} alt="Sendrail" width="30px" height="22px" objectFit="cover" />
            <Text fontWeight="600" fontSize="24px" lineHeight="22px" color="#000000" flexShrink="0">
              Sign up
            </Text>
          </Flex>
          <Flex
            width="19.8rem"
            height="2.75rem"
            flexDir="column"
            justifyContent="space-between"
            alignItems="flex-start">
            <Text fontWeight="400" fontSize="12px" lineHeight="22px" color="#000000" flexShrink="0">
              Experience a faster, easier and more reliable way to move
            </Text>
            <Text
              alignSelf="center"
              fontWeight="400"
              fontSize="12px"
              lineHeight="22px"
              color="#000000"
              flexShrink="0">
              items from one location to another on Sendrail.
            </Text>
          </Flex>
        </Flex>
      </>
    )

}