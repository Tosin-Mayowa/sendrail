import { Avatar, Box, Flex, Grid, Input, InputGroup, InputRightElement, Select, Text, useDisclosure } from '@chakra-ui/react'
import React, { useState } from 'react'
import EmptyData from '../../../shared/EmptyData'
import { sampleHistory } from '../../../../data/payroll'
import { SearchIcon } from '@chakra-ui/icons'
import PayslipModal from '../PayslipModal'
import icon from '../../../../Asset/Logos/Onboarding/bike.png'

const Index = (): JSX.Element => {
    const [history] = useState(sampleHistory)
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
            {
                history?.length === 0 || !history ?
                    <EmptyData error_text='No History To Show' />
                    :
                    <Box w="100%">
                        <Flex
                            flexDirection={{ base: "row-reverse", md: "row" }}
                            justifyContent={{ base: "center", md: "flex-end" }}
                            alignItems={{ base: "flex-start", md: "center" }}
                            columnGap={{ base: "5px", md: "20px" }}
                            fontWeight="500"
                            fontSize={{ base: "14px", md: "14px" }}
                            lineHeight="14px"
                            color="#ABA7A7"
                            whiteSpace="nowrap"
                            my="20px"
                        >
                            <InputGroup w={{ base: "45%", md: "18%" }}>
                                <Input
                                    borderRadius="4px"
                                    border="2px solid #ABA7A7"
                                    backgroundColor="#fff"
                                    height={{ base: "30px", md: "35px" }}
                                    outline="none"
                                    placeholder="Search by date"
                                    fontSize={{ base: "10px", md: "inherit" }}
                                />
                                <InputRightElement
                                    pointerEvents="none"
                                    height={{ base: "30px", md: "35px" }}
                                >
                                    <SearchIcon color="#ABA7A7" boxSize={{ base: "20px", md: "18px" }} />
                                </InputRightElement>
                            </InputGroup>
                            <Flex alignItems="center" columnGap="5px" width={{ base: "45%", md: "20%" }}>
                                <Text>Sort by:</Text>
                                <Select
                                    minW={{ base: "50%", md: "18%" }}
                                    border="2px solid #ABA7A7"
                                    fontSize={{ base: "10px", md: "inherit" }}
                                    backgroundColor="#fff"
                                    height={{ base: "30px", md: "35px" }}
                                    outline="none"
                                    borderRadius="4px"
                                >
                                    <option>All</option>
                                </Select>
                            </Flex>
                        </Flex>
                        <Text
                            fontSize="16px"
                            fontWeight="500"
                        >January, 2023</Text>
                        {
                            history?.map((item) => (
                                <Grid
                                    key={item.date}
                                    my="10px"
                                    minW="100%"
                                    w={{ base: "auto", md: "100%" }}
                                    overflowX={{ base: "scroll", md: "hidden" }}
                                    gridTemplateColumns={{ base: "70% 30% 30%", md: "85% 10% 5%" }}
                                    alignItems="center"
                                    padding={{ base: "10px", md: "16px 42px" }}
                                    background="#07052912"
                                    borderRadius="10px"
                                    fontSize={{ md: "18px", base: "12px" }}
                                    fontWeight="500"
                                    color="#1F1F1F"

                                    className="table-row"
                                >
                                    <Flex justifySelf="flex-start" alignItems="center" columnGap="10px">
                                        <Avatar
                                            size={{ base: "sm", md: "md" }}
                                            name="Tx sent"
                                            src={icon}
                                        />
                                        <Flex
                                            h="100%"
                                            flexDirection="column"
                                            rowGap="10px"
                                        >
                                            <Text>{item.status}</Text>
                                            <Text
                                                fontSize={{ md: "16px", base: "11px" }}
                                                fontWeight="500"
                                            >{item.date}</Text>
                                        </Flex>
                                    </Flex>
                                    <Text>{item?.amount}</Text>
                                    <Text
                                        cursor="pointer"
                                        color="#F9C567"

                                        _hover={{
                                            opacity: "0.8"
                                        }}
                                        onClick={onOpen}
                                    >View</Text>
                                    <PayslipModal details={item} onClose={onClose} isOpen={isOpen} />
                                </Grid>
                            ))
                        }
                    </Box>
            }
        </>
    )
}

export default Index