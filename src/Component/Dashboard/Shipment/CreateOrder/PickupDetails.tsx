import {
    Button, FormControl, FormLabel, Grid, Input, Text, useMediaQuery
} from '@chakra-ui/react'
import React, { Dispatch, SetStateAction } from 'react'

function PickupDetails({ setSection }: { setSection: Dispatch<SetStateAction<string>> }): JSX.Element {
    const [isSmallerScreen] = useMediaQuery("(max-width: 860px)");

    return (
        <Grid
            placeItems="center"
            w="100%"
            my="15px"
            padding="30px"
            borderRadius="10px"
            backgroundColor="#07052912"
        >
            <Text
                color="#595956"
                fontWeight="500"
                fontSize="18px"
            >
                Pick up details
            </Text>
            <form style={{ width: "100%" }}>
                <Grid gridTemplateColumns={isSmallerScreen ? "1fr" : "1fr 1fr"} gap="15px" my="15px" placeItems="center">
                    <FormControl>
                        <FormLabel color="#ABA7A7">Customer&#39;s Name</FormLabel>
                        <Input
                            type='text'
                            placeholder="Name"
                            border="1px solid #ABA7A7"
                            background="#fff"
                        />
                    </FormControl>
                    <FormControl>
                        <FormLabel color="#ABA7A7">Customer&#39;s Phone Number</FormLabel>
                        <Input
                            type='phone'
                            placeholder='Phone Number'
                            border="1px solid #ABA7A7"
                            background="#fff"
                        />
                    </FormControl>
                    <FormControl>
                        <FormLabel color="#ABA7A7">Pickup Address</FormLabel>
                        <Input
                            type='text'
                            placeholder='Address'
                            border="1px solid #ABA7A7"
                            background="#fff"
                        />
                    </FormControl>
                    <FormControl>
                        <FormLabel color="#ABA7A7">Customer&#39;s Code</FormLabel>
                        <Input
                            type='text'
                            placeholder='*****'
                            border="1px solid #ABA7A7"
                            background="#fff"
                        />
                    </FormControl>


                    <Text
                        color="#595956"
                        fontWeight="500"
                        fontSize="18px"
                        my="15px"
                        gridColumn={isSmallerScreen ? "" : "1/3"}
                    >
                        Drop off details
                    </Text>
                    <FormControl>
                        <FormLabel color="#ABA7A7">Recipent&#39;s Name</FormLabel>
                        <Input
                            type='text'
                            placeholder="Name"
                            border="1px solid #ABA7A7"
                            background="#fff"
                        />
                    </FormControl>
                    <FormControl>
                        <FormLabel color="#ABA7A7">Recipent&#39;s Phone Number</FormLabel>
                        <Input
                            type='phone'
                            placeholder='Phone Number'
                            border="1px solid #ABA7A7"
                            background="#fff"
                        />
                    </FormControl>
                    <FormControl>
                        <FormLabel color="#ABA7A7">Drop Off Address</FormLabel>
                        <Input
                            type='text'
                            placeholder='Address'
                            border="1px solid #ABA7A7"
                            background="#fff"
                        />
                    </FormControl>
                    <FormControl>
                        <FormLabel color="#ABA7A7">Recipent&#39;s Code</FormLabel>
                        <Input
                            type='text'
                            placeholder='*****'
                            border="1px solid #ABA7A7"
                            background="#fff"
                        />
                    </FormControl>

                    <Button
                        gridColumn={!isSmallerScreen ? "1/3" : ""}
                        w="max-content"
                        border="1px solid #ABA7A7"
                        borderRadius="4px"
                        onClick={() => { setSection("add-parcel-details") }}
                    >
                        Next
                    </Button>
                </Grid>
            </form>
        </Grid>
    )
}

export default PickupDetails