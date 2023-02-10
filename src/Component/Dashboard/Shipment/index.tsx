import { ChevronRightIcon } from '@chakra-ui/icons';
import {
    Box, Flex, Grid, Text, useMediaQuery
} from '@chakra-ui/react'
import React from 'react'
import './styles.css'
import { DashboardStates } from '../../../Contexts/DashboardContext';
import { cardDetails } from '../../../data/cardDetails'
import RoundedBackButton from '../../shared/RoundedBackButton';
import StatusCard from '../../shared/StatusCard';
import { tableHeadings } from '../../../data/shipment';
import EmptyData from '../../shared/EmptyData';
import CustomButton from '../../shared/CustomButton';


function Index(): JSX.Element {
    const [isSmallerScreen] = useMediaQuery("(max-width: 860px)");
    const [isSmallerThan480] = useMediaQuery("(max-width: 480px)");
    const {
        views, dispatchView, setTabIndex, setShipmentStatus, shipmentStatus
    } = DashboardStates()
    return (
        <Grid
            placeItems="center"
            padding={isSmallerScreen ? "0px 5px" : "0px 40px"}
        >
            <Box w="100%">
                <RoundedBackButton color='#070529' onclick={() => { dispatchView({ type: "change_view", current_view: String(views?.initial_view) }) }} />
            </Box>
            <Text as="h1" w="100%" my={isSmallerScreen ? "10px" : "20px"} fontSize="24px" fontWeight="600">
                Shipment
            </Text>
            <Grid
                w="100%"
                templateColumns={isSmallerScreen ? "repeat(6, 45%)" : "repeat(6, 25%)"}
                gap="10px"
                overflowX="scroll"
                p="10px"

                className='shipment-status-section'
            >
                {cardDetails?.map((card) => {
                    if (card.title !== shipmentStatus) {
                        return (
                            <StatusCard key={card.title} card={card} onclick={() => {
                                setShipmentStatus(card.title)
                                setTabIndex(1)
                            }
                            }
                                dark={false}
                            />
                        )
                    }
                    return (
                        <StatusCard key={card.title} card={card} onclick={() => {
                            setShipmentStatus(card.title)
                            setTabIndex(1)
                        }} />
                    )
                }
                )}
            </Grid>
            <Flex w="100%" justifyContent={isSmallerThan480 ? "center" : "space-between"} alignItems="center" mt="20px">
                <CustomButton text='Select to Assign' onclick={() => { }} disabled size={isSmallerThan480 ? "sm" : null} />
                <Flex alignItems="center" flexDirection={isSmallerThan480 ? "row-reverse" : "row"}>
                    <Flex color="#F9C567" fontFamily="16px" justifyContent="flex-end" alignItems="center" fontWeight="500" cursor="pointer" mx="5px">
                        <Text fontSize={isSmallerThan480 ? "12px" : "16px"}>Shipment History</Text>
                        <ChevronRightIcon />
                    </Flex>
                    <CustomButton text='Create Order' onclick={() => { }} size={isSmallerThan480 ? "sm" : null} />
                </Flex>
            </Flex>
            <Grid
                mt="5px"
                mb="15px"
                p={isSmallerScreen ? "10px" : "20px 10px"}
                w="100%"
                gridTemplateColumns="repeat(8,1fr)"
                placeItems="center"
                background="#07052912"
                borderRadius="10px"
                color="#000000"
                fontSize={isSmallerScreen ? "10px" : "18px"}
                fontWeight="500"
                textAlign="center"
            >
                {
                    tableHeadings.map((head) => (
                        <Text>
                            {head}
                        </Text>
                    ))
                }
            </Grid>
            <EmptyData />
        </Grid>
    )
}

export default Index