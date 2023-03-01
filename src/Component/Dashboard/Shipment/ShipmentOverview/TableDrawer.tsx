import { Avatar, Box, Checkbox, Drawer, DrawerContent, DrawerOverlay, Flex, Grid, Text, useMediaQuery } from '@chakra-ui/react'
import React from 'react'
import { RiCloseCircleLine } from 'react-icons/ri'
import DeliveryStatus from './DeliveryStatus'
import Bike from '../../../../Asset/Logos/Onboarding/bike.png'
import v_line from '../../../../Asset/Logos/Onboarding/v-line.png'
import CustomCheckbox from '../../../shared/CustomCheckbox'
import CustomButton from '../../../shared/CustomButton'
import { GoKebabVertical } from 'react-icons/go'
import { ChatIcon, PhoneIcon } from '@chakra-ui/icons'

interface Props {
    isOpen: boolean,
    onClose: () => void,
    details: any
}
const TableDrawer = ({ onClose, isOpen, details }: Props): JSX.Element => {
    const [isSmallerScreen] = useMediaQuery("(max-width: 860px)");
    const [isSmallerThan480] = useMediaQuery("(max-width: 480px)");

    return (
        <Drawer placement="right" onClose={onClose} isOpen={isOpen} size="md">
            <DrawerOverlay />
            <DrawerContent color='#070529' padding="20px 30px">
                <RiCloseCircleLine size="25" onClick={onClose} cursor="pointer" />
                <Grid placeItems="center" rowGap="20px" my="30px">
                    <Flex fontSize="24px" fontWeight="600" w="80%" justifyContent="space-between">
                        <Text>{details?.destination}</Text>
                        <Text>Track id-B34747</Text>
                    </Flex>
                    <Grid
                        w="80%"
                        gridTemplateColumns="repeat(4, 1fr)"
                        placeItems="center"
                        alignItems="flex-start"
                        // justifyContent="space-between"
                        textAlign="center"
                        fontSize="14px"
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
                    <Grid
                        background="#F1F1F0"
                        padding="20px"
                        w="100%"
                        borderRadius="8px"
                        color="#595956"
                        rowGap="15px"
                    >
                        <Grid
                            gridTemplateColumns="10% 80% 10%"
                            alignItems="center"
                            gap="15px"
                        >
                            <Box
                                bgImage={`url(${Bike})`}
                                className='bike'
                                style={{
                                    aspectRatio: "1/1"
                                }}
                            />
                            <Text
                                fontWeight="500"
                                fontSize="16px"
                            >In transit</Text>
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
                            gap="15px"
                        >
                            <Box
                                bgImage={`url(${Bike})`}
                                className='bike'
                                style={{
                                    aspectRatio: "1/1"
                                }}
                            />
                            <Text
                                fontWeight="500"
                                fontSize="16px"
                            >Arrived at Pickup station</Text>
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
                            gap="15px"
                        >
                            <Box
                                bgImage={`url(${Bike})`}
                                className='bike'
                                style={{
                                    aspectRatio: "1/1"
                                }}
                            />
                            <Text
                                fontWeight="500"
                                fontSize="16px"
                            >Delivered</Text>
                            <CustomCheckbox />
                        </Grid>
                    </Grid>
                    {
                        (details?.order_status === "Unassigned" && details?.delivery_status === "Pending") || details?.delivery_status === "Canceled" &&
                        <Flex justifyContent="flex-end" w="100%">
                            {
                                details?.delivery_status === "Canceled" ?
                                    <CustomButton text='Assign to Rider' onclick={() => { }} disabled />
                                    :
                                    <CustomButton text='Assign to Rider' onclick={() => { }} />

                            }
                        </Flex>
                    }
                    {
                        (details?.delivery_status === "In transit" || details?.delivery_status === "Delivered") &&
                        <Grid
                            my="10px"
                            p={isSmallerScreen ? "10px" : "15px"}
                            w="100%"
                            gridTemplateColumns="repeat(3,1fr)"
                            placeItems="center"
                            background="#07052912"
                            borderRadius="10px"
                            color="#000000"
                            fontSize={isSmallerScreen ? "12px" : "16px"}
                            fontWeight="500"
                            overflowX={isSmallerThan480 ? "scroll" : "hidden"}
                            className='table-row'
                        >
                            <Flex justifySelf="flex-start" alignItems="center" columnGap="5px">
                                <Avatar
                                    size="sm"
                                    name="Daniel Jones"
                                    src={Bike}
                                />
                                <Text>Daniel Jones</Text>
                            </Flex>
                            <Flex columnGap="15px">
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
                </Grid>
            </DrawerContent>
        </Drawer>
    )
}

export default TableDrawer