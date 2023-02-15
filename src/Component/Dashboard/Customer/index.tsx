import {
 Avatar, Box, Flex, Grid, Input, InputGroup, InputRightElement, Menu, MenuButton, MenuItem, MenuList, Select, Text, useMediaQuery 
} from '@chakra-ui/react'
import React, { useState } from 'react'
import { ChatIcon, PhoneIcon, SearchIcon } from '@chakra-ui/icons';
import { GoKebabVertical } from 'react-icons/go';
import { MdArrowDropDown } from 'react-icons/md';
import EmptyData from '../../shared/EmptyData';
import RoundedBackButton from '../../shared/RoundedBackButton'
import { customers, tableHeadings } from '../../../data/customer'
import CustomButton from '../../shared/CustomButton';
import { DashboardStates } from '../../../Contexts/DashboardContext';

function Index() {
    const { views, dispatchView } = DashboardStates();
    const [isSmallerScreen] = useMediaQuery("(max-width: 860px)");
    const [isSmallerThan480] = useMediaQuery("(max-width: 480px)");
    const [customer] = useState(customers)
    // setCustomer
    return (
        <Grid
            placeItems="center"
            padding={isSmallerScreen ? "0px 5px" : "0px 40px"}
        >
            <Box w="100%">
                <RoundedBackButton color='#070529' onclick={() => { dispatchView({ type: "change_customer_view", current_view: String(views?.customer?.initial_view) }) }} />
            </Box>
            <Text as="h1" w="100%" my={isSmallerScreen ? "10px" : "20px"} fontSize="24px" fontWeight="600">
                Customers
            </Text>
            {
                customer?.length === 0 ?
                    <EmptyData button button_details={{ text: "Add Customers", onclick: () => { } }} />
                    :
                    <Box w="100%">
                        {/* my={isSmallerScreen ? "10px" : "20px"} */}
                        <Text as="h1" w="100%" fontSize={isSmallerScreen ? "18px" : "24px"} fontWeight="400" mb="15px" color="#656566">
                            Manage Customers
                        </Text>
                        <InputGroup w={isSmallerScreen ? "100%" : "30%"}>
                            <Input
                                border="1px solid #ABA7A7"
                                backgroundColor="#fff"
                                height={isSmallerScreen ? "35px" : "50px"}
                                fontWeight="500"
                                fontSize={isSmallerScreen ? "12px" : "14px"}
                                lineHeight="14px"
                                outline="none"
                                placeholder="Search by name"
                            />
                            <InputRightElement
                                pointerEvents="none"
                                height={isSmallerScreen ? "35px" : "50px"}
                            >
                                <SearchIcon color="#ABA7A7" boxSize={isSmallerScreen ? "20px" : "25px"} />
                            </InputRightElement>
                        </InputGroup>
                        <Flex alignItems="center" rowGap="5px" justifyContent={isSmallerScreen ? "center" : "space-between"} mt="15px" fontSize={isSmallerScreen ? "12px" : "16px"} flexWrap="wrap">
                            <CustomButton text='Add Customer' onclick={() => { }} size="sm" />
                            <Flex gap="5px">
                                <Flex alignItems="center" gap="5px">
                                    <Text whiteSpace="nowrap">Filter by: </Text>
                                    <Select
                                        variant='filled'
                                        icon={<MdArrowDropDown />}
                                        backgroundColor="#fff"
                                        boxShadow="0px 1px 0px 0px #ABA7A7"
                                        size="sm"
                                        borderRadius="10px"
                                    >
                                        <option value='All'>All</option>
                                        <option value='Individual'>Individual</option>
                                        <option value='Business'>Business</option>
                                    </Select>
                                </Flex>
                                <Flex alignItems="center" gap="5px">
                                    <Text whiteSpace="nowrap">Sort by: </Text>
                                    <Select
                                        variant='filled'
                                        icon={<MdArrowDropDown />}
                                        backgroundColor="#fff"
                                        boxShadow="0px 1px 0px 0px #ABA7A7"
                                        size="sm"
                                        borderRadius="10px"
                                    >
                                        <option>Recently Added</option>
                                        <option>Existing</option>
                                        <option >A-Z</option>
                                    </Select>
                                </Flex>
                            </Flex>
                        </Flex>
                        <Grid
                            w="100%"
                            my="15px"
                            p={isSmallerScreen ? "10px" : "15px"}
                            gridTemplateColumns={isSmallerScreen ? "repeat(5, 1fr)" : "4fr 2fr 2fr 2fr 2fr 1fr"}
                            placeItems="center"
                            background="#07052912"
                            borderRadius="10px"
                            color="#000000"
                            fontSize={isSmallerScreen ? "10px" : "18px"}
                            fontWeight="500"
                        >
                            {
                                tableHeadings.map((e) => (
                                    <Text key={e} justifySelf={e === "Name" ? "flex-start" : "center"}>{e}</Text>
                                ))
                            }
                        </Grid>
                        {
                            customer.map((item) => (
                                <Grid
                                    my="10px"
                                    p={isSmallerScreen ? "10px" : "15px"}
                                    minW="100%"
                                    w={isSmallerThan480 ? "auto" : "100%"}
                                    gridTemplateColumns={isSmallerThan480 ? "repeat(5,30%) 15%" : "4fr 2fr 2fr 2fr 2fr 1fr"}
                                    placeItems="center"
                                    background="#07052912"
                                    borderRadius="10px"
                                    color="#000000"
                                    fontSize={isSmallerScreen ? "12px" : "16px"}
                                    fontWeight="500"
                                    overflowX={isSmallerThan480 ? "scroll" : "hidden"}
                                    className='table-row'
                                >
                                    <Flex justifySelf="flex-start" alignItems="center" columnGap="5px">
                                        <Avatar
                                            size="sm"
                                            name={item.name}
                                            src={item.icon}
                                        />
                                        <Text>{item.name}</Text>
                                    </Flex>
                                    <Text>{item.location}</Text>
                                    <Text>{item.type}</Text>
                                    <Flex columnGap="15px">
                                        <PhoneIcon boxSize={5} cursor="pointer" transition="0.1s" _hover={{ transform: "translateY(-4px)" }} />
                                        <ChatIcon boxSize={5} cursor="pointer" transition="0.1s" _hover={{ transform: "translateY(-4px)" }} />
                                    </Flex>
                                    <CustomButton text='Create order' size="sm" onclick={() => { }} />
                                    <Menu>
                                        <MenuButton justifySelf="flex-end">
                                            <GoKebabVertical size={20} cursor="pointer" />
                                        </MenuButton>
                                        <MenuList
                                            zIndex="20"
                                            borderRadius="0px"
                                            width="80px"
                                            fontSize="14px"
                                            fontWeight="500"
                                            color="#AAAAAA"
                                        >
                                            <MenuItem>Delete Customer</MenuItem>
                                        </MenuList>
                                    </Menu>
                                </Grid>
                            ))
                        }
                    </Box>
            }
        </Grid>
    )
}

export default Index