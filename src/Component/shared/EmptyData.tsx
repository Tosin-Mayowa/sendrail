import { Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import Empty from '../../Asset/empty-notepad.png'

function EmptyData(): JSX.Element {
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
        </Flex>
    )
}

export default EmptyData