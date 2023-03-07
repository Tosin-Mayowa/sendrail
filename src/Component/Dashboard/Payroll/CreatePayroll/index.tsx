import { Box, Flex, Grid, Text } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import RoundedBackButton from '../../../shared/RoundedBackButton'
import DashboardLayout from '../../DashboardLayout'

const Index = (): JSX.Element => {
    const navigate = useNavigate()
    return (
        <DashboardLayout section='/payroll'>
            <Grid
                placeItems="center"
            >
                <Box w="100%">
                    <RoundedBackButton color='#070529' onclick={() => { navigate(-1) }} />
                </Box>
                <Text as="h1" w="100%" my="20px" fontSize="24px" fontWeight="600">
                    Create Payroll
                </Text>
                <Grid
                    placeItems="center"
                    w={{ base: "100%", md: "100%" }}
                    my="15px"
                    fontSize="20px"
                    fontWeight="600"
                    padding="80px"
                    borderRadius="10px"
                    backgroundColor="#07052912"
                    color="#ABA7A7"
                >
                    <Text
                    >
                        Create Method of Payment
                    </Text>
                    <Box
                        w="100%"
                    >
                        <Flex columnGap="10px">
                            <Text>Rider's Name:</Text>
                            <Text color="#000000">Micheal Chucks</Text>
                        </Flex>
                    </Box>
                </Grid>
            </Grid>
        </DashboardLayout>
    )
}

export default Index