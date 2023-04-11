import {
    Avatar,
    Flex, Grid, Icon, Image, Modal, ModalBody, ModalContent, ModalHeader, ModalOverlay, Text
} from '@chakra-ui/react'
import React, { useState } from 'react'
import Empty from "../../Asset/empty-notepad.png"
import RoundedBackButton from '../shared/RoundedBackButton'
import { sampleData } from '../../data/notfications'
import Bike from '../../Asset/Logos/Onboarding/bike.png'

interface Props {
    isOpen: boolean,
    onClose: () => void
}

function NotificationsModal({ isOpen, onClose }: Props): JSX.Element {
    type Notification = {
        title: string,
        message: string,
        time: string
    }
    const [notifications, ] = useState<Notification[] | null>(sampleData)
    return (
        <Modal
            blockScrollOnMount
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
                p={{ base: "8px", md: "15px" }}
                minW="35%"
                // background="#070529"
                background="#FFFFFF"
                color="#070529"
            // overflowY="scroll"
            >
                <ModalHeader>
                    <RoundedBackButton color='#070529' onclick={onClose} />
                    <Text mt="20px" fontSize="20px" fontWeight="700">Notification</Text>
                </ModalHeader>
                <ModalBody>
                    <Grid placeItems="center">
                        {
                            !notifications || notifications?.length === 0 ?
                                <>
                                    <Image
                                        mt="40px"
                                        src={Empty}
                                        alt="Empty"
                                    />
                                    <Text color="#ABA7A7" fontSize="20px">
                                        You have no notification to view
                                    </Text>
                                </>
                                :
                                <>
                                    {notifications.map((e) => (
                                        <Flex
                                            w="100%"
                                            justifyContent="space-between"
                                            alignItems="center"
                                            p="16px"
                                            borderRadius="10px"
                                            background="#fff"
                                            border="2px solid #0600891A"
                                            boxShadow="0px 4px 20px #0600891A"
                                            color="#ABA7A7"
                                            fontSize="16px"
                                            fontWeight="400"
                                            my="5px"
                                            key={e.time}
                                            cursor="pointer"
                                            transition="0.2s"

                                            _hover={{
                                                transform: "translateX(5px)"
                                            }}
                                        >
                                            <Flex columnGap="4px" alignItems="center">
                                                <Avatar
                                                    size="md"
                                                    name="Daniel Jones"
                                                    src={Bike}
                                                />
                                                <Flex flexDirection="column">
                                                    <Text fontSize="18px" fontWeight="600" color="#000">{e?.title}</Text>
                                                    <Text >{e?.message.length > 30 ? (e?.message).slice(0, 30) + "......" : e?.message}</Text>
                                                </Flex>
                                            </Flex>
                                            <Flex alignItems="center" columnGap="4px">
                                                <Text>{e.time}</Text>
                                                <Icon viewBox='0 0 200 200' color='#CD0B3A'>
                                                    <path
                                                        fill='currentColor'
                                                        d='M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0'
                                                    />
                                                </Icon>
                                            </Flex>
                                        </Flex>
                                    ))}
                                </>
                        }
                    </Grid>
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}

export default NotificationsModal