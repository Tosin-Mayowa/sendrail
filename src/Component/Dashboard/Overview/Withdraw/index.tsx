import { Box, Grid, Text } from '@chakra-ui/react'
import React from 'react'
import { OverviewStates } from '../../../../Contexts/OverviewContext'
import RoundedBackButton from '../../../shared/RoundedBackButton'

const Index = (): JSX.Element => {
  const { views, dispatchView } = OverviewStates()

  return (
    <Grid
      placeItems="center"
      padding="0px 40px"
    >
      <Box w="100%">
        <RoundedBackButton color='#070529' onclick={() => { dispatchView({ type: "change_overview_view", current_view: views.initial_view }) }} />
      </Box>
      <Text as="h1" w="100%" my="20px" fontSize="24px" fontWeight="600">
        Withdraw
      </Text>
    </Grid>
  )
}

export default Index