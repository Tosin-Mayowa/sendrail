import { Text, Image, Flex, Box, Highlight, Button } from '@chakra-ui/react'
import React from 'react'
import './Drawer.css'
import direction from '../../../Asset/Rider/Group1.png'

import bxGroup from '../../../Asset/Rider/Group4.png'
import Warning from '../../../Asset/Rider/Group3.png'
import Ride from '../../../Asset/Rider/Group2.png'
import { Line } from './Line'

export const Movement = ({setDetails}) => {
  const srcs = [Ride, direction, Warning, direction, bxGroup]
  return (
    <>
      <Flex height="39.4375rem" mt="43px" justifyContent="space-around">
        <Flex>
          {/* start line */}
          <Line width="2rem" boxH="100%" srcs={srcs} lineHeight="37.5rem" />

          {/* end of line listing */}

          {/* tiny info */}
          <Flex ml="3px" flexDirection="column" height="100%" justifyContent="space-between">
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
            <Text flexShrink="0" color="#000" fontWeight="500" fontSize="18px" lineHeight="23px">
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
            <Text flexShrink="0" color="#000" fontWeight="500" fontSize="18px" lineHeight="23px">
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
          <Flex flexDir="column" justifyContent="space-between" width="14.9375rem" height="3.25rem">
            <Text flexShrink="0" color="#000" fontWeight="500" fontSize="18px" lineHeight="23px">
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
          <Flex flexDir="column" justifyContent="space-between" width="14.9375rem" height="3.25rem">
            <Text flexShrink="0" color="#000" fontWeight="500" fontSize="18px" lineHeight="23px">
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
              onClick={
                ()=>setDetails(true)
              }
              _hover={{
                bg: 'primary.main'
              }}>
              View order details
            </Button>
          </Flex>
        </Flex>
        {/*end major info */}
      </Flex>
    </>
  )
}
