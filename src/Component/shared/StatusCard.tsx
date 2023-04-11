import {
    Box, Flex, Grid, Image, Text
} from '@chakra-ui/react'
import React from 'react'

interface Props {
    card: {
        title: string;
        count: number;
        url: string;
    };
    dark?: boolean,
    onclick?: () => void
}
function StatusCard({ card, dark, onclick }: Props) {
    return (
        <Grid
            alignItems="center"
            w="100%"
            bg={dark ? "#070529" : "#fff"}
            borderRadius="5px"
            cursor="pointer"
            onClick={onclick}
            height="104px"

            border="2px solid #E5E4EF"

            _hover={{
                border: "2px solid transparent",
                boxShadow: "0px 4px 4px 0px #0705297f"
            }}
        >
            <Flex
                justifyContent="space-between"
                p="0px 24px"
                alignItems="center"
                color={dark ? "#fff" : "#070529"}
            >
                <Box
                    fontSize={{ base: "18", md: "20px" }}
                >
                    <Text lineHeight="26px" fontWeight="500">
                        {card?.title}
                    </Text>
                    <Text
                        my="13px"
                        fontWeight="600"
                    >
                        {card?.count}
                    </Text>
                </Box>
                <Box
                    borderRadius="50%"
                    padding="12px"
                    width={{ base: "44px", md: "52px" }}
                    height={{ base: "44px", md: "52px" }}
                    bg="#fff"
                    boxShadow={!dark ? "0px 0px 3px 0px #070529" : ""}
                >
                    <Image src={card?.url} alt="Order" w="100%" />
                </Box>
            </Flex>
        </Grid>
    )
}

StatusCard.defaultProps = {
    dark: true,
    onclick: () => { }
}

export default StatusCard