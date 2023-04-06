import {
    Button, FormControl, FormLabel, Grid, Input, Text, useMediaQuery
} from '@chakra-ui/react'
import React, { Dispatch, SetStateAction } from 'react'

function PickupDetails({ setSection }: { setSection: Dispatch<SetStateAction<string>> }): JSX.Element {
    const [isSmallerScreen] = useMediaQuery("(max-width: 860px)");

    return (
        <Grid
            // placeItems="center"
            w="100%"
            padding={{ base: "15px", md: "32px 48px" }}
            borderRadius="20px"
            backgroundColor="#07052912"
        >
            <Text
                color="#000000"
                fontWeight="500"
                fontSize="20px"
            >
                Pick up details
            </Text>
            <form style={{ width: "100%" }}>
                <Grid
                    gridTemplateColumns={isSmallerScreen ? "1fr" : "1fr 1fr"}
                    gap="24px"
                    my="32px"
                    placeItems="center"
                    fontWeight="500"
                    fontSize="16px"
                >
                    <FormControl>
                        <FormLabel color="#595956" mb="24px">Customer&#39;s Name</FormLabel>
                        <Input
                            type='text'
                            placeholder="Enter a full name"
                            background="#fff"
                        />
                    </FormControl>
                    <FormControl>
                        <FormLabel color="#595956" mb="24px">Customer&#39;s Phone Number</FormLabel>
                        <Input
                            type='phone'
                            placeholder='Enter phone number'
                            background="#fff"
                        />
                    </FormControl>
                    <FormControl>
                        <FormLabel color="#595956" mb="24px">Pickup Address</FormLabel>
                        <Input
                            type='text'
                            placeholder='Address'
                            background="#fff"
                        />
                    </FormControl>
                    <FormControl>
                        <FormLabel color="#595956" mb="24px">Customer&#39;s Code</FormLabel>
                        <Input
                            type='text'
                            placeholder='*****'
                            background="#fff"
                        />
                    </FormControl>


                    <Text
                        color="#000000"
                        fontWeight="500"
                        fontSize="20px"
                        gridColumn={isSmallerScreen ? "" : "1/3"}
                        justifySelf="flex-start"
                    >
                        Drop off details
                    </Text>
                    <FormControl>
                        <FormLabel color="#595956" mb="24px">Recipent&#39;s Name</FormLabel>
                        <Input
                            type='text'
                            placeholder="Name"
                            background="#fff"
                        />
                    </FormControl>
                    <FormControl>
                        <FormLabel color="#595956" mb="24px">Recipent&#39;s Phone Number</FormLabel>
                        <Input
                            type='phone'
                            placeholder='Phone Number'
                            background="#fff"
                        />
                    </FormControl>
                    <FormControl>
                        <FormLabel color="#595956" mb="24px">Drop Off Address</FormLabel>
                        <Input
                            type='text'
                            placeholder='Address'
                            background="#fff"
                        />
                    </FormControl>
                    <FormControl>
                        <FormLabel color="#595956" mb="24px">Recipent&#39;s Code</FormLabel>
                        <Input
                            type='text'
                            placeholder='*****'
                            background="#fff"
                        />
                    </FormControl>

                    <Button
                        gridColumn={!isSmallerScreen ? "1/3" : ""}
                        w="max-content"
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