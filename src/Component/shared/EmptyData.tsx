import { Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import Empty from '../../Asset/empty-notepad.png'
import CustomButton from './CustomButton'

interface Props {
    error_text?: string,
    button?: boolean,
    button_details?: {
        text: string,
        onclick: () => void,
        variant?: "filled" | "outlined",
    }
}

function EmptyData({ button, button_details, error_text }: Props): JSX.Element {
    const { text, onclick, variant } = button_details
    return (
        <Flex
            w="100%"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            rowGap="20px"
            style={{
                aspectRatio: "2/1"
            }}
        >
            <Image src={Empty} alt="Empty" />
            <Text color="#656566" fontSize="20px" fontWeight="500">
                {error_text}
            </Text>
            {
                button && <CustomButton text={text} onclick={onclick} variant={variant} />
            }
        </Flex>
    )
}

EmptyData.defaultProps = {
    button: false,
    button_details: {
        variant: "filled"
    },
    error_text: "No Data To Show"
}

export default EmptyData