import { Text, Image, Flex, Box, Highlight,Button } from '@chakra-ui/react'
import React from 'react';
import './Drawer.css'
import box from '../../../Asset/Rider/box.png'
import Vector from '../../../Asset/Rider/map.png'
import Time from '../../../Asset/Rider/time.png'
import Route from '../../../Asset/Rider/route.png'
import direction from '../../../Asset/Rider/Group1.png'
import Refresh from '../../../Asset/Rider/refresh.png'
import bxGroup from '../../../Asset/Rider/Group4.png'
import Warning from '../../../Asset/Rider/Group3.png'
import Ride from '../../../Asset/Rider/Group2.png'

export const DrawerContents=()=>{

    return (
      <>
        {/* main box */}
        <Flex flexDir="column" width="100%" height="100%">
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
          <Flex justifyContent="space-around" mt="40px">
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
                width="3.75rem"
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
          <Flex justifyContent="space-around" mt="64px">
            <Text
              flexShrink="0"
              color="text.100"
              fontWeight="500"
              fontSize="20px"
              lineHeight="17px">
              <Highlight query="Status:" styles={{ color: '#000' }}>
                Status: In transit heading to pick-up point
              </Highlight>
            </Text>
            <Flex
              width="7.125rem"
              height="2.0625rem"
              padding="8px 16px"
              borderRadius="8px"
              bg="text.100"
              justifyContent="space-between">
              <Image src={Refresh} alt="" objectFit="cover" width="1rem" height="1rem" />
              <Text flexShrink="0" color="#fff" fontWeight="450" fontSize="16px" lineHeight="17px">
                Refresh
              </Text>
            </Flex>
          </Flex>
          {/*end content status */}

          {/* content movement */}
          <Flex height="39.4375rem" mt="43px" justifyContent="space-around">
            <Flex>
              {/* start line */}
              <Box width="2rem" height="100%" className="Box">
                <Image src={Ride} alt="" objectFit="cover" width="2rem" height="2rem" zIndex="2" />
                <Image
                  src={direction}
                  alt=""
                  objectFit="cover"
                  width="2rem"
                  height="2rem"
                  zIndex="2"
                />
                <Image
                  src={Warning}
                  alt=""
                  objectFit="cover"
                  width="2rem"
                  height="2rem"
                  zIndex="2"
                />
                <Image
                  src={direction}
                  alt=""
                  objectFit="cover"
                  width="2rem"
                  height="2rem"
                  zIndex="2"
                />
                <Image
                  src={bxGroup}
                  alt=""
                  objectFit="cover"
                  width="2rem"
                  height="2rem"
                  zIndex="2"
                />
                <Box className="Inner"></Box>
              </Box>
              {/* end of line listing */}

              {/* tiny info */}
              <Flex flexDirection="column" height="100%" justifyContent="space-between">
                <Text
                  mt="4px"
                  flexShrink="0"
                  color="text.100"
                  fontWeight="500"
                  fontSize="14px"
                  lineHeight="18px">
                  <Highlight query="Now" styles={{ color: '#000' }}>
                    Now 18:03
                  </Highlight>
                </Text>
                <Text
                  flexShrink="0"
                  color="text.100"
                  fontWeight="500"
                  fontSize="14px"
                  lineHeight="18px">
                  18:03
                </Text>
                <Text
                  pb="6px"
                  flexShrink="0"
                  color="text.100"
                  fontWeight="500"
                  fontSize="14px"
                  lineHeight="18px">
                  18:03
                </Text>
                <Text
                  mt="-10px"
                  pb="16px"
                  flexShrink="0"
                  color="text.100"
                  fontWeight="500"
                  fontSize="14px"
                  lineHeight="18px">
                  18:03
                </Text>
                <Text
                  flexShrink="0"
                  color="text.100"
                  fontWeight="500"
                  fontSize="14px"
                  lineHeight="18px"></Text>
              </Flex>
              {/* end tiny info */}
            </Flex>
            {/* major info */}
            <Flex flexDirection="column" height="100%" justifyContent="space-between">
              <Flex
                flexDirection="column"
                width="14.9375rem"
                height="5.5rem"
                justifyContent="space-between">
                <Text
                  flexShrink="0"
                  color="#000"
                  fontWeight="500"
                  fontSize="18px"
                  lineHeight="23px">
                  Driving
                </Text>
                <Text
                  flexShrink="0"
                  color="text.100"
                  fontWeight="450"
                  fontSize="16px"
                  lineHeight="20px">
                  Ikorodu round about, Lagos state
                </Text>
                <Text
                  flexShrink="0"
                  color="text.100"
                  fontWeight="450"
                  fontSize="16px"
                  lineHeight="20px">
                  50 mins 20 km
                </Text>
              </Flex>
              <Flex
                mt="-60px"
                flexDir="column"
                justifyContent="space-between"
                width="14.9375rem"
                height="3.25rem">
                <Text
                  flexShrink="0"
                  color="#000"
                  fontWeight="500"
                  fontSize="18px"
                  lineHeight="23px">
                  Started driving
                </Text>
                <Text
                  flexShrink="0"
                  color="text.100"
                  fontWeight="450"
                  fontSize="16px"
                  lineHeight="20px">
                  Ikorodu round about, Lagos state
                </Text>
              </Flex>
              <Flex
                flexDir="column"
                justifyContent="space-between"
                width="14.9375rem"
                height="3.25rem">
                <Text
                  flexShrink="0"
                  color="#000"
                  fontWeight="500"
                  fontSize="18px"
                  lineHeight="23px">
                  Stopped
                </Text>
                <Text
                  flexShrink="0"
                  color="text.100"
                  fontWeight="450"
                  fontSize="16px"
                  lineHeight="20px">
                  Ikorodu round about, Lagos state
                </Text>
              </Flex>
              <Flex
                flexDir="column"
                justifyContent="space-between"
                width="14.9375rem"
                height="3.25rem">
                <Text
                  flexShrink="0"
                  color="#000"
                  fontWeight="500"
                  fontSize="18px"
                  lineHeight="23px">
                  Started delivery
                </Text>
                <Text
                  flexShrink="0"
                  color="text.100"
                  fontWeight="450"
                  fontSize="16px"
                  lineHeight="20px">
                  Ikorodu round about, Lagos state
                </Text>
              </Flex>
              <Flex>
                <Button
                  width="10.3125rem"
                  bg="primary.main"
                  color="#fff"
                  fontWeight="500"
                  fontSize="14px"
                  lineHeight="22px"
                  height="2.375rem"
                  padding="0.5rem 1.5rem"
                  borderRadius="8px"
                  _hover={{
                    bg: 'primary.main'
                  }}>
                  View order details
                </Button>
              </Flex>
            </Flex>
            {/*end major info */}
          </Flex>
          {/*end content movement */}
        </Flex>
        {/* end main box */}
      </>
    )
}