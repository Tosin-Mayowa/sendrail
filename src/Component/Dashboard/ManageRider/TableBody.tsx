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
          <Menu placement="bottom">
            <MenuButton>
              <Image src={menu} alt="menu" width="3.74px" height="16.56px" objectFit="cover" />
            </MenuButton>

            <MenuList
              width="9.625rem"
              filter="drop-shadow(2px 2px 20px rgba(105, 99, 186, 0.160784))"
              height="18.375rem">
              <MenuItem
                height="3.0625rem"
                padding="1rem"
                borderRadius="10px 10px 0px 0px"
                fontSize="14px"
                color="text.300"
                lineHeight="17px"
                onClick={() => setIndx(1)}>
                View profile
              </MenuItem>
              <MenuItem>
                <Order item={item} phn={phn} msg={msg} />
              </MenuItem>
              <MenuItem
                height="3.0625rem"
                padding="1rem"
                borderRadius="10px 10px 0px 0px"
                fontSize="14px"
                color="text.300"
                lineHeight="17px">
                Track courier
              </MenuItem>
              <MenuItem
                height="3.0625rem"
                padding="1rem"
                borderRadius="10px 10px 0px 0px"
                fontSize="14px"
                color="text.300"
                lineHeight="17px">
                View
              </MenuItem>
              <MenuItem
                height="3.0625rem"
                padding="1rem"
                borderRadius="10px 10px 0px 0px"
                fontSize="14px"
                color="text.300"
                lineHeight="17px">
                View payslip
              </MenuItem>
              <MenuItem
                height="3.0625rem"
                padding="1rem"
                borderRadius="10px 10px 0px 0px"
                fontSize="14px"
                color="text.300"
                lineHeight="17px">
                Create payroll
              </MenuItem>
            </MenuList>
          </Menu>
        </Td>
      </Tr>
    </>
  )
}

export default TableBody;