import React, { Dispatch, SetStateAction } from 'react'
import {
    Box, Flex, Grid, Image, Text, useMediaQuery
} from "@chakra-ui/react";

type CardType = {
    card: {
        image: string,
        name: string,
        card: string,
        bank: string,
        key: number
    },
    setSection: Dispatch<SetStateAction<number>>
}
export function Card({ card, setSection }: CardType): JSX.Element {
    const [isSmallerScreen] = useMediaQuery("(max-width: 860px)");

    return (
        <Grid placeItems="center">
            <Flex
                alignItems="center"
                width={isSmallerScreen ? "100%" : "50%"}
                backgroundColor="#fff"
                boxShadow="0px 8px 40px rgba(6, 0, 137, 0.1)"
                borderRadius="9px"
                padding={isSmallerScreen ? "10px" : "15px"}
                my="10px"
                cursor="pointer"

                onClick={() => { setSection(3) }}
            >
                <Box mx="5px" borderRadius="50%" style={{ aspectRatio: "1/1" }}>
                    <Image src={card?.image} alt="" />
                </Box>
                <Grid color="#656566">
                    <Text fontSize={isSmallerScreen ? "14px" : "18px"} fontWeight="500" color="#040320">{card.name}</Text>
                    <Text fontSize="12px" fontWeight="450">{card.card}</Text>
                    <Text fontSize="12px" fontWeight="450">{card.bank}</Text>
                </Grid>
            </Flex>
        </Grid>
    )
}