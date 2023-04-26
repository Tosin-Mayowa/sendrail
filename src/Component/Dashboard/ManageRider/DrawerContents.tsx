import { Text, Image, Flex, Box } from '@chakra-ui/react';
import React from 'react';
import box from '../../../Asset/Rider/box.png'
import Vector from '../../../Asset/Rider/map.png'
import Time from '../../../Asset/Rider/time.png'
import Route from '../../../Asset/Rider/route.png'
export const DrawerContents=()=>{

    return (
      <>
        {/* main box */}
        <Flex flexDir="column" width="100%">
          {/* content head */}
          <Flex width="100%" height="4.1875rem" background="rgba(7, 5, 41, 0.07)">
            <Flex
              ml="24px"
              alignSelf="flex-end"
              justifyContent="space-between"
              width="21.5625rem"
              height="2.1875rem">
              <Flex
                cursor="pointer"
                width="7.25rem"
                height="100%"
                justifyContent="space-between"
                _selected={{
                  borderBottom: '2px solid #000'
                }}>
                <Image src={box} alt="" width="24px" height="24px" />
                <Text
                  flexShrink="0"
                  color="text.50"
                  fontWeight="700"
                  fontSize="24px"
                  lineHeight="17px"
                  textTransform="capitalize">
                  Orders:
                </Text>
              </Flex>
              <Flex
                cursor="pointer"
                height="100%"
                _selected={{
                  borderBottom: '2px solid #000'
                }}>
                <Text
                  flexShrink="0"
                  color="text.50"
                  fontWeight="500"
                  fontSize="18px"
                  lineHeight="22px"
                  textTransform="capitalize">
                  Order101
                </Text>
              </Flex>
              <Flex
                cursor="pointer"
                height="100%"
                _focus={{
                  borderBottom: '2px solid #000'
                }}>
                <Text
                  flexShrink="0"
                  color="text.200"
                  fontWeight="500"
                  fontSize="18px"
                  lineHeight="22px"
                  textTransform="capitalize">
                  Order102
                </Text>
              </Flex>
            </Flex>
          </Flex>
          {/*end content head */}

          {/* content measure dist */}
          <Flex mt="40px" justifyContent="space-around">
            {/* distance */}
            <Flex
              flexDir="column"
              width="12.5rem"
              height="6.8125rem"
              bg="bg.100"
              borderRadius="20px">
              <Flex
                ml="1rem"
                mt="1rem"
                width="5.4375rem"
                height="1.0625rem"
                justifyContent="space-between">
                <Text
                  flexShrink="0"
                  color="#000"
                  fontWeight="500"
                  fontSize="16px"
                  lineHeight="17px">
                  Distance
                </Text>
                <Image
                  src={Vector}
                  alt="Bike"
                  objectFit="contain"
                  width="13.33px"
                  height="14.85px"
                  alignSelf="center"
                />
              </Flex>
              <Text
                mt="24px"
                ml="46px"
                flexShrink="0"
                color="#000"
                fontWeight="500"
                fontSize="32px"
                lineHeight="17px">
                250km
              </Text>
            </Flex>
            {/* end distance */}

            {/* Time */}
            <Flex
              flexDir="column"
              width="9.5625rem"
              height="6.8125rem"
              bg="bg.100"
              borderRadius="20px">
              <Flex
                ml="1rem"
                mt="1rem"
                width="5.4375rem"
                height="1.0625rem"
                justifyContent="space-between">
                <Text
                  flexShrink="0"
                  color="#000"
                  fontWeight="500"
                  fontSize="16px"
                  lineHeight="17px">
                  Time
                </Text>
                <Image
                  src={Time}
                  alt="Time"
                  objectFit="contain"
                  width="13.33px"
                  height="14.85px"
                  alignSelf="center"
                />
              </Flex>
              <Text
                mt="24px"
                ml="46px"
                flexShrink="0"
                color="#000"
                fontWeight="500"
                fontSize="32px"
                lineHeight="17px">
                3 hrs
              </Text>
            </Flex>
            {/* end Time */}
            {/* Route */}
            <Flex
              alignSelf="center"
              width="8.75rem"
              height="2.5rem"
              padding="8px 16px"
              borderRadius="8px"
              justifyContent="space-between"
              alignItems="center"
              bg="#000">
              <Image
                src={Route}
                alt="Time"
                objectFit="contain"
                width="24px"
                height="24px"
                // alignSelf="center"
              />
              <Text flexShrink="0" color="#fff" fontWeight="500" fontSize="16px" lineHeight="17px">
                View route
              </Text>
            </Flex>
            {/* end Route */}
          </Flex>
          {/*end content measure dist */}

          {/* content status */}
          <Flex></Flex>
          {/*end content status */}

          {/* content movement */}
          <Flex></Flex>
          {/*end content movement */}
        </Flex>
        {/* end main box */}
      </>
    )
}