import {
  Image,
  Text,
  Box,
  Input,
  Flex,
  Button,
  
  InputLeftElement,
  InputGroup
} from '@chakra-ui/react'
import React from 'react'
import Back from '../../../Asset/Settings/back.png'
import Naira from '../../../Asset/Settings/naira.png'


const BusinessPref=()=>{
    
    return (
      <>
        <Flex
          flexDir="column"
          height="32.4375rem"
          justifyContent="space-between"
          alignItems="flex-start">
          <Flex
            flexDir="column"
            alignItems="flex-start"
            justifySelf="flex-start"
            justifyContent="space-between"
            width="14.3125rem"
            height="6.3125rem">
            <Image
              cursor="pointer"
              src={Back}
              alt=""
              width="40px"
              height="40px"
              objectFit="cover"
            />
            <Text flexShrink="0" color="#000" fontWeight="600" fontSize="24px" lineHeight="29px">
              Business Preferences
            </Text>
          </Flex>
          <Box
            width="35.3125rem"
            height="21.6875rem"
            padding="calc(1.25rem + 2.734vh) calc(3.75rem + 4.166vw)"
            background="rgba(7, 5, 41, 0.07)"
            border-radius="20px"
            display="flex"
            flexDir="column"
            alignSelf="center"
            justifySelf="center">
            <Flex
              width="20.3125rem"
              flexDir="column"
              justifyContent="space-between"
              alignItems="flex-start"
              height="15.6875rem">
              <Flex
                width="20.3125rem"
                height="11.3125rem"
                flexDir="column"
                justifyContent="space-between">
                <Text color="#1F1F1F" fontWeight="500" fontSize="18px" lineHeight="22px">
                  Set price per/mile(mi)
                </Text>
                <Flex flexDir="column" width="100%">
                  
                  <InputGroup>
                    <InputLeftElement
                      children={<Image src={Naira} width="10px" height="12px" objectFit="cover" />}
                    />
                    <Input
                      
                      alignItems="center"
                      width="100%"
                      height="5.175vh"
                      background="#FFFFFF"
                      borderRadius="4px"
                      focusBorderColor="primary.main"
                      padding="15px 12px 15px 10px"
                    />
                  </InputGroup>
                </Flex>
                <Flex flexDir="column" width="100%">
                 
                  <InputGroup>
                    <InputLeftElement
                      children={<Image src={Naira} width="10px" height="12px" objectFit="cover" />}
                    />
                    <Input
                      
                      alignItems="center"
                      width="100%"
                      height="5.175vh"
                      background="#FFFFFF"
                      borderRadius="4px"
                      focusBorderColor="primary.main"
                      padding="15px 12px 15px 10px"
                    />
                  </InputGroup>
                </Flex>
              </Flex>
              <Button
                alignSelf="center"
                lineHeight="22px"
                fontWeight="500"
                fontSize="14px"
                color="#595956"
                padding="8px 24px"
                flexShrink="0"
                width="8.5rem"
                height="2.375rem"
                background="rgba(6, 0, 137, 0.15)"
                borderRadius="8px">
                Save changes
              </Button>
            </Flex>
          </Box>
        </Flex>
      </>
    )
}

export default BusinessPref;