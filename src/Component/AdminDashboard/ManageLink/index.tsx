import { Box, Flex, Grid, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import CustomButton from '../../shared/CustomButton'
import DashboardLayout from '../DashboardLayout'

function Index(): JSX.Element {
    const [links] = useState([
        {
            title: 'Pickup and delivery link',
            href: ' https://onboard. sendrail.com/dummyco',
        },
        {
            title: 'Food link',
            href: ' https://onboard. sendrail.com/dummyco',
        },
        {
            title: 'Grocery link',
            href: ' https://onboard. sendrail.com/dummyco',
        },
    ])

    return (
        <DashboardLayout>
            <Grid
                placeItems="center"
            >
                <Text as="h1" w="100%" my={{ base: "10px", md: "30px" }} fontSize="24px" fontWeight="600">
                    Manage Link
                </Text>
                <Grid
                    w={{ base: "100%", md: "746px" }}
                    my={{ base: "10px", md: "15px" }}
                    padding={{ base: "15px", md: "48px 32px" }}
                    borderRadius="20px"
                    backgroundColor="#07052912"
                    color="#595956"
                    fontSize={{ base: "18px", md: "20px" }}
                >
                    <Text fontWeight="600">
                        Create links
                    </Text>
                    <Box
                        as={Link}
                        to="/create-food-link"
                        mt="32px"
                        w="100%"
                        p="16px"
                        color="#000000"
                        fontSize={{ base: "18px", md: "24px" }}
                        background="#FFFFFF"
                        borderRadius="10px"
                        textAlign="center"
                        cursor="pointer"
                    >
                        Food link
                    </Box>
                    <Box
                        as={Link}
                        to="/create-grocery-link"
                        mt="32px"
                        w="100%"
                        p="16px"
                        color="#000000"
                        fontSize={{ base: "18px", md: "24px" }}
                        background="#FFFFFF"
                        borderRadius="10px"
                        textAlign="center"
                        cursor="pointer"
                    >
                        Grocery
                    </Box>
                    <Text
                        m="48px 0px 32px"
                        fontWeight="600"
                    >
                        My links
                    </Text>
                    {
                        links.map((link) => (
                            <>
                                <Text fontSize="18px">
                                    {link.title}
                                </Text>
                                <Grid
                                    m="13px 0px 32px"
                                    gridTemplateColumns={{ base: "1fr", md: "77% 13%" }}
                                    columnGap="59px"
                                >
                                    <Box
                                        textAlign="center"
                                        padding="8px"
                                        background="#FFFFFF"
                                        color="#F9C567"
                                        fontWeight="700"
                                    >
                                        {link.href}
                                    </Box>
                                    <CustomButton text='Copy' />
                                </Grid>
                            </>
                        ))
                    }
                </Grid>
            </Grid>
        </DashboardLayout>
    )
}

export default Index