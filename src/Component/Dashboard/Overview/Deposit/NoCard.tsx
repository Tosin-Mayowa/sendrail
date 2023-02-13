import { SmallAddIcon } from "@chakra-ui/icons";
import { Grid, Text, useMediaQuery } from "@chakra-ui/react";
import React from "react";
import { DashboardStates } from "../../../../Contexts/DashboardContext";

export function NoCard(): JSX.Element {
    const [isSmallerScreen] = useMediaQuery("(max-width: 860px)");
    const { dispatchView } = DashboardStates();

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

                onClick={() => dispatchView({ type: "change_overview_view", current_view: "deposit-2" })}
            >
                <SmallAddIcon boxSize="25px" /><Text>Add A Debit Card For This Transaction</Text>
            </Grid>
        </Grid>
    )
}