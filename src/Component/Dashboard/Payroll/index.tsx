import { Box, Grid, Text } from '@chakra-ui/react'
import React from 'react'
import RoundedBackButton from '../../shared/RoundedBackButton'

const Index = (): JSX.Element => {

    return (
        <Grid
            placeItems="center"
            padding="0px 40px"
        >
            <Box w="100%">
                <RoundedBackButton color='#070529' onclick={() => { }} />
            </Box>
            <Text as="h1" w="100%" my="20px" fontSize="24px" fontWeight="600">
                Payroll
            </Text>
        </Grid>
    )
}

export default Index