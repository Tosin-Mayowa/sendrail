import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  Avatar,
  Select,
  TableContainer,
  Text,
  InputRightElement,
  InputGroup,
  Image,
  Input,
  Flex,
  Box,
  Button
} from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'
import React, { useState } from 'react'
import Filter from '../../../Asset/Rider/filter.png'
import phn from '../../../Asset/Rider/phn.png'
import msg from '../../../Asset/Rider/msg.png'
import menu from '../../../Asset/Rider/menu.png'
import TableBody from './TableBody'
const items = [
  {
    id: 1,
    name: 'John tae',
    location: 'ikeja',
    status: 'assigned',
    action: 'menu',
    type: 'Bicycle'
  },

  {
    id: 2,
    name: 'Sunday James',
    location: 'Lekki',
    status: 'Unassigned',
    action: 'menu',
    type: 'Car'
  },
  {
    id: 3,
    name: 'ola Daniel',
    location: 'Magodo',
    status: 'assigned',
    action: 'menu',
    type: 'Bike'
  }
]
const ManageRider = ({ setIndx }) => {
  const [toggle, setToggle] = useState(false)
  return (
    <>
      {/* container */}
      <Flex width="59.85rem" flexDir="column" justifyContent="space-between" alignItems="center">
        {/* search & Add flex */}
        <Flex
          boxSizing="border-box"
          width="100%"
          height="3.5rem"
          mt="2rem"
          justifyContent="space-between">
          {/* search and filter wrapper */}
          <Flex flexDir="column">
            {/* search and filter only*/}
            <Flex
              width="25.25rem"
              height="3.5rem"
              justifyContent="space-between"
              alignItems="flex-start">
              {/* search */}

              <Flex width="18.375rem" height="3.5rem">
                <InputGroup width="18.375rem" height="3.5rem">
                  <Input
                    placeholder="Search by name"
                    width="100%"
                    height="100%"
                    background="#fff"
                    border="1px solid #ABA7A7"
                    borderRadius="10px"
                    fontWeight="500"
                    fontSize={{ base: '10px', md: '12px', lg: '18px' }}
                    lineHeight={{ base: '10px', md: '15px', lg: '22px' }}
                    bg="#fff"
                    color="#000000"
                    _placeholder={{
                      color: 'text.100'
                    }}
                    focusBorderColor="primary.main"
                  />
                  <InputRightElement
                    mt="4px"
                    children={<SearchIcon color="gray.300" width="20.31px" height="20.31px" />}
                  />
                </InputGroup>
              </Flex>
              {/*end search */}
              {/* filter */}
              <Flex
                width="5.125rem"
                height="3rem"
                justifyContent="space-between"
                onClick={() => setToggle(!toggle)}
                cursor="pointer">
                <Image
                  alignSelf="center"
                  src={Filter}
                  alt="Filter"
                  width="30px"
                  height="20px"
                  objectFit="cover"
                />
                <Text
                  alignSelf="center"
                  color="#000"
                  fontWeight="500"
                  fontSize="16px"
                  lineHeight="48px">
                  Filter
                </Text>
              </Flex>
              {/* end filter */}
            </Flex>
            {/* end search and filter only */}
            {/* toggle flex */}
            {toggle ? (
              <Flex mt="2.25rem" width="30.125rem" height="2.5rem" justifyContent="space-between">
                {/* filter by */}
                <Flex
                  width="14.3125rem"
                  height="100%"
                  alignItems="flex-start"
                  justifyContent="space-between">
                  <Text
                    alignSelf="center"
                    flexShrink="0"
                    color="#000"
                    fontWeight="500"
                    fontSize="14px"
                    lineHeight="17.1px">
                    Filter by:
                  </Text>
                  <Select
                    placeholder=""
                    width="10.25rem"
                    height="100%"
                    background="#fff"
                    borderRadius="4px"
                    fontWeight="500"
                    fontSize={{ base: '10px', md: '12px', lg: '14px' }}
                    lineHeight={{ base: '10px', md: '15px', lg: '22px' }}
                    bg="#fff"
                    color="text.200"
                    focusBorderColor="primary.main">
                    <option value="all">All</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                  </Select>
                </Flex>
                {/* end filter by */}

                {/* sort by */}
                <Flex width="14.3125rem" height="100%" justifyContent="space-between">
                  <Text
                    alignSelf="center"
                    flexShrink="0"
                    color="#000"
                    fontWeight="500"
                    fontSize="14px"
                    lineHeight="17.1px">
                    Sort by:
                  </Text>
                  <Select
                    placeholder=""
                    width="10.25rem"
                    height="100%"
                    background="#fff"
                    borderRadius="4px"
                    fontWeight="500"
                    fontSize={{ base: '10px', md: '12px', lg: '14px' }}
                    lineHeight={{ base: '10px', md: '15px', lg: '22px' }}
                    bg="#fff"
                    color="text.200"
                    focusBorderColor="primary.main">
                    <option value="all">All</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                  </Select>
                </Flex>
                {/* end sortby */}
              </Flex>
            ) : (
              ''
            )}
            {/* end toggle flex */}
          </Flex>
          {/*end search and filter wraper */}

          {/* add button */}
          <Button
            alignSelf="center"
            width="6.8125rem"
            height="2.375rem"
            color="#fff"
            fontSize="calc(10px + 0.27778vw)"
            lineHeight="22px"
            background="primary.main"
            borderRadius="4px"
            padding="calc(5px + 0.29297vh) calc(14px + 0.97656vw)"
            onClick={() => setIndx(0)}
            _hover={{
              background: 'primary.main'
            }}>
            Add rider
          </Button>
          {/* add button */}
        </Flex>
        {/*end search & Add flex */}
        {/* Table */}
        <TableContainer width="100%" mt={toggle ? '4.55rem' : '2rem'}>
          <Table>
            <Thead
              width="59.7375rem"
              textAlign="center"
              height="4.3125rem"
              bg="rgba(7, 5, 41, 0.07)"
              borderRadius="10px">
              <Tr>
                <Th width="7.625rem" textAlign="center">
                  Name
                </Th>
                <Th width="11.25rem" textAlign="center">
                  Region
                </Th>
                <Th textAlign="center">Status</Th>
                <Th width="6.5rem" textAlign="center">
                  Contact
                </Th>
                <Th textAlign="center">Action</Th>
              </Tr>
            </Thead>
            <Tbody>
              {items.map((item) => (
                <TableBody
                  key={item.id}
                  item={item}
                  phn={phn}
                  msg={msg}
                  menu={menu}
                  setIndx={setIndx}
                />
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Flex>
      {/* end container */}
    </>
  )
}

export default ManageRider
