import { Avatar, Box, Flex, Grid, Text } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import CustomButton from '../../../shared/CustomButton'
import RoundedBackButton from '../../../shared/RoundedBackButton'
import DashboardLayout from '../../DashboardLayout'
import { foodMenuSample } from '../../../../data/manage-link'
import icon from '../../../../Asset/Logos/Onboarding/bike.png'
import useNumbers from '../../../../lib/hooks/useNumbers'


const Index = (): JSX.Element => {
    const navigate = useNavigate()
    const { formatNormalNumbers } = useNumbers()

    function LightText({ children }: { children: any }): JSX.Element {
        return (
            <Text color="#595956" fontSize={{ base: "12px", md: "16px" }}>{children}</Text>
        )
    }
    const RenderXtraPortion = ({ xtra, count }: { xtra: any, count: number }) => {
        return (
            <Box>
                <Text>Extra Portion {count}</Text>
                <LightText>{xtra ? xtra.name : "-"}</LightText>
                <Text>Price per extra</Text>
                <LightText>{`₦ ${xtra ? formatNormalNumbers(xtra.price) : "-"}`}</LightText>
            </Box>
        )
    }
    return (
        <DashboardLayout section="/manage-link">
            <Grid
                placeItems="center"
            >
                <Box w="100%" mt={{ base: "10px", md: "42px" }}>
                    <RoundedBackButton color='#040320' />
                </Box>
                <Text as="h1" w="100%" m={{ base: "10px  0px", md: "42px 0px 48px" }} fontSize="24px" fontWeight="600" color="#000000">
                    Food Menu
                </Text>
                <Flex w="100%" justifyContent="flex-end">
                    <CustomButton text="Create menu" onclick={() => navigate("/create-food-link")} />
                </Flex>
                {
                    foodMenuSample?.map(menu => (
                        <Grid
                            key={menu.id}
                            background="#07052912"
                            color="#000000"
                            fontSize={{ base: "14px", md: "18px" }}
                            fontWeight="500"
                            minW="100%"
                            w={{ base: "auto", md: "100%" }}
                            h={{ base: "auto", md: "auto", lg: "138px" }}
                            mt="16px"
                            p="16px"
                            // gridTemplateColumns="24px 68px 273px 121px 121px 121px 74px" 1024px total plus gaps(37px)
                            gridTemplateColumns={{ base: "repeat(7, 35%)", md: "2% 6% 27% 12% 12% 12% 7%" }}
                            columnGap="3%"
                            alignItems="center"
                            justifyContent="center"
                            textAlign="center"
                            overflowX={{ base: "scroll", md: "hidden" }}
                            className='table-row'
                        >
                            <Grid
                                h="100%"
                                gridTemplateRows="1fr"
                                alignContent="space-between"
                            >
                                <Text>No</Text>
                                <Text color="#595956">{menu.id}</Text>
                            </Grid>
                            <Avatar
                                size="lg"
                                name="Food"
                                src={icon}
                            />
                            <Box>
                                <Text>Food Combo</Text>
                                <LightText>{menu.foodCombo}</LightText>
                                <Text>Price per plate</Text>
                                <LightText>{`₦ ${formatNormalNumbers(menu.pricePerPlate)}`}</LightText>
                            </Box>
                            <RenderXtraPortion count={1} xtra={menu.xtraPortion1} />
                            <RenderXtraPortion count={2} xtra={menu.xtraPortion2} />
                            <RenderXtraPortion count={3} xtra={menu.xtraPortion3} />
                            <CustomButton text='Edit' />
                        </Grid>
                    ))
                }
            </Grid>
        </DashboardLayout>
    )
}

export default Index