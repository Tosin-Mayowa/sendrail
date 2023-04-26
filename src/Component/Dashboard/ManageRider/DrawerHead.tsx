import {
  Text,
 
  Image,
  Flex,Box
} from '@chakra-ui/react'
import React from 'react';
import { RiCloseCircleLine } from 'react-icons/ri'
import Bus from '../../../Asset/Rider/bus.png'
import Bicycle from '../../../Asset/Rider/bicycle.png'
import Car from '../../../Asset/Rider/car.png'
import Bike from '../../../Asset/Rider/bike.png'
import Transit from '../../../Asset/Rider/transit.png';
export const DrawerHead = ({ item, phn, msg, onClose }) => {
  return (
    <>
      {/* header wrapper*/}
      <Flex
        padding="24px 0px 30px 0px"
        width="100%"
        height="13.625rem"
        justifyContent="space-between">
        {/* left flex */}
        <Flex flexDir="column" justifyContent="space-between">
          <Flex width="18.875rem" height="5.5rem" justifyContent="space-between">
            <Flex width="5.0625rem" height="5.5rem" borderRadius="20px" border="1px solid #AAA">
              <Image
                src=""
                alt="jpg"
                objectFit="cover"
                width="5.0625rem"
                height="5.5rem"
                borderRadius="20px"
              />
            </Flex>
            <Flex
              alignSelf="center"
              flexDir="column"
              width="12.9375rem"
              height="3.125rem"
              justifyContent="space-between">
              <Text flexShrink="0" color="#000" fontWeight="500" fontSize="28px" lineHeight="17px">
                {item?.name}
              </Text>
              <Flex justifyContent="space-between" width="7.125rem" height="1.0625rem">
                <Box
                  width="0.9375rem"
                  height="0.9375rem"
                  borderRadius="50%"
                  background="#079638"></Box>
                <Text
                  // alignSelf="center"
                  flexShrink="0"
                  color="text.50"
                  fontWeight="450"
                  fontSize="20px"
                  lineHeight="17px">
                  {item?.status}
                </Text>
              </Flex>
            </Flex>
          </Flex>
          {/* start line bx */}
          <Flex justifyContent="space-between" width="17.75rem" height="2.8125rem">
            <Flex flexDir="column" width="5.0625rem" height="2.8125rem">
              <Image src={Transit} alignSelf="center" alt="" width="1rem" height="1rem" />
              <Box width="5.0625rem" border="5px solid #000"></Box>
              <Text
                alignSelf="center"
                flexShrink="0"
                color="#000"
                fontWeight="450"
                fontSize="12px"
                lineHeight="17px"
                textTransform="capitalize">
                In transit
              </Text>
            </Flex>
            <Flex flexDir="column" width="5.0625rem" height="2.8125rem">
              <Image
                src={Transit}
                visibility="hidden"
                alignSelf="center"
                alt=""
                width="1rem"
                height="1rem"
              />
              <Box width="5.0625rem" border="5px solid #AAAAAA"></Box>
              <Text
                alignSelf="center"
                flexShrink="0"
                color="#000"
                fontWeight="450"
                fontSize="12px"
                lineHeight="17px"
                textTransform="capitalize">
                Picked-up
              </Text>
            </Flex>
            <Flex flexDir="column" width="5.0625rem" height="2.8125rem">
              <Image
                src={Transit}
                visibility="hidden"
                alignSelf="center"
                alt=""
                width="1rem"
                height="1rem"
              />
              <Box width="5.0625rem" border="5px solid #AAAAAA"></Box>
              <Text
                alignSelf="center"
                flexShrink="0"
                color="#000"
                fontWeight="450"
                fontSize="12px"
                lineHeight="17px"
                textTransform="capitalize">
                Delivered
              </Text>
            </Flex>
          </Flex>
          {/* end line bx */}
        </Flex>
        {/*end left flex */}
        {/* right flex */}
        <Flex flexDir="column" height="100%" justifyContent="space-between">
          {/* close icon */}
          <Flex alignSelf="flex-end">
            <RiCloseCircleLine size="20px" onClick={onClose} cursor="pointer" />
          </Flex>
          {/* end close icon */}
          <Flex
            mr="2px"
            flexDir="column"
            justifyContent="space-between"
            width="11.8375rem"
            height="7.5531rem">
            {/* courier type */}
            {item?.type === 'Bike' ? (
              <Flex
                justifyContent="space-between"
                alignSelf="flex-end"
                width="3.6875rem"
                height="1.0625rem">
                <Image
                  src={Bike}
                  alt="Bike"
                  objectFit="contain"
                  width="16px"
                  height="9.33px"
                  alignSelf="center"
                />
                <Text
                  flexShrink="0"
                  color="#000"
                  fontWeight="500"
                  fontSize="16px"
                  lineHeight="17px"
                  textTransform="capitalize">
                  Rider
                </Text>
              </Flex>
            ) : item?.type === 'Car' ? (
              <Flex
                justifyContent="space-between"
                alignSelf="flex-end"
                width="3.6875rem"
                height="1.0625rem">
                <Image
                  src={Car}
                  alt="Car"
                  objectFit="contain"
                  width="16px"
                  height="9.33px"
                  alignSelf="center"
                />
                <Text
                  flexShrink="0"
                  color="#000"
                  fontWeight="500"
                  fontSize="16px"
                  lineHeight="17px"
                  textTransform="capitalize">
                  Driver
                </Text>
              </Flex>
            ) : item?.type === 'Bus' ? (
              <Flex
                justifyContent="space-between"
                alignSelf="flex-end"
                width="3.6875rem"
                height="1.0625rem">
                <Image
                  src={Bus}
                  alt="Bus"
                  objectFit="contain"
                  width="16px"
                  height="9.33px"
                  alignSelf="center"
                />
                <Text
                  flexShrink="0"
                  color="#000"
                  fontWeight="500"
                  fontSize="16px"
                  lineHeight="17px"
                  textTransform="capitalize">
                  Driver
                </Text>
              </Flex>
            ) : (
              <Flex
                justifyContent="space-between"
                alignSelf="flex-end"
                width="3.6875rem"
                height="1.0625rem">
                <Image
                  src={Bicycle}
                  objectFit="contain"
                  alt="Bicycle"
                  width="16px"
                  height="9.33px"
                  alignSelf="center"
                />
                <Text
                  flexShrink="0"
                  color="#000"
                  fontWeight="500"
                  fontSize="16px"
                  lineHeight="17px"
                  textTransform="capitalize">
                  Cyclist
                </Text>
              </Flex>
            )}
            {/* end courier type */}

            {/* msg & phn icon */}
            <Flex
              justifyContent="space-between"
              border="2px solid rgba(6, 0, 137, 0.1)"
              borderRadius="20px"
              width="11.8381rem"
              height="4.4906rem"
              padding="10px 24px">
              <Image
                alignSelf="center"
                src={phn}
                alt="phn"
                width="14px"
                height="20px"
                objectFit="cover"
              />
              <Image
                alignSelf="center"
                src={msg}
                alt="msg"
                width="20px"
                height="20px"
                objectFit="cover"
              />
            </Flex>
            {/* end msg & phn icon */}
          </Flex>
        </Flex>

        {/*end right flex */}
      </Flex>
      {/*end header */}
    </>
  )
}

