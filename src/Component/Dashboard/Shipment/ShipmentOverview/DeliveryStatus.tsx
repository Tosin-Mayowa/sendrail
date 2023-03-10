import { Text } from '@chakra-ui/react'
import React from 'react'

function DeliveryStatus({ status }: { status: string }): JSX.Element {
    let color: string
    let background: string
    if (status === "In transit") {
        color = "#F9C567"
        background = "#FDF3D8C5"
    } else if (status === "Delivered") {
        color = "#079638"
        background = "#E6FDEEC3"
    } else {
        color = "#000000"
        background = "#07052912"
    }
    return (
        <Text
            color={color}
            background={background}
            p="4px"
            borderRadius="5px"
        >{status}</Text>
    )
}

export default DeliveryStatus