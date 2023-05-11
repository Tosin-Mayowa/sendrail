import { Text, Image, Flex, Box, Highlight,Button } from '@chakra-ui/react'
import React from 'react'
import {Line} from './Line'
import bxGroup from '../../../Asset/Rider/Group4.png'
import profile from '../../../Asset/Rider/profile.png'
import gps from '../../../Asset/Rider/gps.png'
import payment from '../../../Asset/Rider/payment.png'
import mac from '../../../Asset/Rider/mac.png'
export const ProductDetails = ({ setDetails }):JSX.Element => {
  const srcs = [gps, profile, bxGroup, payment]
  return (
    <Flex flexDir="column" >
      <Flex mt="43px" justifyContent="space-around">
        <Line srcs={srcs} lineHeight="53.8125rem" boxH="41.719375rem" width="2rem" />
        <Flex flexDir="column" height="53.8125rem" justifyContent="space-around">
          {/* one */}
          <Flex
            width="28.875rem"
            height="12rem"
            flexDir="column"
            justifyContent="space-between"
            borderRadius="20px"
            padding="1rem"
            border=" 1px solid rgba(6, 0, 137, 0.1)">
            <Text flexShrink="0" color="#000" fontWeight="500" fontSize="18px" lineHeight="22.7px">
              Pick-up details
            </Text>
            <Flex justifyContent="space-between">
              <Flex flexDir="column" height="8rem" justifyContent="space-between">
                <Text
                  flexShrink="0"
                  color="text.100"
                  fontWeight="450"
                  fontSize="16px"
                  lineHeight="20.24px">
                  Customer’s Name
                </Text>
                <Text
                  flexShrink="0"
                  color="text.100"
                  fontWeight="450"
                  fontSize="16px"
                  lineHeight="20.24px">
                  Customer’s Phone Number
                </Text>
                <Text
                  flexShrink="0"
                  color="text.100"
                  fontWeight="450"
                  fontSize="16px"
                  lineHeight="20.24px">
                  Pick-Up Location
                </Text>
                <Text
                  flexShrink="0"
                  color="text.100"
                  fontWeight="450"
                  fontSize="16px"
                  lineHeight="20.24px">
                  Pick- Up Code
                </Text>
              </Flex>
              <Flex flexDir="column" height="8rem" justifyContent="space-between">
                {' '}
                <Text
                  flexShrink="0"
                  color="text.50"
                  fontWeight="450"
                  fontSize="16px"
                  lineHeight="20.24px">
                  Merlin Morgana
                </Text>
                <Text
                  flexShrink="0"
                  color="text.50"
                  fontWeight="450"
                  fontSize="16px"
                  lineHeight="20.24px">
                  9999999999
                </Text>
                <Text
                  flexShrink="0"
                  color="text.50"
                  fontWeight="450"
                  fontSize="16px"
                  lineHeight="20.24px">
                  7, badore street lagos ,nigeria
                </Text>
                <Text
                  flexShrink="0"
                  color="text.50"
                  fontWeight="450"
                  fontSize="16px"
                  lineHeight="20.24px">
                  Pick- Up Code
                </Text>
              </Flex>
            </Flex>
          </Flex>
          {/* end one */}

          {/* two */}
          <Flex
            width="28.875rem"
            height="12rem"
            flexDir="column"
            justifyContent="space-between"
            borderRadius="20px"
            padding="1rem"
            border=" 1px solid rgba(6, 0, 137, 0.1)">
            <Text flexShrink="0" color="#000" fontWeight="500" fontSize="18px" lineHeight="22.7px">
              Drop-off details
            </Text>
            <Flex justifyContent="space-between">
              <Flex flexDir="column" height="8rem" justifyContent="space-between">
                <Text
                  flexShrink="0"
                  color="text.100"
                  fontWeight="450"
                  fontSize="16px"
                  lineHeight="20.24px">
                  Recipient’s Name
                </Text>
                <Text
                  flexShrink="0"
                  color="text.100"
                  fontWeight="450"
                  fontSize="16px"
                  lineHeight="20.24px">
                  Recipient’s Phone Number
                </Text>
                <Text
                  flexShrink="0"
                  color="text.100"
                  fontWeight="450"
                  fontSize="16px"
                  lineHeight="20.24px">
                  Drop-off Location
                </Text>
                <Text
                  flexShrink="0"
                  color="text.100"
                  fontWeight="450"
                  fontSize="16px"
                  lineHeight="20.24px">
                  Drop-off Code
                </Text>
              </Flex>
              <Flex flexDir="column" height="8rem" justifyContent="space-between">
                {' '}
                <Text
                  flexShrink="0"
                  color="text.50"
                  fontWeight="450"
                  fontSize="16px"
                  lineHeight="20.24px">
                  Merlin Morgana
                </Text>
                <Text
                  flexShrink="0"
                  color="text.50"
                  fontWeight="450"
                  fontSize="16px"
                  lineHeight="20.24px">
                  9999999999
                </Text>
                <Text
                  flexShrink="0"
                  color="text.50"
                  fontWeight="450"
                  fontSize="16px"
                  lineHeight="20.24px">
                  7, badore street lagos ,nigeria
                </Text>
                <Text
                  flexShrink="0"
                  color="text.50"
                  fontWeight="450"
                  fontSize="16px"
                  lineHeight="20.24px">
                  Pick- Up Code
                </Text>
              </Flex>
            </Flex>
          </Flex>
          {/* end two */}

          {/* three */}
          <Flex
            width="28.875rem"
            height="12rem"
            flexDir="column"
            justifyContent="space-between"
            borderRadius="20px"
            padding="1rem"
            border=" 1px solid rgba(6, 0, 137, 0.1)">
            <Text flexShrink="0" color="#000" fontWeight="500" fontSize="18px" lineHeight="22.7px">
              Parcel details
            </Text>
            <Flex justifyContent="space-between">
              <Flex flexDir="column" height="8rem" justifyContent="space-between">
                <Text
                  flexShrink="0"
                  color="text.100"
                  fontWeight="450"
                  fontSize="16px"
                  lineHeight="20.24px">
                  No Of Parcel
                </Text>
                <Text
                  flexShrink="0"
                  color="text.100"
                  fontWeight="450"
                  fontSize="16px"
                  lineHeight="20.24px">
                  Parcel
                </Text>
                <Text
                  flexShrink="0"
                  color="text.100"
                  fontWeight="450"
                  fontSize="16px"
                  lineHeight="20.24px">
                  Category
                </Text>
                <Button
                  flexShrink="0"
                  variant="link"
                  color="#000"
                  fontWeight="500"
                  fontSize="18px"
                  lineHeight="22.77px">
                  View All
                </Button>
              </Flex>
              <Flex flexDir="column" height="5.75rem" justifyContent="space-between">
                {' '}
                <Text
                  flexShrink="0"
                  color="text.50"
                  fontWeight="450"
                  fontSize="16px"
                  lineHeight="20.24px">
                  4
                </Text>
                <Text
                  flexShrink="0"
                  color="text.50"
                  fontWeight="450"
                  fontSize="16px"
                  lineHeight="20.24px">
                  Mac Book Pro
                </Text>
                <Text
                  flexShrink="0"
                  color="text.50"
                  fontWeight="450"
                  fontSize="16px"
                  lineHeight="20.24px">
                  Computer Accessories
                </Text>
              </Flex>
              <Flex alignSelf="center">
                <Image src={mac} alt="computer" objectFit="cover" width="81px" height="88px" />
              </Flex>
            </Flex>
          </Flex>
          {/* end three */}

          {/* four */}
          <Flex
            width="28.875rem"
            height="12rem"
            flexDir="column"
            justifyContent="space-between"
            borderRadius="20px"
            padding="1rem"
            border=" 1px solid rgba(6, 0, 137, 0.1)">
            <Text flexShrink="0" color="#000" fontWeight="500" fontSize="18px" lineHeight="22.7px">
              Pick-up details
            </Text>
            <Flex justifyContent="space-between">
              <Flex flexDir="column" height="8rem" justifyContent="space-between">
                <Text
                  flexShrink="0"
                  color="text.100"
                  fontWeight="450"
                  fontSize="16px"
                  lineHeight="20.24px">
                  Customer’s Name
                </Text>
                <Text
                  flexShrink="0"
                  color="text.100"
                  fontWeight="450"
                  fontSize="16px"
                  lineHeight="20.24px">
                  Customer’s Phone Number
                </Text>
                <Text
                  flexShrink="0"
                  color="text.100"
                  fontWeight="450"
                  fontSize="16px"
                  lineHeight="20.24px">
                  Pick-Up Location
                </Text>
                <Text
                  flexShrink="0"
                  color="text.100"
                  fontWeight="450"
                  fontSize="16px"
                  lineHeight="20.24px">
                  Pick- Up Code
                </Text>
              </Flex>
              <Flex flexDir="column" height="8rem" justifyContent="space-between">
                {' '}
                <Text
                  flexShrink="0"
                  color="text.50"
                  fontWeight="450"
                  fontSize="16px"
                  lineHeight="20.24px">
                  Merlin Morgana
                </Text>
                <Text
                  flexShrink="0"
                  color="text.50"
                  fontWeight="450"
                  fontSize="16px"
                  lineHeight="20.24px">
                  9999999999
                </Text>
                <Text
                  flexShrink="0"
                  color="text.50"
                  fontWeight="450"
                  fontSize="16px"
                  lineHeight="20.24px">
                  7, badore street lagos ,nigeria
                </Text>
                <Text
                  flexShrink="0"
                  color="text.50"
                  fontWeight="450"
                  fontSize="16px"
                  lineHeight="20.24px">
                  Pick- Up Code
                </Text>
              </Flex>
            </Flex>
          </Flex>
          {/* end four */}
        </Flex>
      </Flex>
      <Flex flexDir="column" width="100%"  padding="2px 40px">
      <Button
        alignSelf="flex-end"
        width="5.8125rem"
        bg="#fff"
        color="#333344"
        fontWeight="500"
        fontSize="14px"
        lineHeight="17px"
        border="1px solid #ABA7A7"
        height="2.3125rem"
        padding="0.625rem 1.5rem"
        borderRadius="8px"
        onClick={() => setDetails(false)}
        _hover={{
          bg: '#fff'
        }}>
        Back
      </Button>
      </Flex>
    </Flex>
  )
}