import { ArrowBackIcon } from '@chakra-ui/icons'
import { Grid } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

interface Props {
    color: string,
    onclick?: () => void
}

function RoundedBackButton({ color, onclick }: Props) {
    const navigate = useNavigate()
    const event = onclick ? onclick : () => navigate(-1)
    return (
        <Grid placeItems="center" border={`2px solid ${color}`} w="max-content" borderRadius="50%" cursor="pointer" onClick={event}>
            <ArrowBackIcon color={color} />
        </Grid>
    )
}

RoundedBackButton.defaultProps = {
    onclick: null
}

export default RoundedBackButton