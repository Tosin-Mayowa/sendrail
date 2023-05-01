import { Avatar, Box, Flex, Grid, Input, InputGroup, InputRightElement, Select, Text, useDisclosure } from '@chakra-ui/react'
import React, { useState } from 'react'
import EmptyData from '../../../shared/EmptyData'
import { sampleRiders, tableHeadings } from '../../../../data/payroll'
import { ChatIcon, PhoneIcon, SearchIcon } from '@chakra-ui/icons'
import PayslipModal from '../PayslipModal'
import { useNavigate } from 'react-router-dom'
import CustomButton from '../../../shared/CustomButton'
import CustomCheckbox from '../../../shared/CustomCheckbox'
import { MdArrowDropDown } from 'react-icons/md'

const Index = (): JSX.Element => {
    const [riders, setRiders] = useState(sampleRiders)
    const { isOpen, onOpen, onClose } = useDisclosure()
    const navigate = useNavigate()

    return (
        <>
            {
                riders?.length === 0 || !riders ?
                    <EmptyData button button_details={{ text: "Create Payroll", onclick: () => { navigate("/create-payroll") } }} />
                    :
                    <Box w="100%">
                        <InputGroup w={{ base: "100%", md: "30%" }} my="48px">
                            <Input
                                border="1px solid #ABA7A7"
                                backgroundColor="#fff"
                                height={{ base: "35px", md: "50px" }}
                                fontWeight="500"
                                fontSize={{ base: "12px", md: "14px" }}
                                lineHeight="14px"
                                outline="none"
                                placeholder="Search by name"
                            />
                            <InputRightElement
                                pointerEvents="none"
                                height={{ base: "35px", md: "50px" }}
                            >
                                <SearchIcon color="#ABA7A7" boxSize={{ base: "20px", md: "25px" }} />
                            </InputRightElement>
                        </InputGroup>
                        <Flex
                            justifyContent="space-between"
                            mb="16px">
                            <Flex
                                columnGap="38px"
                                alignItems="center"
                            >
                                <Flex columnGap="12px" alignItems="center">
                                    <CustomCheckbox size="lg" />
                                    <Text color="#595956" fontSize="16px">Select all</Text>
                                </Flex>
                                <Flex columnGap="8px" alignItems="center">
                                    <Text whiteSpace="nowrap" fontSize="14px" fontWeight="500">Filter by: </Text>
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
                            </Flex>
                            <CustomButton text='Create payroll' onclick={() => navigate("/create-payroll")} />
                        </Flex>
                        <Grid
                            w="100%"
                            p={{ base: "10px", md: "15px" }}
                            gridTemplateColumns="repeat(5,1fr)"
                            placeItems="center"
                            background="#07052912"
                            borderRadius="10px"
                            color="#000000"
                            fontSize={{ base: "10px", md: "18px" }}
                            fontWeight="500"
                        >
                            {
                                tableHeadings.map((e) => (
                                    <Text key={e} justifySelf={e === "Name" ? "flex-start" : "center"}>{e}</Text>
                                ))
                            }
                        </Grid>
                        {
                            riders?.map((rider) => (
                                <Grid
                                    key={rider.id}
                                    mt="16px"
                                    p={{ base: "10px", md: "15px 10px" }}
                                    minW="100%"
                                    w={{ base: "auto", md: "100%" }}
                                    gridTemplateColumns={{ base: "repeat(5, 30%)", md: "repeat(5,1fr)" }}
                                    placeItems="center"
                                    borderBottom="1px solid #07052912"
                                    color="#000000"
                                    fontSize={{ base: "10px", md: "16px" }}
                                    fontWeight="500"
                                    textAlign="center"
                                    overflowX={{ base: "scroll", md: "hidden" }}
                                    className='table-row'
                                >
                                    <Flex justifySelf="flex-start" alignItems="center" columnGap="5px">
                                        <Avatar
                                            size="sm"
                                            name={rider.name}
                                            src={rider.icon}
                                        />
                                        <Text>{rider.name}</Text>
                                    </Flex>
                                    <Text>{rider.email}</Text>
                                    <Flex columnGap="47px">
                                        <PhoneIcon boxSize={5} cursor="pointer" transition="0.1s" _hover={{ transform: "translateY(-4px)" }} />
                                        <ChatIcon boxSize={5} cursor="pointer" transition="0.1s" _hover={{ transform: "translateY(-4px)" }} />
                                    </Flex>
                                    <Text>{rider?.date}</Text>
                                    <Text
                                        cursor="pointer"
                                        color="#F9C567"
                                        borderBottom="1px solid #F9C567"

                                        _hover={{
                                            opacity: "0.8"
                                        }}
                                        onClick={onOpen}
                                    >View payslip</Text>
                                    <PayslipModal details={rider} onClose={onClose} isOpen={isOpen} />
                                </Grid>
                            ))
                        }
                    </Box>

            }
        </>
    )
}

export default Index