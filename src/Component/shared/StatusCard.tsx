import { Box, Flex, GridItem, Image, Text, useMediaQuery } from '@chakra-ui/react'
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
    const [isSmallerScreen] = useMediaQuery("(max-width: 480px)");
    return (
        <GridItem
            w="100%"
            bg={dark ? "#070529" : "#fff"}
            borderRadius="5px"
            cursor="pointer"
            onClick={onclick}

            boxShadow="0px 0px 1px 0px #070529"

            _hover={{
                boxShadow: "0px 5px 5px 0px #0705293a"
            }}
        >
            <Flex
                justifyContent="space-between"
                p="10px"
                alignItems="center"
                px={!isSmallerScreen ? "20px" : ""}
                color={dark ? "#fff" : "#070529"}
            >
                <Box
                    my="8px"
                    fontSize={isSmallerScreen ? "18" : "21px"}
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
                    width={isSmallerScreen ? "44px" : "56px"}
                    height={isSmallerScreen ? "44px" : "56px"}
                    bg="#fff"
                    boxShadow={!dark ? "0px 0px 3px 0px #070529" : ""}
                >
                    <Image src={card?.url} alt="Order" />
                </Box>
            </Flex>
        </GridItem>
    )
}

StatusCard.defaultProps = {
    dark: true,
    onclick: () => { }
}

export default StatusCard