import {
    Box, Checkbox, CheckboxGroup, Flex, Grid, Stack, Text, useDisclosure, useMediaQuery
} from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom';
import preview from '../../../../Asset/pc.png'
import CustomButton from '../../../shared/CustomButton';
import SuccessModal from '../../../shared/SuccessModal';

function ConfirmDetails(): JSX.Element {
    const navigate = useNavigate()
    const [isSmallerScreen] = useMediaQuery("(max-width: 860px)");
    const { isOpen, onOpen, onClose }: { isOpen: boolean, onOpen: () => void, onClose: () => void } = useDisclosure()

    return (
        <Grid
            placeItems="center"
            w={isSmallerScreen ? "100%" : "80%"}
            my="15px"
            padding="30px"
            borderRadius="10px"
            backgroundColor="#07052912"
        >
            <Text
                color="#595956"
                fontWeight="500"
                fontSize="24px"
            >
                Confirmation
            </Text>
            <SuccessModal type='success' text="Order Created" isOpen={isOpen} onClose={onClose} callback={() => {
                navigate("/shipment")
            }} />
            <form style={{ width: "100%" }}>
                <Grid
                    w="100%"
                    placeItems="center"
                >
                    <Flex
                        w={isSmallerScreen ? "90%" : "50%"}
                        my="15px"
                        alignItems="center"
                        justifyContent="center"
                        background={`url(${preview})`}
                        backgroundPosition="center"
                        backgroundSize="cover"
                        color="#ABA7A7"
                        borderRadius="10px"
                        overflow="hidden"
                        border="1px solid #595956"

                        style={{ aspectRatio: "5/3" }}
                    />
                    <Box w={isSmallerScreen ? "90%" : "60%"} color="#ABA7A7">
                        <Flex
                            justifyContent="space-between"
                            flexDirection={isSmallerScreen ? "column" : "row"}
                            alignItems={isSmallerScreen ? "flex-start" : "center"}
                            fontSize={isSmallerScreen ? "14px" : "18px"}
                            fontWeight="500"
                            color="#000000"
                        >
                            <Text>
                                No of Parcel:
                                <Text as="span" color="#ABA7A7" mx="5px">
                                    5
                                </Text>
                            </Text>
                            <Text>
                                Category:
                                <Text as="span" color="#ABA7A7" mx="5px">
                                    Computer Accessories
                                </Text>
                            </Text>
                        </Flex>
                        <Text fontSize={isSmallerScreen ? "14px" : "18px"} my="20px" color="#595956">
                            Payment method
                        </Text>
                        <CheckboxGroup>
                            <Stack
                                spacing={["15px"]}
                                direction={["column"]}
                                fontSize={isSmallerScreen ? "12px" : "16px"}
                            >
                                <Checkbox size="sm" isChecked>
                                    Payment on delivery
                                </Checkbox>
                            </Stack>
                        </CheckboxGroup>
                    </Box>
                    <Box textAlign="center" fontSize="20px" color="#000" fontWeight="500" my="20px">
                        <Text>
                            Price:
                            <Text
                                as="span"
                                mx="5px"
                                background="#F9C567"
                                p="4px"
                            >
                                #4,000
                            </Text>
                        </Text>
                    </Box>
                    <Flex justifyContent="center" alignItems="center" color="#595956" fontSize={isSmallerScreen ? "14px" : "18px"} my={isSmallerScreen ? "5px" : "15px"}>
                        <Checkbox border="1px solid #ABA7A7" borderRadius="3px" m="2px" />
                        Save as Customer
                    </Flex>

                    <CustomButton text='Confirm' variant='filled' onclick={onOpen} />
                </Grid>
            </form >
        </Grid >
    )
}

export default ConfirmDetails