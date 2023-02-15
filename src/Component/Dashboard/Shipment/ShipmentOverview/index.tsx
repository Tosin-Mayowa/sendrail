import { ChevronRightIcon } from '@chakra-ui/icons';
import {
    Box, Button, Flex, Grid, Text, useDisclosure, useMediaQuery
} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { DashboardStates } from '../../../../Contexts/DashboardContext';
import { cardDetails } from '../../../../data/cardDetails'
import RoundedBackButton from '../../../shared/RoundedBackButton';
import StatusCard from '../../../shared/StatusCard';
import { tableData, TData } from '../../../../data/shipment';
import CustomButton from '../../../shared/CustomButton';
import Table from './Table';
import ConfirmRequestModal from '../../../shared/ConfirmRequestModal';
import SuccessModal from '../../../shared/SuccessModal';


function Index(): JSX.Element {
    const [isSmallerScreen] = useMediaQuery("(max-width: 860px)");
    const [isSmallerThan480] = useMediaQuery("(max-width: 480px)");
    const [sortedData, setData] = useState<TData | null | undefined>(tableData)
    const [disabled, setDisabled] = useState<boolean>(true)
    const [selectable, setSelectable] = useState<boolean>(false)
    const [notificationText, setNotificationText] = useState<string>("")
    const { isOpen, onOpen, onClose }: { isOpen: boolean, onOpen: () => void, onClose: () => void } = useDisclosure()
    const Confirm = useDisclosure()
    const [isConfirmOpen, onConfirmOpen, onConfirmClose]: [ConfirmOpen: boolean, onConfirmOpen: () => void, onConfirmClose: () => void] = [Confirm.isOpen, Confirm.onOpen, Confirm.onClose]


    const {
        views, dispatchView, setTabIndex, setShipmentStatus, shipmentStatus
    } = DashboardStates()

    useEffect(() => {
        const exist = sortedData.some((e) => e.order_status === "Unassigned")
        if (exist) setDisabled(false)
        else { setDisabled(true) }
    }, [sortedData])

    useEffect(() => {
        if (shipmentStatus === "Order") {
            return setData([...tableData])
        }
        if (shipmentStatus === "Delayed") {
            const filtered = tableData.filter((e) => e.time_delay)
            return setData(filtered)
        }
        const filtered = tableData.filter((e) => e.delivery_status === shipmentStatus)
        return setData(filtered)
    }, [tableData, shipmentStatus])

    const assignOptions = () => {
        if (disabled) {
            return <CustomButton text='Select to Assign' onclick={() => { }} disabled size={isSmallerThan480 ? "sm" : null} />
        }
        if (!disabled && !selectable) {
            return <CustomButton text='Select to Assign' onclick={() => { setSelectable(true) }} size={isSmallerThan480 ? "sm" : null} />
        }
        return (
            <Flex columnGap="10px" alignItems="center">
                <Button border="1px solid #ABA7A7" size="sm" variant="ghost" onClick={() => setSelectable(false)}>Cancel</Button>
                <Button border="1px solid #ABA7A7" size="sm" onClick={onConfirmOpen}>Done</Button>
            </Flex >
        )
    }
    return (
        <Grid
            placeItems="center"
            padding={isSmallerScreen ? "0px 5px" : "0px 40px"}
        >
            <ConfirmRequestModal
                isOpen={isConfirmOpen} onClose={onConfirmClose}
                question='Do you want to assign this order to this rider'
                confirm_btn_text='Assign'
                confirm_btn_func={() => { onOpen(); setSelectable(false); onConfirmClose(); setNotificationText("Order assigned to rider."); }}
            />
            <SuccessModal type='success' text={notificationText} isOpen={isOpen} onClose={onClose} callback={() => { }} />
            <Box w="100%">
                <RoundedBackButton color='#070529' onclick={() => { dispatchView({ type: "change_shipment_view", current_view: String(views?.shipment?.initial_view) }) }} />
            </Box>
            <Text as="h1" w="100%" my={isSmallerScreen ? "10px" : "20px"} fontSize="24px" fontWeight="600">
                Shipment
            </Text>
            <Grid
                w="100%"
                templateColumns={isSmallerScreen ? "repeat(6, 45%)" : "repeat(6, 25%)"}
                gap="10px"
                overflowX="scroll"
                p="10px"

                className='shipment-status-section'
            >
                {cardDetails?.map((card) => {
                    if (card.title !== shipmentStatus) {
                        return (
                            <StatusCard key={card.title} card={card} onclick={() => {
                                setShipmentStatus(card.title)
                                setTabIndex(1)
                            }
                            }
                                dark={false}
                            />
                        )
                    }
                    return (
                        <StatusCard key={card.title} card={card} onclick={() => {
                            setShipmentStatus(card.title)
                            setTabIndex(1)
                        }} />
                    )
                }
                )}
            </Grid>
            <Flex w="100%" columnGap="5px" justifyContent={isSmallerThan480 ? "center" : "space-between"} alignItems="center" mt="20px">
                {assignOptions()}
                <Flex alignItems="center" flexDirection={isSmallerThan480 ? "row-reverse" : "row"}>
                    <Flex color="#F9C567" fontFamily="16px" justifyContent="flex-end" alignItems="center" fontWeight="500" cursor="pointer" mx="5px"
                        onClick={() => { dispatchView({ type: "change_shipment_view", current_view: "shipment-history" }) }}
                    >
                        <Text fontSize={isSmallerThan480 ? "12px" : "16px"}>Shipment History</Text>
                        <ChevronRightIcon />
                    </Flex>
                    <CustomButton text='Create Order' onclick={() => { dispatchView({ type: "change_shipment_view", current_view: "create-order-1" }) }} size={isSmallerThan480 ? "sm" : null} />
                </Flex>
            </Flex>
            <Table details={{ sortedData }} selectable={selectable} />
        </Grid>
    )
}

export default Index