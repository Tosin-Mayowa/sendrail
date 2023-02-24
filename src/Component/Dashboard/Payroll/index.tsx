import { Box, Grid, Text } from '@chakra-ui/react'
import React from 'react'
import RoundedBackButton from '../../shared/RoundedBackButton'
import DashboardLayout from '../DashboardLayout'

function Index(): JSX.Element {

    return (
        <DashboardLayout>
            <Grid
                placeItems="center"
            >
                <Box w="100%">
                    <RoundedBackButton color='#070529' onclick={() => { }} />
                </Box>
                <Text as="h1" w="100%" my="20px" fontSize="24px" fontWeight="600">
                    Payroll
                </Text>
            </Grid>
        </DashboardLayout>
    )
}

export default Index