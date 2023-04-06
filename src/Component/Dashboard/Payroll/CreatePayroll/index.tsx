import { Box, Flex, Grid, Input, Select, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { MdArrowDropDown } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import CustomButton from '../../../shared/CustomButton'
import RoundedBackButton from '../../../shared/RoundedBackButton'
import DashboardLayout from '../../DashboardLayout'

const Index = (): JSX.Element => {
    const [selectOne, setSelectOne] = useState("Salary") //JUST FOR TESTING!!!!!, Will probably change logic after i understand the flow
    const [selectTwo, setSelectTwo] = useState("Weekly")
    const [text, setText] = useState("How much per week/month")
    const [placeholder, setPlaceholder] = useState("₦ Placeholder")

    const renderTextInput = () => {
        if (selectOne === "Salary" || selectTwo === "Fiat") {
            setText("How much per week/month")
            setPlaceholder("₦ Placeholder")
        } else if (selectTwo === "Percentage") {
            setText("Enter percentage")
            setPlaceholder("% 30")
        }
    }

    useEffect(() => {
        renderTextInput()
    }, [selectOne, selectTwo])
    return (
        <DashboardLayout section='/payroll'>
            <Grid
                placeItems="center"
            >
                <Box w="100%" mt={{ base: "10px", md: "42px" }}>
                    <RoundedBackButton color='#040320' />
                </Box>
                <Text as="h1" w="100%" fontSize={{ sm: "18px", md: "24px" }} fontWeight="600" m={{ base: "10px  0px", md: "42px 0px 48px" }} color="#000">
                    Create Payroll
                </Text>
                <Grid
                    placeItems="center"
                    w="100%"
                    my={{ base: "10px", md: "15px" }}
                    fontSize={{ base: "16px", md: "20px" }}
                    fontWeight="600"
                    padding={{ base: "20px", md: "80px" }}
                    borderRadius="10px"
                    backgroundColor="#07052912"
                    color="#ABA7A7"
                >
                    <Text
                        mb="20px"
                        color="#595956"
                        fontSize={{ base: "16px", md: "24px" }}
                        fontWeight="600"
                    >
                        Create Method of Payment
                    </Text>
                    <Box
                        w="100%"
                        mb={{ base: "15px", md: "30px" }}
                    >
                        <Flex columnGap="25px">
                            <Text>Rider's Name:</Text>
                            <Text color="#000000">Micheal Chucks</Text>
                        </Flex>
                    </Box>
                    <Grid
                        w="100%"
                        gridTemplateColumns={{ base: "100%", md: "20% 20% 20%" }}
                        rowGap="10px"
                        justifyContent="space-between"
                        fontWeight="500"
                        fontSize="16px"
                        color="#ABA7A7"
                    >
                        <Grid
                            rowGap="5px"
                            width="100%"
                        >
                            <Text whiteSpace="nowrap">
                                Select an Option
                            </Text>
                            <Select
                                border="none"
                                icon={<MdArrowDropDown />}
                                width="100%"
                                color="#000"
                                background="#fff"
                                fontSize={{ base: "10px", md: "inherit" }}
                                backgroundColor="#fff"
                                height={{ base: "30px", md: "50px" }}
                                outline="none"
                                borderRadius="4px"
                                className='outlined'

                                value={selectOne}

                                onChange={(e) => setSelectOne(e.target.value)}
                            >
                                <option>Salary</option>
                                <option>Commission</option>
                            </Select>
                        </Grid>
                        <Grid
                            rowGap="5px"
                            width="100%"
                        >
                            <Text whiteSpace="nowrap">
                                Select an Option
                            </Text>
                            <Select
                                border="none"
                                icon={<MdArrowDropDown />}
                                width="100%"
                                color="#000"
                                fontSize={{ base: "10px", md: "inherit" }}
                                backgroundColor="#fff"
                                height={{ base: "30px", md: "50px" }}
                                outline="none"
                                borderRadius="4px"
                                className="outlined"

                                value={selectTwo}

                                onChange={(e) => setSelectTwo(e.target.value)}
                            >
                                {
                                    selectOne === "Salary" ?
                                        <>
                                            <option>Weekly</option>
                                            <option>Monthly</option>
                                        </>
                                        :
                                        <>
                                            <option>Percentage</option>
                                            <option>Fiat</option>
                                        </>
                                }
                            </Select>
                        </Grid>
                        <Grid
                            rowGap="5px"
                            width="100%"
                        >
                            <Text whiteSpace="nowrap">
                                {text}
                            </Text>
                            <Input
                                type="text"
                                border="none"
                                placeholder={placeholder}
                                width="100%"
                                color="#000"
                                background="#fff"
                                fontSize={{ base: "10px", md: "inherit" }}
                                backgroundColor="#fff"
                                height={{ base: "30px", md: "50px" }}
                                outline="none"
                                borderRadius="4px"

                                _placeholder={{
                                    color: "initial",
                                }}

                                className="outlined"

                            // value={selectTwo}

                            // onChange={(e) => setSelectTwo(e.target.value)}
                            />
                        </Grid>
                    </Grid>
                    <Flex w="100%" my={{ base: "20px", md: "48px" }} justifyContent={{ base: "center", md: "flex-end" }}>
                        <CustomButton text='Create Payroll' disabled size="lg" />
                    </Flex>
                </Grid>
            </Grid>
        </DashboardLayout >
    )
}

export default Index