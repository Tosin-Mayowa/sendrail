import { ArrowBackIcon } from '@chakra-ui/icons'
import { Grid } from '@chakra-ui/react'
import React from 'react'

interface Props {
    color: string,
    onclick: () => void
}

const RoundedBackButton: React.FC<Props> = ({ color, onclick }) => {
    return (
        <Grid placeItems="center" border={`2px solid ${color}`} w="max-content" borderRadius="50%" cursor="pointer" onClick={onclick}>
            <ArrowBackIcon color={color} />
        </Grid>
    )
}

export default RoundedBackButton