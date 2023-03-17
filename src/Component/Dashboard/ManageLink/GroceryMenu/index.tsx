import { Avatar, Box, Flex, Grid, Text } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { groceryTableData, groceryTableHeading } from '../../../../data/manage-link'
import useNumbers from '../../../../lib/hooks/useNumbers'
import CustomButton from '../../../shared/CustomButton'
import RoundedBackButton from '../../../shared/RoundedBackButton'
import DashboardLayout from '../../DashboardLayout'

const Index = () => {
    const navigate = useNavigate()
    const { formatNormalNumbers } = useNumbers()

    return (
        <DashboardLayout section='/manage-link'>
            <Grid
                placeItems="center"
                display={{ base: "none", md: "grid" }}
            >
                <Box w="100%" mt={{ base: "10px", md: "42px" }}>
                    <RoundedBackButton color='#040320' />
                </Box>
                <Text as="h1" w="100%" m={{ base: "10px  0px", md: "42px 0px 48px" }} fontSize="24px" fontWeight="600" color="#000000">
                    Grocery Menu
                </Text>
                <Flex w="100%" justifyContent="flex-end">
                    <CustomButton text="Create menu" onclick={() => navigate("/create-grocery-link")} />
                </Flex>
                <Grid
                    mt="16px"
                    px="16px"
                    w="100%"
                    h="54px"
                    color="#000000"
                    gridTemplateColumns="25px repeat(10, 1fr)"
                    backgroundColor="#07052912"
                    alignItems="center"
                    textAlign="center"
                    fontSize="18px"
                    fontWeight="500"
                >
                    {
                        groceryTableHeading.map(e => (
                            <Text>{e}</Text>
                        ))
                    }
                </Grid>
                {
                    groceryTableData.map(grocery => (
                        <Grid
                            mt="16px"
                            px="16px"
                            w="100%"
                            h="54px"
                            color="#ABA7A7"
                            borderRadius="4px"
                            gridTemplateColumns="25px repeat(10, 1fr)"
                            backgroundColor="#07052912"
                            justifyContent="center"
                            alignItems="center"
                            textAlign="center"
                            fontSize="16px"
                            fontWeight="500"
                        >
                            <Text>{grocery.id}</Text>
                            <Box>
                                <Avatar name='AA' src='' size="sm" />
                            </Box>
                            <Text>{grocery.product}</Text>
                            <Text>{grocery.code}</Text>
                            <Text>{grocery.size}</Text>
                            <Text>{grocery.category}</Text>
                            <Text>{grocery.brand}</Text>
                            <Text>{grocery.consumer}</Text>
                            <Text>{grocery.Flavor}</Text>
                            <Text>₦ {formatNormalNumbers(grocery.price)}</Text>
                            <CustomButton text='Edit' size='sm' />
                        </Grid>
                    ))
                }
            </Grid>
        </DashboardLayout>
    )
}

export default Index