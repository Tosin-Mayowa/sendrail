import { Text } from '@chakra-ui/react'
import React from 'react'

interface Props {
    text: string,
    onclick: () => void,
    color?: string
}

const TestText: React.FC<Props> = ({ text, onclick, color }) => {
    return (
        <Text onClick={onclick} cursor="pointer" textDecoration="underline" color={color ? color : "#fff"}>{text}[Test]</Text>
    )
}

export default TestText