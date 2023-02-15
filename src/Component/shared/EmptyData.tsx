import { Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import Empty from '../../Asset/empty-notepad.png'
import CustomButton from './CustomButton'

interface Props {
    button?: boolean,
    button_details?: {
        text: string,
        onclick: () => void,
        variant?: "filled" | "outlined",
    }
}

function EmptyData({ button, button_details }: Props): JSX.Element {
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
                No Data To Show
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
    }
}

export default EmptyData