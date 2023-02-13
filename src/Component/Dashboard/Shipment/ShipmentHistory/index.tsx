import { Box, Grid, Text, useMediaQuery } from '@chakra-ui/react'
import React from 'react'
import { DashboardStates } from '../../../../Contexts/DashboardContext';
import { tableData } from '../../../../data/shipment';
import RoundedBackButton from '../../../shared/RoundedBackButton';
import Table from '../ShipmentOverview/Table';

function Index(): JSX.Element {
    const [isSmallerScreen] = useMediaQuery("(max-width: 860px)");
    const {
        views, dispatchView
    } = DashboardStates()
    return (
        <Grid
            placeItems="center"
            padding={isSmallerScreen ? "0px 5px" : "0px 40px"}
        >
            <Box w="100%">
                <RoundedBackButton color='#070529' onclick={() => { dispatchView({ type: "change_shipment_view", current_view: String(views?.shipment?.initial_view) }) }} />
            </Box>
            <Text as="h1" w="100%" my={isSmallerScreen ? "10px" : "20px"} fontSize="24px" fontWeight="600">
                Shipment History
            </Text>

            <Table details={{ sortedData: tableData }} history />
        </Grid>
    )
}

export default Index