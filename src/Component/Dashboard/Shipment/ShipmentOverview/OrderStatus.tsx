import { Text } from '@chakra-ui/react'
import React from 'react'

function OrderStatus({ status }: { status: string }): JSX.Element {
    let color: string
    let background: string
    if (status === "Assigned") {
        color = "#079638"
        background = "#E6FDEEC3"
    } else {
        color = "#CD0B3A"
        background = "#F7D8DFC5"
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

export default OrderStatus