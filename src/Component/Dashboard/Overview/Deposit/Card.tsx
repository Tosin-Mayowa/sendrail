import React from 'react'
import {
 Box, Flex, Grid, Image, Text, useMediaQuery 
} from "@chakra-ui/react";
import { DashboardStates } from "../../../../Contexts/DashboardContext";

type CardType = {
    card: {
        image: string,
        name: string,
        card: string,
        bank: string,
        key: number
    }
}
export function Card({ card }: CardType): JSX.Element {
    const [isSmallerScreen] = useMediaQuery("(max-width: 860px)");
    const { dispatchView } = DashboardStates();

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

                onClick={() => { dispatchView({ type: "change_overview_view", current_view: "deposit-3" }) }}
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