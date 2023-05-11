import { Text, Image, Flex, Box, Highlight,Button } from '@chakra-ui/react'
import React,{useState} from 'react';
import './Drawer.css'
import box from '../../../Asset/Rider/box.png'
import Vector from '../../../Asset/Rider/map.png'
import Time from '../../../Asset/Rider/time.png'
import Route from '../../../Asset/Rider/route.png'
import Refresh from '../../../Asset/Rider/refresh.png'
import {ProductDetails} from "./Details"
import { Movement } from './Movement';

export const DrawerContents = ({ details, setDetails }) => {
 

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
            height={!details ? '2.1875rem' : '4.1875rem'}>
            <Flex
              cursor="pointer"
              width="7.25rem"
              height={!details ? '2.1875rem' : '4.1875rem'}
              justifyContent="space-between">
              <Image
                src={box}
                alt=""
                width="24px"
                height="24px"
                alignSelf={!details ? 'flex-start' : 'center'}
              />
              <Text
                alignSelf={!details ? 'flex-start' : 'center'}
                flexShrink="0"
                color="text.50"
                fontWeight="700"
                fontSize="24px"
                lineHeight="17px"
                textTransform="capitalize">
                Orders:
              </Text>
            </Flex>
            <Flex height="100%">
              <Button
                variant="link"
                
                height={!details ? '2.1875rem' : '4.1875rem'}
                pb={!details ? '0.6rem' : ''}
                flexShrink="0"
                color="text.200"
                fontWeight="500"
                fontSize="18px"
                lineHeight="22px"
                textTransform="capitalize"
                borderRadius="none"
                className="anime"
                _hover={{
                  textDecoration: 'none'
                }}>
                Order101
              </Button>
            </Flex>
            <Flex>
              <Button
                variant="link"
                flexShrink="0"
                color="text.200"
                fontWeight="500"
                fontSize="18px"
                lineHeight="22px"
                textTransform="capitalize"
                borderRadius="none"
                height={!details ? '2.1875rem' : '4.1875rem'}
                pb={!details ? '0.6rem' : ''}
                className="anime"
                _hover={{
                  textDecoration: 'none'
                }}>
                Order102
              </Button>
            </Flex>
          </Flex>
        </Flex>
        {/*end content head */}
        {/* content measure dist */}
        <Flex justifyContent="space-around" mt="40px">
          {/* distance */}
          <Flex flexDir="column" width="12.5rem" height="6.8125rem" bg="bg.100" borderRadius="20px">
            <Flex
              ml="1rem"
              mt="1rem"
              width="5.4375rem"
              height="1.0625rem"
              justifyContent="space-between">
              <Text flexShrink="0" color="#000" fontWeight="500" fontSize="16px" lineHeight="17px">
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
              <Text flexShrink="0" color="#000" fontWeight="500" fontSize="16px" lineHeight="17px">
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
          <Text flexShrink="0" color="text.100" fontWeight="500" fontSize="20px" lineHeight="17px">
            <Highlight query={!details ? 'Status:' : 'Time completed:'} styles={{ color: '#000' }}>
              {!details
                ? 'Status: In transit heading to pick-up point'
                : 'Time completed: 5 mins ago'}
            </Highlight>
          </Text>
          {!details ? (
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
          ) : (
            <Text
              flexShrink="0"
              color="text.100"
              fontWeight="500"
              fontSize="20px"
              lineHeight="17px">
              <Highlight query="Status:" styles={{ color: '#000' }}>
                Status: In transit
              </Highlight>
            </Text>
          )}
        </Flex>

        {/*end content status */}
        {/* content movement */}
        {!details ? (
          <Movement setDetails={setDetails} />
        ) : (
          <ProductDetails setDetails={setDetails} />
        )}

        {/*end content movement */}
      </Flex>
      {/* end main box */}
    </>
  )
}