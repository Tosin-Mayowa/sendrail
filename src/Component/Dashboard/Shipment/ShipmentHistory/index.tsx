import {
    Box, Grid, Text, useMediaQuery
} from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { tableData } from '../../../../data/shipment';
import RoundedBackButton from '../../../shared/RoundedBackButton';
import DashboardLayout from '../../DashboardLayout';
import Table from '../ShipmentOverview/Table';

function Index(): JSX.Element {
    const [isSmallerScreen] = useMediaQuery("(max-width: 860px)");
    const navigate = useNavigate()
    return (
        <DashboardLayout>
            <Grid
                placeItems="center"
            >
                <Box w="100%">
                    <RoundedBackButton color='#070529' onclick={() => { navigate(-1) }} />
                </Box>
                <Text as="h1" w="100%" my={isSmallerScreen ? "10px" : "20px"} fontSize="24px" fontWeight="600">
                    Shipment History
                </Text>

                <Table details={{ sortedData: tableData }} history />
            </Grid>
        </DashboardLayout>
    )
}

export default Index