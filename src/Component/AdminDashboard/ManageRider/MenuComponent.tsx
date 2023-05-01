import React from 'react'

import {
  Tr,
  Th,
  Td,
  Avatar,
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
import Order from './Order'


export const MenuComponent=({setIndx,phn,item,msg,menu})=>{

    return (
      <>
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
      </>
    )
}