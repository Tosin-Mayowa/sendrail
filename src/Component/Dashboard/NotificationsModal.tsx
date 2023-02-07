import { Flex, Grid, Image, Modal, ModalBody, ModalContent, ModalHeader, ModalOverlay, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import Empty from "../../Asset/empty-notifications.png"
import RoundedBackButton from '../shared/RoundedBackButton'
import TestText from '../shared/TestText'

interface Props {
    isOpen: boolean,
    onClose: () => void
}

const NotificationsModal: React.FC<Props> = ({ isOpen, onClose }) => {
    type notification = {
        title: string,
        message: string,
        time: string
    }
    const sampleData = [{
        title: "John Toe",
        message: "Order Successfully delivered",
        time: "5 mins ago"
    },
    {
        title: "SendRails",
        message: "Order Available for pickup",
        time: "7 hours ago"
    }]
    const [notifications, setNotifications] = useState<notification[] | null>(sampleData)
    return (
        <Modal
            blockScrollOnMount={true}
            isOpen={isOpen}
            onClose={onClose}
            isCentered
        >
            <ModalOverlay />
            <ModalContent
                minH="100vh"
                position="fixed"
                h="auto"
                borderRadius="0px"
                p="15px"
                minW="35%"
                background="#070529"
                color="#fff"
            // overflowY="scroll"
            >
                <ModalHeader>
                    <RoundedBackButton color='#fff' onclick={onClose} />
                    <Text mt="20px" fontSize="20px" fontWeight="700">Notification</Text>
                </ModalHeader>
                <ModalBody>
                    <Grid placeItems="center">
                        {
                            notifications?.length === 0 || !notifications ?
                                <>
                                    <Image
                                        src={Empty}
                                        alt="Empty"
                                    />
                                    <TestText onclick={() => setNotifications(sampleData)} text="Fill Notifications" />
                                </>
                                :
                                <>
                                    {notifications.map((e) => (
                                        <Flex
                                            w="100%"
                                            justifyContent="space-between"
                                            alignItems="center"
                                            p="16px"
                                            borderRadius="8px"
                                            background="#fff"
                                            color="#070529"
                                            fontSize="14px 16px"
                                            fontWeight="500"
                                            my="5px"
                                            key={e.time}
                                        >
                                            <Flex flexDirection="column">
                                                <Text fontWeight="700">{e?.title}</Text>
                                                <Text>{e?.message}</Text>
                                            </Flex>
                                            <Text>{e.time}</Text>
                                        </Flex>
                                    ))}
                                    <TestText onclick={() => setNotifications(null)} text="Empty Notifications" />
                                </>
                        }
                    </Grid>
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}

export default NotificationsModal