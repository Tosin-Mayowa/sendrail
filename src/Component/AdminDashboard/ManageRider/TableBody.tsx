import React from 'react';

import {
  
  Tr,
  Th,
  Td,Avatar,
Badge,
  Text,
   Menu,
  MenuButton,
  MenuList,
  MenuItem,

  Image,

  Flex,
  Box,
  Button
} from '@chakra-ui/react';
import Order from "./Order"
import { MenuComponent } from './MenuComponent';
const TableBody = ({ item, phn, msg, menu, setIndx }) => {
  return (
    <>
      <Tr height="4.375rem">
        <Td textAlign="center">
          <Flex alignItems="flex-start">
            <Avatar
              name={item?.name}
              src="https://bit.ly/broken-link"
              width="3.125rem"
              height="3.125rem"
            />
            <Text
              ml="8px"
              alignSelf="center"
              color="#000"
              fontWeight="500"
              fontSize="16px"
              lineHeight="20px">
              {item?.name}
            </Text>
          </Flex>
        </Td>
        <Td textAlign="center">{item?.location}</Td>
        <Td textAlign="center">
          <Badge
            colorScheme={
              item?.status === 'assigned'
                ? 'rgba(230, 253, 238, 0.764706)'
                : 'rgba(247, 216, 223, 0.772549)'
            }
            padding="4px 12px"
            borderRadius="4px"
            fontWeight="500"
            fontSize="14px"
            lineHeight="17px"
            textAlign="center"
            textTransform="capitalize"
            color={item?.status === 'assigned' ? '#079638' : '#CD0B3A'}>
            {item?.status}
          </Badge>
        </Td>
        <Td mr="2rem">
          <Flex width="6.5rem" height="2.5rem" justifyContent="space-around">
            <Image src={phn} alt="phn" width="14px" height="20px" objectFit="cover" />
            <Image src={msg} alt="msg" width="20px" height="20px" objectFit="cover" />
          </Flex>
        </Td>
        <Td textAlign="center">
          <MenuComponent setIndx={setIndx} phn={phn} msg={msg} item={item} menu={menu}/>
        </Td>
      </Tr>
    </>
  )
}

export default TableBody;