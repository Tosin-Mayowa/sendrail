import {
    Box, Grid, Text
} from '@chakra-ui/react';
import React, { useState } from 'react'
import RoundedBackButton from '../../../shared/RoundedBackButton';
import PickupDetails from './PickupDetails';
import DashboardLayout from '../../DashboardLayout';
import DropoffDetails from './DropoffDetails';

function Index(): JSX.Element {
    const [section, setSection] = useState<string>("create-order");
    return (
        <DashboardLayout section='/shipment'>
            <Grid
                placeItems="center"
            >
                <Box w="100%" mt={{ base: "10px", md: "42px" }}>
                    <RoundedBackButton color='#040320' />
                </Box>
                <Text as="h1" w="100%" m={{ base: "10px  0px", md: "42px 0px 48px" }} fontSize="24px" fontWeight="600" color="#000000">
                    Create Order
                </Text>
                {section === "create-order" && <PickupDetails setSection={setSection} />}
                {section === "add-drop-off" && <DropoffDetails setSection={setSection} />}
            </Grid>
        </DashboardLayout>
    )
}

export default Index