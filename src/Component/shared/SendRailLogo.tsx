import { Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import Logo from '../../Asset/Logos/Onboarding/SENDRAILS.png'

const SendRailLogo = ({ base_size, md_size }: { base_size?: string, md_size?: string }): JSX.Element => {
    return (
        <Flex columnGap="5px" alignItems="center">
            <Image src={Logo} alt="Logo" h={{ base: base_size, md: md_size }} style={{ aspectRatio: "1/1" }} />
            <Text
                fontWeight="500"
                fontSize={{ base: base_size, md: md_size }}
                lineHeight="29px"
                display="flex"
                alignItems="center"
                textAlign="right"
                color="#070529">
                Sendrail
            </Text>
        </Flex>
    )
}

export default SendRailLogo

SendRailLogo.defaultProps = {
    base_size: "20px",
    md_size: "24px"
}