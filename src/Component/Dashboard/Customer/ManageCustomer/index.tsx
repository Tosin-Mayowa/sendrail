import { SearchIcon } from '@chakra-ui/icons'
import { Avatar, Box, Flex, Grid, Input, InputGroup, InputRightElement, Select, Text, useMediaQuery } from '@chakra-ui/react'
import React, { useState } from 'react'
import { MdArrowDropDown } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import { customers, tableHeadings } from '../../../../data/customer'
import CustomButton from '../../../shared/CustomButton'
import EmptyData from '../../../shared/EmptyData'
import RoundedBackButton from '../../../shared/RoundedBackButton'
import DashboardLayout from '../../DashboardLayout'

const Index = () => {
    const navigate = useNavigate()
    const [customer] = useState(customers)
    const [issmallerScreen] = useMediaQuery("(max-width: 580px)");

    const alignTableHead = (text: string) => {
        if (text === "Name") return "flex-start"
        if (text === "Delete") return "flex-end"
        return "center"
    }
    return (
        <DashboardLayout section='/customer'>
            {
                customer?.length === 0 ?
                    <Box w="100%">
                        <Text as="h1" w="100%" fontSize={{ base: "18px", md: "24px" }} fontWeight="600" mb="15px" color="#000">
                            Add Customer
                        </Text>
                        <EmptyData button button_details={{ text: "Add Customers", onclick: () => { navigate("/add-customer") } }} />
                    </Box>
                    :
                    <Box w="100%">
                        <Box my={{ base: "15px", md: "42px" }}>
                            <RoundedBackButton color="#000" />
                        </Box>
                        <Text as="h1" w="100%" fontSize={{ base: "18px", md: "24px" }} fontWeight="600" mb={{ base: "15px", md: "48px" }} color="#000">
                            Manage Customers
                        </Text>
                        <InputGroup w={{ base: "100%", md: "30%" }} mb={{ base: "10px", md: "65px" }}>
                            <Input
                                border="1px solid #ABA7A7"
                                backgroundColor="#fff"
                                height={{ base: "35px", md: "56px" }}
                                fontWeight="500"
                                fontSize={{ base: "12px", md: "14px" }}
                                lineHeight="14px"
                                outline="none"
                                placeholder="Search by name"

                                _focus={{
                                    outline: "2px solid #F9C567",
                                    outlineOffset: "-1px"
                                }}
                            />
                            <InputRightElement
                                pointerEvents="none"
                                height={{ base: "35px", md: "56px" }}
                            >
                                <SearchIcon color="#ABA7A7" boxSize={{ base: "20px", md: "25px" }} />
                            </InputRightElement>
                        </InputGroup>
                        <Flex
                            alignItems="center"
                            rowGap="5px"
                            columnGap="5px"
                            justifyContent={{ base: "flex-start", md: "space-between" }}
                            mb="33px"
                            fontSize={{ base: "12px", md: "16px" }}
                            flexWrap="wrap"
                        >
                            <CustomButton text='Add Customer' onclick={() => { navigate("/add-customer") }} size={issmallerScreen ? "sm" : "md"} />
                            <Flex
                                columnGap="20px"
                                fontSize="14px"
                                fontWeight="500"
                            >
                                <Flex alignItems="center" gap="5px">
                                    <Text whiteSpace="nowrap">Filter by: </Text>
                                    <Select
                                        icon={<MdArrowDropDown />}
                                        minW={{ base: "50%", md: "18%" }}
                                        border="2px solid #ABA7A7"
                                        fontSize={{ base: "10px", md: "inherit" }}
                                        backgroundColor="#fff"
                                        height={{ base: "30px", md: "35px" }}
                                        outline="none"
                                        borderRadius="4px"
                                    >
                                        <option value='All'>All</option>
                                        <option value='Individual'>Individual</option>
                                        <option value='Business'>Business</option>
                                    </Select>
                                </Flex>
                                <Flex alignItems="center" gap="5px">
                                    <Text whiteSpace="nowrap">Sort by: </Text>
                                    <Select
                                        icon={<MdArrowDropDown />}
                                        minW={{ base: "50%", md: "18%" }}
                                        border="2px solid #ABA7A7"
                                        fontSize={{ base: "10px", md: "inherit" }}
                                        backgroundColor="#fff"
                                        height={{ base: "30px", md: "35px" }}
                                        outline="none"
                                        borderRadius="4px"
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
                            p={{ base: "10px", md: "15px" }}
                            gridTemplateColumns={{ base: "repeat(5, 1fr)", md: "14fr 9fr 9fr 9fr 4fr" }}
                            placeItems="center"
                            background="#07052912"
                            borderRadius="10px"
                            color="#000000"
                            fontSize={{ base: "10px", md: "18px" }}
                            fontWeight="500"
                        >
                            {
                                tableHeadings.map((e) => (
                                    <Text key={e} justifySelf={alignTableHead(e)}>{e}</Text>
                                ))
                            }
                        </Grid>
                        {
                            customer.map((item) => (
                                <Grid
                                    key={item.type}
                                    my="10px"
                                    p={{ base: "10px", md: "15px" }}
                                    minW="100%"
                                    w={{ base: "auto", md: "100%" }}
                                    gridTemplateColumns={{ base: "repeat(5,30%)", md: "14fr 9fr 9fr 9fr 4fr" }}
                                    placeItems="center"
                                    borderBottom="1px solid #07052912"
                                    whiteSpace="nowrap"
                                    color="#000000"
                                    fontSize={{ base: "12px", md: "16px" }}
                                    fontWeight="500"
                                    overflowX={{ base: "scroll", md: "hidden" }}
                                    className='table-row'
                                >
                                    <Flex justifySelf="flex-start" alignItems="center" columnGap="5px">
                                        <Avatar
                                            size="base"
                                            name={item.name}
                                            src={item.icon}
                                        />
                                        <Text>{item.name}</Text>
                                    </Flex>
                                    <Text>{item.location}</Text>
                                    <Text>{item.type}</Text>
                                    {/* <Flex columnGap="15px">
                                            <PhoneIcon boxSize={5} cursor="pointer" transition="0.1s" _hover={{ transform: "translateY(-4px)" }} />
                                            <ChatIcon boxSize={5} cursor="pointer" transition="0.1s" _hover={{ transform: "translateY(-4px)" }} />
                                        </Flex> */}
                                    <CustomButton text='Create order' size={issmallerScreen ? "sm" : "md"} onclick={() => { navigate("/create-order") }} />
                                    <Text
                                        color="#CD0B3A"
                                        borderBottom="1px solid #CD0B3A"
                                        fontSize={{ base: "12px", md: "14px" }}
                                        fontWeight="500"
                                        cursor="pointer"
                                        justifySelf="flex-end"
                                    >Delete Customer</Text>
                                    {/* <Menu>
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
                                    </Menu> */}
                                </Grid>
                            ))
                        }
                    </Box>
            }
        </DashboardLayout>
    )
}

export default Index