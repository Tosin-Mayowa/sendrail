import { Box, Grid } from '@chakra-ui/react'
import React from 'react'

const ModalTopLine = (): JSX.Element => {
    return (
        <Grid
            w="100%"
            gridTemplateColumns="2% 98% 2%"
            alignItems="center"
        >
            <Box
                w="100%"
                background="#0600891A"
                borderRadius="50%"
                style={{
                    aspectRatio: "1/1"
                }}
            />
            <Box
                w="100%"
                h="2px"
                background="#0600891A"
            />
            <Box
                w="100%"
                background="#0600891A"
                borderRadius="50%"
                style={{
                    aspectRatio: "1/1"
                }}
            />
        </Grid>
    )
}

export default ModalTopLine