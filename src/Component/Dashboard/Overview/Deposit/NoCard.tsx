import { SmallAddIcon } from "@chakra-ui/icons";
import { Grid, Text, useMediaQuery } from "@chakra-ui/react";
import React, { Dispatch, SetStateAction } from "react";

export function NoCard({ setSection }: { setSection: Dispatch<SetStateAction<number>> }): JSX.Element {
    const [isSmallerScreen] = useMediaQuery("(max-width: 860px)");

    return (
        <Grid placeItems="center">
            <Grid
                placeItems="center"
                backgroundColor="#FFFFFF"
                w={isSmallerScreen ? "90%" : "70%"}
                color="#F9C567"
                fontWeight="700"
                fontSize={isSmallerScreen ? "12px" : "18px"}
                padding={isSmallerScreen ? "15px" : "45px"}
                borderRadius="10px"
                gridTemplateColumns="auto auto"
                justifyContent="center"
                cursor="pointer"

                onClick={() => setSection(2)}
            >
                <SmallAddIcon boxSize="25px" /><Text>Add A Debit Card For This Transaction</Text>
            </Grid>
        </Grid>
    )
}