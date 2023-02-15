import { Text } from '@chakra-ui/react'
import React from 'react'

interface Props {
    text: string,
    onclick: () => void,
    color?: string
}

function TestText({ text, onclick, color }: Props): JSX.Element {
    return (
        <Text onClick={onclick} cursor="pointer" textDecoration="underline" color={color} textAlign="center">{text}[Test]</Text>
    )
}

TestText.defaultProps = {
    color: "#fff"
}

export default TestText