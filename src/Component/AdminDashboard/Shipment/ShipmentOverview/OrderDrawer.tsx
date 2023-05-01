import { Avatar, Box, Drawer, DrawerContent, DrawerOverlay, Flex, Grid, Text, useMediaQuery } from '@chakra-ui/react'
import React from 'react'
import { RiCloseCircleLine } from 'react-icons/ri'
import DeliveryStatus from './DeliveryStatus'
import Bike from '../../../../Asset/Logos/Onboarding/bike.png'
import v_line from '../../../../Asset/Logos/Onboarding/v-line.png'
import pc from '../../../../Asset/pc.png'
import CustomCheckbox from '../../../shared/CustomCheckbox'
import CustomButton from '../../../shared/CustomButton'
import { GoKebabVertical } from 'react-icons/go'
import { ChatIcon, PhoneIcon } from '@chakra-ui/icons'

interface Props {
    isOpen: boolean,
    onClose: () => void,
    details: any,
    history?: boolean,
}
const TableDrawer = ({ onClose, isOpen, details, history }: Props): JSX.Element => {
    // const [isSmallerScreen] = useMediaQuery("(max-width: 860px)");
    // const [isSmallerThan480] = useMediaQuery("(max-width: 480px)");
    // const tabs: string[] = ["Delivery 1", "Delivery 2", "Delivery 3", "Delivery 4", "Delivery 5",]

    return (
        <Drawer placement="right" onClose={onClose} isOpen={isOpen} size="md">
            <DrawerOverlay />
            <DrawerContent
                maxW={{ base: "100%", md: "38%" }}
                width="100%"
                color='#070529'
                padding={{ base: "10px", lg: "20px 40px" }}
                overflowY="scroll"
                className='drawer-content'
            >
                <Flex w="100%" justifyContent="flex-end">
                    <RiCloseCircleLine size="25" onClick={onClose} cursor="pointer" />
                </Flex>
                {history && <Flex w="100%" justifyContent="flex-end" m="38px 0px 0px">
                    <Text p="4px" background="#F1F1F0" color="#000" borderRadius="4px">
                        20-12-2023
                    </Text>
                </Flex>}
                <Flex
                    w="100%"
                    flexDirection="column"
                    rowGap="32px"
                    m="44px 0px"
                    width="100%"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Flex fontSize={{ base: '18px', lg: '24px' }} fontWeight="600" w={{ base: "100%", md: "80%" }} justifyContent="space-between" >
                        <Text>{details?.destination}</Text>
                        <Text>Track id-B34747</Text>
                    </Flex>
                    <Grid
                        w={{ base: "100%", md: "80%" }}
                        gridTemplateColumns="repeat(4, 1fr)"
                        placeItems="center"
                        alignItems="flex-start"
                        textAlign="center"
                        fontSize={{ md: "14px", base: "12px" }}
                        fontWeight="500"
                    >
                        <Box>
                            <Text>Pick up time</Text>
                            <Text color="#ABA7A7" fontWeight="400">4:00 hrs</Text>
                        </Box>
                        <Box>
                            <Text>Delivery time</Text>
                            <Text color="#ABA7A7" fontWeight="400">4:00 hrs</Text>
                        </Box>
                        <Box>
                            <Text>Status</Text>
                            <DeliveryStatus status={details?.delivery_status} />
                        </Box>
                        <Box>
                            <Text>Time delay</Text>
                            <Text color="#CD0B3A">{details?.time_delay ? details?.time_delay : "-"}</Text>
                        </Box>
                    </Grid>
                    {
                        history ?
                            <HistoryMidSection details={details} /> :
                            <NormalMidSection details={details} />
                    }
                    <Box w="100%"
                        color="#AAAAAA"
                        fontSize={{ md: "14px", base: "12px" }}
                        fontWeight="600"
                    >
                        <Text
                            w="max-content"
                            fontSize={{ md: "16px", base: "12px" }}
                            whiteSpace="nowrap"
                            fontWeight="500"
                            borderRadius="4px"
                            padding="4px 8px"
                            color="#000000"
                            background="#F1F1F0"
                        >Order #103</Text>
                        <Box
                            padding="24px"
                            borderRadius="4px"
                            my={{ md: "15px", base: "5px" }}
                            w="100%"
                            border="1px solid #E5E4EF"
                        >
                            <Text fontSize={{ md: "18px", base: "16px" }} mb="24px">
                                Delivery details
                            </Text>
                            <Grid gridTemplateColumns="1fr 1fr" rowGap={{ md: "24px", base: "10px" }}>
                                <Text>Customer Name</Text>
                                <Text>John Tae</Text>

                                <Text>Customer Phone Number</Text>
                                <Text>080393728623</Text>

                                <Text>Customer Code</Text>
                                <Text>728623</Text>

                                <Text>Drop Off Name</Text>
                                <Text>Maria Tae</Text>

                                <Text>Drop Off Phone Number</Text>
                                <Text>080393728623</Text>

                                <Text>Drop Off Code</Text>
                                <Text>393728</Text>

                                <Text>Location</Text>
                                <Text>Pick-up Location<br />
                                    7, badore street lagos ,nigeria<br /><br />
                                    Delivery Address<br />
                                    7, badore street lagos ,nigeria
                                </Text>
                            </Grid>
                            <Text fontSize={{ md: "18px", base: "16px" }} mb="24px">
                                Payment method
                            </Text>
                            <Flex alignItems="center" columnGap={{ base: "10px", md: "24px" }}>
                                <CustomCheckbox checked={true} />
                                <Text fontSize={{ md: "18px", base: "16px" }}>Payment on delivery</Text>
                            </Flex>
                        </Box>
                        <Box padding="24px" borderRadius="4px" my="15px" border="1px solid #E5E4EF" whiteSpace="nowrap">
                            <Text fontSize={{ md: "18px", base: "16px" }} mb="24px">
                                Parcel contents
                            </Text>
                            <Grid gridTemplateColumns="1fr 1fr 1fr" rowGap={{ md: "24px", base: "10px" }}>
                                <Text>Laptops</Text>
                                <Text>Quantify: 1</Text>
                                <Text>Category: <Text as="span" color="#000000">Computer Accessories</Text></Text>

                                <Text>Laptops</Text>
                                <Text>Quantify: 1</Text>
                                <Text>Delivery Fee: <Text as="span" color="#000000">#500</Text></Text>
                            </Grid>
                        </Box>
                    </Box>
                </Flex>
            </DrawerContent>
        </Drawer >
    )
}

const HistoryMidSection = ({ details }: { details: any }) => {
    const [isSmallerScreen] = useMediaQuery("(max-width: 860px)");

    return (
        <Box w="100%">
            <Text
                fontSize="16px"
                fontWeight="500"
                color="#595956"
                textAlign="center"
            >
                Parcel Image
            </Text>
            <Flex
                my="24px"
                w={{ md: "100%", base: "80%" }}
                // h="193px"
                alignItems="center"
                justifyContent="center"
                background={`url(${pc})`}
                backgroundPosition="center"
                backgroundSize="cover"
                backgroundRepeat="no-repeat"
                borderRadius="10px"
                overflow="hidden"

                style={{ aspectRatio: "8/5" }}
            />
            <Flex justifySelf="flex-start" alignItems="center" columnGap="6px">
                <Avatar
                    size="md"
                    name="Daniel Jones"
                    src={Bike}
                />
                <Grid
                    color="#595956"
                    fontWeight="400"
                    fontSize="16px"
                >
                    <Text>Daniel Jones</Text>
                    <Text
                        fontSize="14px"
                        color="#ABA7A7"
                    >Rider</Text>
                </Grid>
            </Flex>
        </Box>
    )

}

const NormalMidSection = ({ details }: { details: any }) => {
    const [isSmallerScreen] = useMediaQuery("(max-width: 860px)");

    return (
        <>
            <Grid
                w="100%"
                // background="#F1F1F0"
                border="1px solid #E5E4EF"
                padding={{ md: "20px 30px", base: "15px" }}
                borderRadius="8px"
                color="#595956"
                rowGap="16px"
                fontWeight="500"
                fontSize={{ md: "16px", base: "14px" }}
            >
                <Grid
                    gridTemplateColumns="10% 80% 10%"
                    alignItems="center"
                    gap={{ md: "15px", base: "5px" }}
                >
                    <Box
                        bgImage={`url(${Bike})`}
                        className='bike'
                        style={{
                            aspectRatio: "1/1"
                        }}
                    />
                    <Text>In transit</Text>
                    <CustomCheckbox />
                </Grid>
                <Grid gridTemplateColumns="10% 90%" placeItems="center">
                    <Box
                        bgImage={`url(${v_line})`}
                        width="3px"
                        height="50px"
                    />
                </Grid>
                <Grid
                    gridTemplateColumns="10% 80% 10%"
                    alignItems="center"
                    gap={{ md: "15px", base: "5px" }}
                >
                    <Box
                        bgImage={`url(${Bike})`}
                        className='bike'
                        style={{
                            aspectRatio: "1/1"
                        }}
                    />
                    <Text>Arrived at Pickup station</Text>
                    <CustomCheckbox />
                </Grid>
                <Grid gridTemplateColumns="10% 90%" placeItems="center">
                    <Box
                        bgImage={`url(${v_line})`}
                        width="3px"
                        height="50px"
                    />
                </Grid>
                <Grid
                    gridTemplateColumns="10% 80% 10%"
                    alignItems="center"
                    gap={{ md: "15px", base: "5px" }}
                >
                    <Box
                        bgImage={`url(${Bike})`}
                        className='bike'
                        style={{
                            aspectRatio: "1/1"
                        }}
                    />
                    <Text>Delivered</Text>
                    <CustomCheckbox />
                </Grid>
            </Grid>
            {
                ((details?.order_status === "Unassigned" && details?.delivery_status === "Pending") || details?.delivery_status === "Canceled") &&
                <Flex justifyContent="flex-end" w="100%" fontSize="14px">
                    {
                        details?.delivery_status === "Canceled" ?
                            <CustomButton size={isSmallerScreen ? "sm" : "md"} text='Assign to Rider' onclick={() => { }} disabled />
                            :
                            <CustomButton size={isSmallerScreen ? "sm" : "md"} text='Assign to Rider' onclick={() => { }} />

                    }
                </Flex>
            }
            {
                (details?.delivery_status === "In transit" || details?.delivery_status === "Delivered") &&
                <Grid
                    p={{ base: "10px", md: "15px" }}
                    w="100%"
                    height="82px"
                    gridTemplateColumns="repeat(3,1fr)"
                    placeItems="center"
                    background="#F9F9F9"
                    borderRadius="10px"
                    border="1px solid #E5E4EF"
                    color="#000000"
                    fontSize={{ base: "12px", md: "16px" }}
                    fontWeight="500"
                    overflowX={{ base: "scroll", md: "hidden" }}
                    className='table-row'
                >
                    <Flex justifySelf="flex-start" alignItems="center" columnGap="5px">
                        <Avatar
                            size="md"
                            name="Daniel Jones"
                            src={Bike}
                        />
                        <Text>Daniel Jones</Text>
                    </Flex>
                    <Flex columnGap="55px">
                        <PhoneIcon boxSize={5} cursor="pointer" transition="0.1s" _hover={{ transform: "translateY(-4px)" }} />
                        <ChatIcon boxSize={5} cursor="pointer" transition="0.1s" _hover={{ transform: "translateY(-4px)" }} />
                    </Flex>
                    <Flex columnGap="15px" alignItems="center">
                        <>
                            {
                                details?.delivery_status === "Delivered" ?
                                    <CustomButton text='Track' size="sm" onclick={() => { }} disabled />
                                    :
                                    <CustomButton text='Track' size="sm" onclick={() => { }} />
                            }
                        </>
                        <GoKebabVertical size={20} cursor="pointer" />
                    </Flex>
                </Grid>
            }
            <Text
                fontSize="16px"
                fontWeight="500"
                color="#595956"
            >
                Parcel Image
            </Text>
            <Flex
                w={{ md: "240px", base: "80%" }}
                h="193px"
                alignItems="center"
                justifyContent="center"
                background={`url(${pc})`}
                backgroundPosition="center"
                backgroundSize="cover"
                backgroundRepeat="no-repeat"
                borderRadius="10px"
                overflow="hidden"

                style={{ aspectRatio: "6/4" }}
            />
        </>
    )
}

TableDrawer.defaultProps = {
    history: false
}

export default TableDrawer